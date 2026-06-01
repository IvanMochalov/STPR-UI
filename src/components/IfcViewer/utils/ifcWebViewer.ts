import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { IfcAPI, LogLevel } from "web-ifc";

THREE.ColorManagement.enabled = true;

export type IfcWebViewerHandle = {
  dispose: () => void;
};

export type CreateIfcWebViewerOptions = {
  /** Вызывается при стриминге мешей: `loaded` от 1 до `total`. */
  onMeshProgress?: (loaded: number, total: number) => void;
  /** When true, abort before attaching a WebGL context (e.g. effect cleanup / remount). */
  isCancelled?: () => boolean;
};

const releaseMountWebGl = (mountEl: HTMLElement) => {
  for (const canvas of mountEl.querySelectorAll("canvas")) {
    canvas.remove();
  }
};

const toDetachedUint8 = (data: Uint8Array): Uint8Array => {
  if (data.byteOffset === 0 && data.byteLength === data.buffer.byteLength) {
    return data;
  }

  return new Uint8Array(data.buffer.slice(data.byteOffset, data.byteOffset + data.byteLength));
};

const safeWasmDelete = (resource: { delete?: () => void } | null | undefined) => {
  if (resource && typeof resource.delete === "function") {
    resource.delete();
  }
};

/**
 * Mounts a Three.js + web-ifc viewer into `mountEl`.
 * Caller must install peer deps `three` and `web-ifc`, and serve `web-ifc.wasm` under `wasmPublicPath` (package default: `components-assets/IfcPreview/web-ifc/` in `dist`).
 */
export const createIfcWebViewer = async (
  mountEl: HTMLElement,
  data: Uint8Array,
  wasmPublicPath: string,
  options?: CreateIfcWebViewerOptions,
): Promise<IfcWebViewerHandle> => {
  const { onMeshProgress, isCancelled } = options ?? {};
  const api = new IfcAPI();
  const wasmBase = wasmPublicPath.endsWith("/") ? wasmPublicPath : `${wasmPublicPath}/`;

  api.SetWasmPath(wasmBase, false);
  await api.Init(undefined, true);
  api.SetLogLevel(LogLevel.LOG_LEVEL_OFF);

  const buffer = toDetachedUint8(data);
  const modelID = api.OpenModel(buffer, { COORDINATE_TO_ORIGIN: true });

  if (modelID < 0) {
    api.Dispose();
    throw new Error("IFC_OPEN_FAILED");
  }

  const throwIfCancelled = () => {
    if (isCancelled?.()) {
      api.CloseModel(modelID);
      api.Dispose();
      throw new Error("IFC_VIEWER_CANCELLED");
    }
  };

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0xf2f4f7);

  const root = new THREE.Group();
  scene.add(root);

  /**
   * web-ifc vertex buffer is usually 6 floats per vertex: (x,y,z, nx,ny,nz).
   * Must test stride 6 before 9 — lengths like 18 are divisible by both 9 and 6; treating them as 9-float
   * rows corrupts positions (matches react-ifc-viewer `convertGeometryToBuffer`).
   * @see https://github.com/antoniocolagreco/react-ifc-viewer/blob/master/src/core/utils/three/meshes-utils.ts
   */
  const extractVertexBuffers = (verts: Float32Array): { positions: Float32Array; normals: Float32Array | null } => {
    const len = verts.length;

    if (len === 0) {
      return { positions: verts, normals: null };
    }

    if (len % 6 === 0) {
      const vertexCount = len / 6;
      const positions = new Float32Array(vertexCount * 3);
      const normals = new Float32Array(vertexCount * 3);

      for (let i = 0; i < len; i += 6) {
        const v = i / 6;

        positions[v * 3] = verts[i];
        positions[v * 3 + 1] = verts[i + 1];
        positions[v * 3 + 2] = verts[i + 2];
        normals[v * 3] = verts[i + 3];
        normals[v * 3 + 1] = verts[i + 4];
        normals[v * 3 + 2] = verts[i + 5];
      }

      return { positions, normals };
    }

    if (len % 9 === 0) {
      const n = len / 9;
      const positions = new Float32Array(n * 3);

      for (let v = 0; v < n; v++) {
        const base = v * 9;

        positions[v * 3] = verts[base];
        positions[v * 3 + 1] = verts[base + 1];
        positions[v * 3 + 2] = verts[base + 2];
      }

      return { positions, normals: null };
    }

    if (len % 3 === 0) {
      return { positions: verts, normals: null };
    }

    const n = Math.floor(len / 3);
    const positions = new Float32Array(n * 3);

    for (let v = 0; v < n; v++) {
      const base = v * 3;

      positions[v * 3] = verts[base];
      positions[v * 3 + 1] = verts[base + 1];
      positions[v * 3 + 2] = verts[base + 2];
    }

    return { positions, normals: null };
  };

  api.StreamAllMeshes(modelID, (flatMesh, meshIndex, meshTotal) => {
    if (isCancelled?.()) {
      return;
    }

    if (meshTotal > 0) {
      onMeshProgress?.(meshIndex + 1, meshTotal);
    }

    for (let i = 0; i < flatMesh.geometries.size(); i++) {
      const placed = flatMesh.geometries.get(i);
      const ifcGeometry = api.GetGeometry(modelID, placed.geometryExpressID);
      const verts = api.GetVertexArray(ifcGeometry.GetVertexData(), ifcGeometry.GetVertexDataSize());
      const indices = api.GetIndexArray(ifcGeometry.GetIndexData(), ifcGeometry.GetIndexDataSize());

      const { positions: positionArray, normals: normalArray } = extractVertexBuffers(verts);

      if (positionArray.length < 9) {
        safeWasmDelete(ifcGeometry);
        continue;
      }

      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute("position", new THREE.BufferAttribute(positionArray, 3));

      if (normalArray) {
        geometry.setAttribute("normal", new THREE.BufferAttribute(normalArray, 3));
      }

      if (indices.length > 0) {
        geometry.setIndex(new THREE.BufferAttribute(indices, 1));
      }

      if (!normalArray) {
        geometry.computeVertexNormals();
      }

      const cx = placed.color?.x ?? 0.75;
      const cy = placed.color?.y ?? 0.75;
      const cz = placed.color?.z ?? 0.75;
      const cw = placed.color?.w ?? 1;
      const color = new THREE.Color(cx > 1 ? cx / 255 : cx, cy > 1 ? cy / 255 : cy, cz > 1 ? cz / 255 : cz);

      const material = new THREE.MeshStandardMaterial({
        color,
        metalness: 0.05,
        roughness: 0.75,
        side: THREE.DoubleSide,
        transparent: cw !== 1,
        opacity: cw !== 1 ? Math.min(1, Math.max(0.1, cw)) : 1,
        depthWrite: cw === 1,
      });

      const mesh = new THREE.Mesh(geometry, material);

      if (placed.flatTransformation.length === 16) {
        mesh.applyMatrix4(new THREE.Matrix4().fromArray(placed.flatTransformation));
      }

      root.add(mesh);
      safeWasmDelete(ifcGeometry);
    }

    safeWasmDelete(flatMesh);
  });

  if (root.children.length === 0) {
    api.CloseModel(modelID);
    api.Dispose();
    throw new Error("IFC_NO_GEOMETRY");
  }

  throwIfCancelled();
  releaseMountWebGl(mountEl);

  const width = Math.max(1, mountEl.clientWidth);
  const height = Math.max(1, mountEl.clientHeight);
  const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 500_000);
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(width, height);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1;
  mountEl.appendChild(renderer.domElement);

  const ambient = new THREE.AmbientLight(0xffffff, 1.1);
  scene.add(ambient);
  const dir = new THREE.DirectionalLight(0xffffff, 1.0);
  dir.position.set(40, 80, 60);
  scene.add(dir);
  const fill = new THREE.DirectionalLight(0xffffff, 0.35);
  fill.position.set(-60, 30, -40);
  scene.add(fill);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;

  root.updateMatrixWorld(true);
  const box = new THREE.Box3().setFromObject(root);

  if (!box.isEmpty()) {
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z, 1);
    const dist = maxDim * 2.2;

    camera.position.set(center.x + dist, center.y + dist * 0.6, center.z + dist);
    camera.near = maxDim / 1000;
    camera.far = maxDim * 1000;
    camera.updateProjectionMatrix();
    controls.target.copy(center);
    controls.update();
  } else {
    camera.position.set(8, 8, 8);
    camera.lookAt(0, 0, 0);
  }

  let raf = 0;

  const animate = () => {
    raf = requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  };

  animate();

  const resize = () => {
    const w = Math.max(1, mountEl.clientWidth);
    const h = Math.max(1, mountEl.clientHeight);

    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  };

  const ro = new ResizeObserver(resize);
  ro.observe(mountEl);

  const dispose = () => {
    cancelAnimationFrame(raf);
    ro.disconnect();
    controls.dispose();
    renderer.dispose();
    renderer.forceContextLoss();

    if (renderer.domElement.parentElement === mountEl) {
      mountEl.removeChild(renderer.domElement);
    }

    root.traverse((obj: THREE.Object3D) => {
      if (obj instanceof THREE.Mesh) {
        obj.geometry.dispose();

        const mats = Array.isArray(obj.material) ? obj.material : [obj.material];

        for (const m of mats) {
          m.dispose();
        }
      }
    });

    api.CloseModel(modelID);
    api.Dispose();
  };

  resize();

  return { dispose };
};

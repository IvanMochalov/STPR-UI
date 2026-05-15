import React, { useEffect, useRef } from "react";

import styles from "./IfcViewerCanvas.module.scss";
import type { IIfcViewerCanvasProps } from "./types";
import { formatMeshProgressText } from "./utils";

export const IfcViewerCanvas: React.FC<IIfcViewerCanvasProps> = (props) => {
  const { data, wasmPublicPath, onPhaseTextChange, onError, onModelLoaded } = props;
  const hostRef = useRef<HTMLDivElement>(null);
  const effectGenRef = useRef(0);
  const onErrorRef = useRef(onError);
  const onModelLoadedRef = useRef(onModelLoaded);
  const onPhaseTextChangeRef = useRef(onPhaseTextChange);

  onErrorRef.current = onError;
  onModelLoadedRef.current = onModelLoaded;
  onPhaseTextChangeRef.current = onPhaseTextChange;

  useEffect(() => {
    const el = hostRef.current;

    if (!el) {
      return;
    }

    const gen = ++effectGenRef.current;
    let disposed = false;
    let disposeHandle: (() => void) | undefined;

    const isStale = () => disposed || effectGenRef.current !== gen;

    const setPhaseText = (text: string) => {
      onPhaseTextChangeRef.current?.(text);
    };

    const clearHost = () => {
      while (el.firstChild) {
        el.removeChild(el.firstChild);
      }
    };

    (async () => {
      try {
        setPhaseText("Инициализация просмотра");

        const { createIfcWebViewer } = await import("../../utils/ifcWebViewer");

        if (isStale()) {
          return;
        }

        setPhaseText("Открытие модели");

        const handle = await createIfcWebViewer(el, data, wasmPublicPath, {
          isCancelled: isStale,
          onMeshProgress: (loaded, total) => {
            if (isStale()) {
              return;
            }

            setPhaseText(formatMeshProgressText(loaded, total));
          },
        });

        if (isStale()) {
          handle.dispose();

          return;
        }

        disposeHandle = handle.dispose;
        onModelLoadedRef.current?.();
      } catch (unknownError) {
        if (isStale()) {
          return;
        }

        const error =
          unknownError instanceof Error ? unknownError : new Error(String(unknownError));

        if (error.message === "IFC_VIEWER_CANCELLED") {
          return;
        }

        onErrorRef.current?.(error);
      }
    })();

    return () => {
      disposed = true;
      disposeHandle?.();
      clearHost();
    };
  }, [data, wasmPublicPath]);

  return (
    <div className={styles.viewerCanvasWrap}>
      <div className={styles.viewerCanvasHost} ref={hostRef} />
    </div>
  );
};

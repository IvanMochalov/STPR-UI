const toUint8 = (value: ArrayBuffer | Uint8Array): Uint8Array => {
  if (value instanceof Uint8Array) {
    return value.byteOffset === 0 && value.byteLength === value.buffer.byteLength
      ? value
      : new Uint8Array(value.buffer.slice(value.byteOffset, value.byteOffset + value.byteLength));
  }

  return new Uint8Array(value);
};

export const hasIfcBytes = (data: ArrayBuffer | Uint8Array | null | undefined): boolean => {
  if (data == null) {
    return false;
  }

  return data instanceof ArrayBuffer ? data.byteLength > 0 : data.byteLength > 0;
};

export const hasExternalModelSource = (
  ifcData: ArrayBuffer | Uint8Array | null | undefined,
  url: string | undefined,
): boolean => hasIfcBytes(ifcData) || Boolean(url?.trim());

const fetchIfcFromUrl = async (modelUrl: string): Promise<Uint8Array> => {
  const response = await fetch(modelUrl);

  if (!response.ok) {
    throw new Error(`IFC_FETCH_FAILED: ${response.status}`);
  }

  return new Uint8Array(await response.arrayBuffer());
};

export const resolveExternalBuffer = async (
  ifcData: ArrayBuffer | Uint8Array | null | undefined,
  url: string | undefined,
): Promise<Uint8Array | null> => {
  if (hasIfcBytes(ifcData)) {
    return toUint8(ifcData as ArrayBuffer | Uint8Array);
  }

  const trimmedUrl = url?.trim();

  if (trimmedUrl) {
    return fetchIfcFromUrl(trimmedUrl);
  }

  return null;
};

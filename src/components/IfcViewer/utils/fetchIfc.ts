export const fetchIfcFromUrl = async (modelUrl: string): Promise<Uint8Array> => {
  const response = await fetch(modelUrl);

  if (!response.ok) {
    throw new Error(`IFC_FETCH_FAILED: ${response.status}`);
  }

  return new Uint8Array(await response.arrayBuffer());
};

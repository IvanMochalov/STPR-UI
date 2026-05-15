export const formatMeshProgressText = (loaded: number, total: number): string => {
  if (total <= 0) {
    return "Построение 3D-модели";
  }

  const percent = Math.min(100, Math.round((loaded / total) * 100));

  return `Построение 3D-модели ${percent}%`;
};

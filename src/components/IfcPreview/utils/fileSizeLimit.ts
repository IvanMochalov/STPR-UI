/** Допустимые лимиты размера IFC для просмотра в браузере (МБ). */
export type TIfcPreviewMaxFileSizeMb = 50 | 100 | 150;

export const DEFAULT_IFC_PREVIEW_MAX_FILE_SIZE_MB: TIfcPreviewMaxFileSizeMb = 50;

export const IFC_FILE_SIZE_EXCEEDED = "IFC_FILE_SIZE_EXCEEDED";

export const getIfcPreviewMaxFileSizeBytes = (maxFileSizeMb: TIfcPreviewMaxFileSizeMb): number =>
  maxFileSizeMb * 1024 * 1024;

export const formatIfcPreviewFileSizeLimitMessage = (
  maxFileSizeMb: TIfcPreviewMaxFileSizeMb,
): string => `Загрузите файл размером до ${maxFileSizeMb} МБ`;

export const isIfcPreviewFileSizeExceeded = (
  byteSize: number,
  maxFileSizeMb: TIfcPreviewMaxFileSizeMb,
  disableFileSizeLimit: boolean,
): boolean => !disableFileSizeLimit && byteSize > getIfcPreviewMaxFileSizeBytes(maxFileSizeMb);

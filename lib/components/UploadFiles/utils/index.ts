import { Accept, ErrorCode, FileError, TImageDimensionsPx, TLocalErrorFile } from "../types";

export const getErrorTextFromError = (error: FileError) => {
  switch (error.code) {
    case ErrorCode.FileInvalidType:
      return "Неверный формат файла";
    case ErrorCode.FileTooLarge:
    case ErrorCode.FileTooSmall:
      return "Некорректный размер файла";
    default:
      return "";
  }
};

export const formatFileSize = (
  bytes: number,
  options: { decimals?: number; space?: boolean } = {},
): string => {
  const { decimals = 1, space = true } = options;

  if (bytes === 0) return "0" + (space ? " " : "") + "B";

  const k = 1024;
  const units = ["B", "KB", "MB", "GB", "TB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  const decimalPlaces = i === 0 ? 0 : decimals;
  const separator = space ? " " : "";

  return parseFloat((bytes / Math.pow(k, i)).toFixed(decimalPlaces)) + separator + units[i];
};

export const getKbFromMb = (mb: number) => mb * 1024 * 1024;

export const validateAcceptedFilesByImageDimensions = async (
  acceptedFiles: File[],
  requiredImageDimensionsPx?: TImageDimensionsPx,
): Promise<{
  validAcceptedFiles: File[];
  invalidDimensionErrors: TLocalErrorFile[];
}> => {
  if (!requiredImageDimensionsPx) {
    return {
      validAcceptedFiles: acceptedFiles,
      invalidDimensionErrors: [],
    };
  }

  const expectedWidth = requiredImageDimensionsPx.width;
  const expectedHeight = requiredImageDimensionsPx.height;

  const results = await Promise.all(
    acceptedFiles.map(async (file) => {
      // Проверяем только растровые изображения (SVG пропускаем).
      if (!file.type.startsWith("image/") || file.type === "image/svg+xml") {
        return { file, isValid: true, errors: [] };
      }

      let actualWidth = -1;
      let actualHeight = -1;

      try {
        if (typeof window === "undefined") {
          return { file, isValid: true, errors: [] };
        }

        if (typeof createImageBitmap === "function") {
          const bitmap = await createImageBitmap(file);
          actualWidth = bitmap.width;
          actualHeight = bitmap.height;
          bitmap.close?.();
        } else {
          await new Promise<void>((resolve, reject) => {
            const url = URL.createObjectURL(file);
            const img = new Image();

            img.onload = () => {
              actualWidth = img.naturalWidth;
              actualHeight = img.naturalHeight;
              URL.revokeObjectURL(url);
              resolve();
            };

            img.onerror = () => {
              URL.revokeObjectURL(url);
              reject(new Error("Image decode failed"));
            };

            img.src = url;
          });
        }
      } catch {
        // Если не смогли декодировать, считаем файл некорректным.
      }

      const isValid = actualWidth === expectedWidth && actualHeight === expectedHeight;

      if (isValid) {
        return { file, isValid: true, errors: [] };
      }

      return {
        file,
        isValid: false,
        errors: [
          {
            code: ErrorCode.FileInvalidType,
            message: "Неверный формат файла",
          },
        ] as readonly FileError[],
      };
    }),
  );

  const validAcceptedFiles = results.filter((r) => r.isValid).map((r) => r.file);
  const invalidDimensionErrors = results
    .filter((r) => !r.isValid)
    .map((r) => ({ file: r.file, errors: r.errors }));

  return {
    validAcceptedFiles,
    invalidDimensionErrors,
  };
};

export const getMostFormat = (accept: Accept) => {
  return Object.values(accept)
    .flatMap((item) => item.map((ext) => ext.toUpperCase()))
    .join(", ");
};

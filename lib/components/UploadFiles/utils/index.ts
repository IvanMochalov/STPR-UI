import { ErrorCode, FileError } from "../types";

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

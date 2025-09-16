import { isNullOrWhitespace } from "../../../../src/utils";
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

export const getFileExtension = (fileName: string) => {
  if (isNullOrWhitespace(fileName)) {
    return "";
  }

  return fileName.split(".").pop()?.toLowerCase();
};

import { isNullOrWhitespace } from "../../../../src/utils";

export const getEndText = (someString: string) => {
  if (isNullOrWhitespace(someString)) {
    return "";
  }

  // Разделяем строку по пробелам и точкам
  const parts = someString.split(/[\s.]+/);

  return parts.pop()?.toLowerCase() || "";
};

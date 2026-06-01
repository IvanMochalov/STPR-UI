import { ReactNode } from "react";

import { isNullOrWhitespace } from "../../../utils";

export const getEndText = (someString: string | ReactNode) => {
  if (isNullOrWhitespace(someString) || typeof someString !== "string") {
    return null;
  }

  // Разделяем строку по пробелам и точкам
  const parts = someString.split(/[\s.]+/);

  return parts.pop()?.toLowerCase() || "";
};

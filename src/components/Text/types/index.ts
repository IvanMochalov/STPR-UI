import React, { MouseEventHandler, ReactNode } from "react";

export interface TextProps {
  children?: string | ReactNode;
  color?: string;
  title?: string;
  classNameRoot?: string;
  style?: React.CSSProperties;
  onClick?: MouseEventHandler<HTMLElement>;
  isLink?: boolean;
  isCursorPointer?: boolean;
  isCursorPointerByOnClick?: boolean;
  type?: "h1" | "h3" | "p1" | "p2";
}

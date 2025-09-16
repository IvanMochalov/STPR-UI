import React, { ForwardedRef, MouseEventHandler, ReactNode } from "react";

export type TTextType = "h1" | "h3" | "p1" | "p2" | "description" | "link";

export interface TextProps {
  children?: string | ReactNode;
  color?: string;
  title?: string;
  classNameRoot?: string;
  style?: React.CSSProperties;
  onClick?: MouseEventHandler<HTMLElement>;
  isEllipsis?: boolean;
  isCursorPointer?: boolean;
  isCursorPointerByOnClick?: boolean;
  type?: TTextType;
  ref?: ForwardedRef<HTMLDivElement>;
}

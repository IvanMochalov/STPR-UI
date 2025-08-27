import React from "react";

export interface SkeletonProps {
  width?: number | string;
  height?: number | string;
  circle?: boolean;
  classNameRoot?: string;
  style?: React.CSSProperties;
}

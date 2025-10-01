import React from "react";

export interface SkeletonProps {
  startColor?: string;
  endColor?: string;
  width?: number | string;
  height?: number | string;
  circle?: boolean;
  classNameRoot?: string;
  style?: React.CSSProperties;
}

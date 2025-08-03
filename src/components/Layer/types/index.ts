import React from "react";

export interface LayerProps {
  children: React.ReactNode;
  zIndex: number;
  isHiddenModal?: boolean;
  classNameRoot?: string;
}

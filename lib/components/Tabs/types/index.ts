import React from "react";

export type TTabsVariant = "filled" | "contained";

export type TPaneItem = {
  name: string;
  key?: string;
  active?: boolean;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  infoTooltipText?: string;
};

export interface TabsProps {
  size?: "md" | "lg";
  panes: TPaneItem[];
  isSeparated?: boolean;
  variant?: TTabsVariant;
  classNameRoot?: string;
  classNameBaseTooltipRoot?: string;
}

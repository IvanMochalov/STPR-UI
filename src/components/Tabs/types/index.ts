import React from "react";

import type { EIconName } from "../../Icons";

export type TTabsVariant = "filled" | "contained" | "outlined";
export type TTabsSize = "md" | "xl";

export type TPaneItem = {
  name: string;
  key?: string;
  active?: boolean;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  infoTooltipText?: string;
  isOnlyIcon?: boolean;
  startIconName?: EIconName;
  endIconName?: EIconName;
  startIconRotate?: number;
  endIconRotate?: number;
};

export interface TabsProps {
  size?: TTabsSize;
  panes: TPaneItem[];
  isSeparated?: boolean;
  variant?: TTabsVariant;
  classNameRoot?: string;
  classNameTabElementRoot?: string;
  classNameBaseTooltipRoot?: string;
}

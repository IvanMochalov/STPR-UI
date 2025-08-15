import React from "react";

export type TPaneItem = {
  name: string;
  key?: string;
  active?: boolean;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  infoTooltipText?: string;
};

export interface TabsProps {
  panes: TPaneItem[];
  isSeparated?: boolean;
  classNameRoot?: string;
}

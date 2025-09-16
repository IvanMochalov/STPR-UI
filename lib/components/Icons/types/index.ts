import React from "react";

export enum EIconName {
  ChevronDown = "chevronDown",
  Info = "info",
  Plus = "plus",
  SelectChevronDown = "selectChevronDown",
  Upload = "upload",
  Trash = "trash",
  Check = "check",
  Copy = "copy",
  Close = "close",
  PlusSquare = "plusSquare",
  PlusCircle = "plusCircle",
  WarningColor = "warningColor",
  Dots = "dots",
  HistoryClock = "historyClock",
  Minus = "minus",
  TerminalSquare = "terminalSquare",
  File = "file",
  InfoError = "infoError",
}

export type SVGComponent = React.FC<React.SVGProps<SVGSVGElement>>;

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: EIconName;
  rotate?: number;
}

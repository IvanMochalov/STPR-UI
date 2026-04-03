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
  FileNotFilled = "fileNotFilled",
  InfoError = "infoError",
  Save = "save",
  Refresh = "refresh",
  Logout = "logout",
  Edit = "edit",
  Download = "download",
  AddUser = "addUser",
  AddFile = "addFile",
  Calendar = "calendar",
  ArrowBottom = "arrowBottom",
  UserRight = "userRight",
  Search = "search",
  Update = "update",
  Filter = "filter",
  Folder = "folder",
  LayersThree = "layersThree",
  LinkAngled = "linkAngled",
  PlayCircle = "playCircle",
  UploadTop = "uploadTop",
  PauseCircle = "pauseCircle",
}

export type SVGComponent = React.FC<React.SVGProps<SVGSVGElement>>;

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: EIconName;
  rotate?: number;
}

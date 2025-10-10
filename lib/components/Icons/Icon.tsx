import React, { CSSProperties } from "react";

import AddFileIcon from "../../../src/images/add_file.svg?react";
import AddUserIcon from "../../../src/images/add_user.svg?react";
import CalendarIcon from "../../../src/images/calendar.svg?react";
import CheckIcon from "../../../src/images/check.svg?react";
import ChevronDownIcon from "../../../src/images/chevron_down.svg?react";
import CloseIcon from "../../../src/images/close.svg?react";
import CopyIcon from "../../../src/images/copy.svg?react";
import DotsIcon from "../../../src/images/dots.svg?react";
import DownloadIcon from "../../../src/images/download.svg?react";
import EditIcon from "../../../src/images/edit.svg?react";
import FileIcon from "../../../src/images/file.svg?react";
import HistoryClockIcon from "../../../src/images/history_clock.svg?react";
import InfoIcon from "../../../src/images/info.svg?react";
import InfoErrorIcon from "../../../src/images/info_error.svg?react";
import LogoutIcon from "../../../src/images/logout.svg?react";
import MinusIcon from "../../../src/images/minus.svg?react";
import PlusIcon from "../../../src/images/plus.svg?react";
import PlusCircleIcon from "../../../src/images/plus_circle.svg?react";
import PlusSquareIcon from "../../../src/images/plus_square.svg?react";
import RefreshIcon from "../../../src/images/refresh.svg?react";
import SaveIcon from "../../../src/images/save.svg?react";
import SelectChevronDownIcon from "../../../src/images/select_chevron_down.svg?react";
import TerminalSquareIcon from "../../../src/images/terminal_square.svg?react";
import TrashIcon from "../../../src/images/trash.svg?react";
import UploadIcon from "../../../src/images/upload.svg?react";
import WarningColorIcon from "../../../src/images/warning_color.svg?react";
import { EIconName, IconProps, SVGComponent } from "./types";

export const Icon: React.FC<IconProps> = (props) => {
  const { name, rotate, ...svgProps } = props;

  const style = {
    ...svgProps,
    transform: rotate ? `rotate(${rotate}deg)` : "",
  } as CSSProperties;

  const ICONS: Record<EIconName, SVGComponent> = {
    [EIconName.ChevronDown]: ChevronDownIcon,
    [EIconName.Info]: InfoIcon,
    [EIconName.Plus]: PlusIcon,
    [EIconName.Minus]: MinusIcon,
    [EIconName.SelectChevronDown]: SelectChevronDownIcon,
    [EIconName.Upload]: UploadIcon,
    [EIconName.Trash]: TrashIcon,
    [EIconName.Check]: CheckIcon,
    [EIconName.Copy]: CopyIcon,
    [EIconName.Close]: CloseIcon,
    [EIconName.PlusSquare]: PlusSquareIcon,
    [EIconName.WarningColor]: WarningColorIcon,
    [EIconName.Dots]: DotsIcon,
    [EIconName.HistoryClock]: HistoryClockIcon,
    [EIconName.PlusCircle]: PlusCircleIcon,
    [EIconName.TerminalSquare]: TerminalSquareIcon,
    [EIconName.File]: FileIcon,
    [EIconName.InfoError]: InfoErrorIcon,
    [EIconName.AddFile]: AddFileIcon,
    [EIconName.AddUser]: AddUserIcon,
    [EIconName.Download]: DownloadIcon,
    [EIconName.Edit]: EditIcon,
    [EIconName.Refresh]: RefreshIcon,
    [EIconName.Logout]: LogoutIcon,
    [EIconName.Save]: SaveIcon,
    [EIconName.Calendar]: CalendarIcon,
  };

  return React.createElement<React.SVGProps<SVGSVGElement>>(ICONS[name], {
    ...svgProps,
    style,
  });
};

export {
  AddFileIcon,
  AddUserIcon,
  CalendarIcon,
  CheckIcon,
  ChevronDownIcon,
  CloseIcon,
  CopyIcon,
  DotsIcon,
  DownloadIcon,
  EditIcon,
  FileIcon,
  HistoryClockIcon,
  InfoErrorIcon,
  InfoIcon,
  LogoutIcon,
  MinusIcon,
  PlusCircleIcon,
  PlusIcon,
  PlusSquareIcon,
  RefreshIcon,
  SaveIcon,
  SelectChevronDownIcon,
  TerminalSquareIcon,
  TrashIcon,
  UploadIcon,
  WarningColorIcon,
};

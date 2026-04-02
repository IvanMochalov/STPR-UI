import cx from "clsx";
import React, { CSSProperties } from "react";

import AddFileIcon from "../../../src/images/add_file.svg?react";
import AddUserIcon from "../../../src/images/add_user.svg?react";
import ArrowBottomIcon from "../../../src/images/arrow-bottom.svg?react";
import CalendarIcon from "../../../src/images/calendar.svg?react";
import CheckIcon from "../../../src/images/check.svg?react";
import ChevronDownIcon from "../../../src/images/chevron_down.svg?react";
import CloseIcon from "../../../src/images/close.svg?react";
import CopyIcon from "../../../src/images/copy.svg?react";
import DotsIcon from "../../../src/images/dots.svg?react";
import DownloadIcon from "../../../src/images/download.svg?react";
import EditIcon from "../../../src/images/edit.svg?react";
import FileIcon from "../../../src/images/file.svg?react";
import FileNotFilledIcon from "../../../src/images/file_not_filled.svg?react";
import FilterIcon from "../../../src/images/filter.svg?react";
import FolderIcon from "../../../src/images/folder.svg?react";
import HistoryClockIcon from "../../../src/images/history_clock.svg?react";
import InfoIcon from "../../../src/images/info.svg?react";
import InfoErrorIcon from "../../../src/images/info_error.svg?react";
import LayersThreeIcon from "../../../src/images/layers-three.svg?react";
import LinkAngledIcon from "../../../src/images/link-angled.svg?react";
import LogoutIcon from "../../../src/images/logout.svg?react";
import MinusIcon from "../../../src/images/minus.svg?react";
import PlusIcon from "../../../src/images/plus.svg?react";
import PlusCircleIcon from "../../../src/images/plus_circle.svg?react";
import PlusSquareIcon from "../../../src/images/plus_square.svg?react";
import RefreshIcon from "../../../src/images/refresh.svg?react";
import RefreshDoubleIcon from "../../../src/images/refresh-dbl.svg?react";
import SaveIcon from "../../../src/images/save.svg?react";
import SearchIcon from "../../../src/images/search.svg?react";
import SelectChevronDownIcon from "../../../src/images/select_chevron_down.svg?react";
import TerminalSquareIcon from "../../../src/images/terminal_square.svg?react";
import TrashIcon from "../../../src/images/trash.svg?react";
import UpdateIcon from "../../../src/images/update.svg?react";
import UploadIcon from "../../../src/images/upload.svg?react";
import UserRightIcon from "../../../src/images/user-right.svg?react";
import WarningColorIcon from "../../../src/images/warning_color.svg?react";
import styles from "./Icon.module.scss";
import { EIconName, IconProps, SVGComponent } from "./types";

export const Icon: React.FC<IconProps> = (props) => {
  const { name, rotate, className: propsClassName, ...svgProps } = props;

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
    [EIconName.RefreshDouble]: RefreshDoubleIcon,
    [EIconName.Refresh]: RefreshIcon,
    [EIconName.Logout]: LogoutIcon,
    [EIconName.Save]: SaveIcon,
    [EIconName.Search]: SearchIcon,
    [EIconName.Calendar]: CalendarIcon,
    [EIconName.ArrowBottom]: ArrowBottomIcon,
    [EIconName.UserRight]: UserRightIcon,
    [EIconName.FileNotFilled]: FileNotFilledIcon,
    [EIconName.Update]: UpdateIcon,
    [EIconName.Filter]: FilterIcon,
    [EIconName.Folder]: FolderIcon,
    [EIconName.LayersThree]: LayersThreeIcon,
    [EIconName.LinkAngled]: LinkAngledIcon,
  };

  const className = cx("stpr-icon", propsClassName);

  return React.createElement<React.SVGProps<SVGSVGElement>>(ICONS[name], {
    ...svgProps,
    style,
    className: cx(className, styles.spIcon),
  });
};

export {
  AddFileIcon,
  AddUserIcon,
  ArrowBottomIcon,
  CalendarIcon,
  CheckIcon,
  ChevronDownIcon,
  CloseIcon,
  CopyIcon,
  DotsIcon,
  DownloadIcon,
  EditIcon,
  FileIcon,
  FileNotFilledIcon,
  FilterIcon,
  FolderIcon,
  HistoryClockIcon,
  InfoErrorIcon,
  InfoIcon,
  LayersThreeIcon,
  LinkAngledIcon,
  LogoutIcon,
  MinusIcon,
  PlusCircleIcon,
  PlusIcon,
  PlusSquareIcon,
  RefreshDoubleIcon,
  RefreshIcon,
  SaveIcon,
  SearchIcon,
  SelectChevronDownIcon,
  TerminalSquareIcon,
  TrashIcon,
  UpdateIcon,
  UploadIcon,
  UserRightIcon,
  WarningColorIcon,
};

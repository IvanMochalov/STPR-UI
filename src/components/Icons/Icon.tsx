import cx from "clsx";
import React, { CSSProperties } from "react";

import AddFileIcon from "../../images/add_file.svg?react";
import AddUserIcon from "../../images/add_user.svg?react";
import ArrowBottomIcon from "../../images/arrow-bottom.svg?react";
import CalendarIcon from "../../images/calendar.svg?react";
import CheckIcon from "../../images/check.svg?react";
import ChevronDownIcon from "../../images/chevron_down.svg?react";
import CloseIcon from "../../images/close.svg?react";
import CopyIcon from "../../images/copy.svg?react";
import DotsIcon from "../../images/dots.svg?react";
import DownloadIcon from "../../images/download.svg?react";
import EditIcon from "../../images/edit.svg?react";
import EyeIcon from "../../images/eye.svg?react";
import FileIcon from "../../images/file.svg?react";
import FileNotFilledIcon from "../../images/file_not_filled.svg?react";
import FilterIcon from "../../images/filter.svg?react";
import FolderIcon from "../../images/folder.svg?react";
import HistoryClockIcon from "../../images/history_clock.svg?react";
import InfoIcon from "../../images/info.svg?react";
import InfoErrorIcon from "../../images/info_error.svg?react";
import LayersThreeIcon from "../../images/layers-three.svg?react";
import LinkAngledIcon from "../../images/link-angled.svg?react";
import LogoutIcon from "../../images/logout.svg?react";
import MinusIcon from "../../images/minus.svg?react";
import PauseCircleIcon from "../../images/pause-circle.svg?react";
import PlayCircleIcon from "../../images/play-circle.svg?react";
import PlusIcon from "../../images/plus.svg?react";
import PlusCircleIcon from "../../images/plus_circle.svg?react";
import PlusSquareIcon from "../../images/plus_square.svg?react";
import RefreshIcon from "../../images/refresh.svg?react";
import SaveIcon from "../../images/save.svg?react";
import SearchIcon from "../../images/search.svg?react";
import SelectChevronDownIcon from "../../images/select_chevron_down.svg?react";
import TerminalSquareIcon from "../../images/terminal_square.svg?react";
import TrashIcon from "../../images/trash.svg?react";
import UpdateIcon from "../../images/update.svg?react";
import UploadIcon from "../../images/upload.svg?react";
import UploadTopIcon from "../../images/upload-top.svg?react";
import UserRightIcon from "../../images/user-right.svg?react";
import WarningColorIcon from "../../images/warning_color.svg?react";
import styles from "./Icon.module.scss";
import { EIconName, IconProps, SVGComponent } from "./types";

export const Icon: React.FC<IconProps> = (props) => {
  const { name, rotate, className: propsClassName, ...svgProps } = props;

  const style = {
    ...svgProps,
    transform: rotate ? `rotate(${rotate}deg)` : "",
  } as CSSProperties;

  const ICONS: Record<EIconName, SVGComponent> = {
    [EIconName.PlayCircle]: PlayCircleIcon,
    [EIconName.PauseCircle]: PauseCircleIcon,
    [EIconName.UploadTop]: UploadTopIcon,
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
    [EIconName.Eye]: EyeIcon,
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
  EyeIcon,
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
  PauseCircleIcon,
  PlayCircleIcon,
  PlusCircleIcon,
  PlusIcon,
  PlusSquareIcon,
  RefreshIcon,
  SaveIcon,
  SearchIcon,
  SelectChevronDownIcon,
  TerminalSquareIcon,
  TrashIcon,
  UpdateIcon,
  UploadIcon,
  UploadTopIcon,
  UserRightIcon,
  WarningColorIcon,
};

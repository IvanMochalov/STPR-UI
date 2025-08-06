import React, { CSSProperties } from "react";

import CheckIcon from "../../images/check.svg?react";
import ChevronDownIcon from "../../images/chevron-down.svg?react";
import CloseIcon from "../../images/close.svg?react";
import CopyIcon from "../../images/copy.svg?react";
import DotsIcon from "../../images/dots.svg?react";
import HistoryClockIcon from "../../images/history-clock.svg?react";
import InfoIcon from "../../images/info.svg?react";
import MinusIcon from "../../images/minus.svg?react";
import PlusIcon from "../../images/plus.svg?react";
import PlusSquareIcon from "../../images/plus-square.svg?react";
import SelectChevronDownIcon from "../../images/select-chevron-down.svg?react";
import TrashIcon from "../../images/trash.svg?react";
import UploadIcon from "../../images/upload.svg?react";
import WarningColorIcon from "../../images/warning-color.svg?react";
import { EIconName, IconProps, SVGComponent } from "./types";

export const Icon: React.FC<IconProps> = (props) => {
  const { name, rotate, ...svgProps } = props;

  const style = {
    ...svgProps.style,
    flexShrink: 0,
    transform: rotate ? `rotate(${rotate}deg)` : "",
  } as CSSProperties;

  const ICONS: Record<EIconName, SVGComponent> = {
    chevronDown: ChevronDownIcon,
    info: InfoIcon,
    plus: PlusIcon,
    minus: MinusIcon,
    selectChevronDown: SelectChevronDownIcon,
    upload: UploadIcon,
    trash: TrashIcon,
    check: CheckIcon,
    copy: CopyIcon,
    close: CloseIcon,
    plusSquare: PlusSquareIcon,
    warningColor: WarningColorIcon,
    dots: DotsIcon,
    historyClock: HistoryClockIcon,
  };

  return React.createElement<React.SVGProps<SVGSVGElement>>(ICONS[name], {
    ...svgProps,
    style,
  });
};

export {
  CheckIcon,
  ChevronDownIcon,
  CloseIcon,
  CopyIcon,
  DotsIcon,
  HistoryClockIcon,
  InfoIcon,
  MinusIcon,
  PlusIcon,
  PlusSquareIcon,
  SelectChevronDownIcon,
  TrashIcon,
  UploadIcon,
  WarningColorIcon,
};

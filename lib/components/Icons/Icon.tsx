import React, { CSSProperties } from "react";

import CheckIcon from "../../../src/images/check.svg?react";
import ChevronDownIcon from "../../../src/images/chevron-down.svg?react";
import CloseIcon from "../../../src/images/close.svg?react";
import CopyIcon from "../../../src/images/copy.svg?react";
import DotsIcon from "../../../src/images/dots.svg?react";
import HistoryClockIcon from "../../../src/images/history-clock.svg?react";
import InfoIcon from "../../../src/images/info.svg?react";
import MinusIcon from "../../../src/images/minus.svg?react";
import PlusIcon from "../../../src/images/plus.svg?react";
import PlusCircleIcon from "../../../src/images/plus-circle.svg?react";
import PlusSquareIcon from "../../../src/images/plus-square.svg?react";
import SelectChevronDownIcon from "../../../src/images/select-chevron-down.svg?react";
import TrashIcon from "../../../src/images/trash.svg?react";
import UploadIcon from "../../../src/images/upload.svg?react";
import WarningColorIcon from "../../../src/images/warning-color.svg?react";
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
    plusCircle: PlusCircleIcon,
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
  PlusCircleIcon,
  PlusIcon,
  PlusSquareIcon,
  SelectChevronDownIcon,
  TrashIcon,
  UploadIcon,
  WarningColorIcon,
};

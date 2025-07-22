import React, {CSSProperties} from "react";

import CheckIcon from "../../images/check.svg?react";
import ChevronDownIcon from "../../images/chevron-down.svg?react";
import CloseIcon from "../../images/close.svg?react";
import CopyIcon from "../../images/copy.svg?react";
import InfoIcon from "../../images/info.svg?react";
import PlusIcon from "../../images/plus.svg?react";
import PlusSquareIcon from "../../images/plus-square.svg?react";
import SelectChevronDownIcon from "../../images/select-chevron-down.svg?react";
import TrashIcon from "../../images/trash.svg?react";
import UploadIcon from "../../images/upload.svg?react";
import {IconName} from "./constants";

export type TIconName = keyof typeof IconName;
type SVGComponent = React.FC<React.SVGProps<SVGSVGElement>>;

export interface IconProps extends React.SVGProps<SVGSVGElement> {
    name: TIconName,
    rotate?: number,
}

export const Icon: React.FC<IconProps> = (props) => {
    const {
        name,
        rotate,
        ...svgProps
    } = props;

    const style = {
        ...svgProps.style,
        transform: rotate ? `rotate(${rotate}deg)` : "",
    } as CSSProperties;

    const ICONS: Record<TIconName, SVGComponent> = {
        chevronDown: ChevronDownIcon as SVGComponent,
        info: InfoIcon as SVGComponent,
        plus: PlusIcon as SVGComponent,
        selectChevronDown: SelectChevronDownIcon as SVGComponent,
        upload: UploadIcon as SVGComponent,
        trash: TrashIcon as SVGComponent,
        check: CheckIcon as SVGComponent,
        copy: CopyIcon as SVGComponent,
        close: CloseIcon as SVGComponent,
        plusSquare: PlusSquareIcon as SVGComponent,
    };

    return React.createElement<React.SVGProps<SVGSVGElement>>(ICONS[name], {
        ...svgProps,
        style,
    });
}

export {
    CheckIcon,
    ChevronDownIcon,
    CloseIcon,
    CopyIcon,
    InfoIcon,
    PlusIcon,
    PlusSquareIcon,
    SelectChevronDownIcon,
    TrashIcon,
    UploadIcon,
}
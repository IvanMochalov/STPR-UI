import {ETooltipPosition} from "../../BaseTooltip";

export interface LabelProps {
    required?: boolean
    label?: string
    infoTooltipText?: string,
    tooltipPosition?: ETooltipPosition,
    classNameRoot?: string
}
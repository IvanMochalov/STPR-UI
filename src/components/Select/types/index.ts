import React from "react";

import {ETooltipPosition} from "../../BaseTooltip";

export type SelectOption = {
    value: string | null;
    label: string;
}

export interface SelectProps {
    options: SelectOption[];
    placeholder?: string;
    value?: string;
    name: string;
    onChange: (event: React.ChangeEvent<HTMLSelectElement>, data: {
        name: string;
        value?: string,
        checked?: boolean
    }) => void;
    onMouseEnter?: () => void;
    error?: string;
    label?: string;
    infoTooltipText?: string;
    tooltipPosition?: ETooltipPosition;
    disabled?: boolean;
    required?: boolean;
    maxHeightList?: number;
    isVisibleDefaultTitle?: boolean;
    classNameRoot?: string;
    classNameError?: string;
    classNameLabel?: string;
}

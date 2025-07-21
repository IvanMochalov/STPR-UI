import cx from "clsx";
import React, {ReactNode} from "react";

import styles from "./BaseTooltip.module.scss"

export type TBaseTooltipPosition = "top" |
    "top-left" |
    "top-right" |
    "bottom" |
    "bottom-left" |
    "bottom-right" |
    "left" |
    "left-top" |
    "left-bottom" |
    "right" |
    "right-top" |
    "right-bottom";

export interface BaseTooltipProps {
    position?: TBaseTooltipPosition,
    text?: string | ReactNode,
    noPadding?: boolean,
    classNameRoot?: string,
}

export const BaseTooltip: React.FC<BaseTooltipProps> = (props) => {
    const {
        position = "bottom-left",
        text,
        noPadding = false,
    } = props;

    const classNameRoot = cx({
        [styles.spBaseTooltip]: true,
        [styles.spBaseTooltip_noPadding]: noPadding,
        [styles[`spBaseTooltip_position-${position}`]]: position,
        [props.classNameRoot]: props.classNameRoot,
    });

    const classNameContent = cx({
        [styles.spBaseTooltip__content]: true,
    });

    return (
        <div className={classNameRoot}>
            <div className={classNameContent}>
                {text}
            </div>
        </div>
    )
}
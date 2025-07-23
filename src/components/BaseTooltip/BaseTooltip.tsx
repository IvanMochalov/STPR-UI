import cx from "clsx";
import React from "react";

import styles from "./BaseTooltip.module.scss"
import {BaseTooltipProps, ETooltipPosition} from "./types";

export const BaseTooltip: React.FC<BaseTooltipProps> = (props) => {
    const {
        position = ETooltipPosition.BottomLeft,
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
import cx from "clsx";
import React from "react";

import {TBaseTooltipPosition} from "../BaseTooltip";
import {Icon} from "../Icons";
import {IconName} from "../Icons/constants";
import {Tooltip} from "../Tooltip";
import styles from "./Label.module.scss";

export interface LabelProps {
    required?: boolean
    label?: string
    infoTooltipText?: string,
    tooltipPosition?: TBaseTooltipPosition,
    classNameRoot?: string
}

export const Label: React.FC<LabelProps> = (props) => {
    const {
        required,
        label,
        infoTooltipText,
        tooltipPosition,
    } = props;

    const classNameRoot = cx({
        [styles.spLabel]: true,
        [props.classNameRoot]: props.classNameRoot,
    });

    const classNameLabelText = cx({
        [styles.spLabel__text]: true,
    });

    const classNameLabelRequired = cx({
        [styles.spLabel__required]: required,
    });

    const classNameLabelTooltip = cx({
        [styles.spLabel__tooltip]: true,
    });

    return (
        <div className={classNameRoot}>
            <label className={classNameLabelText}>
                {label}
            </label>
            {
                required &&
                <div className={classNameLabelRequired}>
                    *
                </div>
            }
            {
                infoTooltipText &&
                <div className={classNameLabelTooltip}>
                    <Tooltip
                        position={tooltipPosition}
                        text={infoTooltipText}
                        hover={true}
                        trigger={
                            <Icon name={IconName.info}/>
                        }
                    />
                </div>
            }
        </div>
    );
};
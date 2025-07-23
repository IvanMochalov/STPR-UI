import cx from "clsx";
import React, {useState} from "react";

import {useClickOutside} from "../../hooks/useClickOutside.ts";
import {BaseTooltip, BaseTooltipProps} from "../BaseTooltip";
import {Icon, IconName} from "../Icons";
import styles from "./Tooltip.module.scss"

export interface TooltipProps extends BaseTooltipProps {
    hover?: boolean,
    trigger?: React.ReactNode,
    triggerAction?: () => void,
    classNameTriggerTooltip?: string,
    classNameRootBaseTooltip?: string,
}

export const Tooltip: React.FC<TooltipProps> = props => {
    const {
        trigger,
        hover = true,
        triggerAction,
        classNameTriggerTooltip,
        classNameRootBaseTooltip,
        ...tooltipProps
    } = props;

    const [isOpen, setOpen] = useState<boolean>(false);
    const ref = useClickOutside<HTMLDivElement>(() => {
        setOpen(false);
    }, isOpen);

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();

        if (hover) {
            return;
        }

        setOpen(true);
        triggerAction && triggerAction();
    };

    const classNameRoot = cx({
        [styles.spTooltip]: true,
        [styles.spTooltip_hover]: hover,
        [classNameTriggerTooltip]: classNameTriggerTooltip,
    });

    const _classNameRootBaseTooltip = cx({
        [styles.spTooltip__spTooltip]: true,
        [styles.spTooltip__spTooltip_isOpen]: isOpen,
        [classNameRootBaseTooltip]: classNameRootBaseTooltip,
    });

    return (
        <div
            className={classNameRoot}
            ref={ref}
            onClick={handleClick}
        >
            {trigger}
            {
                <BaseTooltip
                    {...tooltipProps}
                    classNameRoot={_classNameRootBaseTooltip}
                />
            }
        </div>
    );
};

export const InfoTooltip: React.FC<TooltipProps> = props => {
    return (
        <Tooltip
            {...props}
            hover={true}
            trigger={
                <Icon name={IconName.info}/>
            }
        />
    );
}
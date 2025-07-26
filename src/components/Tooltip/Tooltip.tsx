import cx from "clsx";
import React, { useState } from "react";

import { useClickOutside } from "../../hooks/useClickOutside.ts";
import { BaseTooltip } from "../BaseTooltip";
import { EIconName, Icon } from "../Icons";
import styles from "./Tooltip.module.scss";
import { TooltipProps } from "./types";

export const Tooltip: React.FC<TooltipProps> = (props) => {
  const {
    trigger,
    hover = true,
    toggleClick = false,
    triggerAction,
    classNameTriggerTooltip,
    classNameRootBaseTooltip: propsClassNameRootBaseTooltip,
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

    setOpen((prevState) => (toggleClick ? !prevState : true));
    triggerAction && triggerAction();
  };

  const classNameRoot = cx({
    [styles.spTooltip]: true,
    [styles.spTooltip_hover]: hover,
    ...(classNameTriggerTooltip && { [classNameTriggerTooltip]: true }),
  });

  const classNameRootBaseTooltip = cx({
    [styles.spTooltip__spTooltip]: true,
    [styles.spTooltip__spTooltip_isOpen]: isOpen,
    ...(propsClassNameRootBaseTooltip && { [propsClassNameRootBaseTooltip]: true }),
  });

  return (
    <div className={classNameRoot} ref={ref} onClick={handleClick}>
      {trigger}
      {<BaseTooltip {...tooltipProps} classNameRoot={classNameRootBaseTooltip} />}
    </div>
  );
};

export const InfoTooltip: React.FC<TooltipProps> = (props) => {
  return <Tooltip {...props} hover={true} trigger={<Icon name={EIconName.Info} />} />;
};

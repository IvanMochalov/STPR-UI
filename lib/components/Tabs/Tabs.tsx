import cx from "clsx";
import React from "react";

import { Text } from "../Text";
import { InfoTooltip } from "../Tooltip";
import styles from "./Tabs.module.scss";
import { TabsProps } from "./types";

export const Tabs: React.FC<TabsProps> = (props) => {
  const {
    panes,
    isSeparated = false,
    classNameRoot: propsClassNameRoot,
    classNameBaseTooltipRoot: propsClassNameBaseTooltipRoot,
    variant = "contained",
    size = "md",
  } = props;

  const classNameRoot = cx({
    [styles.spTabs]: true,
    [styles.spTabs_separated]: isSeparated,
    [styles[`spTabs--variant-${variant}`]]: variant,
    [styles[`spTabs--size-${size}`]]: size,
    ...(propsClassNameRoot && { [propsClassNameRoot]: true }),
  });

  const classNameTriggerTooltip = cx({
    [styles.spTabs__triggerTooltip]: true,
  });

  const getTypeForText = () => {
    switch (size) {
      case "md":
        return "p2";
      case "lg":
        return "p1";
    }
  };

  return (
    <div className={classNameRoot}>
      {panes.map((item, index) => {
        const { name, active, onClick, infoTooltipText } = item;

        return (
          <div
            key={item.key || index}
            className={cx({
              [styles.spTabs__tabElement]: true,
              [styles.spTabs__tabElement_active]: active,
            })}
            onClick={onClick}
          >
            <Text type={getTypeForText()}>{name}</Text>
            {Boolean(infoTooltipText) && (
              <InfoTooltip
                classNameTriggerTooltip={classNameTriggerTooltip}
                text={infoTooltipText}
                classNameBaseTooltipRoot={propsClassNameBaseTooltipRoot}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

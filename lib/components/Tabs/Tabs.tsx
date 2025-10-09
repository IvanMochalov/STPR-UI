import cx from "clsx";
import React from "react";

import { InfoTooltip } from "../Tooltip";
import styles from "./Tabs.module.scss";
import { TabsProps } from "./types";

export const Tabs: React.FC<TabsProps> = (props) => {
  const {
    panes,
    isSeparated = false,
    classNameRoot: propsClassNameRoot,
    classNameTabElementRoot: propsClassNameTabElementRoot,
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

  const classNameTooltip = cx({
    [styles.spTabs__tooltip]: true,
  });

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
              ...(propsClassNameTabElementRoot && { [propsClassNameTabElementRoot]: true }),
            })}
            onClick={onClick}
          >
            <span>{name}</span>
            {Boolean(infoTooltipText) && (
              <InfoTooltip
                hover={true}
                classNameTooltip={classNameTooltip}
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

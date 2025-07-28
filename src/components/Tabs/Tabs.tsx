import cx from "clsx";
import React from "react";

import { Text } from "../Text";
import { InfoTooltip } from "../Tooltip";
import styles from "./Tabs.module.scss";
import { TabsProps } from "./types";

export const Tabs: React.FC<TabsProps> = (props) => {
  const { panes, isSeparated = false, classNameRoot: propsClassNameRoot } = props;

  const classNameRoot = cx({
    [styles.spTabs]: true,
    [styles.spTabs_separated]: isSeparated,
    ...(propsClassNameRoot && { [propsClassNameRoot]: true }),
  });

  const classNameTriggerTooltip = cx({
    [styles.spTabs__triggerTooltip]: true,
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
              [styles.spTabs__tabElement_separated]: isSeparated,
            })}
            onClick={onClick}
          >
            <Text type="p2">{name}</Text>
            {Boolean(infoTooltipText) && (
              <InfoTooltip
                classNameTriggerTooltip={classNameTriggerTooltip}
                text={infoTooltipText}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

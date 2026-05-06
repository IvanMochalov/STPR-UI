import cx from "clsx";
import React from "react";

import { EIconName, Icon } from "../Icons";
import { InfoTooltip } from "../Tooltip";
import styles from "./Tabs.module.scss";
import { TabsProps, TPaneItem } from "./types";

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

  const classNameIconContainer = cx({
    [styles.spTabs__iconContainer]: true,
  });

  const classNameTooltip = cx({
    [styles.spTabs__tooltip]: true,
  });
  const classNameTabContent = cx({
    [styles.spTabs__tabContent]: true,
  });

  const renderIcon = (iconName?: EIconName, iconRotate?: number) => {
    if (!iconName) {
      return null;
    }

    return (
      <div className={classNameIconContainer}>
        <Icon name={iconName} rotate={iconRotate} />
      </div>
    );
  };

  const getContent = (item: TPaneItem, index: number) => {
    const {
      name,
      active,
      onClick,
      infoTooltipText,
      isOnlyIcon = false,
      startIconName,
      endIconName,
      startIconRotate = 0,
      endIconRotate = 0,
    } = item;
    const shouldRenderStartIcon = !isOnlyIcon && Boolean(startIconName);
    const shouldRenderEndIcon = !isOnlyIcon && Boolean(endIconName);
    const shouldRenderLabel = !isOnlyIcon;

    return (
      <div
        key={item.key || index}
        aria-label={isOnlyIcon ? name : undefined}
        className={cx({
          [styles.spTabs__tabElement]: true,
          [styles.spTabs__tabElement_active]: active,
          ...(propsClassNameTabElementRoot && { [propsClassNameTabElementRoot]: true }),
        })}
        onClick={onClick}
      >
        <div className={classNameTabContent}>
          {isOnlyIcon ? (
            renderIcon(startIconName, startIconRotate)
          ) : (
            <>
              {renderIcon(shouldRenderStartIcon ? startIconName : undefined, startIconRotate)}
              {shouldRenderLabel && <span className={styles.spTabs__tabText}>{name}</span>}
              {renderIcon(shouldRenderEndIcon ? endIconName : undefined, endIconRotate)}
            </>
          )}
          {Boolean(infoTooltipText) && (
            <InfoTooltip
              hover={true}
              classNameTooltip={classNameTooltip}
              text={infoTooltipText}
              classNameBaseTooltipRoot={propsClassNameBaseTooltipRoot}
            />
          )}
        </div>
      </div>
    );
  };

  return (
    <div className={classNameRoot}>
      {panes.map((item, index) => {
        return getContent(item, index);
      })}
    </div>
  );
};

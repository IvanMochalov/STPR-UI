import cx from "clsx";
import React from "react";

import styles from "./BaseTooltip.module.scss";
import { BaseTooltipProps, ETooltipPosition } from "./types";

export const BaseTooltip = React.forwardRef<HTMLDivElement, BaseTooltipProps>((props, ref) => {
  const {
    position = ETooltipPosition.BottomLeft,
    text,
    noPadding = false,
    classNameRoot: propsClassNameRoot,
    classNameContentRoot: propsClassNameContentRoot,
  } = props;

  const classNameRoot = cx({
    [styles.spBaseTooltip]: true,
    [styles.spBaseTooltip_noPadding]: noPadding,
    [styles[`spBaseTooltip_position-${position}`]]: position,
    ...(propsClassNameRoot && { [propsClassNameRoot]: true }),
  });

  const classNameContent = cx({
    [styles.spBaseTooltip__content]: true,
    ...(propsClassNameContentRoot && { [propsClassNameContentRoot]: true }),
  });

  return (
    <div className={classNameRoot} ref={ref}>
      <div className={classNameContent}>{text}</div>
    </div>
  );
});

BaseTooltip.displayName = "BaseTooltip";

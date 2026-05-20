import cx from "clsx";
import React from "react";

import { InfoTooltip } from "../Tooltip";
import styles from "./Label.module.scss";
import { LabelProps } from "./types";

export const Label: React.FC<LabelProps> = (props) => {
  const {
    required,
    label,
    infoTooltipText,
    tooltipPosition,
    classNameRoot: propsClassNameRoot,
    classNameBaseTooltipRoot: propsClassNameBaseTooltipRoot,
  } = props;

  const classNameRoot = cx({
    [styles.spLabel]: true,
    ...(propsClassNameRoot && { [propsClassNameRoot]: true }),
  });

  const classNameLabelTooltipIcon = cx({
    [styles.spLabel__tooltipIcon]: true,
  });

  return (
    <label className={classNameRoot}>
      {label}
      {required && <span>*</span>}
      {infoTooltipText && (
        <InfoTooltip
          hover={true}
          position={tooltipPosition}
          text={infoTooltipText}
          classNameTriggerIcon={classNameLabelTooltipIcon}
          classNameBaseTooltipRoot={propsClassNameBaseTooltipRoot}
        />
      )}
    </label>
  );
};

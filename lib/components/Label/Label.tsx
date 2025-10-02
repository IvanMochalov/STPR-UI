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

  const classNameLabelText = cx({
    [styles.spLabel__text]: true,
  });

  const classNameLabelRequired = cx({
    [styles.spLabel__required]: required,
  });

  const classNameLabelTooltip = cx({
    [styles.spLabel__tooltip]: true,
  });

  const classNameLabelTriggerTooltip = cx({
    [styles.spLabel__triggerTooltip]: true,
  });

  return (
    <div className={classNameRoot}>
      <label className={classNameLabelText}>{label}</label>
      {required && <div className={classNameLabelRequired}>*</div>}
      {infoTooltipText && (
        <InfoTooltip
          classNameTooltip={classNameLabelTooltip}
          classNameTriggerTooltip={classNameLabelTriggerTooltip}
          position={tooltipPosition}
          text={infoTooltipText}
          classNameBaseTooltipRoot={propsClassNameBaseTooltipRoot}
        />
      )}
    </div>
  );
};

import cx from "clsx";
import React from "react";

import { Label } from "../Label";
import { Text } from "../Text";
import styles from "./TextWithLabel.module.scss";
import { TextWithLabelProps } from "./types";

export const TextWithLabel: React.FC<TextWithLabelProps> = (props) => {
  const {
    label,
    required,
    infoTooltipText,
    tooltipPosition,
    classNameLabelRoot,
    classNameBaseTooltipRoot,
    classNameWrapperRoot: propsClassNameWrapperRoot,
    children,
    ...otherProps
  } = props;

  const classNameRoot = cx({
    [styles.spTextWithLabel]: true,
    [styles.spTextWithLabel_ellipsis]: otherProps.isEllipsis,
    ...(propsClassNameWrapperRoot && { [propsClassNameWrapperRoot]: true }),
  });

  return (
    <div className={classNameRoot}>
      <Label
        label={label}
        required={required}
        infoTooltipText={infoTooltipText}
        tooltipPosition={tooltipPosition}
        classNameRoot={classNameLabelRoot}
        classNameBaseTooltipRoot={classNameBaseTooltipRoot}
      />
      <Text {...otherProps}>{children}</Text>
    </div>
  );
};

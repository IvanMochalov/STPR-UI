import React from "react";

import { Label } from "../Label";
import { Text } from "../Text";
import styles from "./TextWithLabel.module.scss";
import { TextWithLabelProps } from "./types";

export const TextWithLabel: React.FC<TextWithLabelProps> = (props) => {
  const { children, label, style, ...otherProps } = props;

  return (
    <div className={styles.spTextWithLabel} style={{ ...style }}>
      <Label label={label} />
      <Text {...otherProps}>{children}</Text>
    </div>
  );
};

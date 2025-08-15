import cx from "clsx";
import React from "react";

import styles from "./Spinner.module.scss";
import { SpinnerProps } from "./types";

export const Spinner: React.FC<SpinnerProps> = (props) => {
  const { size = "md", color = "#036bfd", classNameRoot } = props;

  return (
    <div
      className={cx(styles.spinner, styles[`spinner--${size}`], classNameRoot)}
      aria-label="Loading"
      role="status"
      style={{ color }}
    >
      <div className={styles.spinner__inner} />
    </div>
  );
};

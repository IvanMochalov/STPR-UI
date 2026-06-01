import cx from "clsx";
import React from "react";

import styles from "./Spinner.module.scss";
import { SpinnerProps } from "./types";

export const Spinner: React.FC<SpinnerProps> = (props) => {
  const {
    size = "md",
    color = "#036bfd",
    classNameRoot: propsClassNameRoot,
    classNameSpinnerTextLine: propsClassNameSpinnerTextLine,
    loadingText,
  } = props;

  const classNameRoot = cx({
    [styles.spinner]: true,
    [styles[`spinner--size-${size}`]]: size,
    ...(propsClassNameRoot && { [propsClassNameRoot]: true }),
  });

  const getSpinnerElement = () => (
    <div
      className={classNameRoot}
      aria-label={loadingText ? undefined : "Loading"}
      role="status"
      style={{ color }}
    />
  );

  if (!loadingText) {
    return getSpinnerElement();
  }

  const classNameSpinnerTextLine = cx({
    [styles.spinnerWithText__line]: true,
    [styles[`spinnerWithText__line--size-${size}`]]: size,
    ...(propsClassNameSpinnerTextLine && { [propsClassNameSpinnerTextLine]: true }),
  });

  return (
    <div className={styles.spinnerWithText}>
      {getSpinnerElement()}
      <div className={classNameSpinnerTextLine} aria-live="polite">
        <span className={styles.spinnerWithText__text}>{loadingText}</span>
        <span className={styles.spinnerWithText__dots} aria-hidden="true">
          <span className={styles.spinnerWithText__dot} />
          <span className={styles.spinnerWithText__dot} />
          <span className={styles.spinnerWithText__dot} />
          <span className={styles.spinnerWithText__dot} />
        </span>
      </div>
    </div>
  );
};

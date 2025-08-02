import cx from "clsx";
import React from "react";

import styles from "./Text.module.scss";
import { TextProps } from "./types";

export const Text: React.FC<TextProps> = (props) => {
  const {
    type,
    children,
    color,
    title,
    style,
    onClick,
    isEllipsis = false,
    isCursorPointer = false,
    isCursorPointerByOnClick = true,
    classNameRoot: propsClassNameRoot,
  } = props;

  const getCursorPointer = () => {
    if (onClick && isCursorPointerByOnClick) {
      return true;
    }

    return isCursorPointer;
  };

  const classNameRoot = cx({
    [styles.spText]: true,
    [styles.spText_ellipsis]: isEllipsis,
    [styles.spText_cursorPointer]: getCursorPointer(),
    [styles[`spText_type-${type}`]]: type,
    ...(propsClassNameRoot && { [propsClassNameRoot]: true }),
  });

  return (
    <div style={{ ...style, color }} title={title} onClick={onClick} className={classNameRoot}>
      <span>{children}</span>
    </div>
  );
};

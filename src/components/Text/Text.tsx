import React from "react";
import cx from "clsx";
import { TextProps } from "./types";
import styles from "./Text.module.scss";

export const Text: React.FC<TextProps> = (props) => {
  const {
    type,
    children,
    color,
    title,
    style,
    onClick,
    isLink,
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
    [styles.spText_link]: isLink,
    [styles.spText_cursorPointer]: getCursorPointer(),
    [styles[`spText_${type}`]]: type,
    ...(propsClassNameRoot && { [propsClassNameRoot]: true }),
  });

  return (
    <div style={{ ...style, color }} title={title} onClick={onClick} className={classNameRoot}>
      {children}
    </div>
  );
};

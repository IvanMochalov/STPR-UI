import cx from "clsx";
import React from "react";

import styles from "./Text.module.scss";
import { TextProps } from "./types";

export const Text = React.forwardRef<HTMLDivElement, TextProps>((props, ref) => {
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
    <span
      style={{ ...style, color }}
      title={title}
      onClick={(e) => onClick && onClick(e)}
      className={classNameRoot}
      ref={ref}
    >
      {children}
    </span>
  );
});

Text.displayName = "Text";

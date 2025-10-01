import cx from "clsx";
import React from "react";

import styles from "./Skeleton.module.scss";
import { SkeletonProps } from "./typs";

export const Skeleton: React.FC<SkeletonProps> = (props) => {
  const {
    startColor,
    endColor,
    width = "100%",
    height = "1rem",
    circle = false,
    classNameRoot: propsClassNameRoot,
    style = {},
  } = props;

  const skeletonStyle = {
    width,
    height,
    ...style,
  };

  const classNameRoot = cx({
    [styles.skeleton]: true,
    [styles.skeleton_circle]: circle,
    [styles["skeleton_customStart"]]: startColor,
    [styles["skeleton_customEnd"]]: endColor,
    ...(propsClassNameRoot && { [propsClassNameRoot]: true }),
  });

  return (
    <div
      className={classNameRoot}
      // Устанавливаем кастомные цвета как CSS-переменные
      style={{
        ...skeletonStyle,
        ...(startColor && { "--custom-start-color": startColor }),
        ...(endColor && { "--custom-end-color": endColor }),
      }}
    />
  );
};

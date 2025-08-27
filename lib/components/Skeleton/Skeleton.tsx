import cx from "clsx";
import React from "react";

import styles from "./Skeleton.module.scss";
import { SkeletonProps } from "./typs";

export const Skeleton: React.FC<SkeletonProps> = (props) => {
  const { width = "100%", height = "1rem", circle = false, classNameRoot = "", style = {} } = props;
  const skeletonStyle = {
    width,
    height,
    borderRadius: circle ? "50%" : "0",
    ...style,
  };

  return <div style={skeletonStyle} className={cx(classNameRoot, styles.skeleton)} />;
};

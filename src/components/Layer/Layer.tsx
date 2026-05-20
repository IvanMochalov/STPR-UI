import cx from "clsx";
import React, { useEffect } from "react";

import { Portal } from "../Portal";
import styles from "./Layer.module.scss";
import { LayerProps } from "./types";

// TODO
//  Реализовать в дальнейшем все всплывающие компоненты
//  через использование HTML атрибута popover

export const Layer: React.FC<LayerProps> = (props) => {
  const {
    children,
    zIndex = 999,
    isHiddenModal = false,
    classNameRoot: propsClassNameRoot,
  } = props;
  const parent = document.body;
  const classNameLayer = cx({
    [styles.layer]: true,
    [styles.layer_hidden]: isHiddenModal,
    ...(propsClassNameRoot && { [propsClassNameRoot]: true }),
  });

  useEffect(() => {
    const body = document.body;

    body.style.overflow = "hidden";

    return () => {
      body.style.overflow = "";
    };
  }, []);

  return (
    <Portal node={parent}>
      <div style={{ zIndex }} className={classNameLayer}>
        {children}
      </div>
    </Portal>
  );
};

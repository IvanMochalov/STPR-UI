import cx from "clsx";
import React from "react";

import { Portal } from "../Portal";
import styles from "./Layer.module.scss";
import { LayerProps } from "./types";

// TODO
//  Реализовать в дальнейшем все всплывающие компоненты
//  через использование HTML атрибута popover

export const Layer: React.FC<LayerProps> = (props) => {
  const {
    children,
    zIndex = "9999",
    isHiddenModal = false,
    classNameRoot: propsClassNameRoot,
  } = props;
  const parent = document.body;
  const classNameLayer = cx({
    [styles.layer]: true,
    [styles.layer_hidden]: isHiddenModal,
    ...(propsClassNameRoot && { [propsClassNameRoot]: true }),
  });

  return (
    <Portal node={parent}>
      <div style={{ zIndex }} className={classNameLayer}>
        {children}
      </div>
    </Portal>
  );
};

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
    // Запоминаем текущую позицию скролла
    const scrollY = window.scrollY;
    const body = document.body;

    // Блокируем скролл и фиксируем позицию
    body.style.top = `-${scrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.overflow = "hidden";

    return () => {
      // Восстанавливаем скролл
      body.style.position = "";
      body.style.top = "";
      body.style.left = "";
      body.style.right = "";
      body.style.overflow = "";

      // Восстанавливаем позицию скролла
      window.scrollTo(0, scrollY);
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

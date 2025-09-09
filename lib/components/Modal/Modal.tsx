import cx from "clsx";
import React, { useEffect } from "react";

import { Button } from "../Button";
import { EIconName } from "../Icons";
import { Layer } from "../Layer";
import { Text } from "../Text";
import styles from "./Modal.module.scss";
import { ModalProps } from "./types";

export const Modal: React.FC<ModalProps> = (props) => {
  const {
    zIndex,
    isHiddenModal = false,
    isVisibleCloseButton = true,
    children,
    classNameLayerRoot,
    classNameRoot: propsClassNameRoot,
    style,
    modalAlign = "top",
    textAlign = "left",
    onClose,
    header,
    subHeader,
    footer,
    size = "lg",
  } = props;

  const classNameModalWrapper = cx({
    [styles.modalWrapper]: true,
    [styles[`modalWrapper--modalAlign-${modalAlign}`]]: modalAlign,
    [styles[`modalWrapper--textAlign-${textAlign}`]]: textAlign,
  });

  const classNameRoot = cx({
    [styles.modalWrapper__modal]: true,
    [styles[`modalWrapper__modal--size-${size}`]]: size,
    ...(propsClassNameRoot && { [propsClassNameRoot]: true }),
  });

  const classNameCloseButton = cx({
    [styles.modalWrapper__closeButton]: true,
  });

  const classNameButtonIconContainer = cx({
    [styles.modalWrapper__closeButtonIconContainer]: true,
  });

  const classNameContent = cx({
    [styles.modalWrapper__content]: true,
  });

  const classNameModalHeader = cx({
    [styles.modalWrapper__header]: true,
  });

  const classNameModalSubHeader = cx({
    [styles.modalWrapper__subHeader]: true,
    [styles.modalWrapper__subHeader_onlySubHeader]: !header,
  });

  const classNameModalFooter = cx({
    [styles.modalWrapper__footer]: true,
  });

  useEffect(() => {
    // Запоминаем текущую позицию скролла
    const scrollY = window.scrollY;
    const body = document.body;

    // Блокируем скролл и фиксируем позицию
    body.style.position = "fixed";
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
    <Layer zIndex={zIndex} isHiddenModal={isHiddenModal} classNameRoot={classNameLayerRoot}>
      <div className={classNameModalWrapper}>
        <div className={classNameRoot} style={style}>
          {(header || subHeader) && (
            <div className={classNameModalHeader}>
              {typeof header === "string" ? <Text type={"h3"}>{header}</Text> : header}
              {subHeader && (
                <div className={classNameModalSubHeader}>
                  {typeof subHeader === "string" ? <Text>{subHeader}</Text> : subHeader}
                </div>
              )}
            </div>
          )}
          {children && <div className={classNameContent}>{children}</div>}
          {footer && <div className={classNameModalFooter}>{footer}</div>}
          {isVisibleCloseButton && onClose && (
            <Button
              classNameRoot={classNameCloseButton}
              classNameIconContainerRoot={classNameButtonIconContainer}
              onClick={onClose}
              iconName={EIconName.Close}
              variant={"link"}
              noPadding={true}
              isOnlyIcon={true}
            />
          )}
        </div>
      </div>
    </Layer>
  );
};

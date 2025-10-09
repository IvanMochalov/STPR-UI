import cx from "clsx";
import React from "react";

import { Button } from "../Button";
import { EIconName } from "../Icons";
import { Layer } from "../Layer";
import { Text } from "../Text";
import styles from "./Modal.module.scss";
import { ModalProps } from "./types";

export const Modal: React.FC<ModalProps> = (props) => {
  const {
    zIndex = 999,
    isHiddenModal = false,
    isVisibleCloseButton = true,
    children,
    classNameLayerRoot: propsClassNameLayerRoot,
    classNameRoot: propsClassNameRoot,
    classNameHeaderRoot: propsClassNameHeaderRoot,
    classNameFooterRoot: propsClassNameFooterRoot,
    style,
    modalVerticalAlign = "top",
    textAlign = "left",
    onClose,
    header,
    subHeader,
    footer,
    size = "lg",
  } = props;

  const classNameModalWrapper = cx({
    [styles.modalWrapper]: true,
    [styles[`modalWrapper--modalVerticalAlign-${modalVerticalAlign}`]]: modalVerticalAlign,
    [styles[`modalWrapper--textAlign-${textAlign}`]]: textAlign,
    ...(propsClassNameLayerRoot && { [propsClassNameLayerRoot]: true }),
  });

  const classNameRoot = cx({
    [styles.modalWrapper__modal]: true,
    [styles[`modalWrapper__modal--size-${size}`]]: size,
    ...(propsClassNameRoot && { [propsClassNameRoot]: true }),
  });

  const classNameCloseButton = cx({
    [styles.modalWrapper__closeButton]: true,
    [styles[`modalWrapper__closeButton--size-${size}`]]: size,
  });

  const classNameButtonIconContainer = cx({
    [styles.modalWrapper__closeButtonIconContainer]: true,
    [styles[`modalWrapper__closeButtonIconContainer--size-${size}`]]: size,
  });

  const classNameContent = cx({
    [styles.modalWrapper__content]: true,
  });

  const classNameModalHeader = cx({
    [styles.modalWrapper__header]: true,
    ...(propsClassNameHeaderRoot && { [propsClassNameHeaderRoot]: true }),
  });

  const classNameModalSubHeader = cx({
    [styles.modalWrapper__subHeader]: true,
  });

  const classNameModalFooter = cx({
    [styles.modalWrapper__footer]: true,
    ...(propsClassNameFooterRoot && { [propsClassNameFooterRoot]: true }),
  });

  return (
    <Layer zIndex={zIndex} isHiddenModal={isHiddenModal} classNameRoot={classNameModalWrapper}>
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
    </Layer>
  );
};

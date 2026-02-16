import cx from "clsx";
import React from "react";

import { Button } from "../Button";
import { EIconName } from "../Icons";
import { Layer } from "../Layer";
import { Spinner } from "../Spinner";
import { Text } from "../Text";
import styles from "./Modal.module.scss";
import { ModalProps } from "./types";

export const Modal: React.FC<ModalProps> = (props) => {
  const {
    zIndex = 999,
    isHiddenModal = false,
    disabled = false,
    isVisibleCloseButton = true,
    children,
    classNameLayerRoot: propsClassNameLayerRoot,
    classNameRoot: propsClassNameRoot,
    classNameHeaderRoot: propsClassNameHeaderRoot,
    classNameSubHeaderRoot: propsClassNameSubHeaderRoot,
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
    [styles.modalWrapper__modal_disabled]: disabled,
    ...(propsClassNameRoot && { [propsClassNameRoot]: true }),
  });

  const classNameCloseButton = cx({
    [styles.modalWrapper__closeButton]: true,
    [styles.modalWrapper__closeButton_disabled]: disabled,
    [styles[`modalWrapper__closeButton--size-${size}`]]: size,
  });

  const classNameButtonIconContainer = cx({
    [styles.modalWrapper__closeButtonIconContainer]: true,
    [styles[`modalWrapper__closeButtonIconContainer--size-${size}`]]: size,
  });

  const classNameContent = cx({
    [styles.modalWrapper__content]: true,
    [styles.modalWrapper__content_disabled]: disabled,
  });

  const classNameModalHeader = cx({
    [styles.modalWrapper__header]: true,
    [styles.modalWrapper__header_disabled]: disabled,
    ...(propsClassNameHeaderRoot && { [propsClassNameHeaderRoot]: true }),
  });

  const classNameModalSubHeader = cx({
    [styles.modalWrapper__subHeader]: true,
    [styles.modalWrapper__subHeader_disabled]: disabled,
    ...(propsClassNameSubHeaderRoot && { [propsClassNameSubHeaderRoot]: true }),
  });

  const classNameModalFooter = cx({
    [styles.modalWrapper__footer]: true,
    [styles.modalWrapper__footer_disabled]: disabled,
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
        {disabled && (
          <div className={styles.modalWrapper__spinnerOverlay}>
            <Spinner size="lg" />
          </div>
        )}
      </div>
    </Layer>
  );
};

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
    zIndex,
    isHiddenModal = false,
    isVisibleCloseButton = true,
    children,
    classNameLayerRoot,
    classNameRoot: propsClassNameRoot,
    style,
    align = "top",
    onClose,
    header,
    subHeader,
    footer,
  } = props;

  const classNameModalWrapper = cx({
    [styles.modalWrapper]: true,
    [styles[`modalWrapper_align-${align}`]]: align,
  });

  const classNameRoot = cx({
    [styles.modalWrapper__modal]: true,
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
  });

  const classNameModalFooter = cx({
    [styles.modalWrapper__footer]: true,
  });

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
          {isVisibleCloseButton && (
            <Button
              classNameRoot={classNameCloseButton}
              classNameIconContainerRoot={classNameButtonIconContainer}
              onClick={onClose}
              iconName={EIconName.Close}
              variant={"link"}
              isOnlyIcon={true}
            />
          )}
        </div>
      </div>
    </Layer>
  );
};

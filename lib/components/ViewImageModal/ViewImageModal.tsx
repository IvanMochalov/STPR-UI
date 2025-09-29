import cx from "clsx";
import React, { useState } from "react";

import { Button } from "../Button";
import { EIconName, Icon } from "../Icons";
import { Layer } from "../Layer";
import { Spinner } from "../Spinner";
import { Text } from "../Text";
import { ViewImageModalProps } from "./types";
import styles from "./ViewImageModal.module.scss";

export const ViewImageModal: React.FC<ViewImageModalProps> = (props) => {
  const {
    classNameRoot: propsClassNameRoot,
    classNameImageRoot: propsClassNameImageRoot,
    src,
    onLoad,
    onError,
    fallbackSrc,
    showLoader = true,
    onClose,
  } = props;

  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);

  const classNameViewImage = cx({
    [styles.viewImage]: true,
    ...(propsClassNameRoot && { [propsClassNameRoot]: true }),
  });

  const classNameLayer = cx({
    [styles.viewImage__layer]: true,
  });

  const classNameCloseButton = cx({
    [styles.viewImage__closeButton]: true,
  });

  const classNameSpinner = cx({
    [styles.viewImage__spinner]: true,
  });

  const classNameImageRoot = cx(styles.viewImage__img, {
    [styles.viewImage__img_loading]: isLoading,
    [styles.viewImage__img_error]: hasError,
    ...(propsClassNameImageRoot && { [propsClassNameImageRoot]: true }),
  });

  const handleLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setIsLoading(false);
    onLoad?.(e);
  };

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setIsLoading(false);
    setHasError(true);

    if (fallbackSrc && currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
      setHasError(false);
      setIsLoading(true);
    }

    onError?.(e);
  };

  return (
    <Layer classNameRoot={classNameLayer}>
      {showLoader && isLoading && <Spinner classNameRoot={classNameSpinner} size={"xl"} />}
      <div className={classNameViewImage}>
        <img
          className={classNameImageRoot}
          src={currentSrc}
          alt={"someImage"}
          onLoad={handleLoad}
          onError={handleError}
        />
        {hasError && (
          <div className={styles.viewImage__errorWrapper}>
            <Icon name={EIconName.InfoError} className={styles.viewImage__errorIcon} />
            <Text>Не удалось загрузить изображение</Text>
          </div>
        )}
      </div>
      <Button
        classNameRoot={classNameCloseButton}
        onClick={onClose}
        variant={"link"}
        isOnlyIcon={true}
        color={"white"}
        iconName={EIconName.Close}
      />
    </Layer>
  );
};

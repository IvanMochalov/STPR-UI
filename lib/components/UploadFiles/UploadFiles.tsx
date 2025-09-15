import cx from "clsx";
import React, { useCallback } from "react";

import { DefaultDropzone } from "../DefaultDropzone";
import { useDefaultDropzone } from "../DefaultDropzone/hooks/useDefaultDropzone.ts";
import { EllipsisTextWithTooltip } from "../EllipsisTextWithTooltip";
import { EIconName, Icon } from "../Icons";
import { Spinner } from "../Spinner";
import { Text } from "../Text";
import { ETooltipPosition, InfoTooltip } from "../Tooltip";
import { UploadFilesProps } from "./types";
import styles from "./UploadFiles.module.scss";

export const UploadFiles: React.FC<UploadFilesProps> = (props) => {
  const {
    placeholder = "Загрузите файл",
    variant = "input",
    name,
    onDropFiles,
    accept,
    disabled,
    multiple,
    files = [],
    infoTooltipText,
    tooltipPosition = ETooltipPosition.TopRight,
    classNameRoot: propsClassNameRoot,
    loading,
    error,
  } = props;

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (!multiple) {
        onDropFiles(acceptedFiles, name);

        return;
      }

      const _files = [...files, ...acceptedFiles];

      onDropFiles(_files, name);
    },
    [files, multiple, name, onDropFiles],
  );

  const { getRootProps, getInputProps } = useDefaultDropzone({
    accept,
    onDrop,
    multiple,
    disabled,
  });

  const fileNames = files.map((file) => file.name);
  const isFileUploaded = fileNames?.length > 0;
  const isInputVariant = variant === "input";

  const classNameRoot = cx({
    [styles.spUploadFiles]: true,
    [styles[`spUploadFiles--variant-${variant}`]]: variant,
    [styles.spUploadFiles_error]: Boolean(error),
    [styles.spUploadFiles_disabled]: disabled,
    [styles.spUploadFiles_multiple]: multiple,
    [styles.spUploadFiles_fileUploaded]: isFileUploaded,
    ...(propsClassNameRoot && { [propsClassNameRoot]: true }),
  });
  const classNameControlRoot = cx({
    [styles.spUploadFiles__control]: true,
    [styles.spUploadFiles__control_loading]: loading,
  });
  const classNameFileListRoot = cx({
    [styles.spUploadFiles__fileNamesList]: true,
    [styles.spUploadFiles__fileNamesList_loading]: loading,
  });
  const classNameAllFilesDeleteRoot = cx({
    [styles.spUploadFiles__delete]: true,
    [styles.spUploadFiles__delete_loading]: loading,
  });

  const deleteFile = (fileName: string) => {
    if (loading) {
      return;
    }
    const _files = [...files];

    const index = _files.findIndex((file) => file.name === fileName);

    _files.splice(index, 1);

    onDropFiles(_files, name);
  };

  const onAllDelete = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    onDropFiles([], name);
  };

  const renderFileNames = () => {
    return multiple ? (
      <ul className={classNameFileListRoot}>
        {fileNames.map((fileName, index) => {
          return (
            <li
              key={index}
              className={styles.spUploadFiles__fileNamesListItem}
              onClick={(e) => {
                e.stopPropagation();
                deleteFile(fileName);
              }}
            >
              <EllipsisTextWithTooltip
                type={"p2"}
                text={fileName}
                classNameTooltipRoot={styles.spUploadFiles__fileNamesListItem__tooltip}
                classNameTriggerTooltipRoot={
                  styles.spUploadFiles__fileNamesListItem__triggerTooltip
                }
              />
              <div className={styles.spUploadFiles__fileNamesListItemDelete}>
                <Icon name={EIconName.Trash} />
              </div>
            </li>
          );
        })}
      </ul>
    ) : (
      <Text isEllipsis={true} classNameRoot={styles.spUploadFiles__fileName}>
        {fileNames[0]}
      </Text>
    );
  };

  const getUploadFilesContent = () => {
    return (
      <>
        {isFileUploaded ? (
          renderFileNames()
        ) : (
          <Text classNameRoot={styles.spUploadFiles__placeholder}>{placeholder}</Text>
        )}
        {isFileUploaded ? (
          <div className={classNameAllFilesDeleteRoot} onClick={onAllDelete}>
            <Icon name={EIconName.Close} />
          </div>
        ) : (
          isInputVariant &&
          infoTooltipText && (
            <InfoTooltip
              classNameTooltip={styles.spUploadFiles__tooltipWrapper}
              position={tooltipPosition}
              text={infoTooltipText}
              classNameTriggerTooltip={styles.spUploadFiles__tooltip}
            />
          )
        )}
      </>
    );
  };

  return (
    <DefaultDropzone
      getRootProps={getRootProps}
      getInputProps={getInputProps}
      disabled={disabled || isFileUploaded}
      name={name}
    >
      <div className={classNameRoot}>
        <div className={classNameControlRoot}>
          {isInputVariant &&
            (loading ? (
              <Spinner />
            ) : (
              <Icon name={isFileUploaded ? EIconName.Check : EIconName.Upload} />
            ))}
          {getUploadFilesContent()}
        </div>
        {error && <div className={styles.spUploadFiles__error}>{error}</div>}
      </div>
    </DefaultDropzone>
  );
};

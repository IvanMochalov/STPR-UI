import cx from "clsx";
import React from "react";

import { DefaultDropzone } from "../DefaultDropzone";
import { EllipsisTextWithTooltip } from "../EllipsisTextWithTooltip";
import { EIconName, Icon } from "../Icons";
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
    maxSize,
    accept,
    disabled,
    multiple,
    maxFiles,
    files = [],
    infoTooltipText,
    tooltipPosition = ETooltipPosition.TopRight,
    classNameRoot: propsClassNameRoot,
    error,
  } = props;

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

  const deleteFile = (fileName: string) => {
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
      <ul className={styles.spUploadFiles__fileNamesList}>
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

  const getSingle = () => {
    return (
      <>
        {isFileUploaded ? (
          renderFileNames()
        ) : (
          <Text classNameRoot={styles.spUploadFiles__placeholder}>{placeholder}</Text>
        )}
        {isFileUploaded && (isInputVariant || !multiple) ? (
          <div className={styles.spUploadFiles__delete} onClick={onAllDelete}>
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
      name={name}
      files={files}
      multiple={multiple}
      maxSize={maxSize}
      maxFiles={maxFiles}
      accept={accept}
      onDropFiles={onDropFiles}
      disabled={disabled || isFileUploaded}
    >
      <div className={classNameRoot}>
        <div className={styles.spUploadFiles__control}>
          {isInputVariant && <Icon name={isFileUploaded ? EIconName.Check : EIconName.Upload} />}
          {getSingle()}
        </div>
        {error && <div className={styles.spUploadFiles__error}>{error}</div>}
      </div>
    </DefaultDropzone>
  );
};

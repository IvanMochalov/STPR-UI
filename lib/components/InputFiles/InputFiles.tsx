import cx from "clsx";
import React from "react";

import { DefaultDropzone } from "../DefaultDropzone";
import { EllipsisTextWithTooltip } from "../EllipsisTextWithTooltip";
import { EIconName, Icon } from "../Icons";
import { Text } from "../Text";
import { ETooltipPosition, InfoTooltip } from "../Tooltip";
import styles from "./InputFiles.module.scss";
import { InputFilesProps } from "./types";

export const InputFiles: React.FC<InputFilesProps> = (props) => {
  const {
    placeholder = "Загрузите файл",
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

  const classNameRoot = cx({
    [styles.spInputFiles]: true,
    [styles.spInputFiles_error]: Boolean(error),
    [styles.spInputFiles_disabled]: disabled,
    [styles.spInputFiles_fileUploaded]: isFileUploaded,
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
      <ul className={styles.spInputFiles__fileNamesList}>
        {fileNames.map((fileName, index) => {
          return (
            <li
              key={index}
              className={styles.spInputFiles__fileNamesListItem}
              onClick={(e) => {
                e.stopPropagation();
                deleteFile(fileName);
              }}
            >
              <EllipsisTextWithTooltip
                type={"p2"}
                text={fileName}
                classNameTriggerTooltipRoot={styles.spInputFiles__fileNamesListItem__triggerTooltip}
              />
              <div className={styles.spInputFiles__fileNamesListItemDelete}>
                <Icon name={EIconName.Trash} />
              </div>
            </li>
          );
        })}
      </ul>
    ) : (
      <Text isEllipsis={true}>{fileNames[0]}</Text>
    );
  };

  const getSingle = () => {
    return (
      <>
        {isFileUploaded ? renderFileNames() : <Text>{placeholder}</Text>}
        {isFileUploaded ? (
          <div className={styles.spInputFiles__delete} onClick={onAllDelete}>
            <Icon name={EIconName.Close} />
          </div>
        ) : (
          infoTooltipText && (
            <InfoTooltip
              classNameTooltip={styles.spInputFiles__tooltipWrapper}
              position={tooltipPosition}
              text={infoTooltipText}
              classNameTriggerTooltip={styles.spInputFiles__tooltip}
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
        <div className={styles.spInputFiles__control}>
          <Icon name={isFileUploaded ? EIconName.Check : EIconName.Upload} />
          {getSingle()}
        </div>
        {error && <div className={styles.spInputFiles__error}>{error}</div>}
      </div>
    </DefaultDropzone>
  );
};

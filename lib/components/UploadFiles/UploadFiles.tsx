import cx from "clsx";
import React, { useCallback, useEffect, useState } from "react";

import { DefaultDropzone } from "../DefaultDropzone";
import { useDefaultDropzone } from "../DefaultDropzone/hooks/useDefaultDropzone.ts";
import { EllipsisTextWithTooltip } from "../EllipsisTextWithTooltip";
import { EIconName, Icon } from "../Icons";
import { Spinner } from "../Spinner";
import { ETooltipPosition, InfoTooltip } from "../Tooltip";
import { Accept, FileRejection, TLocalErrorFile, UploadFilesProps } from "./types";
import styles from "./UploadFiles.module.scss";
import { ErrorCode } from "react-dropzone";

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
    (acceptedFiles: File[], fileRejections: FileRejection[]) => {
      const _fileRejections = fileRejections.map(({ file, errors }: FileRejection) => {
        return {
          fileName: file.name,
          errors,
        };
      });
      setErrors(_fileRejections);

      if (!multiple) {
        onDropFiles(acceptedFiles, name);

        return;
      }

      const _files = [...files, ...acceptedFiles];

      onDropFiles(_files, name);
    },
    [files, multiple, name, onDropFiles],
  );

  const { getRootProps, getInputProps, isDragReject } = useDefaultDropzone({
    accept,
    onDrop,
    multiple,
    disabled,
  });

  const [errors, setErrors] = useState<Array<TLocalErrorFile>>([]);
  const [isLocalDragReject, setIsLocalDragReject] = useState<boolean>(isDragReject);

  useEffect(() => {
    setIsLocalDragReject(isDragReject);
  }, [isDragReject]);

  const fileNames = [...files.map((file) => ({ fileName: file.name, errors: null })), ...errors];
  const isFileUploaded = fileNames?.length > 0 || errors?.length > 0;
  const isInputVariant = variant === "input";

  const classNameRoot = cx({
    [styles.spUploadFiles]: true,
    [styles[`spUploadFiles--variant-${variant}`]]: variant,
    [styles.spUploadFiles_error]: Boolean(error),
    [styles.spUploadFiles_error]: isLocalDragReject && !multiple,
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

  const deleteFile = (fileName: string, isError?: boolean) => {
    if (loading) {
      return;
    }

    if (isError) {
      const _errors = [...errors];

      const index = _errors.findIndex((errorFile) => errorFile.fileName === fileName);

      _errors.splice(index, 1);

      setErrors(_errors);

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
    setErrors([]);
    setIsLocalDragReject(false);
  };

  const getMostFormat = (accept: Accept) => {
    return Object.values(accept)
      .flatMap((item) => item.map((ext) => ext.toUpperCase()))
      .join(", ");
  };

  const getSingleFileName = () => {
    if (isLocalDragReject) {
      const formatsName = getMostFormat(accept);

      return (
        <EllipsisTextWithTooltip
          text={`Неверный формат файла. Загрузите файл в формате ${formatsName}`}
          classNameTooltipRoot={cx(styles.spUploadFiles__fileNameContainer)}
          classNameRoot={cx(
            styles.spUploadFiles__fileName,
            isLocalDragReject && styles.spUploadFiles__fileName_dragError,
          )}
        />
      );
    }

    return (
      <EllipsisTextWithTooltip
        text={fileNames[0].fileName}
        classNameTooltipRoot={cx(styles.spUploadFiles__fileNameContainer)}
        classNameRoot={cx(styles.spUploadFiles__fileName)}
      />
    );
  };

  const getMultipleFileNames = () => {
    return (
      <ul className={classNameFileListRoot}>
        {fileNames.map(({ fileName, errors }, index) => {
          const getInfoTooltipText = () => {
            if (!errors) return "";

            return errors?.map((error) => {
              switch (error.code) {
                case ErrorCode.FileInvalidType: {
                  const validFormats = getMostFormat(accept);
                  return (
                    `Неверный формат файла.\n` +
                    `Загрузите файл в формате ${validFormats}\n` +
                    "\n Данный файл не будет загружен"
                  );
                }
              }
            });
          };

          return (
            <li
              key={index}
              className={cx(
                styles.spUploadFiles__fileNamesListItem,
                Boolean(errors) && styles.spUploadFiles__fileNamesListItem_error,
              )}
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              {Boolean(errors) && (
                <InfoTooltip
                  text={getInfoTooltipText()}
                  position={ETooltipPosition.TopLeft}
                  classNameBaseTooltipRoot={styles.spUploadFiles__fileNamesListItem__tooltip}
                  classNameTriggerTooltip={
                    styles.spUploadFiles__fileNamesListItem__infoTriggerTooltip
                  }
                />
              )}
              <EllipsisTextWithTooltip
                type={"p2"}
                text={fileName}
                classNameTooltipRoot={cx(
                  styles.spUploadFiles__fileNamesListItemContainer,
                  Boolean(errors) && styles.spUploadFiles__fileNamesListItemContainer_error,
                )}
                classNameBaseTooltipRoot={styles.spUploadFiles__fileNamesListItem__tooltip}
                classNameTriggerTooltipRoot={
                  styles.spUploadFiles__fileNamesListItem__triggerTooltip
                }
              />
              <div
                className={cx(
                  styles.spUploadFiles__fileNamesListItemDelete,
                  Boolean(errors) && styles.spUploadFiles__fileNamesListItemDelete_error,
                )}
                onClick={(e) => {
                  e.stopPropagation();
                  deleteFile(fileName, Boolean(errors));
                }}
              >
                <Icon name={EIconName.Trash} />
              </div>
            </li>
          );
        })}
      </ul>
    );
  };

  const renderFileNames = () => {
    return multiple ? getMultipleFileNames() : getSingleFileName();
  };

  const getPlaceholder = () => {
    return (
      <EllipsisTextWithTooltip
        classNameRoot={styles.spUploadFiles__placeholder}
        classNameTooltipRoot={cx(
          styles.spUploadFiles__placeholderContainer,
          Boolean(infoTooltipText) && styles.spUploadFiles__placeholderContainer_withUloadTooltip,
        )}
        text={placeholder}
      />
    );
  };

  const getUploadFilesContent = () => {
    return (
      <>
        {isFileUploaded ? renderFileNames() : getPlaceholder()}
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
      disabled={disabled}
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

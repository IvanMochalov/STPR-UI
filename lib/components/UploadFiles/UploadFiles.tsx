import cx from "clsx";
import React, { useCallback, useState } from "react";

import { DefaultDropzone } from "../DefaultDropzone";
import { useDefaultDropzone } from "../DefaultDropzone/hooks/useDefaultDropzone.ts";
import { EllipsisTextWithTooltip } from "../EllipsisTextWithTooltip";
import { EIconName, Icon } from "../Icons";
import { Spinner } from "../Spinner";
import { ETooltipPosition, InfoTooltip, Tooltip } from "../Tooltip";
import { Accept, FileRejection, TLocalErrorFile, UploadFilesProps } from "./types";
import styles from "./UploadFiles.module.scss";
import { formatFileSize, getErrorTextFromError } from "./utils";

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

  const [errors, setErrors] = useState<Array<TLocalErrorFile>>([]);

  const onDrop = useCallback(
    (acceptedFiles: File[], fileRejections: FileRejection[]) => {
      const _fileRejections = fileRejections.map(({ file, errors }: FileRejection) => {
        return {
          file,
          errors,
        };
      });

      if (!multiple) {
        setErrors([..._fileRejections]);
        onDropFiles(acceptedFiles, name);

        return;
      }

      const _files = [...files, ...acceptedFiles];

      setErrors([..._fileRejections, ...errors]);
      onDropFiles(_files, name);
    },
    [errors, files, multiple, name, onDropFiles],
  );

  const { getRootProps, getInputProps } = useDefaultDropzone({
    accept,
    onDrop,
    multiple,
    disabled,
  });

  const hasErrors = errors ? errors?.length > 0 : undefined;

  const fileNames = [...files.map((file) => ({ file, errors: null })), ...errors];
  const isFileUploaded = fileNames?.length > 0 || errors?.length > 0;
  const isInputVariant = variant === "input";
  const isDropzoneVariant = variant === "dropzone";

  const classNameRoot = cx({
    [styles.spUploadFiles]: true,
    [styles[`spUploadFiles--variant-${variant}`]]: variant,
    [styles.spUploadFiles_error]: hasErrors && !multiple && error && error.length > 0,
    [styles.spUploadFiles_disabled]: disabled,
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

      const index = _errors.findIndex((errorFile) => errorFile.file.name === fileName);

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
  };

  const getMostFormat = (accept: Accept) => {
    return Object.values(accept)
      .flatMap((item) => item.map((ext) => ext.toUpperCase()))
      .join(", ");
  };

  const getSingleFileName = () => {
    if (hasErrors) {
      const formatsName = getMostFormat(accept);

      return (
        <EllipsisTextWithTooltip
          text={`Неверный формат файла. Загрузите файл в формате ${formatsName}`}
          classNameTooltipRoot={cx(styles.spUploadFiles__fileNameContainer)}
          classNameRoot={cx(
            styles.spUploadFiles__fileName,
            hasErrors && styles.spUploadFiles__fileName_dragError,
          )}
        />
      );
    }

    return (
      <EllipsisTextWithTooltip
        text={fileNames[0].file.name}
        classNameTooltipRoot={cx(styles.spUploadFiles__fileNameContainer)}
        classNameRoot={cx(styles.spUploadFiles__fileName)}
      />
    );
  };

  const getMultipleFileNames = () => {
    return (
      <ul className={classNameFileListRoot}>
        {fileNames.map(({ file, errors }, index) => {
          const currentFileHasErrors = errors ? errors?.length > 0 : undefined;

          const getInfoTooltipText = () => {
            if (!errors) return "";

            return errors?.map(getErrorTextFromError).join(", ");
          };

          return (
            <li
              key={index}
              className={cx(
                styles.spUploadFiles__fileNamesListItem,
                currentFileHasErrors && styles.spUploadFiles__fileNamesListItem_error,
              )}
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <div
                className={cx(
                  styles.spUploadFiles__fileNamesListItem__iconContainer,
                  currentFileHasErrors &&
                    styles.spUploadFiles__fileNamesListItem__iconContainer_error,
                )}
              >
                <Icon name={currentFileHasErrors ? EIconName.InfoError : EIconName.File} />
              </div>
              <div className={styles.spUploadFiles__fileNamesListItem__mainContent}>
                <EllipsisTextWithTooltip
                  text={file.name}
                  defaultTooltipPosition={ETooltipPosition.TopLeft}
                  isWithFixedEnd={true}
                  classNameRoot={styles.spUploadFiles__fileNamesListItem__fileName}
                  classNameTooltipRoot={styles.spUploadFiles__fileNamesListItem__fileNameWrapper}
                  classNameBaseTooltipRoot={
                    styles.spUploadFiles__fileNamesListItem__fileNameTooltip
                  }
                />
                <EllipsisTextWithTooltip
                  text={currentFileHasErrors ? getInfoTooltipText() : formatFileSize(file.size)}
                  classNameBaseTooltipRoot={
                    styles.spUploadFiles__fileNamesListItem__description__tooltipContent
                  }
                  classNameRoot={cx(
                    styles.spUploadFiles__fileNamesListItem__description,
                    currentFileHasErrors &&
                      styles.spUploadFiles__fileNamesListItem__description_error,
                  )}
                />
              </div>
              <div
                className={cx(styles.spUploadFiles__fileNamesListItemDelete)}
                onClick={(e) => {
                  e.stopPropagation();
                  deleteFile(file.name, currentFileHasErrors);
                }}
              >
                <Icon name={EIconName.Close} />
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
        {isFileUploaded && isInputVariant ? (
          <div className={classNameAllFilesDeleteRoot} onClick={onAllDelete}>
            <Icon name={EIconName.Close} />
          </div>
        ) : (
          isInputVariant &&
          infoTooltipText && (
            <InfoTooltip
              hover={true}
              position={tooltipPosition}
              text={infoTooltipText}
              classNameTooltip={styles.spUploadFiles__tooltip}
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
        {isDropzoneVariant && (
          <Tooltip
            hover={true}
            text={infoTooltipText}
            position={tooltipPosition}
            classNameTooltip={styles.spUploadFiles__tooltip}
            trigger={undefined}
          />
        )}
        <div className={classNameControlRoot}>
          {isInputVariant &&
            (loading ? (
              <Spinner />
            ) : (
              <Icon
                name={isFileUploaded ? EIconName.Check : EIconName.Upload}
                style={{ flexShrink: 0 }}
              />
            ))}
          {getUploadFilesContent()}
        </div>
        {error && <div className={styles.spUploadFiles__error}>{error}</div>}
      </div>
    </DefaultDropzone>
  );
};

import cx from "clsx";
import React, { useCallback, useState } from "react";

import { DefaultDropzone } from "../DefaultDropzone";
import { useDefaultDropzone } from "../DefaultDropzone/hooks/useDefaultDropzone.ts";
import { EllipsisTextWithTooltip } from "../EllipsisTextWithTooltip";
import { EIconName, Icon } from "../Icons";
import { Label } from "../Label";
import { Spinner } from "../Spinner";
import { ETooltipPosition, InfoTooltip, Tooltip } from "../Tooltip";
import {
  Accept,
  FileRejection,
  TLocalErrorFile,
  UploadFilesProps,
} from "./types";
import styles from "./UploadFiles.module.scss";
import {
  formatFileSize,
  getErrorTextFromError,
  getKbFromMb,
  validateAcceptedFilesByImageDimensions,
} from "./utils";

export const UploadFiles: React.FC<UploadFilesProps> = (props) => {
  const {
    placeholder = "Загрузите файл",
    variant = "input",
    name,
    label,
    required,
    onDropFiles,
    accept,
    disabled,
    multiple,
    files = [],
    infoTooltipText,
    tooltipPosition = ETooltipPosition.TopRight,
    loading,
    error,
    classNameRoot: propsClassNameRoot,
    classNameLabel: propsClassNameLabel,
    classNameBaseInfoTooltipRoot: propsClassNameBaseInfoTooltipRoot,
    maxSizeMb,
    requiredImageDimensionsPx,
  } = props;

  const [localErrors, setLocalErrors] = useState<Array<TLocalErrorFile>>([]);
  const [pendingValidationsCount, setPendingValidationsCount] = useState(0);
  const isLoading = Boolean(loading) || pendingValidationsCount > 0;

  const onDrop = useCallback(
    (acceptedFiles: File[], fileRejections: FileRejection[]) => {
      setPendingValidationsCount((prev) => prev + 1);

      void (async () => {
        try {
          const _fileRejections = fileRejections.map(({ file, errors }: FileRejection) => ({
            file,
            errors,
          }));

          const { validAcceptedFiles, invalidDimensionErrors } =
            await validateAcceptedFilesByImageDimensions(
              acceptedFiles,
              requiredImageDimensionsPx,
            );

          const allErrors = [..._fileRejections, ...invalidDimensionErrors];

          if (!multiple) {
            setLocalErrors(allErrors);
            onDropFiles(validAcceptedFiles, name);
            return;
          }

          const _files = [...files, ...validAcceptedFiles];
          setLocalErrors((prev) => [...allErrors, ...prev]);
          onDropFiles(_files, name);
        } finally {
          setPendingValidationsCount((prev) => (prev > 0 ? prev - 1 : 0));
        }
      })();
    },
    [files, multiple, name, onDropFiles, requiredImageDimensionsPx],
  );

  const { getRootProps, getInputProps } = useDefaultDropzone({
    accept,
    onDrop,
    multiple,
    disabled: disabled || isLoading,
    maxSize: maxSizeMb ? getKbFromMb(maxSizeMb) : undefined,
  });

  const hasErrors = localErrors ? localErrors?.length > 0 : false;

  const fileNames = [...files.map((file) => ({ file, errors: null })), ...localErrors];
  const isFileUploaded = fileNames?.length > 0 || localErrors?.length > 0;
  const isInputVariant = variant === "input";
  const isDropzoneVariant = variant === "dropzone";

  const classNameRoot = cx({
    [styles.spUploadFiles]: true,
    [styles[`spUploadFiles--variant-${variant}`]]: variant,
    [styles.spUploadFiles_error]: !multiple && (hasErrors || (error && error.length > 0)),
    [styles.spUploadFiles_disabled]: disabled || isLoading,
    [styles.spUploadFiles_fileUploaded]: isFileUploaded,
    ...(propsClassNameRoot && { [propsClassNameRoot]: true }),
  });
  const classNameControlRoot = cx({
    [styles.spUploadFiles__control]: true,
    [styles.spUploadFiles__control_loading]: isLoading,
  });
  const classNameFileListRoot = cx({
    [styles.spUploadFiles__fileNamesList]: true,
    [styles.spUploadFiles__fileNamesList_loading]: isLoading,
  });
  const classNameAllFilesDeleteRoot = cx({
    [styles.spUploadFiles__delete]: true,
    [styles.spUploadFiles__delete_loading]: isLoading,
  });
  const classNameLabel = cx({
    ...(propsClassNameLabel && { [propsClassNameLabel]: true }),
  });
  const classNameBaseInfoTooltipRoot = cx({
    ...(propsClassNameBaseInfoTooltipRoot && { [propsClassNameBaseInfoTooltipRoot]: true }),
  });

  const deleteFile = (fileName: string, isError?: boolean) => {
    if (isLoading) {
      return;
    }

    if (isError) {
      const _errors = [...localErrors];

      const index = _errors.findIndex((errorFile) => errorFile.file.name === fileName);

      _errors.splice(index, 1);

      setLocalErrors(_errors);

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
    setLocalErrors([]);
  };

  const getMostFormat = (accept: Accept) => {
    return Object.values(accept)
      .flatMap((item) => item.map((ext) => ext.toUpperCase()))
      .join(", ");
  };

  const getSingleFileName = () => {
    if (hasErrors) {
      const errorText = localErrors[0].errors.map(getErrorTextFromError).join(", ");

      if (!accept) {
        return (
          <EllipsisTextWithTooltip
            text={errorText}
            classNameTooltipRoot={cx(styles.spUploadFiles__fileNameContainer)}
            classNameRoot={cx(
              styles.spUploadFiles__fileName,
              hasErrors && styles.spUploadFiles__fileName_dragError,
            )}
          />
        );
      }

      const formatsName = getMostFormat(accept);

      return (
        <EllipsisTextWithTooltip
          text={`${errorText}. Загрузите файл формата ${formatsName}${maxSizeMb ? ` размером до ${maxSizeMb}MB` : ""}`}
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
              classNameTooltip={styles.spUploadFiles__infoTooltip}
              classNameBaseTooltipRoot={classNameBaseInfoTooltipRoot}
            />
          )
        )}
      </>
    );
  };

  const renderSingleUploadFileIcon = () => {
    if (multiple) return null;

    if (hasErrors && isFileUploaded) {
      return (
        <Icon
          className={styles.spUploadFiles__startIcon_error}
          name={EIconName.InfoError}
          style={{ flexShrink: 0 }}
        />
      );
    }
    if (isFileUploaded) {
      return <Icon name={EIconName.Check} style={{ flexShrink: 0 }} />;
    }

    return <Icon name={EIconName.Upload} style={{ flexShrink: 0 }} />;
  };

  return (
    <div className={classNameRoot}>
      {label && <Label classNameRoot={classNameLabel} required={required} label={label} />}
      <DefaultDropzone
        getRootProps={getRootProps}
        getInputProps={getInputProps}
        disabled={disabled}
        name={name}
      >
        <Tooltip
          hover={true}
          text={infoTooltipText}
          isVisibleTooltip={isDropzoneVariant}
          position={tooltipPosition}
          classNameTooltip={styles.spUploadFiles__tooltipRoot}
          trigger={
            <div className={classNameControlRoot}>
              {isInputVariant && (isLoading ? <Spinner /> : renderSingleUploadFileIcon())}
              {getUploadFilesContent()}
            </div>
          }
        />
      </DefaultDropzone>
      {error && <div className={styles.spUploadFiles__error}>{error}</div>}
    </div>
  );
};

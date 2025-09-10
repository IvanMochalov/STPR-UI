import React, { useCallback } from "react";
import Dropzone from "react-dropzone";

import { DefaultDropzoneProps } from "./types";

export const DefaultDropzone: React.FC<DefaultDropzoneProps> = (props) => {
  const {
    onDropFiles,
    children,
    maxSize,
    accept,
    disabled,
    name,
    multiple,
    maxFiles,
    files = [],
  } = props;

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (!multiple) {
        onDropFiles(acceptedFiles, name);

        return;
      }

      const _files = [...files, ...acceptedFiles];

      if (maxFiles && _files.length > maxFiles) {
        console.log(`Максимальное возможное количество файлов для загрузки - ${maxFiles}`);
        onDropFiles(_files.slice(0, maxFiles), name);

        return;
      }

      onDropFiles(_files, name);
    },
    [files, maxFiles, multiple, name, onDropFiles],
  );

  return (
    <Dropzone multiple={multiple} onDrop={onDrop} maxSize={maxSize} accept={accept}>
      {({ getRootProps, getInputProps }) => (
        <div {...getRootProps({})} style={{ height: "100%" }}>
          <input {...getInputProps({})} disabled={disabled} name={name} />
          {children}
        </div>
      )}
    </Dropzone>
  );
};

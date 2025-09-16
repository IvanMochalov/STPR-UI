import React from "react";

import { DefaultDropzoneProps } from "./types";

export const DefaultDropzone: React.FC<DefaultDropzoneProps> = (props) => {
  const { getRootProps, children, disabled, name, getInputProps } = props;

  return (
    <div {...getRootProps({})} style={{ minHeight: "100%", minWidth: "100%" }}>
      <input {...getInputProps({})} disabled={disabled} name={name} />
      {children}
    </div>
  );
};

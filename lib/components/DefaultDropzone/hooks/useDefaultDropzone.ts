import { useDropzone } from "react-dropzone";

import { TUseDefaultDropzoneProps } from "../types";

export const useDefaultDropzone = (props: TUseDefaultDropzoneProps) => {
  return useDropzone(props);
};

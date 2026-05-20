import { type ChangeEvent, useEffect, useId, useRef, useState } from "react";

import { LABELS } from "../constants";
import { hasModelUrl } from "../utils/file-hellper";
import { getCardCaption } from "../utils/modelSource";

type UseIfcPreviewModelOptions = {
  readonly: boolean;
  url?: string;
  fileProp?: File | null;
  onFileChange?: (file: File | null) => void;
  onClear?: () => void;
};

export const useIfcPreviewModel = (options: UseIfcPreviewModelOptions) => {
  const { readonly, url, fileProp, onFileChange, onClear } = options;

  const inputId = useId();
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const isFileControlled = fileProp !== undefined;
  const [internalFile, setInternalFile] = useState<File | null>(null);
  const [urlDismissed, setUrlDismissed] = useState(false);

  useEffect(() => {
    setUrlDismissed(false);
  }, [url]);

  const effectiveFile = isFileControlled ? (fileProp ?? null) : internalFile;
  const effectiveUrl = urlDismissed ? undefined : url;
  const hasExternalUrl = hasModelUrl(effectiveUrl);
  const hasModelData = readonly ? hasExternalUrl : Boolean(effectiveFile) || hasExternalUrl;
  const cardCaption = getCardCaption(effectiveFile, effectiveUrl, LABELS.emptyTitle);

  const setEffectiveFile = (next: File | null) => {
    if (!isFileControlled) {
      setInternalFile(next);
    }

    onFileChange?.(next);
  };

  const handlePickFile = (event: ChangeEvent<HTMLInputElement>) => {
    const picked = event.target.files?.[0] ?? null;

    if (picked) {
      setEffectiveFile(picked);
    }

    event.target.value = "";
  };

  const handleRemove = () => {
    setEffectiveFile(null);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }

    if (hasModelUrl(url)) {
      setUrlDismissed(true);
    }

    onClear?.();
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  return {
    inputId,
    fileInputRef,
    effectiveFile,
    effectiveUrl,
    hasModelData,
    cardCaption,
    handlePickFile,
    handleRemove,
    handleUploadClick,
  };
};

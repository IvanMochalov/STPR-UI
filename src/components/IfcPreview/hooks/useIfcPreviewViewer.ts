import { useEffect, useRef, useState } from "react";

import { revokeBlobUrlIfNeeded } from "../utils/file-hellper";
import type { TIfcPreviewMaxFileSizeMb } from "../utils/fileSizeLimit";
import {
  formatIfcPreviewFileSizeLimitMessage,
  IFC_FILE_SIZE_EXCEEDED,
  isIfcPreviewFileSizeExceeded,
} from "../utils/fileSizeLimit";
import { fetchKnownModelByteSize, resolveViewerUrl } from "../utils/modelSource";

const PREPARING_VIEWER_TEXT = "Подготовка просмотра";

type UseIfcPreviewViewerOptions = {
  readonly: boolean;
  effectiveFile: File | null;
  effectiveUrl: string | undefined;
  wasmPublicPath: string;
  maxFileSizeMb: TIfcPreviewMaxFileSizeMb;
  disableFileSizeLimit: boolean;
  onModelLoaded?: () => void;
  onError?: (error: Error) => void;
  onOpenViewer?: () => void;
  onCloseViewer?: () => void;
};

export const useIfcPreviewViewer = (options: UseIfcPreviewViewerOptions) => {
  const {
    readonly,
    effectiveFile,
    effectiveUrl,
    wasmPublicPath,
    maxFileSizeMb,
    disableFileSizeLimit,
    onModelLoaded,
    onError,
    onOpenViewer,
    onCloseViewer,
  } = options;

  const ownedBlobUrlRef = useRef<string | null>(null);

  const [isOpen, setIsOpen] = useState(false);
  const [isPreparing, setIsPreparing] = useState(false);
  const [viewerUrl, setViewerUrl] = useState<string | null>(null);
  const [isModelReady, setIsModelReady] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    return () => {
      revokeBlobUrlIfNeeded(ownedBlobUrlRef.current);
    };
  }, []);

  const revokeOwnedBlobUrl = () => {
    revokeBlobUrlIfNeeded(ownedBlobUrlRef.current);
    ownedBlobUrlRef.current = null;
  };

  const showSizeLimitError = (limitMb: TIfcPreviewMaxFileSizeMb) => {
    setErrorMessage(formatIfcPreviewFileSizeLimitMessage(limitMb));
    setViewerUrl(null);
    setIsOpen(true);
    setIsPreparing(false);
    onError?.(new Error(IFC_FILE_SIZE_EXCEEDED));
  };

  const handleOpen = async () => {
    setErrorMessage(null);
    setIsModelReady(false);
    setIsPreparing(true);
    setIsOpen(true);

    try {
      if (!disableFileSizeLimit) {
        const knownSize = await fetchKnownModelByteSize(readonly, effectiveFile, effectiveUrl);

        if (knownSize !== null && isIfcPreviewFileSizeExceeded(knownSize, maxFileSizeMb, false)) {
          showSizeLimitError(maxFileSizeMb);

          return;
        }
      }

      const nextUrl = resolveViewerUrl(readonly, effectiveFile, effectiveUrl, ownedBlobUrlRef);

      if (!nextUrl) {
        setViewerUrl(null);
        setIsOpen(false);

        return;
      }

      setViewerUrl(nextUrl);
      onOpenViewer?.();
    } catch (unknownError) {
      const error = unknownError instanceof Error ? unknownError : new Error(String(unknownError));

      onError?.(error);
      setIsOpen(false);
      setViewerUrl(null);
      revokeOwnedBlobUrl();
    } finally {
      setIsPreparing(false);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    setViewerUrl(null);
    setIsModelReady(false);
    setErrorMessage(null);
    revokeOwnedBlobUrl();
    onCloseViewer?.();
  };

  const handleViewerError = (error: Error) => {
    setErrorMessage(error.message);
    onError?.(error);
  };

  const handleViewerModelLoaded = () => {
    setIsModelReady(true);
    onModelLoaded?.();
  };

  const showViewer = !isPreparing && Boolean(viewerUrl) && !errorMessage;
  const showPreparingSpinner = isPreparing && !errorMessage;
  const showError = !isPreparing && Boolean(errorMessage);

  return {
    wasmPublicPath,
    isOpen,
    isPreparing,
    viewerUrl,
    isModelReady,
    errorMessage,
    preparingText: PREPARING_VIEWER_TEXT,
    showViewer,
    showPreparingSpinner,
    showError,
    handleOpen,
    handleClose,
    handleViewerError,
    handleViewerModelLoaded,
  };
};

import cx from "clsx";
import React, { useEffect, useId, useRef, useState } from "react";

import { Button } from "../Button";
import { EIconName, Icon } from "../Icons";
import { Layer } from "../Layer";
import { Spinner } from "../Spinner";
import { Text } from "../Text";
import { IfcViewerCanvas } from "./components/IfcViewerCanvas";
import { LABELS } from "./constants";
import styles from "./IfcPreview.module.scss";
import type { IIfcPreviewProps } from "./types";
import { hasExternalModelSource, hasIfcBytes, resolveExternalBuffer } from "./utils/file-hellper";
import type { TIfcPreviewMaxFileSizeMb } from "./utils/fileSizeLimit";
import {
  DEFAULT_IFC_PREVIEW_MAX_FILE_SIZE_MB,
  formatIfcPreviewFileSizeLimitMessage,
  IFC_FILE_SIZE_EXCEEDED,
  isIfcPreviewFileSizeExceeded,
} from "./utils/fileSizeLimit";

export const IfcPreview: React.FC<IIfcPreviewProps> = (props) => {
  const {
    readonly = false,
    mode = "view",
    wasmPublicPath = "/components-assets/IfcPreview/web-ifc/",
    ifcData = null,
    file: fileProp = null,
    disableFileSizeLimit = false,
    url,
    onFileChange,
    onClear,
    onModelLoaded,
    onError,
    onOpenViewer,
    onCloseViewer,
    maxFileSizeMb = DEFAULT_IFC_PREVIEW_MAX_FILE_SIZE_MB,
    classNameRoot: propsClassNameRoot,
    children,
  } = props;

  const inputId = useId();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const isFileControlled = fileProp !== undefined && fileProp !== null;
  const [internalFile, setInternalFile] = useState<File | null>(null);
  const effectiveFile = isFileControlled ? (fileProp ?? null) : internalFile;

  const setEffectiveFile = (next: File | null) => {
    if (!isFileControlled) {
      setInternalFile(next);
    }

    onFileChange?.(next);
  };

  const [viewerOpen, setViewerOpen] = useState(false);
  const [viewerLoading, setViewerLoading] = useState(false);
  const [viewerBooting, setViewerBooting] = useState(false);
  const [viewerData, setViewerData] = useState<Uint8Array | null>(null);
  const [viewerKey, setViewerKey] = useState(0);
  const [viewerError, setViewerError] = useState<string | null>(null);
  const [viewerLoadingText, setViewerLoadingText] = useState<string>("Чтение файла");
  const [externalDismissed, setExternalDismissed] = useState(false);

  useEffect(() => {
    setExternalDismissed(false);
  }, [ifcData, url]);

  const effectiveIfcData = externalDismissed ? null : ifcData;
  const effectiveUrl = externalDismissed ? undefined : url;

  const hasExternalModel = hasExternalModelSource(effectiveIfcData, effectiveUrl);

  const hasModelData = readonly ? hasExternalModel : Boolean(effectiveFile) || hasExternalModel;

  const resolveViewerBuffer = async (): Promise<Uint8Array | null> => {
    if (!readonly && effectiveFile) {
      return new Uint8Array(await effectiveFile.arrayBuffer());
    }

    return resolveExternalBuffer(effectiveIfcData, effectiveUrl);
  };

  const resolveKnownModelByteSize = async (): Promise<number | null> => {
    if (!readonly && effectiveFile) {
      return effectiveFile.size;
    }

    if (hasIfcBytes(effectiveIfcData)) {
      const data = effectiveIfcData as ArrayBuffer | Uint8Array;

      return data instanceof ArrayBuffer ? data.byteLength : data.byteLength;
    }

    const trimmedUrl = effectiveUrl?.trim();

    if (trimmedUrl) {
      try {
        const headResponse = await fetch(trimmedUrl, { method: "HEAD" });

        if (headResponse.ok) {
          const contentLength = headResponse.headers.get("content-length");

          if (contentLength) {
            const parsed = Number.parseInt(contentLength, 10);

            if (Number.isFinite(parsed) && parsed > 0) {
              return parsed;
            }
          }
        }
      } catch {
        // HEAD может быть недоступен — проверим размер после загрузки буфера.
      }
    }

    return null;
  };

  const rejectFileSizeLimit = (limitMb: TIfcPreviewMaxFileSizeMb) => {
    const message = formatIfcPreviewFileSizeLimitMessage(limitMb);

    setViewerError(message);
    setViewerData(null);
    setViewerOpen(true);
    setViewerLoading(false);
    onError?.(new Error(IFC_FILE_SIZE_EXCEEDED));
  };

  const handlePickFile = (event: React.ChangeEvent<HTMLInputElement>) => {
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

    if (hasExternalModelSource(ifcData, url)) {
      setExternalDismissed(true);
    }

    onClear?.();
  };

  const handleOpenViewer = async () => {
    if (mode !== "view" && mode !== "dev") {
      return;
    }

    setViewerError(null);
    setViewerLoading(true);
    setViewerLoadingText("Чтение файла");
    setViewerOpen(true);

    try {
      if (!disableFileSizeLimit) {
        const knownSize = await resolveKnownModelByteSize();

        if (knownSize !== null && isIfcPreviewFileSizeExceeded(knownSize, maxFileSizeMb, false)) {
          rejectFileSizeLimit(maxFileSizeMb);

          return;
        }
      }

      const buffer = await resolveViewerBuffer();

      if (!buffer) {
        setViewerData(null);
        setViewerOpen(false);

        return;
      }

      if (
        !disableFileSizeLimit &&
        isIfcPreviewFileSizeExceeded(buffer.byteLength, maxFileSizeMb, false)
      ) {
        rejectFileSizeLimit(maxFileSizeMb);

        return;
      }

      setViewerLoadingText("Подготовка просмотра");
      setViewerData(buffer);
      setViewerKey((k) => k + 1);
      setViewerBooting(true);
      onOpenViewer?.();
    } catch (unknownError) {
      const error = unknownError instanceof Error ? unknownError : new Error(String(unknownError));

      onError?.(error);
      setViewerOpen(false);
      setViewerData(null);
    } finally {
      setViewerLoading(false);
    }
  };

  const handleCloseViewer = () => {
    setViewerOpen(false);
    setViewerData(null);
    setViewerBooting(false);
    setViewerError(null);
    onCloseViewer?.();
  };

  const handleViewerError = (error: Error) => {
    setViewerBooting(false);
    setViewerError(error.message);
    onError?.(error);
  };

  const handleViewerModelLoaded = () => {
    setViewerBooting(false);
    onModelLoaded?.();
  };

  const classNameRoot = cx(styles.ifcPreview, propsClassNameRoot);

  const urlFileName = effectiveUrl?.trim()
    ? effectiveUrl.trim().split("/").filter(Boolean).pop()
    : undefined;

  const cardCaption = effectiveFile?.name ?? urlFileName ?? LABELS.emptyTitle;
  return (
    <div className={classNameRoot}>
      <div className={styles.previewInner}>
        <Icon className={styles.previewIcon} name={EIconName.File} />
        <Text classNameRoot={styles.fileHint} type={"p2"}>
          {cardCaption}
        </Text>
      </div>
      <div className={styles.overlay}>
        <div className={styles.overlayActions}>
          {(mode === "view" || mode === "dev") && hasModelData && (
            <Button
              onClick={handleOpenViewer}
              startIconName={EIconName.Eye}
              type={"button"}
              variant={"text"}
              isOnlyIcon={true}
              noPadding={true}
              size={"md"}
            />
          )}

          {!readonly && (
            <>
              <input
                accept={".ifc,.IFC,application/octet-stream"}
                className={styles.hiddenInput}
                id={inputId}
                onChange={handlePickFile}
                ref={fileInputRef}
                type={"file"}
              />
              <Button
                onClick={() => fileInputRef.current?.click()}
                startIconName={EIconName.Upload}
                type={"button"}
                variant={"text"}
                isOnlyIcon={true}
                noPadding={true}
                size={"md"}
              />
            </>
          )}

          {!readonly && hasModelData && (
            <Button
              onClick={handleRemove}
              startIconName={EIconName.Trash}
              type={"button"}
              variant={"text"}
              isOnlyIcon={true}
              noPadding={true}
              size={"md"}
            />
          )}
        </div>
      </div>

      {viewerOpen && (
        <Layer classNameRoot={styles.viewerLayer} zIndex={1600}>
          <div className={styles.viewerPanel}>
            <Button
              classNameRoot={styles.viewerClose}
              isOnlyIcon={true}
              noPadding={true}
              onClick={handleCloseViewer}
              startIconName={EIconName.Close}
              type={"button"}
              variant={"link"}
            />
            <div className={styles.viewerHeader}>
              <Text type={"p1"}>{cardCaption}</Text>
            </div>

            <div className={styles.viewerBody}>
              <div className={styles.viewerStage}>
                {!viewerLoading && viewerData && (
                  <IfcViewerCanvas
                    data={viewerData}
                    key={viewerKey}
                    onError={handleViewerError}
                    onModelLoaded={handleViewerModelLoaded}
                    onPhaseTextChange={setViewerLoadingText}
                    wasmPublicPath={wasmPublicPath}
                  />
                )}

                {(viewerLoading || viewerBooting) && !viewerError && (
                  <div className={styles.viewerSpinner}>
                    <Spinner loadingText={viewerLoadingText} size={"xl"} />
                  </div>
                )}

                {!viewerLoading && !viewerBooting && viewerError && (
                  <div className={styles.viewerErrorBanner}>
                    <Text type={"p2"}>{viewerError}</Text>
                  </div>
                )}
              </div>

              {!viewerLoading && !viewerBooting && children && (
                <div className={styles.viewerChildren}>{children}</div>
              )}
            </div>
          </div>
        </Layer>
      )}
    </div>
  );
};

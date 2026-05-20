import cx from "clsx";
import React from "react";

import { IfcPreviewCard } from "./components/IfcPreviewCard";
import { IfcPreviewViewerLayer } from "./components/IfcPreviewViewerLayer";
import { useIfcPreviewModel } from "./hooks/useIfcPreviewModel";
import { useIfcPreviewViewer } from "./hooks/useIfcPreviewViewer";
import styles from "./IfcPreview.module.scss";
import type { IIfcPreviewProps } from "./types";
import { DEFAULT_IFC_PREVIEW_MAX_FILE_SIZE_MB } from "./utils/fileSizeLimit";

export const IfcPreview: React.FC<IIfcPreviewProps> = (props) => {
  const {
    readonly = false,
    wasmPublicPath = "/components-assets/IfcPreview/web-ifc/",
    file: fileProp,
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

  const {
    cardCaption,
    effectiveUrl,
    effectiveFile,
    fileInputRef,
    inputId,
    handlePickFile,
    handleUploadClick,
    handleRemove,
    hasModelData,
  } = useIfcPreviewModel({
    readonly,
    url,
    fileProp,
    onFileChange,
    onClear,
  });

  const {
    handleViewerModelLoaded,
    viewerUrl,
    handleClose,
    handleOpen,
    handleViewerError,
    isModelReady,
    errorMessage,
    showViewer,
    showError,
    isOpen,
    showPreparingSpinner,
    preparingText,
    isPreparing,
  } = useIfcPreviewViewer({
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
  });

  const showViewerChildren = isModelReady && !isPreparing && !errorMessage && viewerUrl && children;

  return (
    <div className={cx(styles.ifcPreview, propsClassNameRoot)}>
      <IfcPreviewCard
        cardCaption={cardCaption}
        fileInputRef={fileInputRef}
        hasModelData={hasModelData}
        inputId={inputId}
        onOpenViewer={handleOpen}
        onUploadClick={handleUploadClick}
        onPickFile={handlePickFile}
        onRemove={handleRemove}
        readonly={readonly}
      />

      {isOpen && (
        <IfcPreviewViewerLayer
          cardCaption={cardCaption}
          errorMessage={errorMessage}
          onClose={handleClose}
          onViewerError={handleViewerError}
          onViewerModelLoaded={handleViewerModelLoaded}
          preparingText={preparingText}
          showChildren={Boolean(showViewerChildren)}
          showError={showError}
          showPreparingSpinner={showPreparingSpinner}
          showViewer={showViewer}
          viewerUrl={viewerUrl}
          wasmPublicPath={wasmPublicPath}
        >
          {children}
        </IfcPreviewViewerLayer>
      )}
    </div>
  );
};

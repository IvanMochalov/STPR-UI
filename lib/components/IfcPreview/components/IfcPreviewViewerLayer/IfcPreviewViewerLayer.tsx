import React from "react";

import { Button } from "../../../Button";
import { EIconName } from "../../../Icons";
import { IfcViewer } from "../../../IfcViewer";
import { Layer } from "../../../Layer";
import { Spinner } from "../../../Spinner";
import { Text } from "../../../Text";
import styles from "../../IfcPreview.module.scss";

type IfcPreviewViewerLayerProps = {
  cardCaption: string;
  wasmPublicPath: string;
  viewerUrl: string | null;
  preparingText: string;
  errorMessage: string | null;
  showViewer: boolean;
  showPreparingSpinner: boolean;
  showError: boolean;
  showChildren: boolean;
  children?: React.ReactNode;
  onClose: () => void;
  onViewerError: (error: Error) => void;
  onViewerModelLoaded: () => void;
};

export const IfcPreviewViewerLayer: React.FC<IfcPreviewViewerLayerProps> = (props) => {
  const {
    cardCaption,
    wasmPublicPath,
    viewerUrl,
    preparingText,
    errorMessage,
    showViewer,
    showPreparingSpinner,
    showError,
    showChildren,
    children,
    onClose,
    onViewerError,
    onViewerModelLoaded,
  } = props;

  return (
    <Layer classNameRoot={styles.viewerLayer} zIndex={1600}>
      <div className={styles.viewerPanel}>
        <Button
          classNameRoot={styles.viewerClose}
          isOnlyIcon={true}
          noPadding={true}
          onClick={onClose}
          startIconName={EIconName.Close}
          type={"button"}
          variant={"link"}
        />

        <div className={styles.viewerHeader}>
          <Text type={"p1"}>{cardCaption}</Text>
        </div>

        <div className={styles.viewerBody}>
          <div className={styles.viewerStage}>
            {showViewer && viewerUrl && (
              <IfcViewer
                onError={onViewerError}
                onModelLoaded={onViewerModelLoaded}
                url={viewerUrl}
                wasmPublicPath={wasmPublicPath}
              />
            )}

            {showPreparingSpinner && (
              <div className={styles.viewerSpinner}>
                <Spinner loadingText={preparingText} size={"xl"} />
              </div>
            )}

            {showError && errorMessage && (
              <div className={styles.viewerErrorBanner}>
                <Text type={"p2"}>{errorMessage}</Text>
              </div>
            )}
          </div>

          {showChildren && <div className={styles.viewerChildren}>{children}</div>}
        </div>
      </div>
    </Layer>
  );
};

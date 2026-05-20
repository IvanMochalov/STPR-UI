import React from "react";

import { Button } from "../../../Button";
import { EIconName, Icon } from "../../../Icons";
import { Text } from "../../../Text";
import styles from "../../IfcPreview.module.scss";

type IfcPreviewCardProps = {
  cardCaption: string;
  readonly: boolean;
  hasModelData: boolean;
  inputId: string;
  fileInputRef: React.RefObject<HTMLInputElement | null>;
  onOpenViewer: () => void;
  onUploadClick: () => void;
  onPickFile: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onRemove: () => void;
};

export const IfcPreviewCard: React.FC<IfcPreviewCardProps> = (props) => {
  const {
    cardCaption,
    readonly,
    hasModelData,
    inputId,
    fileInputRef,
    onOpenViewer,
    onUploadClick,
    onPickFile,
    onRemove,
  } = props;

  return (
    <>
      <div className={styles.previewInner}>
        <Icon className={styles.previewIcon} name={EIconName.File} />
        <Text classNameRoot={styles.fileHint} type={"p2"}>
          {cardCaption}
        </Text>
      </div>

      <div className={styles.overlay}>
        <div className={styles.overlayActions}>
          {hasModelData && (
            <Button
              onClick={onOpenViewer}
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
                onChange={onPickFile}
                ref={fileInputRef as React.Ref<HTMLInputElement>}
                type={"file"}
              />
              <Button
                onClick={onUploadClick}
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
              onClick={onRemove}
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
    </>
  );
};

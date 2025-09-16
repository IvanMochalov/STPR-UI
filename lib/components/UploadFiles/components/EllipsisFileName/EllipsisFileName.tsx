import React, { useLayoutEffect, useRef, useState } from "react";

import { Text } from "../../../Text";
import { Tooltip } from "../../../Tooltip";
import { getFileExtension } from "../../utils";
import styles from "./EllipsisFileName.module.scss";
import { EllipsisFileNameProps } from "./types";

export const EllipsisFileName: React.FC<EllipsisFileNameProps> = (props) => {
  const { fileName, classNameRoot } = props;

  const textRef = useRef<HTMLDivElement>(null);
  const extensionRef = useRef<HTMLDivElement>(null);
  const [isOverflowed, setIsOverflowed] = useState(false);
  const [extensionWidth, setExtensionWidth] = useState(0);

  useLayoutEffect(() => {
    if (textRef.current) {
      setIsOverflowed(textRef.current.scrollWidth > textRef.current.clientWidth);
    }

    if (extensionRef.current) {
      setExtensionWidth(extensionRef.current.offsetWidth);
    }
  }, [fileName]);

  const fileExtension = getFileExtension(fileName);

  return (
    <div className={styles.ellipsisFileName}>
      <Tooltip
        classNameBaseTooltipRoot={styles.tooltipContent}
        styleTooltip={{ maxWidth: isOverflowed ? `calc(100% - ${extensionWidth}px)` : "100%" }}
        classNameTooltip={classNameRoot}
        isVisibleTooltip={isOverflowed}
        text={fileName}
        trigger={
          <Text type={"p2"} isEllipsis={true} ref={textRef}>
            {fileName}
          </Text>
        }
      />
      {/* Элемент для измерения ширины текста с расширением файла */}
      <div
        ref={extensionRef}
        style={{
          position: "absolute",
          opacity: 0,
          pointerEvents: "none",
          whiteSpace: "nowrap",
        }}
      >
        <Text type={"p2"}>{fileExtension}</Text>
      </div>
      {isOverflowed && <Text type={"p2"}>{fileExtension}</Text>}
    </div>
  );
};

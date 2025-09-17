import React, { useLayoutEffect, useRef, useState } from "react";

import { Text } from "../../../Text";
import { ETooltipPosition, Tooltip } from "../../../Tooltip";
import { getFileExtension } from "../../utils";
import styles from "./EllipsisFileName.module.scss";
import { EllipsisFileNameProps } from "./types";

export const EllipsisFileName: React.FC<EllipsisFileNameProps> = (props) => {
  const { fileName, classNameRoot, type = "p2", classNameEllipsisText } = props;

  const textRef = useRef<HTMLDivElement>(null);
  const extensionRef = useRef<HTMLDivElement>(null);
  const [isOverflowed, setIsOverflowed] = useState(false);
  const [extensionWidth, setExtensionWidth] = useState(0);

  const updateDimensions = () => {
    if (textRef.current) {
      setIsOverflowed(textRef.current.scrollWidth > textRef.current.clientWidth);
    }

    if (extensionRef.current) {
      setExtensionWidth(extensionRef.current.offsetWidth);
    }
  };

  useLayoutEffect(() => {
    // Первоначальное вычисление
    updateDimensions();

    // Добавляем обработчик события resize
    window.addEventListener("resize", updateDimensions);

    // Очистка при размонтировании компонента
    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, [fileName]); // Зависимость от fileName, чтобы пересчитывать при его изменении

  const fileExtension = getFileExtension(fileName);

  return (
    <div className={styles.ellipsisFileName}>
      <Tooltip
        position={ETooltipPosition.TopLeft}
        classNameBaseTooltipRoot={styles.tooltipContent}
        styleTooltip={{ maxWidth: isOverflowed ? `calc(100% - ${extensionWidth}px)` : "100%" }}
        classNameTooltip={classNameRoot}
        isVisibleTooltip={isOverflowed}
        text={fileName}
        trigger={
          <Text type={type} isEllipsis={true} ref={textRef} classNameRoot={classNameEllipsisText}>
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
        <Text type={type} classNameRoot={classNameEllipsisText}>
          {fileExtension}
        </Text>
      </div>
      {isOverflowed && (
        <Text type={type} classNameRoot={classNameEllipsisText}>
          {fileExtension}
        </Text>
      )}
    </div>
  );
};

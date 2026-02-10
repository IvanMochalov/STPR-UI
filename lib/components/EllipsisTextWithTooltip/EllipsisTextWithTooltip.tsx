import cx from "clsx";
import React, { useLayoutEffect, useRef, useState } from "react";

import { Text } from "../Text";
import { Tooltip } from "../Tooltip";
import styles from "./EllipsisTextWithTooltip.module.scss";
import { EllipsisTextWithTooltipProps } from "./types";
import { getEndText } from "./utils";

export const EllipsisTextWithTooltip: React.FC<EllipsisTextWithTooltipProps> = (props) => {
  const {
    text,
    isWithFixedEnd = false,
    isInheritFontStyles = false,
    classNameRoot: propsClassNameRoot,
    classNameTooltipRoot: propsClassNameTooltipRoot,
    classNameBaseTooltipContentRoot,
    classNameBaseTooltipRoot,
    defaultTooltipPosition,
    ...otherTextProps
  } = props;

  const textRef = useRef<HTMLDivElement>(null);
  const extensionRef = useRef<HTMLDivElement>(null);
  const [isOverflowed, setIsOverflowed] = useState(false);
  const endText = getEndText(text);
  const isVisibleFixedEnd = Boolean(text) && endText !== text;

  const updateDimensions = () => {
    if (textRef.current) {
      setIsOverflowed(textRef.current.scrollWidth > textRef.current.clientWidth);
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
  }, [text, endText]);

  const classNameRoot = cx({
    [styles.ellipsisTextWithTooltip]: true,
    [styles.ellipsisTextWithTooltip_inheritFontStyles]: isInheritFontStyles,
    ...(propsClassNameRoot && { [propsClassNameRoot]: true }),
  });

  const classNameTooltip = cx({
    [styles.ellipsisTextWithTooltip__tooltip]: true,
    ...(propsClassNameTooltipRoot && { [propsClassNameTooltipRoot]: true }),
  });

  const renderTriggerContent = () => {
    return (
      <>
        <Text {...otherTextProps} classNameRoot={classNameRoot} isEllipsis={true} ref={textRef}>
          {text}
        </Text>
        {isWithFixedEnd && isOverflowed && isVisibleFixedEnd && (
          <>
            <div
              ref={extensionRef}
              style={{
                position: "absolute",
                opacity: 0,
                pointerEvents: "none",
                whiteSpace: "nowrap",
              }}
            >
              <Text {...otherTextProps} classNameRoot={classNameRoot}>
                {getEndText(text)}
              </Text>
            </div>
            <Text
              style={{ width: "fit-content" }}
              {...otherTextProps}
              classNameRoot={classNameRoot}
            >
              {getEndText(text)}
            </Text>
          </>
        )}
      </>
    );
  };

  return (
    <Tooltip
      hover={true}
      position={defaultTooltipPosition}
      classNameBaseTooltipRoot={classNameBaseTooltipRoot}
      classNameTooltip={classNameTooltip}
      classNameBaseTooltipContentRoot={classNameBaseTooltipContentRoot}
      isVisibleTooltip={isOverflowed}
      text={text}
      trigger={renderTriggerContent()}
    />
  );
};

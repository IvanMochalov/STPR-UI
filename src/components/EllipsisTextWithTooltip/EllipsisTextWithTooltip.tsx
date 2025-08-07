import cx from "clsx";
import React, { useEffect, useRef, useState } from "react";

import { Text } from "../Text";
import { Tooltip } from "../Tooltip";
import styles from "./EllipsisTextWithTooltip.module.scss";
import { EllipsisTextWithTooltipProps } from "./types";

export const EllipsisTextWithTooltip: React.FC<EllipsisTextWithTooltipProps> = (props) => {
  const {
    text,
    classNameRoot: propsClassNameRoot,
    classNameTooltipRoot: propsClassNameTooltipRoot,
    classNameBaseTooltipContentRoot,
    classNameBaseTooltipRoot,
    ...otherTextProps
  } = props;

  const textRef = useRef<HTMLDivElement>(null);
  const [isOverflowed, setIsOverflowed] = useState(false);

  // Проверка обрезан ли текст
  useEffect(() => {
    if (textRef.current) {
      setIsOverflowed(textRef.current.scrollWidth > textRef.current.clientWidth);
    }
  }, [text]);

  const classNameRoot = cx({
    [styles.ellipsisTextWithTooltip]: true,
    ...(propsClassNameRoot && { [propsClassNameRoot]: true }),
  });

  const classNameTooltip = cx({
    [styles.ellipsisTextWithTooltip__tooltip]: true,
    ...(propsClassNameTooltipRoot && { [propsClassNameTooltipRoot]: true }),
  });

  return (
    <Tooltip
      classNameTooltip={classNameTooltip}
      classNameBaseTooltipContentRoot={classNameBaseTooltipContentRoot}
      classNameBaseTooltipRoot={classNameBaseTooltipRoot}
      isVisibleTooltip={isOverflowed}
      text={text}
      trigger={
        <Text {...otherTextProps} classNameRoot={classNameRoot} isEllipsis={true} ref={textRef}>
          {text}
        </Text>
      }
    />
  );
};

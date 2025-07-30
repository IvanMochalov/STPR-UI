import cx from "clsx";
import React, { useCallback, useEffect, useRef, useState } from "react";

import { useClickOutside } from "../../hooks/useClickOutside.ts";
import { BaseTooltip, ETooltipPosition } from "../BaseTooltip";
import { EIconName, Icon } from "../Icons";
import styles from "./Tooltip.module.scss";
import { TooltipProps } from "./types";

export const Tooltip: React.FC<TooltipProps> = (props) => {
  const {
    hover = true,
    toggleClick = false,
    isVisibleTooltip = true,
    trigger,
    triggerAction,
    classNameTooltip,
    classNameTriggerTooltip,
    position: defaultTooltipPosition = ETooltipPosition.BottomLeft,
    text,
    noPadding,
    classNameRoot,
    classNameContentRoot,
  } = props;

  const [isOpen, setOpen] = useState<boolean>(false);
  const ref = useClickOutside<HTMLDivElement>(() => {
    setOpen(false);
  }, isOpen);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();

    if (hover) {
      return;
    }

    setOpen((prevState) => (toggleClick ? !prevState : true));
    triggerAction && triggerAction();
  };

  const textRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [calculatedPosition, setCalculatedPosition] =
    useState<ETooltipPosition>(defaultTooltipPosition);

  const [tooltipHeight, setTooltipHeight] = useState(200);

  // Эффект для измерения высоты тултипа
  useEffect(() => {
    if (tooltipRef.current) {
      const height = tooltipRef.current.clientHeight;
      setTooltipHeight(height);
    }
  }, [tooltipRef]);

  // Расчет оптимальной позиции тултипа с учетом его реальной высоты
  const calculateTooltipPosition = useCallback(() => {
    if (!textRef.current) return defaultTooltipPosition;

    const rect = textRef.current.getBoundingClientRect();
    const spaceDown = window.innerHeight - rect.bottom;
    const spaceUp = rect.top;

    // Используем реальную высоту тултипа + 10px для отступа
    const requiredSpace = tooltipHeight + 10;

    let pos = defaultTooltipPosition;

    if (spaceDown < requiredSpace && spaceUp > requiredSpace) {
      pos = pos.includes("bottom") ? (pos.replace("bottom", "top") as ETooltipPosition) : pos;
    }

    return pos;
  }, [defaultTooltipPosition, tooltipHeight]);

  const handleResizeAndScroll = useCallback(() => {
    setCalculatedPosition(calculateTooltipPosition());
  }, [calculateTooltipPosition]);

  // Обновляем позицию при изменении
  useEffect(() => {
    window.addEventListener("resize", handleResizeAndScroll);
    window.addEventListener("scroll", handleResizeAndScroll, true);
    handleResizeAndScroll(); // Первоначальный расчет

    return () => {
      window.removeEventListener("resize", handleResizeAndScroll);
      window.removeEventListener("scroll", handleResizeAndScroll, true);
    };
  }, [handleResizeAndScroll]);

  const _classNameTooltip = cx({
    [styles.spTooltip]: true,
    [styles.spTooltip_hover]: hover,
    ...(classNameTooltip && { [classNameTooltip]: true }),
  });

  const _classNameRoot = cx({
    [styles.spTooltip__spTooltip]: true,
    [styles.spTooltip__spTooltip_isOpen]: isOpen,
    [styles.spTooltip__spTooltip_visible]: isVisibleTooltip,
    ...(classNameRoot && { [classNameRoot]: true }),
  });

  return (
    <div className={_classNameTooltip} ref={ref} onClick={handleClick}>
      <div ref={textRef} className={classNameTriggerTooltip}>
        {trigger}
      </div>
      <BaseTooltip
        ref={tooltipRef}
        noPadding={noPadding}
        position={calculatedPosition}
        text={text}
        classNameRoot={_classNameRoot}
        classNameContentRoot={classNameContentRoot}
      />
    </div>
  );
};

export const InfoTooltip: React.FC<TooltipProps> = (props) => {
  return <Tooltip {...props} hover={true} trigger={<Icon name={EIconName.Info} />} />;
};

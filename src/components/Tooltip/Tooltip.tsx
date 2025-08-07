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
    isToggleClick = false,
    isVisibleTooltip = true,
    trigger,
    triggerAction,
    actionOnClose,
    classNameTriggerTooltip,
    position: defaultTooltipPosition = ETooltipPosition.BottomLeft,
    text,
    noPadding,
    classNameTooltip: propsClassNameTooltip,
    classNameBaseTooltipRoot: propsClassNameBaseTooltipRoot,
    classNameBaseTooltipContentRoot: propsClassNameBaseTooltipContentRoot,
  } = props;

  const [isOpen, setOpen] = useState<boolean>(false);
  const ref = useClickOutside<HTMLDivElement>(() => {
    actionOnClose && actionOnClose();
    setOpen(false);
  }, isOpen);

  const handleClick = (_event: React.MouseEvent<HTMLDivElement>) => {
    // Закоментил stopPropagation для того, чтобы при открытии закрывались другие открытые тултипы
    // event.stopPropagation();

    if (hover) {
      return;
    }

    if (isOpen) {
      actionOnClose && actionOnClose();
    } else {
      triggerAction && triggerAction();
    }

    setOpen((prevState) => (isToggleClick ? !prevState : true));
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

  const classNameTooltip = cx({
    [styles.spTooltip]: true,
    [styles.spTooltip_hover]: hover,
    ...(propsClassNameTooltip && { [propsClassNameTooltip]: true }),
  });

  const classNameBaseTooltipRoot = cx({
    [styles.spTooltip__spTooltip]: true,
    [styles.spTooltip__spTooltip_isOpen]: isOpen,
    [styles.spTooltip__spTooltip_visible]: isVisibleTooltip,
    ...(propsClassNameBaseTooltipRoot && { [propsClassNameBaseTooltipRoot]: true }),
  });

  return (
    <div className={classNameTooltip} ref={ref} onClick={handleClick}>
      <div ref={textRef} className={classNameTriggerTooltip}>
        {trigger}
      </div>
      <BaseTooltip
        ref={tooltipRef}
        noPadding={noPadding}
        position={calculatedPosition}
        text={text}
        classNameRoot={classNameBaseTooltipRoot}
        classNameContentRoot={propsClassNameBaseTooltipContentRoot}
      />
    </div>
  );
};

export const InfoTooltip: React.FC<TooltipProps> = (props) => {
  return <Tooltip {...props} hover={true} trigger={<Icon name={EIconName.Info} />} />;
};

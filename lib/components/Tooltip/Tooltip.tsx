import cx from "clsx";
import React, { useCallback, useEffect, useRef, useState } from "react";

import { useClickOutside } from "../../../src/hooks/useClickOutside.ts";
import { BaseTooltip } from "../BaseTooltip";
import { EIconName, Icon } from "../Icons";
import { Portal } from "../Portal";
import styles from "./Tooltip.module.scss";
import { ETooltipPosition, TooltipProps } from "./types";

export const Tooltip: React.FC<TooltipProps> = (props) => {
  const {
    hover = true,
    isToggleClick = false,
    isStopPropagationClickOnTrigger = false,
    isVisibleTooltip = true,
    trigger,
    triggerAction,
    actionOnClose,
    classNameTriggerTooltip: propsClassNameTriggerTooltip,
    position: defaultTooltipPosition = ETooltipPosition.BottomLeft,
    text,
    noPadding,
    classNameTooltip: propsClassNameTooltip,
    classNameBaseTooltipRoot: propsClassNameBaseTooltipRoot,
    classNameBaseTooltipContentRoot: propsClassNameBaseTooltipContentRoot,
    styleTooltip,
  } = props;

  const [isOpen, setOpen] = useState<boolean>(false);
  const triggerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  // Обработчик клика вне области
  useClickOutside(
    [triggerRef, tooltipRef],
    () => {
      actionOnClose && actionOnClose();
      setOpen(false);
    },
    isOpen,
  );

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    isStopPropagationClickOnTrigger && event.stopPropagation();

    if (hover) return;

    if (isOpen) {
      actionOnClose && actionOnClose();
    } else {
      triggerAction && triggerAction();
    }

    setOpen((prevState) => (isToggleClick ? !prevState : true));
  };

  const [tooltipStyle, setTooltipStyle] = useState<React.CSSProperties>({
    visibility: "hidden",
    opacity: 0,
    left: "-9999px",
  });

  const [isHovered, setIsHovered] = useState(false);

  // Расчет позиции для портала
  const calculateTooltipPosition = useCallback(() => {
    if (!triggerRef.current || !tooltipRef.current) return;

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const tooltipRect = tooltipRef.current.getBoundingClientRect();

    let top = 0;
    let left = 0;

    // Базовая позиция
    switch (defaultTooltipPosition) {
      case ETooltipPosition.Right:
        top = triggerRect.top + window.scrollY - (tooltipRect.height - triggerRect.height) / 2;
        left = triggerRect.right + window.scrollX;
        break;
      case ETooltipPosition.RightTop:
        top = triggerRect.top + window.scrollY;
        left = triggerRect.right + window.scrollX;
        break;
      case ETooltipPosition.RightBottom:
        top = triggerRect.bottom + window.scrollY - tooltipRect.height;
        left = triggerRect.right + window.scrollX;
        break;
      case ETooltipPosition.Left:
        top = triggerRect.top + window.scrollY - (tooltipRect.height - triggerRect.height) / 2;
        left = triggerRect.left + window.scrollX - tooltipRect.width;
        break;
      case ETooltipPosition.LeftTop:
        top = triggerRect.top + window.scrollY;
        left = triggerRect.left + window.scrollX - tooltipRect.width;
        break;
      case ETooltipPosition.LeftBottom:
        top = triggerRect.bottom + window.scrollY - tooltipRect.height;
        left = triggerRect.left + window.scrollX - tooltipRect.width;
        break;
      case ETooltipPosition.Bottom:
        top = triggerRect.bottom + window.scrollY;
        left = triggerRect.left + window.scrollX - (tooltipRect.width - triggerRect.width) / 2;
        break;
      case ETooltipPosition.BottomLeft:
        top = triggerRect.bottom + window.scrollY;
        left = triggerRect.left + window.scrollX;
        break;
      case ETooltipPosition.BottomRight:
        top = triggerRect.bottom + window.scrollY;
        left = triggerRect.right + window.scrollX - tooltipRect.width;
        break;
      case ETooltipPosition.Top:
        top = triggerRect.top + window.scrollY - tooltipRect.height;
        left = triggerRect.left + window.scrollX - (tooltipRect.width - triggerRect.width) / 2;
        break;
      case ETooltipPosition.TopLeft:
        top = triggerRect.top + window.scrollY - tooltipRect.height;
        left = triggerRect.left + window.scrollX;
        break;
      case ETooltipPosition.TopRight:
        top = triggerRect.top + window.scrollY - tooltipRect.height;
        left = triggerRect.right + window.scrollX - tooltipRect.width;
        break;
      default:
        top = triggerRect.bottom + window.scrollY;
        left = triggerRect.left + window.scrollX;
    }

    // Проверка на выход за границы viewport
    if (
      top + tooltipRect.height > window.innerHeight + window.scrollY &&
      defaultTooltipPosition.includes("bottom")
    ) {
      top = triggerRect.top + window.scrollY - tooltipRect.height;
    } else if (top < window.scrollY && defaultTooltipPosition.includes("top")) {
      top = triggerRect.bottom + window.scrollY;
    }

    // Проверка на выход за границы viewport по горизонтали
    if (
      left + tooltipRect.width > window.innerWidth + window.scrollX &&
      defaultTooltipPosition.includes("left")
    ) {
      left = triggerRect.left + window.scrollX - tooltipRect.width + triggerRect.width;
    } else if (left < window.scrollX && defaultTooltipPosition.includes("right")) {
      left = triggerRect.right + window.scrollX - triggerRect.width;
    }

    setTooltipStyle((prev) => ({
      ...prev,
      top: `${top}px`,
      left: `${left}px`,
      visibility: isOpen || isHovered ? "visible" : "hidden",
      opacity: isOpen || isHovered ? 1 : 0,
    }));
  }, [defaultTooltipPosition, isOpen, isHovered]);

  // Эффекты для обновления позиции
  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  useEffect(() => {
    if (isMounted) {
      calculateTooltipPosition();
    }
  }, [isMounted, calculateTooltipPosition]);

  useEffect(() => {
    if (!isMounted) return;

    const handleResizeAndScroll = () => calculateTooltipPosition();
    window.addEventListener("resize", handleResizeAndScroll);
    window.addEventListener("scroll", handleResizeAndScroll, true);
    return () => {
      window.removeEventListener("resize", handleResizeAndScroll);
      window.removeEventListener("scroll", handleResizeAndScroll, true);
    };
  }, [isMounted, calculateTooltipPosition]);

  const classNameTooltip = cx({
    [styles.spTooltip]: true,
    ...(propsClassNameTooltip && { [propsClassNameTooltip]: true }),
  });

  const classNameBaseTooltipRoot = cx({
    ...(propsClassNameBaseTooltipRoot && { [propsClassNameBaseTooltipRoot]: true }),
  });

  const classNameBaseTooltipContentRoot = cx({
    ...(propsClassNameBaseTooltipContentRoot && { [propsClassNameBaseTooltipContentRoot]: true }),
  });

  const classNameTriggerTooltip = cx({
    [styles.spTooltip__trigger]: true,
    ...(propsClassNameTriggerTooltip && { [propsClassNameTriggerTooltip]: true }),
  });

  const parent = document.body;

  return (
    <div
      className={classNameTooltip}
      onClick={handleClick}
      onMouseEnter={() => hover && setIsHovered(true)}
      onMouseLeave={() => hover && setIsHovered(false)}
      style={styleTooltip}
    >
      <div ref={triggerRef} className={classNameTriggerTooltip}>
        {trigger}
      </div>
      {isVisibleTooltip && (
        <Portal node={parent}>
          <BaseTooltip
            style={tooltipStyle}
            ref={tooltipRef}
            noPadding={noPadding}
            text={text}
            classNameRoot={classNameBaseTooltipRoot}
            classNameContentRoot={classNameBaseTooltipContentRoot}
          />
        </Portal>
      )}
    </div>
  );
};

export const InfoTooltip: React.FC<TooltipProps> = (props) => {
  return <Tooltip {...props} hover={true} trigger={<Icon name={EIconName.Info} />} />;
};

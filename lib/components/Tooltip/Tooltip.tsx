import cx from "clsx";
import React, { useCallback, useEffect, useRef, useState } from "react";

import { useClickOutside } from "../../../src/hooks/useClickOutside.ts";
import { BaseTooltip } from "../BaseTooltip";
import { EIconName, Icon } from "../Icons";
import { Portal } from "../Portal";
import styles from "./Tooltip.module.scss";
import { ETooltipPosition, InfoTooltipProps, TooltipProps } from "./types";

export const Tooltip: React.FC<TooltipProps> = (props) => {
  const {
    hover = true,
    isToggleClick = false,
    isStopPropagationClickOnTrigger = false,
    isVisibleTooltip = true,
    trigger,
    triggerAction,
    actionOnClose,
    classNameTooltip: propsClassNameTooltip,
    position: defaultTooltipPosition = ETooltipPosition.BottomLeft,
    text,
    noPadding,
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

    // Отступ между триггером и тултипом в пикселях
    const triggerTooltipGap = 6;

    // Функция для расчета координат по позиции
    const calculatePosition = (position: ETooltipPosition): { top: number; left: number } => {
      let top = 0;
      let left = 0;

      switch (position) {
        case ETooltipPosition.Right:
          top = triggerRect.top + window.scrollY - (tooltipRect.height - triggerRect.height) / 2;
          left = triggerRect.right + window.scrollX + triggerTooltipGap;
          break;
        case ETooltipPosition.RightTop:
          top = triggerRect.top + window.scrollY;
          left = triggerRect.right + window.scrollX + triggerTooltipGap;
          break;
        case ETooltipPosition.RightBottom:
          top = triggerRect.bottom + window.scrollY - tooltipRect.height;
          left = triggerRect.right + window.scrollX + triggerTooltipGap;
          break;
        case ETooltipPosition.Left:
          top = triggerRect.top + window.scrollY - (tooltipRect.height - triggerRect.height) / 2;
          left = triggerRect.left + window.scrollX - tooltipRect.width - triggerTooltipGap;
          break;
        case ETooltipPosition.LeftTop:
          top = triggerRect.top + window.scrollY;
          left = triggerRect.left + window.scrollX - tooltipRect.width - triggerTooltipGap;
          break;
        case ETooltipPosition.LeftBottom:
          top = triggerRect.bottom + window.scrollY - tooltipRect.height;
          left = triggerRect.left + window.scrollX - tooltipRect.width - triggerTooltipGap;
          break;
        case ETooltipPosition.Bottom:
          top = triggerRect.bottom + window.scrollY + triggerTooltipGap;
          left = triggerRect.left + window.scrollX - (tooltipRect.width - triggerRect.width) / 2;
          break;
        case ETooltipPosition.BottomLeft:
          top = triggerRect.bottom + window.scrollY + triggerTooltipGap;
          left = triggerRect.left + window.scrollX;
          break;
        case ETooltipPosition.BottomRight:
          top = triggerRect.bottom + window.scrollY + triggerTooltipGap;
          left = triggerRect.right + window.scrollX - tooltipRect.width;
          break;
        case ETooltipPosition.Top:
          top = triggerRect.top + window.scrollY - tooltipRect.height - triggerTooltipGap;
          left = triggerRect.left + window.scrollX - (tooltipRect.width - triggerRect.width) / 2;
          break;
        case ETooltipPosition.TopLeft:
          top = triggerRect.top + window.scrollY - tooltipRect.height - triggerTooltipGap;
          left = triggerRect.left + window.scrollX;
          break;
        case ETooltipPosition.TopRight:
          top = triggerRect.top + window.scrollY - tooltipRect.height - triggerTooltipGap;
          left = triggerRect.right + window.scrollX - tooltipRect.width;
          break;
        default:
          top = triggerRect.bottom + window.scrollY + triggerTooltipGap;
          left = triggerRect.left + window.scrollX;
      }

      return { top, left };
    };

    // Функция для проверки, помещается ли тултип в viewport
    const viewportTop = window.scrollY;
    const viewportBottom = window.innerHeight + window.scrollY;
    const viewportLeft = window.scrollX;
    const viewportRight = window.innerWidth + window.scrollX;

    const isPositionValid = (top: number, left: number): boolean => {
      return (
        top >= viewportTop &&
        top + tooltipRect.height <= viewportBottom &&
        left >= viewportLeft &&
        left + tooltipRect.width <= viewportRight
      );
    };

    // Сначала пробуем заданную позицию
    let { top, left } = calculatePosition(defaultTooltipPosition);

    // Если заданная позиция не подходит, ищем подходящую среди всех возможных
    if (!isPositionValid(top, left)) {
      const allPositions = Object.values(ETooltipPosition);

      // Приоритет: сначала пробуем заданную позицию, затем остальные
      const positionsToTry = [
        defaultTooltipPosition,
        ...allPositions.filter((pos) => pos !== defaultTooltipPosition),
      ];

      let foundValidPosition = false;
      for (const position of positionsToTry) {
        const calculated = calculatePosition(position);
        if (isPositionValid(calculated.top, calculated.left)) {
          top = calculated.top;
          left = calculated.left;
          foundValidPosition = true;
          break;
        }
      }

      // Если ни одна позиция не подходит, используем ту, которая максимально помещается
      // (минимальное перекрытие с границами viewport)
      if (!foundValidPosition) {
        let bestPosition = defaultTooltipPosition;
        let minOverlap = Infinity;

        for (const position of allPositions) {
          const calculated = calculatePosition(position);
          const overlap =
            Math.max(0, viewportTop - calculated.top) +
            Math.max(0, calculated.top + tooltipRect.height - viewportBottom) +
            Math.max(0, viewportLeft - calculated.left) +
            Math.max(0, calculated.left + tooltipRect.width - viewportRight);

          if (overlap < minOverlap) {
            minOverlap = overlap;
            bestPosition = position;
          }
        }

        const calculated = calculatePosition(bestPosition);
        top = calculated.top;
        left = calculated.left;
      }
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

  const classNameBaseTooltipRoot = cx({
    ...(propsClassNameBaseTooltipRoot && { [propsClassNameBaseTooltipRoot]: true }),
  });

  const classNameBaseTooltipContentRoot = cx({
    ...(propsClassNameBaseTooltipContentRoot && { [propsClassNameBaseTooltipContentRoot]: true }),
  });

  const classNameTooltip = cx({
    [styles.spTooltip]: true,
    ...(propsClassNameTooltip && { [propsClassNameTooltip]: true }),
  });

  const parent = document.body;

  return (
    <div
      ref={triggerRef}
      className={classNameTooltip}
      onClick={handleClick}
      onMouseEnter={() => hover && setIsHovered(true)}
      onMouseLeave={() => hover && setIsHovered(false)}
      style={styleTooltip}
    >
      {trigger}
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

export const InfoTooltip: React.FC<InfoTooltipProps> = (props) => {
  const propsClassNameInfoTooltip = props.classNameTooltip;
  const classNameInfoTooltip = cx({
    [styles.spInfoTooltip]: true,
    ...(propsClassNameInfoTooltip && { [propsClassNameInfoTooltip]: true }),
  });

  return (
    <Tooltip
      {...props}
      classNameTooltip={classNameInfoTooltip}
      trigger={<Icon name={EIconName.Info} />}
    />
  );
};

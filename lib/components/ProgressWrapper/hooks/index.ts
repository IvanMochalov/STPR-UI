import { useEffect, useRef, useState } from "react";

import { DEFAULT_DURATION } from "../constants";
import { TUseAnimatedValueProps } from "../types";

export const useAnimatedValue = (props: TUseAnimatedValueProps) => {
  const { targetValue, duration = DEFAULT_DURATION, doneValue, onSuccessLoaded } = props;
  const [currentValue, setCurrentValue] = useState(targetValue);
  const animationRef = useRef<number>();
  const startValueRef = useRef(0);
  const startTimeRef = useRef<number>();
  const targetValueRef = useRef(targetValue);
  const [isLoading, setIsLoading] = useState(false);
  const timeoutRef = useRef<number>();

  useEffect(() => {
    targetValueRef.current = targetValue;

    // Если значение не изменилось, ничего не делаем
    if (targetValue === startValueRef.current) return;

    // Отменяем предыдущую анимацию, если она есть
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }

    // Если targetValue равно doneValue, сразу устанавливаем конечное значение
    if (targetValue === doneValue && !isLoading) {
      setCurrentValue(doneValue);
      startValueRef.current = doneValue;
      return;
    }

    // Устанавливаем начальные значения для анимации
    startValueRef.current = currentValue;
    startTimeRef.current = performance.now();

    const animate = (currentTime: number) => {
      if (!startTimeRef.current) return;

      // Вычисляем прошедшее время
      const elapsedTime = currentTime - startTimeRef.current;
      const progress = Math.min(elapsedTime / duration, 1);

      // Вычисляем текущее значение с easing-функцией
      const easedProgress =
        progress < 0.5
          ? 4 * progress * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      const newValue =
        startValueRef.current + (targetValueRef.current - startValueRef.current) * easedProgress;

      // Обеспечиваем, чтобы значение не было отрицательным и было целым числом
      const clampedValue = Math.max(0, Math.floor(newValue));
      setCurrentValue(clampedValue);

      // Продолжаем анимацию, если не достигли конца
      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    // Запускаем анимацию
    animationRef.current = requestAnimationFrame(animate);

    // Очистка при размонтировании
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [targetValue, duration, doneValue, isLoading]);

  useEffect(() => {
    // Если значение value достигло или изначально равно doneValue, устанавливаем таймер для скрытия
    if (currentValue === doneValue) {
      timeoutRef.current = window.setTimeout(() => {
        if (isLoading) {
          onSuccessLoaded && onSuccessLoaded();
        }
        setIsLoading(false);
      }, 500);
    } else {
      // Если значение изменилось с doneValue, отменяем таймер и показываем компонент
      setIsLoading(true);
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    }

    // Очистка таймера при размонтировании компонента
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, [currentValue, doneValue, isLoading, onSuccessLoaded]);

  return {
    animatedValue: currentValue,
    isLoading,
  };
};

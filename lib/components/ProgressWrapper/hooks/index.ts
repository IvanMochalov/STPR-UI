import { useEffect, useRef, useState } from "react";

import { DEFAULT_DURATION } from "../constants";
import { TUseAnimatedValueProps } from "../types";

const COMPLETION_DELAY_MS = 500;

function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

export const useAnimatedValue = (props: TUseAnimatedValueProps) => {
  const { targetValue, duration = DEFAULT_DURATION, doneValue, onSuccessLoaded } = props;

  const [currentValue, setCurrentValue] = useState(targetValue);
  const [isLoading, setIsLoading] = useState(targetValue !== doneValue);

  const animationRef = useRef<number>();
  const startValueRef = useRef(targetValue);
  const startTimeRef = useRef<number>(0);
  const targetValueRef = useRef(targetValue);
  const currentValueRef = useRef(currentValue);
  const completionTimeoutRef = useRef<ReturnType<typeof setTimeout>>();
  const completionFiredRef = useRef(false);

  currentValueRef.current = currentValue;

  // Анимация: при изменении targetValue плавно переходим от текущего отображаемого значения к новому
  useEffect(() => {
    targetValueRef.current = targetValue;

    if (targetValue === startValueRef.current) {
      return;
    }

    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = undefined;
    }

    // Уже на финале и снова пришло doneValue — только синхронизируем, без анимации
    if (targetValue === doneValue && startValueRef.current === doneValue) {
      setCurrentValue(doneValue);
      return;
    }

    startValueRef.current = currentValueRef.current;
    startTimeRef.current = performance.now();

    const animate = (now: number) => {
      const startTime = startTimeRef.current;
      if (startTime === undefined) return;

      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeInOutCubic(progress);

      const start = startValueRef.current;
      const target = targetValueRef.current;
      const value = Math.max(0, Math.floor(start + (target - start) * eased));
      setCurrentValue(value);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        startValueRef.current = target;
        animationRef.current = undefined;
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = undefined;
      }
    };
  }, [targetValue, duration, doneValue]);

  // Состояние «завершено»: 500 мс показываем результат, затем скрываем бейдж и вызываем onSuccessLoaded один раз
  useEffect(() => {
    if (currentValue === doneValue) {
      if (completionFiredRef.current) return;

      completionTimeoutRef.current = setTimeout(() => {
        completionTimeoutRef.current = undefined;
        completionFiredRef.current = true;
        onSuccessLoaded?.();
        setIsLoading(false);
      }, COMPLETION_DELAY_MS);

      return () => {
        if (completionTimeoutRef.current) {
          clearTimeout(completionTimeoutRef.current);
          completionTimeoutRef.current = undefined;
        }
      };
    }

    completionFiredRef.current = false;
    if (completionTimeoutRef.current) {
      clearTimeout(completionTimeoutRef.current);
      completionTimeoutRef.current = undefined;
    }
    setIsLoading(true);
    return undefined;
  }, [currentValue, doneValue, onSuccessLoaded]);

  return {
    animatedValue: currentValue,
    isLoading,
  };
};

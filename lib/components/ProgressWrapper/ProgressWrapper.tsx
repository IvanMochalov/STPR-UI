import cx from "clsx";
import React, { useEffect, useRef, useState } from "react";

import { Text } from "../Text";
import { useAnimatedValue } from "./hooks";
import styles from "./ProgressWrapper.module.scss";
import { ProgressWrapperProps } from "./types";

export const ProgressWrapper: React.FC<ProgressWrapperProps> = (props) => {
  const {
    value,
    classNameRoot: propsClassNameRoot,
    classNameProgressBadgeRoot: propsClassNameProgressBadgeRoot,
    duration = 2000,
    children,
    doneValue = 100,
    animationVariant = "backgroundProgress",
  } = props;

  // Изначально % загрузки скрыты
  const [isLoading, setIsLoading] = useState(false);
  const timeoutRef = useRef<number>();

  const animatedValue = useAnimatedValue({
    targetValue: value,
    duration,
    doneValue,
  });

  useEffect(() => {
    // Если значение value достигло или изначально равно doneValue, устанавливаем таймер для скрытия
    if (animatedValue === doneValue) {
      timeoutRef.current = window.setTimeout(() => {
        setIsLoading(false);
      }, 500); // 500 мс после достижения doneValue
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
  }, [animatedValue, doneValue]);

  const classNameRoot = cx({
    [styles.progressWrapper]: true,
    [styles.progressWrapper_loading]: isLoading,
    ...(propsClassNameRoot && { [propsClassNameRoot]: true }),
  });
  const classNameProgressBadgeRoot = cx({
    [styles.progressWrapper__progressBadge]: true,
    [styles.progressWrapper__progressBadge_loading]: isLoading,
    ...(propsClassNameProgressBadgeRoot && { [propsClassNameProgressBadgeRoot]: true }),
  });
  const classNameChildrenWrapperRoot = cx({
    [styles.progressWrapper__childrenWrapper]: true,
    [styles[`progressWrapper__childrenWrapper--animated-${animationVariant}`]]: animationVariant,
    [styles.progressWrapper__childrenWrapper_loading]: isLoading,
  });

  // Создаем стиль для заполнения фона
  const backgroundProgressStyle = {
    "--progress": `${(animatedValue / doneValue) * 100}%`,
  } as React.CSSProperties;

  return (
    <div className={classNameRoot}>
      <div
        className={classNameChildrenWrapperRoot}
        style={animationVariant === "backgroundProgress" ? backgroundProgressStyle : undefined}
      >
        {children}
      </div>
      {isLoading && <Text classNameRoot={classNameProgressBadgeRoot}>{animatedValue}%</Text>}
    </div>
  );
};

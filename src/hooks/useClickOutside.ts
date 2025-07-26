import React, {useCallback, useEffect, useRef} from "react";

/**
 * Хук для реакции на клик за пределами DOM-эллемента
 *
 * @example
 * const ref = useClickOutside(useCallback(() => doSomething(a, b)), [a, b]);
 * <div ref={ref}>DOM-эллемент, клик за пределами которого вызовет обработчик</div>
 *
 * @param {(e) => void} callback мемоизированный обработчик вызываемый при клике за пределами DOM-эллемента
 *
 * @param {boolean} isOpen состояние списка опшионов
 * @return {Object} ref объект со свойством содержащим ссылку на DOM-эллемент
 */

export function useClickOutside<T extends Element>(
  callback: (e: unknown) => void,
  isOpen?: boolean,
): React.LegacyRef<T> {
  const ref = useRef<T | null>(null);

  const handleClick = useCallback(
    (e: DocumentEventMap["click"]): void => {
      if (ref.current && !ref.current?.contains(e.target as Node)) {
        callback(e);
      }
    },
    [callback],
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", handleClick);
    }
  }, [handleClick, isOpen]);

  useEffect(() => {
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [handleClick]);

  return ref;
}

import { RefObject, useEffect } from "react";

/**
 * Хук для реакции на клик за пределами DOM-элементов
 *
 * @example
 * const triggerRef = useRef<HTMLDivElement>(null);
 * const tooltipRef = useRef<HTMLDivElement>(null);
 * useClickOutside([triggerRef, tooltipRef], () => doSomething(), isOpen);
 *
 * @param {Array<RefObject<T>>} refs - массив ref объектов элементов, клик вне которых вызовет обработчик
 * @param {(e) => void} callback - обработчик, вызываемый при клике за пределами элементов
 * @param {boolean} isActive - флаг активности хука
 */
export function useClickOutside<T extends HTMLElement>(
  refs: Array<RefObject<T>>,
  callback: (e: MouseEvent) => void,
  isActive: boolean = true,
) {
  useEffect(() => {
    if (!isActive) return;

    const handleClick = (e: MouseEvent) => {
      const isOutside = refs.every((ref) => ref.current && !ref.current.contains(e.target as Node));

      if (isOutside) {
        callback(e);
      }
    };

    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, [refs, callback, isActive]);
}

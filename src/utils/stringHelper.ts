/**
 * Проверяет, является ли входное значение null, undefined, пустой строкой или строкой,
 * состоящей только из пробельных символов.
 *
 * @param input - Входное значение для проверки
 * @returns Возвращает `true`, если значение:
 *    - undefined
 *    - null
 *    - пустая строка ("")
 *    - строка только из пробелов
 *    В остальных случаях возвращает `false`.
 */
export const isNullOrWhitespace = (input: unknown): boolean => {
  if (input === undefined || input === null || input === "") {
    return true;
  }

  // Проверяем, что значение можно привести к строке
  if (typeof input !== "string" && typeof input.toString !== "function") {
    return false;
  }

  return input.toString().replace(/\s/g, "").length < 1;
};

/**
 * Обрабатывает строковое значение формы:
 * - Если значение `null`, `undefined`, пустое или состоит только из пробелов — возвращает `undefined`
 * - В остальных случаях возвращает строку, очищенную от пробелов по краям (trim)
 *
 * @param str - Входное значение для обработки
 * @returns
 *    - `undefined`, если строка пустая или состоит только из пробелов
 *    - Обрезанную строку (trim) в остальных случаях
 */
export const handleFormString = (str: unknown): string | undefined => {
  if (isNullOrWhitespace(str)) {
    return undefined;
  }

  // Явное приведение к строке с проверкой
  const stringValue = typeof str === "string" ? str : str?.toString();
  return stringValue?.trim();
};

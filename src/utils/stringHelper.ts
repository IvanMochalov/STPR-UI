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

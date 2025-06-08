/**
 * Calculates the factorial of a number recursively.
 * @param {number} number - The number to calculate factorial for
 * @returns {number} The factorial of the number
 */
export function factorial(number) {
  if (number === 1) return 1;
  return number * factorial(number - 1);
}

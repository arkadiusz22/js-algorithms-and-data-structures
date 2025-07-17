/**
 * @param {number} a
 * @param {number} b
 * @returns {number} greatest common divisor - the largest integer that evenly divides given 2 numbers
 */
export function findGCD(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);
  if (a === 0 && b === 0) {
    throw new Error("GCD is undefined for (0, 0)");
  }

  return b === 0 ? a : findGCD(b, a % b);
}

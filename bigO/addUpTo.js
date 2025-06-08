/**
 * Calculates the sum of all integers from 1 to n using a loop.
 * Time Complexity: O(n)
 * @param {number} n - The upper limit of the sum
 * @returns {number} The sum of integers from 1 to n
 */
export function addUpToV1(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

/**
 * Calculates the sum of all integers from 1 to n using the mathematical formula.
 * Time Complexity: O(1)
 * @param {number} n - The upper limit of the sum
 * @returns {number} The sum of integers from 1 to n
 */
export function addUpToV2(n) {
  return (n * (n + 1)) / 2;
}

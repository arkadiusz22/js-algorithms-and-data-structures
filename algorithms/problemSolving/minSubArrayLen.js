/**
 * Finds the minimal length of a contiguous subarray of which the sum is greater than or equal to the target value.
 * Time Complexity - O(n)
 * Space Complexity - O(1)
 * @param {Array<number>} array - The input array of positive integers
 * @param {number} target - The target sum value
 * @returns {number} The length of the shortest subarray which has sum greater than or equal to target, or 0 if none exists
 */
export function minSubArrayLen(array, target) {
  if (!array.length) return 0;

  let start = 0;
  let end = 0;
  let windowTotal = array[start];
  let minWindowWidth = Infinity;
  while (end < array.length) {
    if (windowTotal >= target) {
      const currentWindowWidth = end - start + 1;
      minWindowWidth = Math.min(minWindowWidth, currentWindowWidth);

      windowTotal -= array[start];
      start += 1;
    } else {
      end += 1;
      windowTotal += array[end];
    }
  }

  return minWindowWidth === Infinity ? 0 : minWindowWidth;
}

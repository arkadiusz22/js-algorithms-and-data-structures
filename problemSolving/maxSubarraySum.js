// Implement a function called maxSubarraySum, which accepts an array of integers and a number called n.
// The function should calculate the maximum sum of n consecutive elements in the array.

// Examples:
// maxSubarraySum([1,2,5,2,8,1,5],2) // 10
// maxSubarraySum([1,2,5,2,8,1,5],4) // 17
// maxSubarraySum([4,2,1,6],1) // 6
// maxSubarraySum([4,2,1,6,2],4) // 13
// maxSubarraySum([],4) // null

/**
 * @param {Array<number>} array - The input array of integers.
 * @param {number} n - The number of consecutive elements to sum.
 */
export function maxSubarraySum(array, n) {
  // Edge case: If n is greater than the array length, return null.
  if (n > array.length) return null;

  // Initialize the maximum sum of the first n elements.
  let maxSum = 0;
  for (let i = 0; i < n; i++) {
    maxSum += array[i];
  }

  // Initialize the current window sum to the initial maximum sum.
  let currentWindowSum = maxSum;

  // Slide the window across the array, updating the current window sum and maximum sum.
  for (let i = n; i < array.length; i++) {
    currentWindowSum = currentWindowSum - array[i - n] + array[i];
    maxSum = Math.max(maxSum, currentWindowSum);
  }

  return maxSum;
}

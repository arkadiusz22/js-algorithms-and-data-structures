// Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.
// This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function.
// If there isn't one, return 0 instead.
// Time Complexity - O(n)
// Space Complexity - O(1)

// Examples:
// minSubArrayLen([2, 3, 1, 2, 4, 3], 7); // 2 -> because [4,3] is the smallest subarray
// minSubArrayLen([2, 1, 6, 5, 4], 9); // 2 -> because [5,4] is the smallest subarray
// minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52); // 1 -> because [62] is greater than 52
// minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39); // 3
// minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55); // 5
// minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11); // 2
// minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95); // 0

/**
 * @param {Array<Number>} array
 * @param {Number} expectedScore
 * @returns length of the shortest subarray which has sum greater than or equal to expectedScore
 */
function minSubArrayLen(array, expectedScore) {
  if (!array.length) return 0;

  let start = 0;
  let end = 0;
  let windowTotal = array[start];
  let minWindowWidth = Infinity;

  while (end < array.length) {
    if (windowTotal >= expectedScore) {
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

// Test cases:
console.log(
  // 2 -> because [4,3] is the smallest subarray
  minSubArrayLen([2, 3, 1, 2, 4, 3], 7) === 2 ? "Passed" : "Failed"
);
console.log(
  // 2 -> because [5,4] is the smallest subarray
  minSubArrayLen([2, 1, 6, 5, 4], 9) === 2 ? "Passed" : "Failed"
);
console.log(
  // 1 -> because [62] is greater than 52
  minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52) === 1
    ? "Passed"
    : "Failed"
);
console.log(
  minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39) === 3 ? "Passed" : "Failed"
);
console.log(
  minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55) === 5 ? "Passed" : "Failed"
);
console.log(
  minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) === 2 ? "Passed" : "Failed"
);
console.log(
  minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95) === 0 ? "Passed" : "Failed"
);

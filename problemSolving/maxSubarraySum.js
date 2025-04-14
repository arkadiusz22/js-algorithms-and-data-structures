// Implement a function called maxSubarraySum,
// which accepts a array of integers, and  a number called n.
// The function should calculate the maximum sum on n consecutive elements in the array.

// Examples:
// maxSubarraySum([1,2,5,2,8,1,5],2) // 10
// maxSubarraySum([1,2,5,2,8,1,5],4) // 17
// maxSubarraySum([4,2,1,6],1) // 6
// maxSubarraySum([4,2,1,6,2],4) // 13
// maxSubarraySum([],4) // null

/**
 * @param {Array<Number>} array
 * @param {Number} n - window length
 *  */
function maxSubarraySum(array, n) {
  if (n > array.length) return null;

  let windowMax = -Infinity;
  let windowStartIndex = 0;

  while (windowStartIndex <= array.length - n) {
    let newWindowSum = 0;

    // can be improved by taking the previous max, subtracting the element under index (left window edge) and adding the element under index + n (right window edge)
    for (let index = windowStartIndex; index < windowStartIndex + n; index++) {
      const element = array[index];
      newWindowSum += element;
    }

    if (newWindowSum > windowMax) {
      windowMax = newWindowSum;
    }

    windowStartIndex += 1;
  }

  return windowMax;
}

// Test cases
console.log(
  maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2) === 10 ? "Passed" : "Failed"
);
console.log(
  maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4) === 17 ? "Passed" : "Failed"
);
console.log(maxSubarraySum([4, 2, 1, 6], 1) === 6 ? "Passed" : "Failed");
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4) === 13 ? "Passed" : "Failed");
console.log(maxSubarraySum([], 4) === null ? "Passed" : "Failed");

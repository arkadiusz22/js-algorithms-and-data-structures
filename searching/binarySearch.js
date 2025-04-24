// Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists.
// Otherwise, return -1.

/**
 * @param {Array<Number>} array
 * @param {Number} value
 */
function binarySearch(array, value) {
  if (!array.length) return -1;

  // Use BigInt if array length migth exceed 2**53
  let leftIndex = 0;
  let rightIndex = array.length - 1;

  while (leftIndex <= rightIndex) {
    let middleElementIndex = Math.floor((rightIndex - leftIndex) / 2) + leftIndex;
    let middleElementValue = array[middleElementIndex];

    if (middleElementValue > value) {
      rightIndex = middleElementIndex - 1;
    } else if (middleElementValue < value) {
      leftIndex = middleElementIndex + 1;
    } else {
      return middleElementIndex;
    }
  }

  return -1;
}

// Test cases
console.log(binarySearch([1, 2, 3, 4, 5], 3) === 2 ? "✓ Passed" : "X Failed");
console.log(binarySearch([], 3) === -1 ? "✓ Passed" : "X Failed");
console.log(binarySearch([1, 2, 3, 4, 5], 5) === 4 ? "✓ Passed" : "X Failed");
console.log(binarySearch([1, 2, 3, 4, 5], 6) === -1 ? "✓ Passed" : "X Failed");
console.log(binarySearch([1, 2, 3, 4, 5], 2) === 1 ? "✓ Passed" : "X Failed");
console.log(
  binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 10) === 2
    ? "✓ Passed"
    : "X Failed"
);
console.log(
  binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 95) === 16
    ? "✓ Passed"
    : "X Failed"
);
console.log(
  binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 100) === -1
    ? "✓ Passed"
    : "X Failed"
);

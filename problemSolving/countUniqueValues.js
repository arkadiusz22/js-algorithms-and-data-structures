// Implement a function called countUniqueValues,
// which accepts a sorted array, and counts the unique values in the array.
// There can be negative numbers in the array, but it will always be sorted.

// Examples:
// countUniqueValues([1,1,1,1,1,2]) // 2
// countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
// countUniqueValues([]) // 0
// countUniqueValues([-2,-1,-1,0,1]) // 4

// Time Complexity - O(n)
// Space Complexity - O(n)
// Can be done with O(1) space complexity and O(n) time complexity

/**
 * @param {Array<Number>} array
 */
function countUniqueValues(array) {
  if (!array.length) return 0;
  if (array.length === 1) return 1;

  // intialize result as let with value of 1
  let uniqeNumbersCounter = 1;

  // initialize leftIndex at 0 element
  let leftIndex = 0;
  // initialize rightIndex at 1 element
  let rigthIndex = leftIndex + 1;

  // if right index is higher or equal than array.length, end the loop
  while (rigthIndex < array.length) {
    // check if values under both indexes are the same

    const leftValue = array[leftIndex];
    const rightValue = array[rigthIndex];

    if (leftValue === rightValue) {
      // if yes, do not increase the uniqeNumbersCounter and increase right index by 1
      rigthIndex += 1;
    } else {
      // if no, increase the uniqeNumbersCounter, assign value of right index to left index and increase right index by 1
      uniqeNumbersCounter += 1;
      leftIndex = rigthIndex;
      rigthIndex += 1;
    }
  }

  return uniqeNumbersCounter;
}

// Test cases
console.log(countUniqueValues([1, 1, 1, 1, 1, 2]) === 2 ? "✓ Passed" : "X Failed");
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 1]) === 7 ? "✓ Passed" : "X Failed");
console.log(countUniqueValues([1]) === 1 ? "✓ Passed" : "X Failed");
console.log(countUniqueValues([]) === 0 ? "✓ Passed" : "X Failed");
console.log(countUniqueValues([-2, -1, -1, 0, 1]) === 4 ? "✓ Passed" : "X Failed");

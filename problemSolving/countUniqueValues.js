// Implement a function called countUniqueValues,
// which accepts a sorted array, and counts the unique values in the array.
// There can be negative numbers in the array, but it will always be sorted.

// Examples:
// countUniqueValues([1,1,1,1,1,2]) // 2
// countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
// countUniqueValues([]) // 0
// countUniqueValues([-2,-1,-1,0,1]) // 4

// Time Complexity: O(n)
// Space Complexity: O(1)

/**
 * Counts the unique values in a sorted array using the two-pointer technique.
 * @param {Array<number>} array - The sorted array to count unique values in
 * @returns {number} The number of unique values in the array
 */
export function countUniqueValues(array) {
  if (!array.length) return 0;
  if (array.length === 1) return 1;

  // Initialize result counter with value of 1
  let uniqueNumbersCounter = 1;

  // Initialize leftIndex at 0 element
  let leftIndex = 0;
  // Initialize rightIndex at 1 element
  let rightIndex = leftIndex + 1;

  // If right index is higher or equal than array.length, end the loop
  while (rightIndex < array.length) {
    // Check if values under both indexes are the same
    const leftValue = array[leftIndex];
    const rightValue = array[rightIndex];

    if (leftValue === rightValue) {
      // If yes, do not increase the uniqueNumbersCounter and increase right index by 1
      rightIndex += 1;
    } else {
      // If no, increase the uniqueNumbersCounter, assign value of right index to left index and increase right index by 1
      uniqueNumbersCounter += 1;
      leftIndex = rightIndex;
      rightIndex += 1;
    }
  }

  return uniqueNumbersCounter;
}

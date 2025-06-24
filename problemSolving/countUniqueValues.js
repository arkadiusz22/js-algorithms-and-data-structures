/**
 * Counts the unique values in a sorted array using the two-pointer technique.
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {Array<number>} array - The sorted array to count unique values in
 * @returns {number} The number of unique values in the array
 */
export function countUniqueValues(array) {
  if (!array.length) return 0;
  if (array.length === 1) return 1;

  // Initialize result counter with value of 1
  let uniqueNumbersCounter = 1;

  let leftIndex = 0;
  let rightIndex = leftIndex + 1;

  while (rightIndex < array.length) {
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

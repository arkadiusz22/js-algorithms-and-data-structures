// Given a sorted array and a number, write a function called sortedFrequency that counts the occurrences of the number in the array
// return -1 if the element does not occur in the array
// Time Complexity: O(log n)

// Examples:
// sortedFrequency([1,1,2,2,2,2,3],2) // 4
// sortedFrequency([1,1,2,2,2,2,3],3) // 1
// sortedFrequency([1,1,2,2,2,2,3],1) // 2
// sortedFrequency([1,1,2,2,2,2,3],4) // -1

/**
 * Counts the occurrences of a number in a sorted array using binary search.
 * @param {Array<number>} collection - The sorted array to search in
 * @param {number} targetValue - The value to count occurrences of
 * @returns {number} The count of occurrences, or -1 if not found
 */
export function sortedFrequency(collection, targetValue) {
  // Use binary search to find first element equal to targetValue
  let left = 0;
  let right = collection.length;

  while (left < right) {
    const middle = Math.floor((left + right) / 2);

    if (collection[middle] < targetValue) {
      left = middle + 1;
    } else {
      right = middle;
    }
  }
  const leftmostTargetElementIndex = left < collection.length && collection[left] === targetValue ? left : -1;

  if (leftmostTargetElementIndex === -1) return -1;

  // Use binary search to find last element equal to targetValue
  left = 0;
  right = collection.length;
  while (left < right) {
    const middle = Math.floor((left + right) / 2);

    if (collection[middle] <= targetValue) {
      left = middle + 1;
    } else {
      right = middle;
    }
  }
  const rightmostTargetElementIndex = right - 1 >= 0 && collection[right - 1] === targetValue ? right - 1 : -1;

  if (rightmostTargetElementIndex === -1) return -1;

  // Evaluate the distance between both elements
  return rightmostTargetElementIndex - leftmostTargetElementIndex + 1;
}

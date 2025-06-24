/**
 * Performs binary search on a sorted array and returns the index of the target value.
 * @param {Array<number>} array - The sorted array to search in
 * @param {number} value - The value to search for
 * @returns {number} The index of the value if found, -1 otherwise
 */
export function binarySearch(array, value) {
  if (!array.length) return -1;

  // Use BigInt if array length might exceed 2**53
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

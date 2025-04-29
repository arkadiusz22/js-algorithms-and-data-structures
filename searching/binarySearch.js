// Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists.
// Otherwise, return -1.

/**
 * @param {Array<Number>} array
 * @param {Number} value
 */
export function binarySearch(array, value) {
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

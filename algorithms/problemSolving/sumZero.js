/**
 * Finds the first pair of integers in a sorted array where the sum is 0.
 * @param {Array<number>} array - The sorted array of integers
 * @returns {Array<number>|undefined} Array with 2 elements that sum to 0, or undefined if none exist
 */
export function sumZero(array) {
  let leftIndex = 0;
  let rightIndex = array.length - 1;

  while (leftIndex < rightIndex) {
    const lowNumber = array[leftIndex];
    const highNumber = array[rightIndex];
    const sum = lowNumber + highNumber;

    if (sum === 0) return [lowNumber, highNumber];

    if (sum > 0) {
      rightIndex -= 1;
    } else {
      leftIndex += 1;
    }
  }

  return undefined;
}

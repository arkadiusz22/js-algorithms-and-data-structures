/**
 * @param {Array<number>} array The array to be sorted.
 * @param {number} startIndex The start of the range in array from which the pivot should be selected.
 * @param {number} endIndex The end of the range in array from which the pivot should be selected.
 * @returns {number} The index of the pivot element after partitioning.
 */
export function pivotHelper(array = [], startIndex = 0, endIndex = array.length - 1) {
  const pivotInitialIndex = startIndex;
  const pivot = array[pivotInitialIndex];

  // pivotIndex tracks the position where the pivot should eventually be placed.
  let pivotIndex = startIndex;

  for (let index = startIndex + 1; index <= endIndex; index++) {
    if (pivot > array[index]) {
      pivotIndex += 1;
      // Swap the current element (smaller than pivot) with the element at pivotIndex.
      [array[index], array[pivotIndex]] = [array[pivotIndex], array[index]];
    }
  }

  // Swap the pivot element (originally at pivotInitialIndex) with the element at its correct sorted position (pivotIndex).
  [array[pivotInitialIndex], array[pivotIndex]] = [array[pivotIndex], pivot];

  return pivotIndex;
}

/**
 * @param {Array<number>} array The array to be sorted.
 * @param {number} startIndex The start of the range in array to be sorted.
 * @param {number} endIndex The end of the range in array to be sorted.
 * @returns {Array<number>} The sorted array.
 */
export function quickSort(array = [], startIndex = 0, endIndex = array.length - 1) {
  // If the array has 0 or 1 elements, it's already sorted.
  if (array.length <= 1) return array;

  // If the startIndex is less than endIndex, the segment is not sorted.
  if (endIndex > startIndex) {
    const pivotIndex = pivotHelper(array, startIndex, endIndex);

    // Recursively sort the left part of the array.
    quickSort(array, startIndex, pivotIndex - 1);

    // Recursively sort the right part of the array.
    quickSort(array, pivotIndex + 1, endIndex);
  }

  return array;
}

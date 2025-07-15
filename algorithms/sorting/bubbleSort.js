/**
 * Sorts an array using the bubble sort algorithm.
 * @param {Array<number>} array - The array to be sorted
 * @returns {Array<number>} The sorted array
 */
export function bubbleSort(array) {
  if (array.length <= 1) return array;

  for (let i = array.length - 1; i > 0; i--) {
    let swapped = false;

    for (let j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        swapped = true;
      }
    }

    // If no swaps were made, the array is already sorted
    if (!swapped) break;
  }

  return array;
}

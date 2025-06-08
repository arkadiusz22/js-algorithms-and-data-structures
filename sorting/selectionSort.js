/**
 * Sorts an array using the selection sort algorithm.
 * @param {Array<number>} array - The array to be sorted
 * @returns {Array<number>} The sorted array
 */
export function selectionSort(array) {
  if (array.length <= 1) return array;

  for (let i = 0; i < array.length; i++) {
    let minIndex = i;

    for (let j = i + 1; j < array.length; j++) {
      if (array[minIndex] > array[j]) minIndex = j;
    }

    if (minIndex !== i) [array[i], array[minIndex]] = [array[minIndex], array[i]];
  }

  return array;
}

/**
 * Sorts an array using the insertion sort algorithm.
 * @param {Array<number>} array - The array to be sorted
 * @returns {Array<number>} The sorted array
 */
export function insertionSort(array) {
  if (array.length <= 1) return array;

  let index = 1;

  while (index < array.length) {
    const elementToInsert = array[index];

    let j = index - 1;

    while (j >= 0 && array[j] > elementToInsert) {
      // Shift elements to the right to make room for the elementToInsert
      array[j + 1] = array[j];
      j--;
    }

    // Insert the element at the correct position
    array[j + 1] = elementToInsert;

    index++;
  }

  return array;
}

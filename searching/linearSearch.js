/**
 * Performs linear search on an array and returns the index of the target value.
 * @param {Array<number>} array - The array to search in
 * @param {number} value - The value to search for
 * @returns {number} The index of the value if found, -1 otherwise
 */
export function linearSearch(array, value) {
  for (let index = 0; index < array.length; index++) {
    if (array[index] === value) return index;
  }
  return -1;
}

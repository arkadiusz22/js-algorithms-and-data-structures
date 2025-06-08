// Write a function called linearSearch which accepts an array and a value, and returns the index at which the value exists.
// If the value does not exist in the array, return -1.
// Don't use indexOf to implement this function!

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

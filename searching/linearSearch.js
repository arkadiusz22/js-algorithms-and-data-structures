// Write a function called linearSearch which accepts an array and a value, and returns the index at which the value exists.
// If the value does not exist in the array, return -1.
// Don't use indexOf to implement this function!

/**
 * @param {Array<number>} array
 * @param {number} value
 */
export function linearSearch(array, value) {
  for (let index = 0; index < array.length; index++) {
    if (array[index] === value) return index;
  }
  return -1;
}

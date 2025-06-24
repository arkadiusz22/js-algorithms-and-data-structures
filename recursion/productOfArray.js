/**
 * Calculates the product of all numbers in an array recursively.
 * @param {Array<number>} array - The array of numbers to multiply
 * @returns {number} The product of all numbers in the array
 */
export function productOfArray(array) {
  if (!array.length) return 0;

  // Base case
  if (array.length === 1) return array[0];

  // Recursive case
  return array[0] * productOfArray(array.slice(1));
}

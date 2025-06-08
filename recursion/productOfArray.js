// Write a function called productOfArray which takes in an array of numbers and returns the product of all the numbers.

// Examples:
// productOfArray([1, 2, 3]) // 6
// productOfArray([4, 3, 2, 1]) // 24
// productOfArray([1, 2, 3, 10]) // 60
// productOfArray([2, 5, 6, 20]) // 1200

/**
 * Calculates the product of all numbers in an array recursively.
 * @param {Array<number>} array - The array of numbers to multiply
 * @returns {number} The product of all numbers in the array
 */
export function productOfArray(array) {
  // Edge case: return 0 for empty array
  if (!array.length) return 0;

  // Base case
  if (array.length === 1) return array[0];

  // Recursive case
  return array[0] * productOfArray(array.slice(1));
}

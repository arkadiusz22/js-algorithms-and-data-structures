// Write a function called productOfArray which takes in an array of numbers and returns the product of all the numbers.

// Examples:
// productOfArray([1, 2, 3]) // 6
// productOfArray([4, 3, 2, 1]) // 24
// productOfArray([1, 2, 3, 10]) // 60
// productOfArray([2, 5, 6, 20]) // 1200

/**
 * @param {Array<number>} array
 */
function productOfArray(array) {
  // Edge case
  if (!array.length) return 0;

  // Base case
  if (array.length === 1) return array[0];

  // Recursive case
  return array[0] * productOfArray(array.slice(1));
}

// Test cases
console.log(productOfArray([1, 2, 3]) === 6 ? "✓ Passed" : "X Failed");
console.log(productOfArray([4, 3, 2, 1]) === 24 ? "✓ Passed" : "X Failed");
console.log(productOfArray([1, 2, 3, 10]) === 60 ? "✓ Passed" : "X Failed");
console.log(productOfArray([2, 5, 6, 20]) === 1200 ? "✓ Passed" : "X Failed");

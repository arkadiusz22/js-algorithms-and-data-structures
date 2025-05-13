// Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.

// Examples:
// flatten([1, 2, 3, [4, 5]]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1], [2], [3]]) // [1, 2, 3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1, 2, 3]

/**
 * @param {Array<number>} array
 */
export function flatten(array) {
  // Edge case: return an empty array if input is empty
  if (array.length === 0) return [];

  let result = [];

  for (let index = 0; index < array.length; index++) {
    const element = array[index];

    if (Array.isArray(element)) {
      // Recursive case: flatten the subarray and concatenate the result and subResult
      const subResult = flatten(element);
      result = result.concat(subResult);
    } else {
      // Base case: push the element directly to the result array
      result.push(element);
    }
  }

  return result;
}

/**
 * Recursively flattens an array of arrays and returns a new array with all values flattened.
 * @param {Array<number>} array - The array to flatten
 * @returns {Array<number>} A new flattened array with all values
 */
export function flatten(array) {
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

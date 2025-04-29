// Write a function called 'same', which accepts two arrays.
// It should return true if every value in the first array has its corresponding value squared in the second array.
// The frequency of values must be the same.

// Examples:
// [1,2,3], [4,1,9] - true
// [1,2,3], [1,9] - false
// [1,2,1], [4,4,1] - false (wrong frequencies)

/**
 * @param {Array<Number>} array1
 * @param {Array<Number>} array2
 */
export function same(array1, array2) {
  // If arrays have different lengths, return false.
  if (array1.length !== array2.length) return false;

  // Convert the second array into an object where the keys are the elements
  // and the values are their frequencies in the array.
  const array2AsObject = {};
  for (const element of array2) {
    array2AsObject[element] = ++array2AsObject[element] || 1;
  }

  // Convert the first array into a similar object, squaring the values while evaluating.
  // Check if a key exists within the object; if yes, increase its value by one, otherwise initialize it with 1.
  const array1AsObject = {};
  for (const element of array1) {
    const key = element ** 2;
    array1AsObject[key] = ++array1AsObject[key] || 1;
  }

  // Compare both objects.
  // Use the keys of the first object to iterate and check against the second object.
  for (const key of Object.keys(array1AsObject)) {
    // If a key is not defined in the second object, return false.
    if (!(key in array2AsObject)) return false;

    // Compare the values; if they are not the same, return false.
    if (array1AsObject[key] !== array2AsObject[key]) return false;
  }

  // If all checks pass, return true.
  return true;
}

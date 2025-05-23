// Write a recursive function called nestedEvenSum.
// Return the sum of all even numbers in an object which may contain nested objects.

/**
 * @param {Object} object
 */
export function nestedEvenSum(object) {
  let accumulator = 0;

  for (const key in object) {
    const value = object[key];

    if (typeof value === "number" && value % 2 === 0) {
      accumulator += value;
    } else if (typeof value === "object" && value !== null) {
      accumulator += nestedEvenSum(value);
    }
  }

  return accumulator;
}

/**
 * Simple hashing function which assigns numeric hash for given input string within given max range.
 * @param {string} str - The input string to hash
 * @param {number} max - The maximum value of assigned hash - the length of the hash table array
 * @returns {number} The assigned numeric hash
 */
export function hashString(str, max) {
  const BASE_PRIME = 31;
  const MAX_CHARS = 100; // Limit processing for performance
  let total = 0;

  for (let index = 0; index < Math.min(str.length, MAX_CHARS); index++) {
    let charCode = str.charCodeAt(index);
    total = (total * BASE_PRIME + charCode) % max;
  }
  return total;
}

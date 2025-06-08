/**
 * Prints all pairs of numbers from 0 to n-1.
 * Time Complexity: O(n²)
 * @param {number} n - The upper limit for pairing
 */
export function printAllPairs(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}

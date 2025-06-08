/**
 * Counts up from 0 to n-1, then counts down from n-1 to 0.
 * Time Complexity: O(n)
 * @param {number} n - The upper limit for counting
 */
export function countUpAndDown(n) {
  console.log("going up");
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
  console.log("at the top - going down...");
  for (let j = n - 1; j >= 0; j--) {
    console.log(j);
  }
  console.log("down");
}

/**
 * Time complexity of this recursive function is O(2^n)
 * @param {number} n
 * @returns {number}
 */
export function fibonacci(n) {
  _validateFibonacciIndex(n);

  return n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);
}

const initialMemo = [undefined, 1, 1];

/**
 * Time complexity of this recursive function is O(n)
 * @param {number} n
 * @param {Array<number>} memo
 * @returns {number}
 */
export function memoizedFibonacci(n, memo = initialMemo) {
  _validateFibonacciIndex(n);

  if (memo[n] !== undefined) return memo[n];

  const result = n <= 2 ? 1 : memoizedFibonacci(n - 1, memo) + memoizedFibonacci(n - 2, memo);

  memo[n] = result;

  return result;
}

/**
 * Time complexity of this iterative function is O(n)
 * @param {number} n
 * @returns {number}
 */
export function tabulatedFibonacci(n) {
  _validateFibonacciIndex(n);

  if (n <= 2) return 1;

  const store = [0, 1, 1];

  for (let index = 3; index <= n; index++) {
    store[index] = store[index - 1] + store[index - 2];
  }

  return store[n];
}

/**
 * @param {number} n
 */
function _validateFibonacciIndex(n) {
  if (typeof n !== "number" || !Number.isInteger(n) || n <= 0) {
    throw new Error(`'${n}' is not a valid Fibonacci sequence index. It must be a positive integer.`);
  }
}

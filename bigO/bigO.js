// How to evaluate functions:
// 1. Faster - Time complexity
// 2. Less memory intensive - Space complexity
// 3. More readable

function addUpTo_v1(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

function addUpTo_v2(n) {
  return (n * (n + 1)) / 2;
}

function measurePerformance(callback) {
  const t1 = performance.now();
  callback();
  const t2 = performance.now();
  console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds`);
}

measurePerformance(() => addUpTo_v1(10000));
measurePerformance(() => addUpTo_v2(10000));

// Time is not a reliable measurement of function performance.
// It cannot be precisely measured.
// Most importantly, code performance should be known beforehand, or at least estimated, without the need for its execution and the dependency on changing hardware.

// 1. Count simple operations

// addUpTo_v1 - number of operations depends on n.
// - There are n additions and n assignments while incrementing the total.
// - There are n additions and n assignments while incrementing the loop counter.
// - There is 1 assignment while initializing the total.
// - There is 1 assignment while initializing the loop counter.
// - There are n comparisons between n and the loop counter.

// General rule is to simplify the total number of operations. For example, 50n + 2 can be simplified to just proportional to n.
// Number of operations is roughly proportional to n.

// addUpTo_v2 - always has only 3 operations.

// Big O notation - Formalized description of the relationship between the function execution time (runtime) as its input grows.

// addUpTo_v1 - bounded by multiples of n -> O(10n) -> O(n)
// addUpTo_v2 - constant number of operations -> O(1)

function countUpAndDown(n) {
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

measurePerformance(() => countUpAndDown(3));
measurePerformance(() => countUpAndDown(10));

// countUpAndDown - also simplified to O(n)

function printAllPairs(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}

measurePerformance(() => printAllPairs(3));
measurePerformance(() => printAllPairs(10));

// printAllPairs - O(n) operations nested within O(n) which leads to n squared complexity - O(n^2)

// Rules for simplifying Big O expressions:
// 1. Constants don't matter - O(500) -> O(1), O(2n) -> O(n), O(13n^2) -> O(n^2)
// 2. Smaller terms don't matter - O(n + 10) -> O(n), O(100n + 50) -> O(n), O(n^2 + 5n + 8) -> O(n^2)

// 1. Arithmetic operations are constant.
// 2. Variable assignments are constant.
// 3. Accessing elements in an array by index is constant, same for accessing fields of an object by key.
// 4. In a loop, the complexity is the length of the loop times the complexity of operations inside the loop.

// Classification:
// 1. O(1) - constant - good
// 2. O(log n) - logarithmic - good
// 3. O(n) - linear - average
// 4. O(n log n) - linearithmic - bad
// 5. O(n^2) - quadratic - bad
// 6. O(2^n) - exponential - very bad
// 7. O(n!) - factorial - very bad

// Space Complexity - called `Auxiliary space complexity` - space required by the algorithm itself, not including space for input data
// 1. Booleans, numbers, undefined, null - constant space
// 2. Strings require O(n) space - where n is the length of the string.
// 3. Reference types are generally O(n) - array length, number of keys for objects

// Space complexity of addUpTo_v1 - 2 declarations of numbers -> O(2) -> O(1)

function double(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(2 * array[i]);
  }
  return newArray;
}

// Space complexity of double - need to create an array of n elements -> O(n)

// Logarithms
// Inverse of exponentiation
// log2(value) = exponent -> 2^exponent = value
// The rule in computer science is to omit the base 2. log -> log with base 2

// Easy way to find the approximate value of a logarithm is to divide the value by the base, repeatedly, until the result is below one.
// The result of the calculation will be the number of executed divisions x. The result will be between x-1 and x.

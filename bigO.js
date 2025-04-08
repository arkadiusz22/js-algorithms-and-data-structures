// How to evaluate functions: 1. faster, 2. less memory intensive, 3. more readable

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

measurePerformance(() => addUpTo_v1(100000));
measurePerformance(() => addUpTo_v2(100000));

// Time is not a reliable measurement of function performance.
// It cannot be precisely measured.
// Most importantly, code performance should be known beforehand, or at least estimated, without the need for execution.

// 1. Count simple operations

// addUpTo_v1 - number of operations depends on n.
// - There are n additions and n assignments while incrementing the total.
// - There are n additions and n assignments while incrementing the loop counter.
// - There is 1 assignment while initializing the total.
// - There is 1 assignment while initializing the loop counter.
// - There are n comparisons between n and the loop counter.

// General rule - simplify the total number of operations. For example, 50n + 2 can be simplified to just proportional to n.
// Number of operations is roughly proportional to n.

// addUpTo_v2 - always has only 3 operations.

// Write a function called 'sumZero', which accepts a sorted array of integers.
// The function should find the first pair of integers where the sum is 0.
// Return an array with 2 elements that includes both values.
// Return undefined if such a pair does not exist.

// Examples:
// [-3,-2,-1,0,1,2,3] - [-3,3]
// [-2,0,1,3] - undefined
// [1,2,3] - undefined

/**
 * @param {Array<Number>} array
 */
function sumZero(array) {
  let leftIndex = 0;
  let rightIndex = array.length - 1;

  while (leftIndex < rightIndex) {
    const lowNumber = array[leftIndex];
    const highNumber = array[rightIndex];

    const sum = lowNumber + highNumber;

    if (sum === 0) return [lowNumber, highNumber];

    if (sum > 0) {
      rightIndex -= 1;
    } else {
      leftIndex += 1;
    }
  }

  return undefined;
}

// Test cases
console.log(
  sumZero([-3, -2, -1, 0, 1, 2, 3])[0] === -3 &&
    sumZero([-3, -2, -1, 0, 1, 2, 3])[1] === 3
    ? "Passed"
    : "Failed"
);
console.log(sumZero([-2, 0, 1, 3]) === undefined ? "Passed" : "Failed");
console.log(sumZero([1, 2, 3]) === undefined ? "Passed" : "Failed");

// Given a sorted array and a number, write a function called sortedFrequency that counts the occurrences of the number in the array
// return -1 if the element does not occure in the array
// Time Complexity - O(log n)

// Examples:
// sortedFrequency([1,1,2,2,2,2,3],2) // 4
// sortedFrequency([1,1,2,2,2,2,3],3) // 1
// sortedFrequency([1,1,2,2,2,2,3],1) // 2
// sortedFrequency([1,1,2,2,2,2,3],4) // -1

/**
 * @param {Array<Number>} collection
 * @param {Number} targetValue
 */
function sortedFrequency(collection, targetValue) {
  // use binary search to find first element equal to targetValue
  let left = 0;
  let right = collection.length;

  while (left < right) {
    const middle = Math.floor((left + right) / 2);

    if (collection[middle] < targetValue) {
      left = middle + 1;
    } else {
      right = middle;
    }
  }
  const leftmostTargetElementIndex =
    left < collection.length && collection[left] === targetValue ? left : -1;

  if (leftmostTargetElementIndex === -1) return -1;

  // use binary search to find last element equal to targetValue
  left = 0;
  right = collection.length;
  while (left < right) {
    const middle = Math.floor((left + right) / 2);

    if (collection[middle] <= targetValue) {
      left = middle + 1;
    } else {
      right = middle;
    }
  }
  const rightmostTargetElementIndex =
    right - 1 >= 0 && collection[right - 1] === targetValue ? right - 1 : -1;

  if (rightmostTargetElementIndex === -1) return -1;

  // evaluate the distance between both elements
  return rightmostTargetElementIndex - leftmostTargetElementIndex + 1;
}

console.log(
  sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2) === 4 ? "✓ Passed" : "X Failed"
);
console.log(
  sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3) === 1 ? "✓ Passed" : "X Failed"
);
console.log(
  sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1) === 2 ? "✓ Passed" : "X Failed"
);
console.log(
  sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4) === -1 ? "✓ Passed" : "X Failed"
);

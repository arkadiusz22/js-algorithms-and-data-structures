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
 * @param {Number} searchedValue
 */
function sortedFrequency(collection, searchedValue) {
  if (!collection.length) return -1;

  if (collection.length === 1) {
    return collection[0] === searchedValue ? 1 : -1;
  }

  const middleIndex = Math.floor(collection.length / 2);

  const leftCollection = collection.slice(0, middleIndex);
  const rightCollection = collection.slice(middleIndex);

  const leftSolution = sortedFrequency(leftCollection, searchedValue);
  const rightSolution = sortedFrequency(rightCollection, searchedValue);

  if (leftSolution === -1 && rightSolution === -1) return -1;

  let count = 0;

  if (leftSolution !== -1) count += leftSolution;
  if (rightSolution !== -1) count += rightSolution;

  return count;
}

console.log(
  sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2) === 4 ? "Passed" : "Failed"
);
console.log(
  sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3) === 1 ? "Passed" : "Failed"
);
console.log(
  sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1) === 2 ? "Passed" : "Failed"
);
console.log(
  sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4) === -1 ? "Passed" : "Failed"
);

/**
 * @param {Array<number>} array - The array to be sorted.
 */
function insertionSort(array) {
  if (array.length <= 1) return array;

  let index = 1;

  while (index < array.length) {
    const elementToInsert = array[index];

    let j = index - 1;

    while (j >= 0 && array[j] > elementToInsert) {
      // Shift elements to the right to make room for the elementToInsert
      array[j + 1] = array[j];
      j--;
    }

    // Insert the element at the correct position
    array[j + 1] = elementToInsert;

    index++;
  }

  return array;
}

console.log(JSON.stringify(insertionSort([1])) === JSON.stringify([1]) ? "✓ Passed" : "X Failed");
console.log(JSON.stringify(insertionSort([4, 2, 1])) === JSON.stringify([1, 2, 4]) ? "✓ Passed" : "X Failed");
console.log(
  JSON.stringify(insertionSort([4, 2, 1, 13, 6, 2])) === JSON.stringify([1, 2, 2, 4, 6, 13]) ? "✓ Passed" : "X Failed"
);
console.log(
  JSON.stringify(insertionSort([10, -1, 2, 5, 0, 3, 3])) === JSON.stringify([-1, 0, 2, 3, 3, 5, 10])
    ? "✓ Passed"
    : "X Failed"
);
console.log(
  JSON.stringify(insertionSort([5, 4, 3, 2, 1])) === JSON.stringify([1, 2, 3, 4, 5]) ? "✓ Passed" : "X Failed"
);
console.log(
  JSON.stringify(insertionSort([100, 50, 200, 150, 0, -50])) === JSON.stringify([-50, 0, 50, 100, 150, 200])
    ? "✓ Passed"
    : "X Failed"
);

/**
 * @param {Array<number>} array - The array to be sorted.
 */
function bubbleSort(array) {
  if (array.length <= 1) return array;

  for (let i = array.length - 1; i > 0; i--) {
    let swapped = false;

    for (let j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        swapped = true;
      }
    }

    // If no swaps were made, the array is already sorted
    if (!swapped) break;
  }

  return array;
}

console.log(JSON.stringify(bubbleSort([1])) === JSON.stringify([1]) ? "✓ Passed" : "X Failed");
console.log(
  JSON.stringify(bubbleSort([4, 2, 1, 13, 6, 2])) === JSON.stringify([1, 2, 2, 4, 6, 13]) ? "✓ Passed" : "X Failed"
);
console.log(
  JSON.stringify(bubbleSort([10, -1, 2, 5, 0, 3, 3])) === JSON.stringify([-1, 0, 2, 3, 3, 5, 10])
    ? "✓ Passed"
    : "X Failed"
);
console.log(JSON.stringify(bubbleSort([5, 4, 3, 2, 1])) === JSON.stringify([1, 2, 3, 4, 5]) ? "✓ Passed" : "X Failed");
console.log(
  JSON.stringify(bubbleSort([100, 50, 200, 150, 0, -50])) === JSON.stringify([-50, 0, 50, 100, 150, 200])
    ? "✓ Passed"
    : "X Failed"
);

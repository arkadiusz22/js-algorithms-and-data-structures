/**
 * @param {Array<number>} array - The array to be sorted.
 */
function selectionSort(array) {
  if (array.length <= 1) return array;

  for (let i = 0; i < array.length; i++) {
    let minIndex = i;

    for (let j = i + 1; j < array.length; j++) {
      if (array[minIndex] > array[j]) minIndex = j;
    }

    if (minIndex !== i) [array[i], array[minIndex]] = [array[minIndex], array[i]];
  }

  return array;
}

console.log(
  JSON.stringify(selectionSort([4, 2, 1, 13, 6, 2])) === JSON.stringify([1, 2, 2, 4, 6, 13]) ? "✓ Passed" : "X Failed"
);
console.log(
  JSON.stringify(selectionSort([10, -1, 2, 5, 0, 3, 3])) === JSON.stringify([-1, 0, 2, 3, 3, 5, 10])
    ? "✓ Passed"
    : "X Failed"
);
console.log(
  JSON.stringify(selectionSort([5, 4, 3, 2, 1])) === JSON.stringify([1, 2, 3, 4, 5]) ? "✓ Passed" : "X Failed"
);
console.log(
  JSON.stringify(selectionSort([100, 50, 200, 150, 0, -50])) === JSON.stringify([-50, 0, 50, 100, 150, 200])
    ? "✓ Passed"
    : "X Failed"
);

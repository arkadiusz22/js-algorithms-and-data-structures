/**
 * @param {Array<number>} array1
 * @param {Array<number>} array2
 */

export function mergeArrays(array1, array2) {
  if (!array1.length) return array2;
  if (!array2.length) return array1;

  const result = [];

  let i = 0,
    j = 0;

  while (i < array1.length && j < array2.length) {
    if (array1[i] <= array2[j]) {
      result.push(array1[i]);
      i++;
    } else {
      result.push(array2[j]);
      j++;
    }
  }

  if (i < array1.length) {
    result.push(...array1.slice(i));
  }

  if (j < array2.length) {
    result.push(...array2.slice(j));
  }

  return result;
}

/**
 * @param {Array<number>} array
 */
export function mergeSort(array) {
  if (!array.length) return [];

  if (array.length <= 1) return array;

  const mid = Math.floor(array.length / 2);

  const left = mergeSort(array.slice(0, mid));
  const right = mergeSort(array.slice(mid));

  return mergeArrays(left, right);
}

/**
 * @param {number} number
 * @param {number} place
 * @returns {number} The digit in number at given place value
 *
 * Examples:
 * 12345,0 -> 5
 * 12345,1 -> 4
 * 12345,2 -> 3
 * 12345,3 -> 2
 * 12345,4 -> 1
 * 12345,5 -> 0
 */
function getDigit(number, place) {
  return Math.floor(Math.abs(number) / Math.pow(10, place)) % 10;
}

/**
 * @param {number} number
 * @returns {number} The number of digits in given number
 *
 * Examples:
 * 12345 -> 5
 * 25 -> 2
 * 314 -> 3
 */
function digitCount(number) {
  if (number === 0) return 1;
  return Math.floor(Math.log10(Math.abs(number))) + 1;
}

/**
 * @param {Array<number>} array The array to be evaluated.
 * @returns {number} The number of digits in the element with the biggest number of digits in the array
 *
 * Examples:
 * [1234, 56, 7] -> 4
 * [1, 1, 11111, 1] -> 5
 * [12, 34, 56, 78] -> 2
 */
function mostDigits(array) {
  let maxDigits = 0;
  for (const number of array) {
    maxDigits = Math.max(digitCount(number), maxDigits);
  }
  return maxDigits;
}

/**
 * Radix sort implementation. Does not support negative numbers.
 * @param {Array<number>} array The array to be sorted.
 * @returns {Array<number>} The sorted array.
 */
export function radixSort(array) {
  const maxDigitCount = mostDigits(array);

  for (let k = 0; k < maxDigitCount; k++) {
    const digitBuckets = Array.from({ length: 10 }, () => []);

    for (const number of array) {
      const digit = getDigit(number, k);
      digitBuckets[digit].push(number);
    }

    // alternatively: [].concat(...digitBuckets)
    array = digitBuckets.flat();
  }

  return array;
}

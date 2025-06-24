/**
 * Gets the digit in a number at a given place value.
 * @param {number} number - The number to extract digit from
 * @param {number} place - The place value (0 = ones, 1 = tens, etc.)
 * @returns {number} The digit in number at given place value
 */
export function getDigit(number, place) {
  return Math.floor(Math.abs(number) / Math.pow(10, place)) % 10;
}

/**
 * Counts the number of digits in a given number.
 * @param {number} number - The number to count digits in
 * @returns {number} The number of digits in given number
 */
export function digitCount(number) {
  if (number === 0) return 1;
  return Math.floor(Math.log10(Math.abs(number))) + 1;
}

/**
 * Finds the maximum number of digits among all numbers in the array.
 * @param {Array<number>} array - The array to be evaluated
 * @returns {number} The number of digits in the element with the biggest number of digits in the array
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
 * @param {Array<number>} array - The array to be sorted
 * @returns {Array<number>} The sorted array
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

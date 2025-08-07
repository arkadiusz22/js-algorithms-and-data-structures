/**
 * @param {Array<number>} numbers
 * @param {number} target
 * @returns {Array<numbers> | null} Indicies of the 2 numbers in the numbers array which sum up to the target. Null if not find
 */
export function twoSum(numbers, target) {
  const numberToIndex = new Map();

  for (const [index, number] of numbers.entries()) {
    const complement = target - number;

    if (numberToIndex.has(complement)) {
      return [numberToIndex.get(complement), index];
    }

    numberToIndex.set(number, index);
  }

  return null;
}

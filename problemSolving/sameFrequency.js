// Write a function called sameFrequency.
// Given two positive integers, find out if the two numbers have the same frequency of digits.
//
// The solution MUST have the following complexities: Time: O(N)
//
// Examples:
// sameFrequency(182,281) - true
// sameFrequency(34,14) - false
// sameFrequency(3589578, 5879385) - true
// sameFrequency(22,222) - false

/**
 * Determines if two positive integers have the same frequency of digits.
 * @param {number} number1 - The first number
 * @param {number} number2 - The second number
 * @returns {boolean} True if both numbers have the same frequency of digits, false otherwise
 */
export function sameFrequency(number1, number2) {
  // Convert numbers to strings for easy digit manipulation
  const number1str = number1.toString();
  const number2str = number2.toString();

  // If strings have different lengths, they cannot have same frequency
  if (number1str.length !== number2str.length) return false;

  // Create frequency counters for both numbers
  const frequencyCounter1 = {};
  const frequencyCounter2 = {};

  // Count frequency of each digit in first number
  for (let digit of number1str) {
    frequencyCounter1[digit] = ++frequencyCounter1[digit] || 1;
  }

  // Count frequency of each digit in second number
  for (let digit of number2str) {
    frequencyCounter2[digit] = ++frequencyCounter2[digit] || 1;
  }

  // Compare frequencies
  for (let key in frequencyCounter1) {
    if (!(key in frequencyCounter2)) return false;
    if (frequencyCounter1[key] !== frequencyCounter2[key]) return false;
  }

  return true;
}

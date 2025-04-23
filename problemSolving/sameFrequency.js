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
 * @param {Number} number1
 * @param {Number} number2
 */
function sameFrequency(number1, number2) {
  // Convert numbers to strings for easy digit manipulation.
  const number1str = number1.toString();
  const number2str = number2.toString();

  // If the lengths of the strings are different, return false immediately.
  if (number1str.length !== number2str.length) return false;

  // Create frequency counters for both numbers.
  const digits1 = {};
  const digits2 = {};

  // Populate the frequency counter for the first number.
  for (const digit of number1str) {
    digits1[digit] = ++digits1[digit] || 1;
  }

  // Populate the frequency counter for the second number.
  for (const digit of number2str) {
    digits2[digit] = ++digits2[digit] || 1;
  }

  // Compare the frequency counters.
  for (const key in digits1) {
    if (digits1[key] !== digits2[key]) return false;
  }

  return true;
}

// Test cases
console.log(sameFrequency(182, 281) === true ? "✓ Passed" : "X Failed");
console.log(sameFrequency(34, 14) === false ? "✓ Passed" : "X Failed");
console.log(sameFrequency(3589578, 5879385) === true ? "✓ Passed" : "X Failed");
console.log(sameFrequency(22, 222) === false ? "✓ Passed" : "X Failed");
console.log(sameFrequency(22, 225) === false ? "✓ Passed" : "X Failed");

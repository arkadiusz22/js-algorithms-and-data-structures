/**
 * Checks if the given string is a palindrome.
 * Ignores all non-alphanumeric characters.
 * @param {string} text
 * @returns {boolean}
 */
export function isPalindrome(text) {
  if (typeof text !== "string") return false;
  if (text.length === 0) return true;

  const lowerCaseText = text.toLowerCase();

  let left = 0;
  let right = lowerCaseText.length - 1;

  while (left <= right) {
    const leftLetter = lowerCaseText[left];
    const rightLetter = lowerCaseText[right];

    if (!isAlphanumeric(leftLetter)) {
      left += 1;
      continue;
    }

    if (!isAlphanumeric(rightLetter)) {
      right -= 1;
      continue;
    }

    if (leftLetter === rightLetter) {
      left += 1;
      right -= 1;
    } else {
      return false;
    }
  }

  return true;
}

/**
 * Checks if the given string is a alphanumeric.
 * @param {string} char
 * @returns {boolean}
 */
const isAlphanumeric = (char) => {
  return /[a-z0-9]/i.test(char);
};

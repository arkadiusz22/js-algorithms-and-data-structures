/**
 * Determines if the second string is an anagram of the first.
 * @param {string} string1 - The first string
 * @param {string} string2 - The second string
 * @returns {boolean} True if the strings are anagrams, false otherwise
 */
export function validAnagram(string1, string2) {
  if (string1.length !== string2.length) return false;

  const lettersString1 = {};
  const lettersString2 = {};

  for (const letter of string1) {
    lettersString1[letter] = ++lettersString1[letter] || 1;
  }

  for (const letter of string2) {
    lettersString2[letter] = ++lettersString2[letter] || 1;
  }

  for (const letter of Object.keys(lettersString1)) {
    if (!(letter in lettersString2)) return false;
    if (lettersString1[letter] !== lettersString2[letter]) return false;
  }

  return true;
}

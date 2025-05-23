// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.
// You may assume the string contains only lowercase alphabets.

// Examples
// validAnagram("", ""); // true
// validAnagram("aaz", "zza"); // false
// validAnagram("anagram", "nagaram"); // true
// validAnagram("rat", "car"); // false) // false
// validAnagram("awesome", "awesom"); // false
// validAnagram("amanaplanacanalpanama", "acanalmanplanpamana"); // false
// validAnagram("qwerty", "qeywrt"); // true
// validAnagram("texttwisttime", "timetwisttext"); // true

/**
 * @param {string} string1
 * @param {string} string2
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

// Test cases

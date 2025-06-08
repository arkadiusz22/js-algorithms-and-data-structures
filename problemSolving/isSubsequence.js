// Write a function called isSubsequence which takes in two strings
// and checks whether the characters in the first string form a subsequence of the characters in the second string.
// In other words, the function should check whether the characters in the first
// string appear somewhere in the second string, without their order changing.

// Examples:
// isSubsequence('hello', 'hello world'); // true
// isSubsequence('sing', 'sting'); // true
// isSubsequence('abc', 'abracadabra'); // true
// isSubsequence('abc', 'acb'); // false (order matters)

// Time Complexity: O(N + M)
// Space Complexity: O(1)

/**
 * Checks whether the characters in the first string form a subsequence of the characters in the second string.
 * @param {string} lookup - Set of characters to find within the other string
 * @param {string} text - Longer string, in which to search for the lookup
 * @returns {boolean} True if lookup is a subsequence of text, false otherwise
 */
export function isSubsequence(lookup, text) {
  if (lookup.length > text.length) {
    return false;
  }

  // Start from index 0 of the lookup and index 0 of the text
  let lookupIndex = 0;
  let textIndex = 0;

  while (textIndex < text.length) {
    // Compare the characters under current indexes
    if (lookup[lookupIndex] === text[textIndex]) {
      // If equal - increase both pointers
      lookupIndex += 1;
      textIndex += 1;
    } else {
      textIndex += 1;
    }

    // Exit with true when lookup pointer reaches the end of the lookup string
    if (lookupIndex >= lookup.length) {
      return true;
    }
  }

  // Exit with false when pointer of the text reaches end of the text
  // and pointer of the lookup does not reach its end
  return false;
}

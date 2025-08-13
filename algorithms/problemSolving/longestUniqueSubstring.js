/**
 * Finds the first longest substring without repeating characters in the given text.
 * Uses the sliding window pattern for O(n) time complexity.
 * @param {string} text
 * @returns {string}
 */
export function longestUniqueSubstring(text) {
  if (!text.length) return "";

  /** Left pointer for the start of the window */
  let left = 0;

  /** Tracks character counts within the current window */
  let dict = {};

  /** Stores the indices and length of the longest unique substring found */
  const longestSubstring = {
    length: 0,
    left: 0,
    right: 0,
  };

  for (let right = 0; right < text.length; right++) {
    const char = text[right];

    // Add current character to the window count
    dict[char] = (dict[char] || 0) + 1;

    // If duplicate found, shrink window from the left until given character becomes unique again
    while (dict[char] > 1) {
      dict[text[left]] -= 1;
      left += 1;
    }

    const currentWindowSize = right - left + 1;

    if (currentWindowSize > longestSubstring.length) {
      longestSubstring.length = currentWindowSize;
      longestSubstring.left = left;
      longestSubstring.right = right;
    }
  }

  return text.slice(longestSubstring.left, longestSubstring.right + 1);
}

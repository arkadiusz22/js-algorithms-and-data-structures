/**
 * Finds the (first) longest substring lengt's without repeating characters in given text.
 * @param {string} text
 * @returns {number}
 */
export function longestUniqeSubstring(text) {
  if (!text.length || text.length === 0) return "";

  // left side of sliding window
  let left = 0;

  // longest so far observed string
  let longest = 0;

  let right = 0;

  // dictionary which keeps track of how many times each character appears in a current window
  let dict = {};

  for (right = 0; right < text.length; right++) {
    const char = text[right];

    // add char to the dict representing current window
    if (char in dict) {
      dict[char] += 1;
    } else {
      dict[char] = 1;
    }

    console.log("dict - before fix", dict, "left", left, "right", right);

    // detect invalid window - if the current character is more the 1 in the window
    while (dict[char] > 1) {
      // if window invalid - shrink the window from the left

      dict[text[left]] -= 1;
      left += 1;
    }

    console.log("dict - after fix", dict, "left", left, "right", right);

    const currentValidWindowSize = right - left - 1;
    longest = Math.max(longest, currentValidWindowSize);
  }

  console.log("left", left, "right", right);
  console.log("return");
  return longest;
}

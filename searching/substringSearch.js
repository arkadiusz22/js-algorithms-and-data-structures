// Given a longer string (text) and a shorter string (lookup), count how many times the shorter string appears as a substring within the longer string.
// Return 0 if the shorter string does not appear in the longer string.

/**
 * @param {String} text
 * @param {String} lookup
 */
function substringSearch(text, lookup) {
  if (!text.length || !lookup.length || text.length < lookup.length) return 0;

  let counter = 0;
  let textIndex = 0;

  while (textIndex < text.length) {
    let isMatch = true;

    for (let lookupIndex = 0; lookupIndex < lookup.length; lookupIndex++) {
      const textElement = text[textIndex + lookupIndex];
      const lookupElement = lookup[lookupIndex];

      if (textElement !== lookupElement) {
        isMatch = false;
        break;
      }
    }

    if (isMatch) counter += 1;

    isMatch = true;
    textIndex += 1;
  }

  return counter;
}

// Test cases
console.log(
  substringSearch("harold said haha in hamburg", "a") === 5
    ? "✓ Passed"
    : "X Failed"
);
console.log(
  substringSearch("harold said haha in hamburg", "ha") === 4
    ? "✓ Passed"
    : "X Failed"
);
console.log(
  substringSearch("wowomgzomg", "omg") === 2 ? "✓ Passed" : "X Failed"
);
console.log(
  substringSearch("this is a test string", "is") === 2 ? "✓ Passed" : "X Failed"
);
console.log(substringSearch("aaaaaa", "aa") === 5 ? "✓ Passed" : "X Failed");
console.log(substringSearch("abcdefg", "h") === 0 ? "✓ Passed" : "X Failed");
console.log(
  substringSearch("mississippi", "iss") === 2 ? "✓ Passed" : "X Failed"
);

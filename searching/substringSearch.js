/**
 * Counts how many times a shorter string appears as a substring within a longer string.
 * @param {string} text - The longer string to search within
 * @param {string} lookup - The shorter string to search for
 * @returns {number} The number of occurrences of the lookup string in the text
 */
export function substringSearch(text, lookup) {
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

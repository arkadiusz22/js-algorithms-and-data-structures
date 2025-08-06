/**
 * @param {string} pattern
 * @returns {Array<number> | null}
 */
export function computeLPSArray(pattern) {
  if (!pattern || pattern.length <= 0) return null;

  const lps = [];
  lps[0] = 0;

  let i = 1;

  /** length of the previous longest prefix suffix */
  let previousLPS = 0;

  while (i < pattern.length) {
    if (pattern[i] === pattern[previousLPS]) {
      lps[i] = previousLPS + 1;
      previousLPS += 1;
      i += 1;
    } else if (previousLPS === 0) {
      lps[i] = 0;
      i += 1;
    } else {
      previousLPS = lps[previousLPS - 1];
    }
  }

  return lps;
}

/**
 * @param {string} text
 * @param {string} pattern
 * @returns {Array<number> | null}
 */
export function kmpSearch(text, pattern) {
  if (!pattern || pattern.length <= 0 || !text || text.length <= 0 || pattern.length > text.length) return null;

  const lpsArray = computeLPSArray(pattern);

  const matches = [];
  let textPointer = 0;
  let patternPointer = 0;

  while (textPointer < text.length) {
    if (text[textPointer] === pattern[patternPointer]) {
      // character match
      textPointer += 1;
      patternPointer += 1;

      if (patternPointer === pattern.length) {
        // pattern match
        matches.push(textPointer - patternPointer);
        patternPointer = lpsArray[patternPointer - 1];
      }
    } else {
      // character mismatch
      if (patternPointer === 0) {
        textPointer += 1;
      } else {
        patternPointer = lpsArray[patternPointer - 1];
      }
    }
  }

  return matches.length > 0 ? matches : null;
}

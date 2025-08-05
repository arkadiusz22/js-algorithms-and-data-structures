# Knuth-Morris-Pratt (KMP) Algorithm

---

## Overview

In computer science, the **Knuth–Morris–Pratt algorithm** (KMP) is a string-searching algorithm that searches for occurrences of a "word" W within a main "text string" S. It uses the observation that when a mismatch occurs, the word itself contains enough information to determine where the next match could begin, thus bypassing re-examination of previously matched characters.

---

## Background

A string-matching algorithm wants to find the starting index `m` in string `S[]` that matches the search word `W[]`.

The most straightforward **naive algorithm** compares the pattern with every possible substring of the text, resulting in O(n \* m) time complexity. At each position, it checks for equality of the first character, and if a match is found, continues to check the rest. If all characters match, a match is found; otherwise, it moves to the next position.

The **KMP algorithm** improves on this by precomputing a table (the LPS array) in O(m) time and then using it to search the string in O(n) time, ensuring that each character in the main string is compared at most once. The key difference is that KMP uses information from previous matches to avoid unnecessary comparisons after a mismatch, making it more efficient than the naive approach.

---

## Example

Given two strings:

```js
const txt = "abcab";
const pat = "ab";
// Output: [0, 3]
// Explanation: The string "ab" occurs twice in txt, first occurrence starts from index 0 and second from index 3.
```

---

## Definitions

- **Prefix:** A prefix of a string S is any substring that starts at the first character and ends at any position in S. For example, the prefixes of "abcd" are: "a", "ab", "abc", and "abcd".
- **Suffix:** A suffix of a string S is any substring that starts at any position in S and ends at the last character. For example, the suffixes of "abcd" are: "d", "cd", "bcd", and "abcd".
- **Proper Prefix:** A proper prefix is any prefix of S that is not equal to S itself. For "abcd", the proper prefixes are: "a", "ab", and "abc".
- **Proper Suffix:** A proper suffix is any suffix of S that is not equal to S itself. For "abcd", the proper suffixes are: "d", "cd", and "bcd".
- **LPS (Longest Proper Prefix which is also Suffix):** For each position in the pattern, the LPS array stores the length of the longest sequence at the start of the pattern (prefix) that matches a sequence at the end (suffix) of the pattern up to that position, without including the whole substring itself. In simple terms, it tells us how many characters at the beginning of the pattern are repeated at the end up to each point. The LPS value at each position gives the index in the pattern where we can safely continue matching after a mismatch, instead of starting over. If there is no such prefix-suffix match at a position, the LPS value is 0.

---

## How the KMP Algorithm Works

The KMP algorithm efficiently finds all occurrences of a pattern within a main string by avoiding redundant comparisons. It achieves linear time complexity by using information from previous matches, specifically the LPS array (see Definitions above).

The core idea: When a mismatch happens, instead of starting over, the algorithm looks at the last few matching characters (the suffix) in the pattern. If this suffix matches a prefix that appeared earlier in the pattern, the algorithm skips ahead and starts checking from the next character after that prefix. This way, it doesn't re-examine characters that are already known to match.

The algorithm consists of two main steps:

1. **Build the LPS Array (Prefix Function):**

   - For each position in the pattern, calculate the length of the longest prefix that is also a suffix up to that point. This tells us how many characters at the start of the pattern are repeated at the end up to each position.
   - The LPS array is used to determine how much of the pattern can be reused after a mismatch, so we don’t have to start over from the beginning.
   - Time complexity: O(m), where m is the length of the pattern.

2. **Pattern Search (Matcher Function):**
   - Slide the pattern over the text using two pointers: one for the main string and one for the pattern.
   - If the current characters match, advance both pointers.
   - If a mismatch occurs:
     - If the pattern pointer is not at the start, reset it to the LPS value of the previous character (jump to the next possible match using the prefix information).
     - If the pattern pointer is at the start, only advance the main string pointer.
   - When the pattern pointer reaches the end of the pattern, a match is found. Record the starting index, and reset the pattern pointer to the LPS value to continue searching for further matches.
   - The main string pointer never moves backward, ensuring linear time.
   - Time complexity: O(n), where n is the length of the main string.

The overall time complexity of the KMP algorithm is O(n + m), and the space complexity is O(m).

---

## Applications

- Substring search in text editors, search engines, and bioinformatics.
- Counting the number of occurrences of a pattern in a string.
- Finding repeated patterns and compressing strings.

For more advanced applications, the KMP algorithm can be extended to build automata for efficient pattern matching in very large or recursively defined strings.

import { describe, expect, test } from "@jest/globals";
import { computeLPSArray, kmpSearch } from "./kmp.js";

describe("kmp", () => {
  test.each([
    ["", null],
    ["AAA", [0, 1, 2]],
    ["ABC", [0, 0, 0]],
    ["BBA", [0, 1, 0]],
    ["LL", [0, 1]],
    ["AAAB", [0, 1, 2, 0]],
    ["AB", [0, 0]],
    ["ABAB", [0, 0, 1, 2]],
    ["CODE", [0, 0, 0, 0]],
    ["ABABCAABAB", [0, 0, 1, 2, 0, 1, 1, 2, 3, 4]],
    ["ABCABCABCD", [0, 0, 0, 1, 2, 3, 4, 5, 6, 0]],
  ])("should produce correct LPS array for pattern '%s'", (pattern, expected) => {
    const result = computeLPSArray(pattern);
    expect(result).toStrictEqual(expected);
  });

  test.each([
    ["", "ABC", null],
    ["ABC", "", null],
    ["BBA", "AAAAA", null],
    ["LL", "HELLO", [2]],
    ["AAAB", "AAAAAB", [2]],
    ["AB", "ABCAB", [0, 3]],
    ["ABAB", "XXABABYYABABZZABAB", [2, 7, 13]],
    ["CODE", "CODESDOPE", [0]],
    ["ABABCAABAB", "BABABABABCABABCABAB", [5, 10]],
    ["ABCABCABCD", "ABCABCABCABCABCABCD", [9]],
  ])("should correctly match indexes of '%s' pattern in '%s'", (pattern, text, expected) => {
    const result = kmpSearch(text, pattern);
    expect(result).toStrictEqual(expected);
  });
});

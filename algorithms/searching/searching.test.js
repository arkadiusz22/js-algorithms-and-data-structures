import { describe, expect, test } from "@jest/globals";
import { linearSearch } from "./linearSearch.js";
import { binarySearch, findRotatedArrayMinimum } from "./binarySearch.js";
import { substringSearch } from "./substringSearch.js";

describe("linearSearch", () => {
  test("should find element in the middle of array", () => {
    expect(linearSearch([10, 15, 20, 25, 30], 15)).toBe(1);
  });

  test("should find element in a reverse sorted array", () => {
    expect(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4)).toBe(5);
  });

  test("should find element in a single element array", () => {
    expect(linearSearch([100], 100)).toBe(0);
  });

  test("should return -1 when element is not in array", () => {
    expect(linearSearch([1, 2, 3, 4, 5], 6)).toBe(-1);
  });

  test("should return -1 when element is not in a large array", () => {
    expect(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10)).toBe(-1);
  });

  test("should return -1 when element is not in a single element array", () => {
    expect(linearSearch([100], 200)).toBe(-1);
  });
});

describe("binarySearch", () => {
  test("should find element in the middle of array", () => {
    expect(binarySearch([1, 2, 3, 4, 5], 3)).toBe(2);
  });

  test("should return -1 for empty array", () => {
    expect(binarySearch([], 3)).toBe(-1);
  });

  test("should find element at the end of array", () => {
    expect(binarySearch([1, 2, 3, 4, 5], 5)).toBe(4);
  });

  test("should return -1 when element is not in array", () => {
    expect(binarySearch([1, 2, 3, 4, 5], 6)).toBe(-1);
  });

  test("should find element at the beginning of array", () => {
    expect(binarySearch([1, 2, 3, 4, 5], 2)).toBe(1);
  });

  test("should find element in a large array", () => {
    expect(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 10)).toBe(2);
  });

  test("should find element near the end of a large array", () => {
    expect(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 95)).toBe(16);
  });

  test("should return -1 when element is not in a large array", () => {
    expect(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 100)).toBe(-1);
  });
});

describe("substringSearch", () => {
  test("should count single character occurrences", () => {
    expect(substringSearch("harold said haha in hamburg", "a")).toBe(5);
  });

  test("should count multiple character occurrences", () => {
    expect(substringSearch("harold said haha in hamburg", "ha")).toBe(4);
  });

  test("should count overlapping substrings", () => {
    expect(substringSearch("wowomgzomg", "omg")).toBe(2);
  });

  test("should count substrings that appear multiple times", () => {
    expect(substringSearch("this is a test string", "is")).toBe(2);
  });

  test("should count overlapping character sequences", () => {
    expect(substringSearch("aaaaaa", "aa")).toBe(5);
  });

  test("should return 0 when substring doesn't exist", () => {
    expect(substringSearch("abcdefg", "h")).toBe(0);
  });

  test("should correctly count repeating patterns", () => {
    expect(substringSearch("mississippi", "iss")).toBe(2);
  });
});

describe("findRotatedArrayMinimum", () => {
  test.each`
    array                           | expectedIndex
    ${[30, 40, 50, 10, 20]}         | ${3}
    ${[3, 5, 7, 11, 13, 17, 19, 2]} | ${7}
    ${[17, 19, 2, 3, 5, 7, 11, 13]} | ${2}
  `(
    "should correctly find the index of the minimum element: $expectedIndex in the array: $array",
    ({ array, expectedIndex }) => {
      expect(findRotatedArrayMinimum(array)).toBe(expectedIndex);
    }
  );
});

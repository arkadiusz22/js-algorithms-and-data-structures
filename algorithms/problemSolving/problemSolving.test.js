import { describe, expect, test } from "@jest/globals";
import { validAnagram } from "./validAnagram.js";
import { sumZero } from "./sumZero.js";
import { same } from "./same.js";
import { sameFrequency } from "./sameFrequency.js";
import { maxSubarraySum } from "./maxSubarraySum.js";
import { minSubArrayLen } from "./minSubArrayLen.js";
import { isSubsequence } from "./isSubsequence.js";
import { countUniqueValues } from "./countUniqueValues.js";
import { sortedFrequency } from "./sortedFrequency.js";
import { primeGeneration } from "./primeGeneration.js";

describe("validAnagram", () => {
  test("should return true for empty strings", () => {
    expect(validAnagram("", "")).toBe(true);
  });

  test("should return false for strings of different lengths", () => {
    expect(validAnagram("awesome", "awesom")).toBe(false);
  });

  test("should return false when character frequencies don't match", () => {
    expect(validAnagram("aaz", "zza")).toBe(false);
  });

  test("should return true for valid anagrams", () => {
    expect(validAnagram("anagram", "nagaram")).toBe(true);
    expect(validAnagram("qwerty", "qeywrt")).toBe(true);
    expect(validAnagram("texttwisttime", "timetwisttext")).toBe(true);
  });

  test("should return false for non-anagrams", () => {
    expect(validAnagram("rat", "car")).toBe(false);
    expect(validAnagram("amanaplanacanalpanama", "acanalmanplanpamana")).toBe(false);
  });
});

describe("sumZero", () => {
  test("should return first pair that sums to zero", () => {
    const result = sumZero([-3, -2, -1, 0, 1, 2, 3]);
    expect(result[0]).toBe(-3);
    expect(result[1]).toBe(3);
  });

  test("should return undefined if no pair sums to zero", () => {
    expect(sumZero([-2, 0, 1, 3])).toBe(undefined);
    expect(sumZero([1, 2, 3])).toBe(undefined);
  });
});

describe("same", () => {
  test("should return true when all values in first array have squared values in second array", () => {
    expect(same([1, 2, 3], [4, 1, 9])).toBe(true);
  });

  test("should return false when arrays have different lengths", () => {
    expect(same([1, 2, 3], [4, 9])).toBe(false);
  });

  test("should return false when frequencies don't match", () => {
    expect(same([1, 2, 3], [4, 4, 1])).toBe(false);
  });
});

describe("sameFrequency", () => {
  test("should return true for numbers with same digit frequency", () => {
    expect(sameFrequency(182, 281)).toBe(true);
    expect(sameFrequency(3589578, 5879385)).toBe(true);
  });

  test("should return false for numbers with different digit frequency", () => {
    expect(sameFrequency(34, 14)).toBe(false);
    expect(sameFrequency(22, 222)).toBe(false);
    expect(sameFrequency(22, 225)).toBe(false);
  });
});

describe("maxSubarraySum", () => {
  test("should return the maximum sum of n consecutive elements", () => {
    expect(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)).toBe(10);
    expect(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)).toBe(17);
    expect(maxSubarraySum([4, 2, 1, 6], 1)).toBe(6);
    expect(maxSubarraySum([4, 2, 1, 6, 2], 4)).toBe(13);
  });

  test("should return null if n is greater than array length", () => {
    expect(maxSubarraySum([], 4)).toBe(null);
  });
});

describe("minSubArrayLen", () => {
  test("should return the minimum length of subarray with sum >= target", () => {
    expect(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)).toBe(2);
    expect(minSubArrayLen([2, 1, 6, 5, 4], 9)).toBe(2);
    expect(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)).toBe(1);
    expect(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)).toBe(3);
    expect(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)).toBe(5);
    expect(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)).toBe(2);
  });

  test("should return 0 if no subarray meets the condition", () => {
    expect(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)).toBe(0);
  });
});

describe("isSubsequence", () => {
  test("should return true if first string is a subsequence of second string", () => {
    expect(isSubsequence("hello", "hello world")).toBe(true);
    expect(isSubsequence("sing", "sting")).toBe(true);
    expect(isSubsequence("abc", "abracadabra")).toBe(true);
  });

  test("should return false if first string is not a subsequence of second string", () => {
    expect(isSubsequence("abc", "acb")).toBe(false);
  });
});

describe("countUniqueValues", () => {
  test("should count unique values in a sorted array", () => {
    expect(countUniqueValues([1, 1, 1, 1, 1, 2])).toBe(2);
    expect(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 1])).toBe(7);
    expect(countUniqueValues([-2, -1, -1, 0, 1])).toBe(4);
  });

  test("should handle edge cases", () => {
    expect(countUniqueValues([1])).toBe(1);
    expect(countUniqueValues([])).toBe(0);
  });
});

describe("sortedFrequency", () => {
  test("should count occurrences of a number in a sorted array", () => {
    expect(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2)).toBe(4);
    expect(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3)).toBe(1);
    expect(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1)).toBe(2);
  });

  test("should return -1 if number is not in the array", () => {
    expect(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4)).toBe(-1);
  });
});

describe("primeGeneration", () => {
  test("should return empty array for n lower than 2", () => {
    expect(primeGeneration(0)).toStrictEqual([]);
    expect(primeGeneration(1)).toStrictEqual([]);
    expect(primeGeneration(-10)).toStrictEqual([]);
  });

  test("should return [2] for n = 3", () => {
    expect(primeGeneration(3)).toStrictEqual([2]);
  });

  test("should return [2, 3] for n = 5", () => {
    expect(primeGeneration(5)).toStrictEqual([2, 3]);
  });

  test("should return correct primes for n = 17", () => {
    expect(primeGeneration(17)).toStrictEqual([2, 3, 5, 7, 11, 13]);
  });

  test("should return correct primes for n = 35", () => {
    expect(primeGeneration(35)).toStrictEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31]);
  });

  test("should return correct primes for n = 100", () => {
    expect(primeGeneration(100)).toStrictEqual([
      2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97,
    ]);
  });

  test("should handle large n efficiently (n = 1000)", () => {
    const primes = primeGeneration(1000);
    expect(primes.length).toBe(168);
    expect(primes[0]).toBe(2);
    expect(primes[primes.length - 1]).toBe(997);
  });
});

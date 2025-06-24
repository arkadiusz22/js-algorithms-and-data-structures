import { hashString } from "./hashString.js";
import { describe, expect, test } from "@jest/globals";

describe("hashString", () => {
  test("returns consistent hash values for the same input", () => {
    const str = "test";
    const max = 10;
    const hash1 = hashString(str, max);
    const hash2 = hashString(str, max);
    expect(hash1).toBe(hash2);
  });

  test("returns hash values within the specified range", () => {
    const testCases = [
      { str: "hello", max: 5 },
      { str: "JavaScript", max: 100 },
      { str: "a", max: 7 },
    ];

    testCases.forEach(({ str, max }) => {
      const hash = hashString(str, max);
      expect(hash).toBeGreaterThanOrEqual(0);
      expect(hash).toBeLessThan(max);
    });
  });

  test("handles different character types correctly", () => {
    const max = 11;
    const lowerCase = hashString("pink", max);
    const upperCase = hashString("PINK", max);
    const withNumbers = hashString("pink123", max);

    [lowerCase, upperCase, withNumbers].forEach((hash) => {
      expect(hash).toBeGreaterThanOrEqual(0);
      expect(hash).toBeLessThan(max);
    });

    expect(lowerCase).not.toBe(upperCase);
  });

  test("handles edge cases", () => {
    expect(hashString("", 10)).toBe(0);

    const longString = "a".repeat(150);
    const hash = hashString(longString, 10);
    expect(hash).toBeGreaterThanOrEqual(0);
    expect(hash).toBeLessThan(10);
  });

  test("produces different hashes for anagrams", () => {
    const hash1 = hashString("listen", 20);
    const hash2 = hashString("silent", 20);
    expect(hash1).not.toBe(hash2);
  });
});

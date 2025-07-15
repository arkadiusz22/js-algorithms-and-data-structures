import { describe, expect, test } from "@jest/globals";
import { fibonacci, memoizedFibonacci, tabulatedFibonacci } from "./fibonacci.js";

const implementations = [
  ["fibonacci", fibonacci],
  ["memoizedFibonacci", memoizedFibonacci],
  ["tabulatedFibonacci", tabulatedFibonacci],
];

describe("fibonacci", () => {
  test("should return 1 for 1st and 2nd numbers: %s => %s", () => {
    implementations.forEach(([name, fn]) => {
      expect(fn(1)).toBe(1);
      expect(fn(2)).toBe(1);
    });
  });

  test("should return correct value for Nth number: %s => %s", () => {
    implementations.forEach(([name, fn]) => {
      expect(fn(3)).toBe(2);
      expect(fn(4)).toBe(3);
      expect(fn(5)).toBe(5);
      expect(fn(10)).toBe(55);
      expect(fn(20)).toBe(6765);
    });
  });

  test("should throw error for missing argument", () => {
    implementations.forEach(([name, fn]) => {
      expect(() => fn()).toThrowError(
        "'undefined' is not a valid Fibonacci sequence index. It must be a positive integer."
      );
    });
  });

  test("should throw error for invalid argument", () => {
    implementations.forEach(([name, fn]) => {
      expect(() => fn(-5)).toThrowError("'-5' is not a valid Fibonacci sequence index. It must be a positive integer.");
    });
  });

  test("memoized and tabulated functions should be much faster than standard one", () => {
    const n = 30;

    const start1 = performance.now();
    fibonacci(n);
    const end1 = performance.now();
    const timeRecursive = end1 - start1;

    const start2 = performance.now();
    memoizedFibonacci(n);
    const end2 = performance.now();
    const timeMemoized = end2 - start2;

    const start3 = performance.now();
    tabulatedFibonacci(n);
    const end3 = performance.now();
    const timeTabulated = end3 - start3;

    expect(timeMemoized * 1000).toBeLessThan(timeRecursive);
    expect(timeTabulated * 1000).toBeLessThan(timeRecursive);
  });
});

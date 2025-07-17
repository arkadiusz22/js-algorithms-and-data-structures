import { describe, expect, test } from "@jest/globals";
import { factorial } from "./factorial.js";
import { productOfArray } from "./productOfArray.js";
import { nestedEvenSum } from "./nestedEvenSum.js";
import { flatten } from "./flatten.js";
import { findGCD } from "./findGDC.js";

describe("factorial", () => {
  test("should calculate factorial of small numbers", () => {
    expect(factorial(3)).toBe(6);
    expect(factorial(4)).toBe(24);
  });

  test("should calculate factorial of larger number", () => {
    expect(factorial(10)).toBe(3628800);
  });
});

describe("productOfArray", () => {
  test("should calculate product of all numbers in an array", () => {
    expect(productOfArray([1, 2, 3])).toBe(6);
    expect(productOfArray([4, 3, 2, 1])).toBe(24);
    expect(productOfArray([1, 2, 3, 10])).toBe(60);
    expect(productOfArray([2, 5, 6, 20])).toBe(1200);
  });

  test("should return 0 for empty array", () => {
    expect(productOfArray([])).toBe(0);
  });
});

describe("nestedEvenSum", () => {
  test("should sum all even numbers in nested objects", () => {
    const obj1 = {
      outer: 2,
      obj: {
        inner: 2,
        otherObj: {
          superInner: 2,
          notANumber: true,
          alsoNotANumber: "yup",
        },
      },
    };

    const obj2 = {
      a: 2,
      b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
      c: { c: { c: 2 }, cc: "ball", ccc: 5 },
      d: 1,
      e: { e: { e: 2 }, ee: "car" },
    };

    const obj3 = {
      x: 4,
      y: { y1: 6, y2: { y3: 8, y4: { y5: 10 } } },
      z: "string",
    };

    const obj4 = {
      p: 1,
      q: { q1: 2, q2: { q3: 4, q4: { q5: 6, q6: { q7: 8 } } } },
      r: { r1: 3, r2: { r3: 5 } },
    };

    expect(nestedEvenSum(obj1)).toBe(6);
    expect(nestedEvenSum(obj2)).toBe(10);
    expect(nestedEvenSum(obj3)).toBe(28);
    expect(nestedEvenSum(obj4)).toBe(20);
  });
});

describe("flatten", () => {
  test("should flatten nested arrays", () => {
    expect(flatten([1, 2, 3, [4, 5]])).toEqual([1, 2, 3, 4, 5]);
    expect(flatten([1, [2, [3, 4], [[5]]]])).toEqual([1, 2, 3, 4, 5]);
    expect(flatten([[1], [2], [3]])).toEqual([1, 2, 3]);
    expect(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])).toEqual([1, 2, 3]);
  });

  test("should handle empty array", () => {
    expect(flatten([])).toEqual([]);
  });
});

describe("findGCD", () => {
  test.each`
    a       | b      | expected
    ${5}    | ${10}  | ${5}
    ${888}  | ${54}  | ${6}
    ${1180} | ${482} | ${2}
    ${80}   | ${30}  | ${10}
    ${7}    | ${15}  | ${1}
    ${9}    | ${0}   | ${9}
    ${0}    | ${2}   | ${2}
  `("should return $expected as gcd for $a and $b", ({ a, b, expected }) => {
    expect(findGCD(a, b)).toBe(expected);
  });

  test("should throw error when both a and b are 0", () => {
    expect(() => findGCD(0, 0)).toThrowError("GCD is undefined for (0, 0)");
  });
});

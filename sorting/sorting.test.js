import { bubbleSort } from "./bubbleSort.js";
import { selectionSort } from "./selectionSort.js";
import { insertionSort } from "./insertionSort.js";
import { describe, expect, test } from "@jest/globals";

describe("bubbleSort", () => {
  test("should sort a single element array", () => {
    expect(bubbleSort([1])).toEqual([1]);
  });

  test("should sort a mixed array", () => {
    expect(bubbleSort([4, 2, 1, 13, 6, 2])).toEqual([1, 2, 2, 4, 6, 13]);
  });

  test("should sort an array with negative numbers", () => {
    expect(bubbleSort([10, -1, 2, 5, 0, 3, 3])).toEqual([-1, 0, 2, 3, 3, 5, 10]);
  });

  test("should sort a reverse sorted array", () => {
    expect(bubbleSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });

  test("should sort an array with large numbers", () => {
    expect(bubbleSort([100, 50, 200, 150, 0, -50])).toEqual([-50, 0, 50, 100, 150, 200]);
  });
});

describe("insertionSort", () => {
  test("should sort a single element array", () => {
    expect(insertionSort([1])).toEqual([1]);
  });

  test("should sort a small array", () => {
    expect(insertionSort([4, 2, 1])).toEqual([1, 2, 4]);
  });

  test("should sort a mixed array", () => {
    expect(insertionSort([4, 2, 1, 13, 6, 2])).toEqual([1, 2, 2, 4, 6, 13]);
  });

  test("should sort an array with negative numbers", () => {
    expect(insertionSort([10, -1, 2, 5, 0, 3, 3])).toEqual([-1, 0, 2, 3, 3, 5, 10]);
  });

  test("should sort a reverse sorted array", () => {
    expect(insertionSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });

  test("should sort an array with large numbers", () => {
    expect(insertionSort([100, 50, 200, 150, 0, -50])).toEqual([-50, 0, 50, 100, 150, 200]);
  });
});

describe("selectionSort", () => {
  test("should sort a single element array", () => {
    expect(selectionSort([1])).toEqual([1]);
  });

  test("should sort a mixed array", () => {
    expect(selectionSort([4, 2, 1, 13, 6, 2])).toEqual([1, 2, 2, 4, 6, 13]);
  });

  test("should sort an array with negative numbers", () => {
    expect(selectionSort([10, -1, 2, 5, 0, 3, 3])).toEqual([-1, 0, 2, 3, 3, 5, 10]);
  });

  test("should sort a reverse sorted array", () => {
    expect(selectionSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });

  test("should sort an array with large numbers", () => {
    expect(selectionSort([100, 50, 200, 150, 0, -50])).toEqual([-50, 0, 50, 100, 150, 200]);
  });
});

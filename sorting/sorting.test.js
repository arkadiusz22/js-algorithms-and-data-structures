import { bubbleSort } from "./bubbleSort.js";
import { selectionSort } from "./selectionSort.js";
import { insertionSort } from "./insertionSort.js";
import { describe, expect, test } from "@jest/globals";
import { mergeSort, mergeArrays } from "./mergeSort.js";

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

describe("mergeArrays", () => {
  test("should merge 2 sorted arrays with negative numbers", () => {
    expect(mergeArrays([-10, -5, 0, 5], [-20, -15, -1, 1])).toEqual([-20, -15, -10, -5, -1, 0, 1, 5]);
  });

  test("should merge 2 sorted arrays with positive numbers", () => {
    expect(mergeArrays([1, 3, 5], [2, 4, 6])).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("should merge when one array is empty", () => {
    expect(mergeArrays([], [2, 4, 6])).toEqual([2, 4, 6]);
    expect(mergeArrays([1, 3, 5], [])).toEqual([1, 3, 5]);
  });

  test("should merge when both arrays are empty", () => {
    expect(mergeArrays([], [])).toEqual([]);
  });

  test("should merge arrays with overlapping ranges", () => {
    expect(mergeArrays([1, 2, 3], [2, 3, 4])).toEqual([1, 2, 2, 3, 3, 4]);
  });

  test("should merge arrays with duplicate elements", () => {
    expect(mergeArrays([1, 2, 2, 3], [2, 3, 3, 4])).toEqual([1, 2, 2, 2, 3, 3, 3, 4]);
  });

  test("should merge arrays with one element each", () => {
    expect(mergeArrays([1], [2])).toEqual([1, 2]);
    expect(mergeArrays([2], [1])).toEqual([1, 2]);
  });

  test("should merge arrays with large numbers", () => {
    expect(mergeArrays([1000, 2000, 3000], [1500, 2500, 3500])).toEqual([1000, 1500, 2000, 2500, 3000, 3500]);
  });

  test("should merge arrays with negative and positive numbers", () => {
    expect(mergeArrays([-3, -2, -1], [0, 1, 2])).toEqual([-3, -2, -1, 0, 1, 2]);
  });

  test("should merge arrays with all elements equal", () => {
    expect(mergeArrays([1, 1, 1], [1, 1, 1])).toEqual([1, 1, 1, 1, 1, 1]);
  });
});

describe("mergeSort", () => {
  test("should sort a single element array", () => {
    expect(mergeSort([1])).toEqual([1]);
  });

  test("should sort a small array", () => {
    expect(mergeSort([4, 2, 1])).toEqual([1, 2, 4]);
  });

  test("should sort a mixed array", () => {
    expect(mergeSort([4, 2, 1, 13, 6, 2])).toEqual([1, 2, 2, 4, 6, 13]);
  });

  test("should sort an array with negative numbers", () => {
    expect(mergeSort([10, -1, 2, 5, 0, 3, 3])).toEqual([-1, 0, 2, 3, 3, 5, 10]);
  });

  test("should sort a reverse sorted array", () => {
    expect(mergeSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });

  test("should sort an array with large numbers", () => {
    expect(mergeSort([100, 50, 200, 150, 0, -50])).toEqual([-50, 0, 50, 100, 150, 200]);
  });

  test("should sort an array with duplicate numbers", () => {
    expect(mergeSort([4, 2, 2, 1, 6, 6, 3])).toEqual([1, 2, 2, 3, 4, 6, 6]);
  });

  test("should sort an empty array", () => {
    expect(mergeSort([])).toEqual([]);
  });

  test("should sort an array with all elements equal", () => {
    expect(mergeSort([1, 1, 1, 1])).toEqual([1, 1, 1, 1]);
  });

  test("should sort an array with negative and positive numbers", () => {
    expect(mergeSort([-3, -2, -1, 0, 1, 2])).toEqual([-3, -2, -1, 0, 1, 2]);
  });

  test("should sort an array with one negative and one positive number", () => {
    expect(mergeSort([-1, 1])).toEqual([-1, 1]);
  });
});

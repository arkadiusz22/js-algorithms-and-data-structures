import { describe, expect, test } from "@jest/globals";
import { bubbleSort } from "./bubbleSort.js";
import { selectionSort } from "./selectionSort.js";
import { insertionSort } from "./insertionSort.js";
import { mergeSort, mergeArrays } from "./mergeSort.js";
import { quickSort } from "./quickSort.js";
import { radixSort } from "./radixSort.js";

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
    expect(mergeArrays([-5, -2, -1], [-4, -3, 0])).toEqual([-5, -4, -3, -2, -1, 0]);
  });

  test("should merge 2 sorted arrays with positive numbers", () => {
    expect(mergeArrays([1, 3, 5], [2, 4, 6])).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("should merge when one array is empty", () => {
    expect(mergeArrays([], [1, 2, 3])).toEqual([1, 2, 3]);
    expect(mergeArrays([1, 2, 3], [])).toEqual([1, 2, 3]);
  });

  test("should merge when both arrays are empty", () => {
    expect(mergeArrays([], [])).toEqual([]);
  });

  test("should merge arrays with overlapping ranges", () => {
    expect(mergeArrays([1, 5, 9], [2, 6, 10])).toEqual([1, 2, 5, 6, 9, 10]);
  });

  test("should merge arrays with duplicate elements", () => {
    expect(mergeArrays([1, 3, 3], [2, 3, 4])).toEqual([1, 2, 3, 3, 3, 4]);
  });

  test("should merge arrays with one element each", () => {
    expect(mergeArrays([1], [2])).toEqual([1, 2]);
    expect(mergeArrays([5], [3])).toEqual([3, 5]);
  });

  test("should merge arrays with large numbers", () => {
    expect(mergeArrays([100, 300], [200, 400])).toEqual([100, 200, 300, 400]);
  });

  test("should merge arrays with negative and positive numbers", () => {
    expect(mergeArrays([-2, 0, 2], [-1, 1, 3])).toEqual([-2, -1, 0, 1, 2, 3]);
  });

  test("should merge arrays with all elements equal", () => {
    expect(mergeArrays([5, 5, 5], [5, 5, 5])).toEqual([5, 5, 5, 5, 5, 5]);
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
    expect(mergeSort([3, 1, 3, 2, 3])).toEqual([1, 2, 3, 3, 3]);
  });

  test("should sort an empty array", () => {
    expect(mergeSort([])).toEqual([]);
  });

  test("should sort an array with all elements equal", () => {
    expect(mergeSort([5, 5, 5, 5])).toEqual([5, 5, 5, 5]);
  });

  test("should sort an array with negative and positive numbers", () => {
    expect(mergeSort([-3, 1, -1, 4, 0, -2])).toEqual([-3, -2, -1, 0, 1, 4]);
  });

  test("should sort an array with one negative and one positive number", () => {
    expect(mergeSort([-1, 1])).toEqual([-1, 1]);
    expect(mergeSort([1, -1])).toEqual([-1, 1]);
  });
});

describe("quickSort", () => {
  test("should sort a single element array", () => {
    expect(quickSort([1])).toEqual([1]);
  });

  test("should sort a small array", () => {
    expect(quickSort([4, 2, 1])).toEqual([1, 2, 4]);
  });

  test("should sort a mixed array", () => {
    expect(quickSort([4, 2, 1, 13, 6, 2])).toEqual([1, 2, 2, 4, 6, 13]);
  });

  test("should sort an array with negative numbers", () => {
    expect(quickSort([10, -1, 2, 5, 0, 3, 3])).toEqual([-1, 0, 2, 3, 3, 5, 10]);
  });

  test("should sort a reverse sorted array", () => {
    expect(quickSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });

  test("should sort an array with large numbers", () => {
    expect(quickSort([100, 50, 200, 150, 0, -50])).toEqual([-50, 0, 50, 100, 150, 200]);
  });

  test("should sort an array with duplicate numbers", () => {
    expect(quickSort([3, 1, 3, 2, 3])).toEqual([1, 2, 3, 3, 3]);
  });

  test("should sort an empty array", () => {
    expect(quickSort([])).toEqual([]);
  });

  test("should sort an array with all elements equal", () => {
    expect(quickSort([5, 5, 5, 5])).toEqual([5, 5, 5, 5]);
  });

  test("should sort an array with negative and positive numbers", () => {
    expect(quickSort([-3, 1, -1, 4, 0, -2])).toEqual([-3, -2, -1, 0, 1, 4]);
  });

  test("should sort an array with one negative and one positive number", () => {
    expect(quickSort([-1, 1])).toEqual([-1, 1]);
    expect(quickSort([1, -1])).toEqual([-1, 1]);
  });
});

describe("radixSort", () => {
  test("should sort a single element array", () => {
    expect(radixSort([1])).toEqual([1]);
  });

  test("should sort a small array", () => {
    expect(radixSort([4, 2, 1])).toEqual([1, 2, 4]);
  });

  test("should sort a mixed array", () => {
    expect(radixSort([4, 2, 1, 13, 6, 2])).toEqual([1, 2, 2, 4, 6, 13]);
  });

  test("should sort an array with duplicate numbers", () => {
    expect(radixSort([3, 1, 3, 2, 3])).toEqual([1, 2, 3, 3, 3]);
  });

  test("should sort an array with large numbers", () => {
    expect(radixSort([100, 50, 200, 150, 0])).toEqual([0, 50, 100, 150, 200]);
  });

  test("should sort an array with zeros", () => {
    expect(radixSort([0, 5, 0, 3, 0])).toEqual([0, 0, 0, 3, 5]);
  });

  test("should sort an empty array", () => {
    expect(radixSort([])).toEqual([]);
  });

  test("should sort an array with all elements equal", () => {
    expect(radixSort([5, 5, 5, 5])).toEqual([5, 5, 5, 5]);
  });

  test("should sort an array with one and two digit numbers", () => {
    expect(radixSort([1, 23, 5, 45, 9])).toEqual([1, 5, 9, 23, 45]);
  });

  test("should sort an array with three digit numbers", () => {
    expect(radixSort([170, 45, 75, 90, 2, 802, 24, 66])).toEqual([2, 24, 45, 66, 75, 90, 170, 802]);
  });

  test("should sort an array with numbers containing zeros", () => {
    expect(radixSort([101, 20, 305, 40])).toEqual([20, 40, 101, 305]);
  });

  test("should not sort negative numbers correctly (radixSort limitation)", () => {
    // Note: radixSort typically does not support negative numbers in its basic form
    // This test demonstrates the limitation
    const result = radixSort([3, -1, 4, -2]);
    expect(result).not.toEqual([-2, -1, 3, 4]);
  });
});

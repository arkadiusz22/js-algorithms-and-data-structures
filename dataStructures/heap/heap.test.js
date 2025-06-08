import { MaxBinaryHeap } from "./heap.js";
import { describe, expect, test } from "@jest/globals";

describe("MaxBinaryHeap", () => {
  describe("insert", () => {
    test("inserts into an empty heap and sets the first element as root", () => {
      const heap = new MaxBinaryHeap();
      heap.insert(42);
      expect(heap.elements).toEqual([42]);
      expect(heap.isEmpty()).toBe(false);
    });

    test("inserts multiple elements and maintains max-heap property", () => {
      const heap = new MaxBinaryHeap();
      heap.insert(10).insert(20).insert(5);
      expect(heap.elements[0]).toBe(20);
      expect(heap.elements).toEqual([20, 10, 5]);
    });

    test("inserts values smaller than root and places them correctly", () => {
      const heap = new MaxBinaryHeap();
      heap.insert(100).insert(50).insert(30).insert(20);
      expect(heap.elements[0]).toBe(100);
      expect(heap.elements).toContain(20);
    });

    test("bubbles up correctly when inserting larger values", () => {
      const heap = new MaxBinaryHeap();
      heap.insert(10).insert(15).insert(20).insert(17).insert(25);
      expect(heap.elements[0]).toBe(25);
    });

    test("returns heap instance for method chaining", () => {
      const heap = new MaxBinaryHeap();
      const result = heap.insert(10);
      expect(result).toBe(heap);
    });
  });

  describe("extractMax", () => {
    test("returns null for empty heap", () => {
      const heap = new MaxBinaryHeap();
      expect(heap.extractMax()).toBeNull();
    });

    test("extracts single element from heap with one element", () => {
      const heap = new MaxBinaryHeap();
      heap.insert(42);
      expect(heap.extractMax()).toBe(42);
      expect(heap.isEmpty()).toBe(true);
    });

    test("extracts maximum element and maintains heap property", () => {
      const heap = new MaxBinaryHeap();
      heap.insert(10).insert(20).insert(15).insert(30).insert(40);

      expect(heap.extractMax()).toBe(40);
      expect(heap.extractMax()).toBe(30);
      expect(heap.extractMax()).toBe(20);
    });

    test("handles complex extraction sequence", () => {
      const heap = new MaxBinaryHeap();
      [41, 39, 33, 18, 27, 12].forEach((val) => heap.insert(val));

      expect(heap.extractMax()).toBe(41);
      expect(heap.extractMax()).toBe(39);
    });
  });
});

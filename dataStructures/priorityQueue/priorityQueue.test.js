import { PriorityQueue } from "./priorityQueue.js";
import { describe, expect, test } from "@jest/globals";

describe("PriorityQueue", () => {
  test("enqueues elements and maintains min-heap property", () => {
    const pq = new PriorityQueue();
    pq.enqueue("high", 1).enqueue("medium", 5).enqueue("low", 10);

    expect(pq.elements[0].priority).toBe(1);
    expect(pq.elements[0].value).toBe("high");
    expect(pq.isEmpty()).toBe(false);
  });

  test("dequeues elements in priority order", () => {
    const pq = new PriorityQueue();
    pq.enqueue("third", 30).enqueue("first", 10).enqueue("second", 20);

    expect(pq.dequeue()).toBe("first");
    expect(pq.dequeue()).toBe("second");
    expect(pq.dequeue()).toBe("third");
  });

  test("handles empty queue operations", () => {
    const pq = new PriorityQueue();

    expect(pq.isEmpty()).toBe(true);
    expect(pq.dequeue()).toBeNull();
  });

  test("processes hospital triage scenario correctly", () => {
    const pq = new PriorityQueue();

    pq.enqueue("Heart Attack", 1);
    pq.enqueue("Broken Arm", 5);
    pq.enqueue("Car Accident", 2);
    pq.enqueue("Flu", 7);

    expect(pq.dequeue()).toBe("Heart Attack");
    expect(pq.dequeue()).toBe("Car Accident");
    expect(pq.dequeue()).toBe("Broken Arm");
    expect(pq.dequeue()).toBe("Flu");
  });
});

import { Queue } from "./queue.js";
import { describe, expect, test } from "@jest/globals";

describe("Queue", () => {
  test("enqueue adds elements to the queue and updates first, last, and size correctly", () => {
    const queue = new Queue();

    expect(queue.isEmpty()).toBeTruthy();

    expect(queue.enqueue(10)).toBe(1);
    expect(queue.first.value).toBe(10);
    expect(queue.last.value).toBe(10);
    expect(queue.size).toBe(1);

    expect(queue.enqueue(20)).toBe(2);
    expect(queue.first.value).toBe(10);
    expect(queue.last.value).toBe(20);
    expect(queue.size).toBe(2);

    expect(queue.enqueue(30)).toBe(3);
    expect(queue.first.value).toBe(10);
    expect(queue.first.next.value).toBe(20);
    expect(queue.first.next.next.value).toBe(30);
    expect(queue.last.value).toBe(30);
    expect(queue.size).toBe(3);

    expect(queue.isEmpty()).toBeFalsy();
  });

  test("dequeue removes elements correctly, updates first, last, and size, and handles edge cases", () => {
    const queue = new Queue();

    expect(queue.dequeue()).toBeNull();

    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.dequeue()).toBe(1);
    expect(queue.first.value).toBe(2);
    expect(queue.size).toBe(2);

    expect(queue.dequeue()).toBe(2);
    expect(queue.first.value).toBe(3);
    expect(queue.size).toBe(1);

    expect(queue.dequeue()).toBe(3);
    expect(queue.first).toBeNull();
    expect(queue.last).toBeNull();
    expect(queue.size).toBe(0);

    expect(queue.dequeue()).toBeNull();
  });

  test("peek returns the front element without removing it and handles edge cases", () => {
    const queue = new Queue();

    expect(queue.peek()).toBeNull();
    queue.enqueue("a");
    expect(queue.peek()).toBe("a");
    expect(queue.size).toBe(1);

    queue.enqueue("b");
    queue.enqueue("c");
    expect(queue.peek()).toBe("a");
    expect(queue.size).toBe(3);

    expect(queue.peek()).toBe("a");
    expect(queue.peek()).toBe("a");
    expect(queue.size).toBe(3);
  });
});

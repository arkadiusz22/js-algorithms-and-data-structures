import { Stack } from "./stack.js";
import { describe, expect, test } from "@jest/globals";

describe("Stack", () => {
  test("push adds elements to the stack and updates first and size correctly", () => {
    const stack = new Stack();

    expect(stack.push(10)).toBe(1);
    expect(stack.first.value).toBe(10);
    expect(stack.size).toBe(1);
    expect(stack.isEmpty()).toBe(false);

    expect(stack.push(20)).toBe(2);
    expect(stack.first.value).toBe(20);
    expect(stack.size).toBe(2);

    expect(stack.push(30)).toBe(3);
    expect(stack.first.value).toBe(30);
    expect(stack.first.next.value).toBe(20);
    expect(stack.first.next.next.value).toBe(10);
    expect(stack.size).toBe(3);
  });

  test("pop removes elements correctly, updates first and size, and handles edge cases", () => {
    const stack = new Stack();

    expect(stack.pop()).toBeNull();

    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.pop()).toBe(3);
    expect(stack.first.value).toBe(2);
    expect(stack.size).toBe(2);

    expect(stack.pop()).toBe(2);
    expect(stack.first.value).toBe(1);
    expect(stack.size).toBe(1);

    expect(stack.pop()).toBe(1);
    expect(stack.first).toBeNull();
    expect(stack.size).toBe(0);
    expect(stack.isEmpty()).toBe(true);

    expect(stack.pop()).toBeNull();
  });

  test("peek returns the top element without removing it and handles edge cases", () => {
    const stack = new Stack();

    expect(stack.peek()).toBeNull();
    stack.push("a");
    expect(stack.peek()).toBe("a");
    expect(stack.size).toBe(1);

    stack.push("b");
    stack.push("c");
    expect(stack.peek()).toBe("c");
    expect(stack.size).toBe(3);

    expect(stack.peek()).toBe("c");
    expect(stack.peek()).toBe("c");
    expect(stack.size).toBe(3);
  });
});

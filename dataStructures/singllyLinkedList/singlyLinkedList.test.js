import { SinglyLinkedList } from "./singlyLinkedList.js";
import { describe, expect, test } from "@jest/globals";

describe("SinglyLinkedList", () => {
  test("push adds elements to the list and updates head, tail, and length correctly", () => {
    const list = new SinglyLinkedList();

    list.push(10).push(20).push(30);
    expect(list.head.value).toBe(10);
    expect(list.tail.value).toBe(30);
    expect(list.length).toBe(3);
    expect(list.head.next.value).toBe(20);
    expect(list.head.next.next.value).toBe(30);
    expect(list.head.next.next.next).toBeNull();
  });

  test("pop removes elements correctly, updates head, tail, and length, and handles edge cases", () => {
    const list = new SinglyLinkedList();
    list.push(1).push(2).push(3);

    expect(list.pop()).toBe(3);
    expect(list.tail.value).toBe(2);
    expect(list.length).toBe(2);
    expect(list.tail.next).toBeNull();

    expect(list.pop()).toBe(2);
    expect(list.length).toBe(1);
    expect(list.tail.value).toBe(1);

    expect(list.pop()).toBe(1);
    expect(list.length).toBe(0);
    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();

    expect(list.pop()).toBeNull();
    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();
    expect(list.length).toBe(0);
  });

  test("shift removes the first element and updates head, tail, and length", () => {
    const list = new SinglyLinkedList();
    list.push(1).push(2).push(3);

    expect(list.shift()).toBe(1);
    expect(list.head.value).toBe(2);
    expect(list.length).toBe(2);

    expect(list.shift()).toBe(2);
    expect(list.head.value).toBe(3);
    expect(list.length).toBe(1);

    expect(list.shift()).toBe(3);
    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();
    expect(list.length).toBe(0);

    expect(list.shift()).toBeNull();
    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();
    expect(list.length).toBe(0);
  });

  test("unshift adds elements to the beginning and updates head, tail, and length", () => {
    const list = new SinglyLinkedList();

    list.unshift(5);
    expect(list.head.value).toBe(5);
    expect(list.tail.value).toBe(5);
    expect(list.length).toBe(1);
    expect(list.head.next).toBeNull();

    list.unshift(10);
    expect(list.head.value).toBe(10);
    expect(list.head.next.value).toBe(5);
    expect(list.tail.value).toBe(5);
    expect(list.length).toBe(2);

    list.unshift(20);
    expect(list.head.value).toBe(20);
    expect(list.head.next.value).toBe(10);
    expect(list.head.next.next.value).toBe(5);
    expect(list.tail.value).toBe(5);
    expect(list.length).toBe(3);
    expect(list.tail.next).toBeNull();
  });

  test("get retrieves the correct value at a given index and handles edge cases", () => {
    const list = new SinglyLinkedList();

    expect(list.get(0)).toBeNull();
    expect(list.get(-1)).toBeNull();
    expect(list.get(1)).toBeNull();

    list.push("a");
    expect(list.get(0)).toBe("a");
    expect(list.get(1)).toBeNull();

    list.push("b").push("c");
    expect(list.get(0)).toBe("a");
    expect(list.get(1)).toBe("b");
    expect(list.get(2)).toBe("c");

    expect(list.get(-1)).toBeNull();
    expect(list.get(3)).toBeNull();
    expect(list.get(100)).toBeNull();
  });

  test("set updates the value at a given index and handles edge cases", () => {
    const list = new SinglyLinkedList();

    expect(list.set(0, 100)).toBe(false);
    expect(list.set(-1, 100)).toBe(false);
    expect(list.set(1, 100)).toBe(false);

    list.push("a").push("b").push("c");

    expect(list.set(0, "x")).toBe(true);
    expect(list.get(0)).toBe("x");

    expect(list.set(2, "z")).toBe(true);
    expect(list.get(2)).toBe("z");

    expect(list.set(-1, "fail")).toBe(false);
    expect(list.set(3, "fail")).toBe(false);

    expect(list.set(1, 42)).toBe(true);
    expect(list.get(1)).toBe(42);
  });
});

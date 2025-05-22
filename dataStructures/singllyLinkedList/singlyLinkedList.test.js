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

    expect(list.pop()).toBeUndefined();
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

    expect(list.shift()).toBeUndefined();
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
});

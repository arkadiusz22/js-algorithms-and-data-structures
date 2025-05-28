import { DoublyLinkedList } from "./doublyLinkedList.js";
import { describe, expect, test } from "@jest/globals";

describe("DoublyLinkedList", () => {
  test("push adds elements to the doubly linked list and updates head, tail, and length correctly", () => {
    const list = new DoublyLinkedList();

    list.push(1);
    expect(list.head.value).toBe(1);
    expect(list.tail.value).toBe(1);
    expect(list.length).toBe(1);

    list.push(2);
    expect(list.head.value).toBe(1);
    expect(list.tail.value).toBe(2);
    expect(list.length).toBe(2);
    expect(list.head.next.value).toBe(2);
    expect(list.tail.prev.value).toBe(1);

    list.push(3);
    expect(list.head.value).toBe(1);
    expect(list.tail.value).toBe(3);
    expect(list.length).toBe(3);
    expect(list.head.next.value).toBe(2);
    expect(list.head.next.next.value).toBe(3);
    expect(list.tail.prev.value).toBe(2);
    expect(list.tail.prev.prev.value).toBe(1);
    expect(list.tail.next).toBeNull();
  });

  test("pop removes elements from the end and updates tail, head, and length correctly", () => {
    const list = new DoublyLinkedList();

    expect(list.pop()).toBeNull();

    list.push(10).push(20).push(30);

    const removed1 = list.pop();
    expect(removed1.value).toBe(30);
    expect(list.tail.value).toBe(20);
    expect(list.length).toBe(2);
    expect(list.tail.next).toBeNull();

    const removed2 = list.pop();
    expect(removed2.value).toBe(20);
    expect(list.tail.value).toBe(10);
    expect(list.length).toBe(1);
    expect(list.tail.next).toBeNull();

    const removed3 = list.pop();
    expect(removed3.value).toBe(10);
    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();
    expect(list.length).toBe(0);

    expect(list.pop()).toBeNull();
  });

  test("shift removes elements from the beginning and updates head, tail, and length correctly", () => {
    const list = new DoublyLinkedList();

    expect(list.shift()).toBeNull();

    list.push(100).push(200).push(300);

    const removed1 = list.shift();
    expect(removed1.value).toBe(100);
    expect(list.head.value).toBe(200);
    expect(list.length).toBe(2);
    expect(list.head.prev).toBeNull();

    const removed2 = list.shift();
    expect(removed2.value).toBe(200);
    expect(list.head.value).toBe(300);
    expect(list.length).toBe(1);
    expect(list.head.prev).toBeNull();
    expect(list.tail.value).toBe(300);

    const removed3 = list.shift();
    expect(removed3.value).toBe(300);
    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();
    expect(list.length).toBe(0);

    expect(list.shift()).toBeNull();
  });

  test("unshift adds elements to the beginning and updates head, tail, and length correctly", () => {
    const list = new DoublyLinkedList();

    list.unshift(5);
    expect(list.head.value).toBe(5);
    expect(list.tail.value).toBe(5);
    expect(list.length).toBe(1);
    expect(list.head.prev).toBeNull();
    expect(list.head.next).toBeNull();

    list.unshift(4);
    expect(list.head.value).toBe(4);
    expect(list.tail.value).toBe(5);
    expect(list.length).toBe(2);
    expect(list.head.next.value).toBe(5);
    expect(list.head.prev).toBeNull();
    expect(list.tail.prev.value).toBe(4);
    expect(list.tail.next).toBeNull();

    list.unshift(3);
    expect(list.head.value).toBe(3);
    expect(list.head.next.value).toBe(4);
    expect(list.head.next.next.value).toBe(5);
    expect(list.tail.value).toBe(5);
    expect(list.length).toBe(3);
    expect(list.head.prev).toBeNull();
    expect(list.tail.prev.value).toBe(4);
    expect(list.tail.prev.prev.value).toBe(3);
    expect(list.tail.next).toBeNull();
  });

  test("get returns the correct node at a given index or null if out of bounds", () => {
    const list = new DoublyLinkedList();

    // Empty list
    expect(list.get(0)).toBeNull();
    expect(list.get(-1)).toBeNull();
    expect(list.get(1)).toBeNull();

    // Add elements
    list.push("a").push("b").push("c");

    // Valid indices
    const node0 = list.get(0);
    expect(node0).not.toBeNull();
    expect(node0.value).toBe("a");
    expect(node0.prev).toBeNull();

    const node1 = list.get(1);
    expect(node1).not.toBeNull();
    expect(node1.value).toBe("b");
    expect(node1.prev.value).toBe("a");
    expect(node1.next.value).toBe("c");

    const node2 = list.get(2);
    expect(node2).not.toBeNull();
    expect(node2.value).toBe("c");
    expect(node2.next).toBeNull();

    // Out of bounds
    expect(list.get(-1)).toBeNull();
    expect(list.get(3)).toBeNull();
    expect(list.get(100)).toBeNull();
  });
});

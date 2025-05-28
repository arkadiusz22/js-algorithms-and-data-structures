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

    expect(list.get(0)).toBeNull();
    expect(list.get(-1)).toBeNull();
    expect(list.get(1)).toBeNull();

    list.push("a").push("b").push("c");

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

    expect(list.get(-1)).toBeNull();
    expect(list.get(3)).toBeNull();
    expect(list.get(100)).toBeNull();
  });

  test("set updates the value at the specified index and returns true, or false if index is invalid", () => {
    const list = new DoublyLinkedList();

    expect(list.set(0, "x")).toBe(false);
    expect(list.set(-1, "y")).toBe(false);

    list.push("a").push("b").push("c");

    expect(list.set(0, "A")).toBe(true);
    expect(list.head.value).toBe("A");
    expect(list.get(0).value).toBe("A");

    expect(list.set(1, "B")).toBe(true);
    expect(list.get(1).value).toBe("B");

    expect(list.set(2, "C")).toBe(true);
    expect(list.tail.value).toBe("C");
    expect(list.get(2).value).toBe("C");

    expect(list.set(-1, "z")).toBe(false);
    expect(list.set(3, "z")).toBe(false);
    expect(list.set(100, "z")).toBe(false);
  });

  test("insert adds elements at the correct index and updates pointers and length", () => {
    const list = new DoublyLinkedList();

    expect(list.insert).toBeDefined();
    expect(list.insert(0, "first")).toBe(true);
    expect(list.length).toBe(1);
    expect(list.head.value).toBe("first");
    expect(list.tail.value).toBe("first");

    expect(list.insert(1, "second")).toBe(true);
    expect(list.length).toBe(2);
    expect(list.head.value).toBe("first");
    expect(list.tail.value).toBe("second");
    expect(list.head.next.value).toBe("second");
    expect(list.tail.prev.value).toBe("first");

    expect(list.insert(1, "middle")).toBe(true);
    expect(list.length).toBe(3);
    expect(list.get(0).value).toBe("first");
    expect(list.get(1).value).toBe("middle");
    expect(list.get(2).value).toBe("second");
    expect(list.get(1).prev.value).toBe("first");
    expect(list.get(1).next.value).toBe("second");

    expect(list.insert(0, "zero")).toBe(true);
    expect(list.length).toBe(4);
    expect(list.head.value).toBe("zero");
    expect(list.head.next.value).toBe("first");

    expect(list.insert(4, "last")).toBe(true);
    expect(list.length).toBe(5);
    expect(list.tail.value).toBe("last");
    expect(list.tail.prev.value).toBe("second");

    expect(list.insert(-1, "fail")).toBe(false);
    expect(list.insert(100, "fail")).toBe(false);
  });

  test("remove deletes elements at specified indices and handles edge cases", () => {
    const list = new DoublyLinkedList();

    expect(list.remove(0)).toBeNull();
    expect(list.remove(-1)).toBeNull();
    expect(list.remove(1)).toBeNull();

    list.push("a").push("b").push("c").push("d").push("e");
    expect(list.length).toBe(5);

    const removedMiddle = list.remove(2);
    expect(removedMiddle.value).toBe("c");
    expect(list.length).toBe(4);
    expect(list.get(0).value).toBe("a");
    expect(list.get(1).value).toBe("b");
    expect(list.get(2).value).toBe("d");
    expect(list.get(3).value).toBe("e");
    expect(list.get(2).prev.value).toBe("b");
    expect(list.get(2).next.value).toBe("e");

    const removedFirst = list.remove(0);
    expect(removedFirst.value).toBe("a");
    expect(list.length).toBe(3);
    expect(list.head.value).toBe("b");
    expect(list.head.prev).toBeNull();

    const removedLast = list.remove(list.length - 1);
    expect(removedLast.value).toBe("e");
    expect(list.length).toBe(2);
    expect(list.tail.value).toBe("d");
    expect(list.tail.next).toBeNull();

    expect(list.remove(-1)).toBeNull();
    expect(list.remove(list.length)).toBeNull();
    expect(list.remove(100)).toBeNull();

    expect(list.remove(0).value).toBe("b");
    expect(list.length).toBe(1);
    expect(list.head.value).toBe("d");
    expect(list.tail.value).toBe("d");
    expect(list.head.prev).toBeNull();
    expect(list.tail.next).toBeNull();

    expect(list.remove(0).value).toBe("d");
    expect(list.length).toBe(0);
    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();

    expect(list.remove(0)).toBeNull();
  });

  test("reverse reverses the list in place and updates head, tail, and pointers correctly", () => {
    const list = new DoublyLinkedList();

    expect(list.reverse?.()).toBeNull();
    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();
    expect(list.length).toBe(0);

    list.push(1);
    expect(list.reverse?.()).toBe(list);
    expect(list.head.value).toBe(1);
    expect(list.tail.value).toBe(1);
    expect(list.head.next).toBeNull();
    expect(list.head.prev).toBeNull();

    list.push(2);
    expect(list.head.value).toBe(1);
    expect(list.tail.value).toBe(2);
    list.reverse();
    expect(list.head.value).toBe(2);
    expect(list.tail.value).toBe(1);
    expect(list.head.next.value).toBe(1);
    expect(list.head.prev).toBeNull();
    expect(list.tail.prev.value).toBe(2);
    expect(list.tail.next).toBeNull();

    list.push(3);
    expect(list.head.value).toBe(2);
    expect(list.tail.value).toBe(3);
    list.reverse();
    expect(list.head.value).toBe(3);
    expect(list.head.next.value).toBe(1);
    expect(list.head.prev).toBeNull();
    expect(list.head.next.next.value).toBe(2);
    expect(list.head.next.next.next).toBeNull();
    expect(list.tail.value).toBe(2);
    expect(list.tail.prev.value).toBe(1);
    expect(list.tail.prev.prev.value).toBe(3);
    expect(list.tail.next).toBeNull();
  });
});

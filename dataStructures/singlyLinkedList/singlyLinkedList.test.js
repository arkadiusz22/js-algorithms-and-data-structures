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

    expect(list.pop().value).toBe(3);
    expect(list.tail.value).toBe(2);
    expect(list.length).toBe(2);
    expect(list.tail.next).toBeNull();

    expect(list.pop().value).toBe(2);
    expect(list.length).toBe(1);
    expect(list.tail.value).toBe(1);

    expect(list.pop().value).toBe(1);
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

    expect(list.shift().value).toBe(1);
    expect(list.head.value).toBe(2);
    expect(list.length).toBe(2);

    expect(list.shift().value).toBe(2);
    expect(list.head.value).toBe(3);
    expect(list.length).toBe(1);

    expect(list.shift().value).toBe(3);
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
    expect(list.get(0).value).toBe("a");
    expect(list.get(1)).toBeNull();

    list.push("b").push("c");
    expect(list.get(0).value).toBe("a");
    expect(list.get(1).value).toBe("b");
    expect(list.get(2).value).toBe("c");

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
    expect(list.get(0).value).toBe("x");

    expect(list.set(2, "z")).toBe(true);
    expect(list.get(2).value).toBe("z");

    expect(list.set(-1, "fail")).toBe(false);
    expect(list.set(3, "fail")).toBe(false);

    expect(list.set(1, 42)).toBe(true);
    expect(list.get(1).value).toBe(42);
  });

  test("insert adds elements at specified indices and handles edge cases", () => {
    const list = new SinglyLinkedList();

    expect(list.insert(0, "first")).toBe(true);
    expect(list.length).toBe(1);
    expect(list.head.value).toBe("first");
    expect(list.tail.value).toBe("first");

    expect(list.insert(1, "second")).toBe(true);
    expect(list.length).toBe(2);
    expect(list.head.value).toBe("first");
    expect(list.tail.value).toBe("second");

    expect(list.insert(1, "middle")).toBe(true);
    expect(list.length).toBe(3);
    expect(list.get(0).value).toBe("first");
    expect(list.get(1).value).toBe("middle");
    expect(list.get(2).value).toBe("second");

    expect(list.insert(0, "zero")).toBe(true);
    expect(list.length).toBe(4);
    expect(list.get(0).value).toBe("zero");
    expect(list.get(1).value).toBe("first");

    expect(list.insert(list.length, "last")).toBe(true);
    expect(list.length).toBe(5);
    expect(list.tail.value).toBe("last");

    expect(list.insert(-1, "fail")).toBe(false);

    expect(list.insert(100, "fail")).toBe(false);

    expect(list.get(0).value).toBe("zero");
    expect(list.get(1).value).toBe("first");
    expect(list.get(2).value).toBe("middle");
    expect(list.get(3).value).toBe("second");
    expect(list.get(4).value).toBe("last");
    expect(list.get(5)).toBeNull();
  });

  test("remove deletes elements at specified indices and handles edge cases", () => {
    const list = new SinglyLinkedList();

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

    const removedFirst = list.remove(0);
    expect(removedFirst.value).toBe("a");
    expect(list.length).toBe(3);
    expect(list.head.value).toBe("b");

    const removedLast = list.remove(list.length - 1);
    expect(removedLast.value).toBe("e");
    expect(list.length).toBe(2);
    expect(list.tail.value).toBe("d");

    expect(list.remove(-1)).toBeNull();
    expect(list.remove(list.length)).toBeNull();
    expect(list.remove(100)).toBeNull();

    expect(list.remove(0).value).toBe("b");
    expect(list.length).toBe(1);
    expect(list.head.value).toBe("d");
    expect(list.tail.value).toBe("d");

    expect(list.remove(0).value).toBe("d");
    expect(list.length).toBe(0);
    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();

    expect(list.remove(0)).toBeNull();
  });

  test("reverse reverses the list in place and updates head, tail, and next pointers correctly", () => {
    let list = new SinglyLinkedList();
    list.reverse();
    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();
    expect(list.length).toBe(0);

    list = new SinglyLinkedList();
    list.push(1);
    list.reverse();
    expect(list.head.value).toBe(1);
    expect(list.tail.value).toBe(1);
    expect(list.head.next).toBeNull();
    expect(list.length).toBe(1);

    list = new SinglyLinkedList();
    list.push(1).push(2);
    list.reverse();
    expect(list.head.value).toBe(2);
    expect(list.tail.value).toBe(1);
    expect(list.head.next.value).toBe(1);
    expect(list.tail.next).toBeNull();
    expect(list.length).toBe(2);

    list = new SinglyLinkedList();
    list.push(10).push(20).push(30).push(40);
    list.reverse();
    expect(list.head.value).toBe(40);
    expect(list.head.next.value).toBe(30);
    expect(list.head.next.next.value).toBe(20);
    expect(list.head.next.next.next.value).toBe(10);
    expect(list.head.next.next.next.next).toBeNull();
    expect(list.tail.value).toBe(10);
    expect(list.tail.next).toBeNull();
    expect(list.length).toBe(4);

    list.reverse();
    expect(list.head.value).toBe(10);
    expect(list.head.next.value).toBe(20);
    expect(list.head.next.next.value).toBe(30);
    expect(list.head.next.next.next.value).toBe(40);
    expect(list.head.next.next.next.next).toBeNull();
    expect(list.tail.value).toBe(40);
    expect(list.tail.next).toBeNull();
    expect(list.length).toBe(4);
  });
});

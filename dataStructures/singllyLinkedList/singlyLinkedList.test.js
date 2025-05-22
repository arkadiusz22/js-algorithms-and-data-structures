import { SinglyLinkedList } from "./singlyLinkedList.js";
import { describe, expect, test } from "@jest/globals";

describe("SinglyLinkedList", () => {
  test("push adds a single element to an empty list", () => {
    const list = new SinglyLinkedList();
    list.push(10);

    expect(list.head.value).toBe(10);
    expect(list.tail.value).toBe(10);
    expect(list.length).toBe(1);
    expect(list.head.next).toBeNull();
  });

  test("push adds multiple elements and updates tail and length", () => {
    const list = new SinglyLinkedList();
    list.push(1);
    list.push(2);
    list.push(3);

    expect(list.head.value).toBe(1);
    expect(list.tail.value).toBe(3);
    expect(list.length).toBe(3);
    expect(list.head.next.value).toBe(2);
    expect(list.head.next.next.value).toBe(3);
    expect(list.head.next.next.next).toBeNull();
  });
});

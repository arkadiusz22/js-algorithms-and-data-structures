/**
 * Represents a Node in a singly linked list.
 * @template T The type of value stored in the Node
 */
class Node {
  /**
   * Create a Node.
   * @param {T} value - The value to store in the new Node.
   */
  constructor(value) {
    /** @type {T} */
    this.value = value;

    /** @type {Node<T>|null} */
    this.next = null;
  }
}

/**
 * Represents a singly linked list.
 * @template T The type of values stored in the list
 */
export class SinglyLinkedList {
  /** @type {Node<T>|null} */
  head;
  /** @type {Node<T>|null} */
  tail;
  /** @type {number} */
  length;

  /**
   * Create a list
   */
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /**
   * Adds a new Node containing the specified value to the end of the list.
   * @param {T} value - The value to store in the new Node.
   * @returns {SinglyLinkedList<T>} The updated list.
   */
  push(value) {
    const newNode = new Node(value);

    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length += 1;

    return this;
  }

  /**
   * Removes the Node from the end of the list.
   * @returns {T|undefined} The value of the removed Node.
   */
  pop() {
    if (!this.length) return undefined;

    if (this.length === 1) {
      const value = this.head.value;
      this.head = null;
      this.tail = null;
      this.length = 0;
      return value;
    }

    let pre = this.head;
    let current = this.head.next;

    while (current.next) {
      pre = current;
      current = current.next;
    }

    pre.next = null;
    this.tail = pre;
    this.length -= 1;

    return current.value;
  }

  /**
   * Removes the Node from the beggining of the list.
   * @returns {T|undefined} The value of the removed Node.
   */
  shift() {
    if (!this.length) return undefined;

    if (this.length === 1) {
      const value = this.head.value;
      this.head = null;
      this.tail = null;
      this.length = 0;
      return value;
    }

    const removedValue = this.head.value;
    this.head = this.head.next;
    this.length -= 1;

    return removedValue;
  }

  /**
   * Adds the Node to the beggining of the list.
   * @param {T} value - The value to store in the new Node.
   * @returns {SinglyLinkedList<T>} The updated list.
   */
  unshift(value) {
    if (!this.length) {
      this.push(value);
    } else {
      const currentHead = this.head;
      this.head = new Node(value);
      this.head.next = currentHead;
      this.length += 1;
    }

    return this;
  }
}

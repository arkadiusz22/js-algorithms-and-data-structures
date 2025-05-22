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
  /**
   * Create a list
   */
  constructor() {
    /** @type {Node<T>|null} */
    this.head = null;

    /** @type {Node<T>|null} */
    this.tail = null;

    /** @type {number} */
    this.length = 0;
  }

  /**
   * Adds a new Node containing the specified value to the end of the list.
   * @param {T} value - The value to store in the new Node.
   * @returns {SinglyLinkedList<T>} The updated list instance.
   */
  push(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length += 1;

    return this;
  }
}

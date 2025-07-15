/**
 * Represents a node in a stack.
 * @template T The type of value stored in the node
 */
class Node {
  /**
   * Create a node.
   * @param {T} value - The value to store in the new node.
   */
  constructor(value) {
    /** @type {T} */
    this.value = value;

    /** @type {Node<T>|null} */
    this.next = null;
  }
}

/**
 * Represents a stack data structure (LIFO - Last In, First Out).
 * @template T The type of values stored in the stack
 */
export class Stack {
  /**
   * Create a new, empty stack.
   */
  constructor() {
    /** @type {Node<T>|null} */
    this.first = null;

    /** @type {number} */
    this.size = 0;
  }

  /**
   * Adds a new value to the top of the stack.
   * @param {T} value - The value to store.
   * @returns {number} The new size of the stack.
   */
  push(value) {
    const newNode = new Node(value);

    if (!this.size) {
      this.first = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }

    this.size += 1;

    return this.size;
  }

  /**
   * Removes and returns the value from the top of the stack.
   * @returns {T|null} The value removed from the stack, or null if the stack is empty.
   */
  pop() {
    if (!this.size) return null;

    const removedNode = this.first;
    this.first = removedNode.next;
    removedNode.next = null;

    this.size -= 1;

    return removedNode.value;
  }

  /**
   * Returns the value from the top of the stack without removing it.
   * @returns {T|null} The value on top of the stack, or null if the stack is empty.
   */
  peek() {
    if (!this.size) return null;

    return this.first.value;
  }

  /**
   * Checks if the stack is empty.
   * @returns {boolean} True if the stack is empty, false otherwise.
   */
  isEmpty() {
    return !this.size;
  }
}

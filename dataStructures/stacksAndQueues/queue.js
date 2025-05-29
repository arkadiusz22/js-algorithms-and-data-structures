/**
 * Represents a Node in a queue.
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
 * Represents a queue data structure (FIFO - First In, First Out).
 * @template T The type of values stored in the queue
 */
export class Queue {
  /** @type {Node<T>|null} */
  first;
  /** @type {Node<T>|null} */
  last;
  /** @type {number} */
  size;

  /**
   * Create a new, empty queue.
   */
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /**
   * Adds a new value to the rear of the queue.
   * @param {T} value - The value to store.
   * @returns {number} The new size of the queue.
   */
  enqueue(value) {
    const newNode = new Node(value);

    if (!this.size) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.size += 1;

    return this.size;
  }

  /**
   * Removes and returns the value from the front of the queue.
   * @returns {T|null} The value removed from the queue, or null if the queue is empty.
   */
  dequeue() {
    if (!this.size) return null;

    const removedNode = this.first;

    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = removedNode.next;
    }

    removedNode.next = null;

    this.size -= 1;

    return removedNode.value;
  }

  /**
   * Returns the value from the front of the queue without removing it.
   * @returns {T|null} The value at the front of the queue, or null if the queue is empty.
   */
  peek() {
    if (!this.size) return null;

    return this.first.value;
  }
}

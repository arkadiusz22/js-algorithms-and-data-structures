/**
 * Represents a Node in a doubly linked list.
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
    /** @type {Node<T>|null} */
    this.prev = null;
  }
}

/**
 * Represents a doubly linked list.
 * @template T The type of values stored in the list
 */
export class DoublyLinkedList {
  /** @type {Node<T>|null} */
  head;
  /** @type {Node<T>|null} */
  tail;
  /** @type {number} */
  length;

  /**
   * Create a new, empty doubly linked list.
   */
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /**
   * Adds a new Node containing the specified value to the end of the list.
   * @param {T} value - The value to store in the new Node.
   * @returns {DoublyLinkedList<T>} The updated list instance.
   */
  push(value) {
    const newNode = new Node(value);

    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length += 1;

    return this;
  }

  /**
   * Removes the Node from the end of the list.
   * @returns {Node<T>|null} The removed Node, or null if the list is empty.
   */
  pop() {
    if (!this.length || !this.tail) return null;

    const removedNode = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = removedNode.prev;
      removedNode.prev = null;
      this.tail.next = null;
    }

    this.length -= 1;

    return removedNode;
  }

  /**
   * Removes the Node from the beginning of the list.
   * @returns {Node<T>|null} The removed Node, or null if the list is empty.
   */
  shift() {
    if (!this.length || !this.head) return null;

    const removedNode = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = removedNode.next;
      this.head.prev = null;
      removedNode.next = null;
    }

    this.length -= 1;

    return removedNode;
  }

  /**
   * Adds a new Node containing the specified value to the beginning of the list.
   * @param {T} value - The value to store in the new Node.
   * @returns {DoublyLinkedList<T>} The updated list instance.
   */
  unshift(value) {
    if (!this.length) {
      return this.push(value);
    }

    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length += 1;

    return this;
  }

  /**
   * Returns the value at the given position in the list.
   * @param {number} index - The zero-based position of the item in the list.
   * @returns {Node<T>|null} The Node at the given index, or null if out of bounds.
   */
  get(index) {
    if (!this.length || index < 0 || index >= this.length) return null;

    let count;
    let current;

    const isCloserToHead = index <= Math.floor(this.length / 2);

    if (isCloserToHead) {
      count = 0;
      current = this.head;

      while (count !== index) {
        current = current.next;
        count += 1;
      }
    } else {
      count = this.length - 1;
      current = this.tail;

      while (count !== index) {
        current = current.prev;
        count -= 1;
      }
    }

    return current;
  }

  /**
   * Updates the value at the specified index in the list.
   * @param {number} index - The zero-based position of the item in the list.
   * @param {T} value - The new value to set at the specified index.
   * @returns {boolean} True if the update was successful, false otherwise.
   */
  set(index, value) {
    const current = this.get(index);

    if (!current) return false;

    current.value = value;
    return true;
  }

  /**
   * Inserts new Node with given value at the specified index in the list.
   * @param {number} index - The zero-based position where to insert the new node.
   * @param {T} value - The new value to insert at the specified index.
   * @returns {boolean} True if the insertion was successful, false otherwise.
   */
  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(value);
    if (index === 0) return !!this.unshift(value);

    const prev = this.get(index - 1);
    if (!prev) return false;

    const next = prev.next;
    const newNode = new Node(value);

    prev.next = newNode;
    newNode.prev = prev;

    newNode.next = next;
    if (next) next.prev = newNode;

    this.length += 1;

    return true;
  }

  /**
   * Removes the node at the specified index in the list.
   * @param {number} index - The zero-based position of the node to remove.
   * @returns {Node<T>|null} The removed node, or null if the index is invalid.
   */
  remove(index) {
    if (index < 0 || index >= this.length) return null;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();

    const removedNode = this.get(index);
    if (!removedNode) return null;

    if (removedNode.prev) removedNode.prev.next = removedNode.next;
    if (removedNode.next) removedNode.next.prev = removedNode.prev;

    removedNode.prev = null;
    removedNode.next = null;

    this.length -= 1;

    return removedNode;
  }

  /**
   * Reverses the order of nodes in the linked list.
   * Time complexity: O(n) where n is the number of nodes in the list.
   * @returns {DoublyLinkedList<T>|null} The reversed list instance.
   */
  reverse() {
    // Handle edge cases - empty list or single node
    if (!this.length) return null;
    if (this.length === 1) return this;

    let current = this.head;

    // Traverse the list and swap prev/next pointers for each node
    while (current) {
      // Store next node before swapping
      const next = current.next;

      // Swap the pointers
      [current.next, current.prev] = [current.prev, current.next];

      // Move to the next node (which is now in prev due to swap)
      current = next;
    }

    // Swap head and tail pointers
    [this.head, this.tail] = [this.tail, this.head];

    return this;
  }
}

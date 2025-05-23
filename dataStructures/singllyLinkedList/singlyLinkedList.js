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
   * Create a new, empty singly linked list.
   */
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /**
   * Adds a new Node containing the specified value to the end of the list.
   * @param {T} value - The value to store in the new Node.
   * @returns {SinglyLinkedList<T>} The updated list instance.
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
   * @returns {Node<T>|null} The removed Node, or null if the list is empty.
   */
  pop() {
    if (!this.length) return null;

    if (this.length === 1) {
      const removedNode = this.head;
      this.head = null;
      this.tail = null;
      this.length = 0;
      return removedNode;
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

    return current;
  }

  /**
   * Removes the Node from the beginning of the list.
   * @returns {Node<T>|null} The removed Node, or null if the list is empty.
   */
  shift() {
    if (!this.length) return null;

    if (this.length === 1) {
      const removedNode = this.head;
      this.head = null;
      this.tail = null;
      this.length = 0;
      return removedNode;
    }

    const removedNode = this.head;
    this.head = this.head.next;
    this.length -= 1;

    return removedNode;
  }

  /**
   * Adds a new Node containing the specified value to the beginning of the list.
   * @param {T} value - The value to store in the new Node.
   * @returns {SinglyLinkedList<T>} The updated list instance.
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

  /**
   * Returns the value at the given position in the list.
   * @param {number} index - The zero-based position of the item in the list.
   * @returns {Node<T>|null} The Node at the given index, or null if out of bounds.
   */
  get(index) {
    if (!this.length || index < 0 || index >= this.length) return null;

    let count = 0;
    let current = this.head;

    while (count < index) {
      current = current.next;
      count += 1;
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
    if (!this.length || index < 0 || index >= this.length) return false;

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

    const pre = this.get(index - 1);
    const newNode = new Node(value);
    newNode.next = pre.next;
    pre.next = newNode;

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

    const pre = this.get(index - 1);
    if (!pre || !pre.next) return null;

    const removedNode = pre.next;
    pre.next = removedNode.next;

    this.length -= 1;

    return removedNode;
  }
  /**
   * Reverses the order of nodes in the linked list.
   * Time complexity: O(n) where n is the number of nodes in the list.
   * @returns {SinglyLinkedList<T>|null} The reversed list instance, or null if the list is empty.
   */
  reverse() {
    // Handle edge cases - empty list or single node
    if (!this.length) return null;
    if (this.length === 1) return this;

    // Start with the head, which will become the new tail
    let currentNode = this.head;

    // Swap head and tail pointers
    this.head = this.tail;
    this.tail = currentNode;

    // Set up pointers for traversal
    let previousNode = null;
    let nextNode;

    // Iterate through list, reversing links
    while (currentNode !== null) {
      // Save next node reference
      nextNode = currentNode.next;

      // Reverse the link
      currentNode.next = previousNode;

      // Move pointers forward
      previousNode = currentNode;
      currentNode = nextNode;
    }

    return this;
  }
}

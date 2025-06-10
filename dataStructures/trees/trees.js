import { Queue } from "../stacksAndQueues/queue.js";

/**
 * Represents a node in a binary search tree.
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
    this.left = null;

    /** @type {Node<T>|null} */
    this.right = null;
  }
}

/**
 * Represents a binary search tree (BST) data structure
 * @template T The type of values stored in the BST
 */
export class BinarySearchTree {
  constructor() {
    /** @type {Node<T>|null} */
    this.root = null;
  }

  /**
   * Inserts a new value into the binary search tree.
   * If the value already exists in the tree, the method returns null and does not insert a duplicate.
   * @param {T} value - The value to insert into the tree.
   * @returns {BinarySearchTree<T> | null} The tree instance for chaining if insertion succeeds, or null if the value already exists.
   */
  insert(value) {
    if (!this.root) {
      this.root = new Node(value);
      return this;
    }

    let current = this.root;
    const newNode = new Node(value);

    while (true) {
      if (current.value > newNode.value) {
        if (current.left) {
          current = current.left;
        } else {
          current.left = newNode;
          break;
        }
      } else if (current.value < newNode.value) {
        if (current.right) {
          current = current.right;
        } else {
          current.right = newNode;
          break;
        }
      } else {
        // ignore duplicated values
        return null;
      }
    }

    return this;
  }

  /**
   * Determines whether the given value exists in the tree.
   * @param {T} value - The value to search for in the tree nodes.
   * @returns {Node<T>|null} The node containing the value, or null if not found.
   */
  find(value) {
    if (!this.root) return null;

    let current = this.root;
    while (current) {
      if (current.value === value) return current;

      if (current.value > value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return null;
  }

  /**
   * Performs breadth-first search traversal of the binary search tree.
   * Visits nodes level by level from left to right.
   * @returns {Array<T>} Array of values in BFS order, empty array if tree is empty
   */
  breadthFirstSearch() {
    if (!this.root) return [];

    /** @type {Array<T>} */
    const values = [];

    /** @type {Queue<Node<T>>} */
    const nodeQueue = new Queue();

    nodeQueue.enqueue(this.root);

    while (!nodeQueue.isEmpty()) {
      const node = nodeQueue.dequeue();
      if (!node) break;

      values.push(node.value);

      if (node.left) nodeQueue.enqueue(node.left);
      if (node.right) nodeQueue.enqueue(node.right);
    }

    return values;
  }

  /**
   * Performs depth-first search traversal of the binary search tree.
   * @param {('preOrder'|'inOrder'|'postOrder')} order - The traversal order to use
   * @returns {Array<T>} Array of values in DFS order, empty array if tree is empty
   */
  depthFirstSearch(order = "inOrder") {
    if (!this.root) return [];

    /** @type {Array<T>} */
    const values = [];

    /**
     * @param {Node<T>} node
     * @returns {void}
     */
    function traverse(node) {
      switch (order) {
        case "preOrder":
          values.push(node.value);
          if (node.left) traverse(node.left);
          if (node.right) traverse(node.right);
          break;
        case "inOrder":
          if (node.left) traverse(node.left);
          values.push(node.value);
          if (node.right) traverse(node.right);
          break;
        case "postOrder":
          if (node.left) traverse(node.left);
          if (node.right) traverse(node.right);
          values.push(node.value);
          break;
      }
    }

    traverse(this.root);

    return values;
  }

  /**
   * Checks if the tree is empty.
   * @returns {boolean} True if the tree is empty, false otherwise.
   */
  isEmpty() {
    return !this.root;
  }
}

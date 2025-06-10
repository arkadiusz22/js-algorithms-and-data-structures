/**
 * Represents a node in a priority queue.
 * @template T The type of value stored in the node.
 */
class Node {
  /**
   * Create a node.
   * @param {T} value - The value to store in the new node.
   * @param {number} priority - The priority indication of a new node.
   */
  constructor(value, priority) {
    /** @type {T} */
    this.value = value;
    /** @type {number} */
    this.priority = priority;
  }
}

/**
 * Represents a priority queue data structure.
 * Implemented as a min binary heap where LOWER priority numbers indicate HIGHER priority.
 * @template T The type of values stored in the heap
 */
export class PriorityQueue {
  constructor() {
    /** @type {Array<Node<T>>} */
    this.elements = [];
  }

  /**
   * Inserts a value into the queue, maintaining the min-heap property.
   * @param {T} value - The value to insert.
   * @param {number} priority - The priority of new inserted value.
   * @returns {PriorityQueue<T>} The queue instance.
   */
  enqueue(value, priority) {
    const newNode = new Node(value, priority);
    this.elements.push(newNode);

    let index = this.elements.length - 1;
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.elements[parentIndex].priority <= this.elements[index].priority) break;
      [this.elements[parentIndex], this.elements[index]] = [this.elements[index], this.elements[parentIndex]];
      index = parentIndex;
    }

    return this;
  }

  /**
   * Removes and returns the element with lowest priority from the heap.
   * Rearranges the heap to maintain the min-heap property.
   * Potential future improvement - In case of the same priority value, make sure that elements inserted earlier are prioritized.
   * @returns {T|null} The removed minimum value, or null if the heap is empty.
   */
  dequeue() {
    if (this.elements.length === 0) return null;
    if (this.elements.length === 1) return this.elements.pop().value;

    const lastIndex = this.elements.length - 1;
    [this.elements[0], this.elements[lastIndex]] = [this.elements[lastIndex], this.elements[0]];
    const min = this.elements.pop().value;
    let index = 0;

    while (true) {
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;

      if (leftChildIndex >= this.elements.length) break;

      let smallerChildIndex;

      if (rightChildIndex >= this.elements.length) {
        smallerChildIndex = leftChildIndex;
      } else {
        smallerChildIndex =
          this.elements[leftChildIndex].priority < this.elements[rightChildIndex].priority
            ? leftChildIndex
            : rightChildIndex;
      }

      if (this.elements[index].priority > this.elements[smallerChildIndex].priority) {
        [this.elements[index], this.elements[smallerChildIndex]] = [
          this.elements[smallerChildIndex],
          this.elements[index],
        ];

        index = smallerChildIndex;
      } else {
        break;
      }
    }

    return min;
  }

  /**
   * Checks if the queue is empty.
   * @returns {boolean} True if empty, false otherwise.
   */
  isEmpty() {
    return this.elements.length === 0;
  }
}

/**
 * Represents a Max Binary Heap data structure.
 * @template T The type of values stored in the heap
 */
export class MaxBinaryHeap {
  constructor() {
    /** @type {Array<T>} */
    this.elements = [];
  }

  /**
   * Inserts a value into the heap, maintaining the max-heap property.
   * @param {T} value - The value to insert.
   * @returns {MaxBinaryHeap<T>} The heap instance.
   */
  insert(value) {
    this.elements.push(value);
    let index = this.elements.length - 1;
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.elements[parentIndex] >= this.elements[index]) break;
      [this.elements[parentIndex], this.elements[index]] = [this.elements[index], this.elements[parentIndex]];
      index = parentIndex;
    }
    return this;
  }

  /**
   * Removes and returns the maximum value from the heap.
   * Rearranges the heap to maintain the max-heap property.
   * @returns {T|null} The removed maximum value, or null if the heap is empty.
   */
  extractMax() {
    if (this.elements.length === 0) return null;
    if (this.elements.length === 1) return this.elements.pop();

    const lastIndex = this.elements.length - 1;
    [this.elements[0], this.elements[lastIndex]] = [this.elements[lastIndex], this.elements[0]];
    const max = this.elements.pop();
    let index = 0;

    while (true) {
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;

      if (leftChildIndex >= this.elements.length) break;

      let largerChildIndex;

      if (rightChildIndex >= this.elements.length) {
        largerChildIndex = leftChildIndex;
      } else {
        largerChildIndex =
          this.elements[leftChildIndex] > this.elements[rightChildIndex] ? leftChildIndex : rightChildIndex;
      }

      if (this.elements[index] < this.elements[largerChildIndex]) {
        [this.elements[index], this.elements[largerChildIndex]] = [
          this.elements[largerChildIndex],
          this.elements[index],
        ];

        index = largerChildIndex;
      } else {
        break;
      }
    }

    return max;
  }

  /**
   * Checks if the heap is empty.
   * @returns {boolean} True if empty, false otherwise.
   */
  isEmpty() {
    return this.elements.length === 0;
  }
}

# Queue

A queue is an abstract data structure that follows the **FIFO (First In, First Out)** principle. Elements are added at the rear and removed from the front, making it a pipe-like linear data structure.

---

## Key Characteristics

- **FIFO Ordering**: First element added is the first removed
- **Two Access Points**:
  - **Front**: Where elements are removed (dequeue)
  - **Rear/Back**: Where elements are added (enqueue)
- **Primary Operations**:
  - **Enqueue**: Add to the rear
  - **Dequeue**: Remove and return the front
  - **Peek/Front**: View the front without removing

---

## Use Cases

- Process management (CPU scheduling)
- Print queues
- Web server request handling
- Breadth-First Search (BFS)
- Data stream buffering
- Customer service systems
- Level-order tree traversal
- Producer-consumer problems

---

## Time & Space Complexity

| Operation | Time Complexity |
| --------- | --------------- |
| Enqueue   | O(1)            |
| Dequeue   | O(1)            |
| Peek      | O(1)            |
| Search    | O(n)            |
| Space     | O(n)            |

> **Note:** If frequent searching or random access is needed, consider arrays or other data structures instead.

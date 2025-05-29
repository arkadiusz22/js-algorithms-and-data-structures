## Queue

A queue is an abstract data structure that follows the **FIFO (First In, First Out)** principle. Elements are added at one end (rear) and removed from the other end (front), making it a pipe-like linear data structure.

### Key Characteristics

- **FIFO Ordering**: The first element added is the first one removed
- **Two Access Points**:
  - **Front**: Where elements are removed (dequeue operations)
  - **Rear/Back**: Where elements are added (enqueue operations)
- **Three Primary Operations**:
  - **Enqueue**: Add an element to the rear of the queue
  - **Dequeue**: Remove and return the front element
  - **Peek/Front**: View the front element without removing it

### Real-World Examples & Use Cases

- **Process Management**: CPU task scheduling and process queues in operating systems
- **Print Queue**: Documents waiting to be printed in order
- **Web Server Handling**: Processing HTTP requests and managing connection pools
- **Breadth-First Search (BFS)**: Graph and tree traversal algorithms
- **Data Stream Buffering**: Handling data between processes with different speeds
- **Customer Service**: Call center systems managing incoming calls
- **Algorithm Implementation**:
  - Level-order tree traversal
  - Cache implementation (FIFO cache eviction)
  - Producer-consumer problems

### Time & Space Complexity

- **Insertion (Enqueue)**: O(1) - primary strength
- **Removal (Dequeue)**: O(1) - primary strength
- **Peek**: O(1)
- **Search/Access**: O(n) - not optimized for these operations
- **Space**: O(n) where n is the number of elements

> **Note**: If frequent searching or random access is needed, consider using arrays or other data structures instead of queues.

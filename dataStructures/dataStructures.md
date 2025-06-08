# Data Structures

Data structures are ways to organize and store data to enable efficient access, modification, and management. The choice of data structure impacts the performance and maintainability of your code.

---

## Common Data Structures

- **Array**: Ordered collection of elements, accessible by index. Fast access, insertion/removal at the end.
- **Singly Linked List**: Sequence of nodes, each pointing to the next. Efficient inserts/removals at the beginning or end.
- **Doubly Linked List**: Like singly linked list, but nodes have pointers to both next and previous nodes. Easier bidirectional traversal.
- **Stack**: LIFO (Last-In, First-Out) structure. Supports push and pop operations. Used for undo features, call stacks.
- **Queue**: FIFO (First-In, First-Out) structure. Supports enqueue and dequeue. Used in scheduling, buffering.
- **Tree**: Hierarchical structure with parent-child relationships. Used for representing nested data, like the DOM.
- **Binary Tree**: Each node has at most two children. Used in searching and sorting algorithms.
- **Binary Search Tree (BST)**: Binary tree with ordered nodes. Enables fast lookup, insertion, and deletion.
- **Heap (e.g., Binary Heap)**: Specialized tree for priority queues. Supports fast access to min or max element.
- **Hash Table (Map)**: Key-value pairs with fast access, insertion, and deletion by key. Used for lookups.
- **Graph**: Set of nodes (vertices) connected by edges. Models networks, relationships, and paths.

---

## Choosing the Right Data Structure

| Data Structure | Best For                          |
| -------------- | --------------------------------- |
| Array          | Ordered data, fast index access   |
| Linked List    | Frequent inserts/removals at ends |
| Stack          | Undo/redo, call stack, DFS        |
| Queue          | Scheduling, buffering, BFS        |
| Tree           | Hierarchical/nested data          |
| Graph          | Networks, relationships           |
| Heap           | Priority queues, scheduling       |
| Hash Table     | Fast key-based lookups            |

---

Selecting the appropriate data structure is crucial for writing efficient and maintainable code. Each structure has strengths and trade-offs depending on the use case.

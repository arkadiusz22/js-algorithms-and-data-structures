## Doubly Linked List

A doubly linked list is a linear data structure consisting of nodes. Each node contains a value and two pointers: one to the next node in the sequence and one to the previous node. The list maintains references to the `head` (first node), `tail` (last node), and its `length`.

### Basic Structure

```
+--------+    +--------+    +--------+    +--------+
|  Node  |    |  Node  |    |  Node  |    |  Node  |
| Value: |    | Value: |    | Value: |    | Value: |
|   10   |    |   20   |    |   30   |    |   40   |
| Prev:  |←---| Prev:  |←---| Prev:  |←---| Prev:  |
| Next:  |---→| Next:  |---→| Next:  |---→| Next:  |---→ null
+--------+    +--------+    +--------+    +--------+
  ↑                                         ↑
   Head                                      Tail
```

- **No random access:** Elements cannot be accessed directly by index. To reach a specific node, you must traverse the list from the head or tail, following the `next` or `prev` pointers.
- **No indexes:** Unlike arrays, doubly linked lists do not use indexes for element access.
- **Dynamic size:** The list can grow or shrink as nodes are added or removed.
- **Efficient insertions/removals:** Adding or removing nodes at the beginning or end is efficient (O(1)), and having both `next` and `prev` pointers allows for easier operations in both directions.
- **Extra memory usage:** Each node stores an additional pointer to the previous node, increasing memory usage compared to singly linked lists.

### Common Operations and Time Complexity

| Operation            | Time Complexity | Description                                       |
| -------------------- | --------------- | ------------------------------------------------- |
| Access (by position) | O(n)            | Must traverse from head or tail to reach position |
| Insertion at head    | O(1)            | Adjust head pointer and prev/next links           |
| Insertion at tail    | O(1)            | Adjust tail pointer and prev/next links           |
| Insertion in middle  | O(n)            | Must traverse to find insertion point             |
| Deletion at head     | O(1)            | Adjust head pointer and prev/next links           |
| Deletion at tail     | O(1)            | Adjust tail pointer and prev/next links           |
| Deletion in middle   | O(n)            | Must traverse to find deletion point              |
| Search               | O(n)            | Must traverse to find element                     |

### Advantages and Disadvantages

**Advantages:**

- Bidirectional traversal (forward and backward)
- Dynamic size
- Efficient insertion/deletion at both ends
- Easier deletion operations (no need to find previous node)
- Flexible navigation in both directions

**Disadvantages:**

- Linear-time access to arbitrary elements
- Extra memory overhead for previous pointers
- More complex implementation than singly linked lists
- Not cache-friendly due to non-contiguous memory allocation

### Practical Use Cases

Doubly linked lists are useful when:

- You need bidirectional traversal capabilities
- Efficient insertion/deletion at both ends is required
- You need to navigate both forward and backward through data
- Implementing data structures that require reverse operations
- Memory usage for extra pointers is acceptable

Real-world applications include:

- Implementation of deques (double-ended queues)
- Browser history navigation (forward and backward)
- Undo/redo functionality in applications
- Music playlist management (previous/next song)
- LRU (Least Recently Used) cache implementation
- Text editors with cursor movement

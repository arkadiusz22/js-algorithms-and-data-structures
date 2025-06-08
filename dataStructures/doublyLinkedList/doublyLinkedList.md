# Doubly Linked List

A doubly linked list is a linear data structure consisting of nodes. Each node contains a value and two pointers: one to the next node and one to the previous node. The list maintains references to the `head` (first node), `tail` (last node), and its `length`.

---

## Structure

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

---

## Key Characteristics

- **No random access**: Elements cannot be accessed directly by index; must traverse from head or tail.
- **No indexes**: Unlike arrays, no direct index-based access.
- **Dynamic size**: Grows or shrinks as nodes are added/removed.
- **Efficient insertions/removals**: O(1) at head or tail; O(n) in the middle.
- **Extra memory usage**: Each node stores an additional pointer to the previous node.

---

## Time Complexity

| Operation            | Time Complexity | Description                             |
| -------------------- | --------------- | --------------------------------------- |
| Access (by position) | O(n)            | Traverse from head or tail              |
| Insertion at head    | O(1)            | Adjust head pointer and prev/next links |
| Insertion at tail    | O(1)            | Adjust tail pointer and prev/next links |
| Insertion in middle  | O(n)            | Traverse to find insertion point        |
| Deletion at head     | O(1)            | Adjust head pointer and prev/next links |
| Deletion at tail     | O(1)            | Adjust tail pointer and prev/next links |
| Deletion in middle   | O(n)            | Traverse to find deletion point         |
| Search               | O(n)            | Traverse to find element                |

---

## Advantages

- Bidirectional traversal (forward and backward)
- Dynamic size
- Efficient insertion/deletion at both ends
- Easier deletion (no need to find previous node)
- Flexible navigation

## Disadvantages

- Linear-time access to arbitrary elements
- Extra memory overhead for previous pointers
- More complex implementation than singly linked lists
- Not cache-friendly (non-contiguous memory)

---

## Use Cases

- Deques (double-ended queues)
- Browser history navigation (forward/backward)
- Undo/redo functionality
- Music playlist management (previous/next song)
- LRU (Least Recently Used) cache
- Text editors with cursor movement

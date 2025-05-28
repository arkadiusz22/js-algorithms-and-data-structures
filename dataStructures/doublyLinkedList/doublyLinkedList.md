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

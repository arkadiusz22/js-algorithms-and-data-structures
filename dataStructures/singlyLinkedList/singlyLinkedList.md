# Singly Linked List

A singly linked list is a linear data structure consisting of nodes. Each node contains a value and a pointer to the next node. The list maintains references to the `head` (first node), `tail` (last node), and its `length`.

---

## Structure

```
+--------+    +--------+    +--------+    +--------+
|  Node  |    |  Node  |    |  Node  |    |  Node  |
| Value: |    | Value: |    | Value: |    | Value: |
|   10   |    |   20   |    |   30   |    |   40   |
| Next:  |---→| Next:  |---→| Next:  |---→| Next:  |---→ null
+--------+    +--------+    +--------+    +--------+
    ↑                                         ↑
   Head                                      Tail
```

---

## Key Characteristics

- **No random access**: Must traverse from head to reach a node.
- **No indexes**: No direct index-based access.
- **Dynamic size**: Grows or shrinks as nodes are added/removed.
- **Efficient insertions/removals**: O(1) at head; O(1) at tail if tail pointer is maintained; O(n) elsewhere.

---

## Time Complexity

| Operation            | Time Complexity | Description                       |
| -------------------- | --------------- | --------------------------------- |
| Access (by position) | O(n)            | Traverse from head                |
| Insertion at head    | O(1)            | Adjust head pointer               |
| Insertion at tail    | O(1)\*          | With tail pointer, otherwise O(n) |
| Insertion in middle  | O(n)            | Traverse to find insertion point  |
| Deletion at head     | O(1)            | Adjust head pointer               |
| Deletion at tail     | O(n)            | Traverse to find node before tail |
| Deletion in middle   | O(n)            | Traverse to find deletion point   |
| Search               | O(n)            | Traverse to find element          |

\*O(1) at tail only if a tail pointer is maintained.

---

## Advantages

- Simple implementation
- Dynamic size
- Efficient insertion/deletion at the beginning
- Memory efficient (no preallocated space)

## Disadvantages

- Linear-time access to arbitrary elements
- Reverse traversal not possible
- Extra memory for pointer storage
- Not cache-friendly (non-contiguous memory)

---

## Use Cases

- Stacks, queues, hash tables
- Symbol table management in compilers
- Undo functionality
- Music playlist (next song)
- Browser history (forward direction)

---

## Reversing a Singly Linked List

The `reverse()` method flips the direction of all the pointers in the list, reversing the order of elements.

**Initial state:**

```
Head → 10 → 20 → 30 → 40 → null
```

**After reversal:**

```
null ← 10 ← 20 ← 30 ← 40 ← Head
```

### Algorithm

1. Handle edge cases (empty or single-node list)
2. Set up initial pointers (current, previous, next)
3. Traverse and reverse pointers

**Time complexity:** O(n)
**Space complexity:** O(1)

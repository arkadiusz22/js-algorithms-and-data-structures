## Singly Linked List

A singly linked list is a linear data structure consisting of nodes. Each node contains a value and a pointer to the next node in the sequence. The list maintains references to the `head` (first node), `tail` (last node), and its `length`.

### Basic Structure

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

- **No random access:** Elements cannot be accessed directly by index. To reach a specific node, you must traverse the list from the head, following the `next` pointers.
- **No indexes:** Unlike arrays, singly linked lists do not use indexes for element access.
- **Dynamic size:** The list can grow or shrink as nodes are added or removed.
- **Efficient insertions/removals:** Adding or removing nodes at the beginning is efficient (O(1)), but operations at the end or in the middle require traversal (O(n)).

### Common Operations and Time Complexity

| Operation            | Time Complexity | Description                               |
| -------------------- | --------------- | ----------------------------------------- |
| Access (by position) | O(n)            | Must traverse from head to reach position |
| Insertion at head    | O(1)            | Simply adjust the head pointer            |
| Insertion at tail    | O(1)\*          | With tail pointer, otherwise O(n)         |
| Insertion in middle  | O(n)            | Must traverse to find insertion point     |
| Deletion at head     | O(1)            | Simply adjust the head pointer            |
| Deletion at tail     | O(n)            | Must traverse to find node before tail    |
| Deletion in middle   | O(n)            | Must traverse to find deletion point      |
| Search               | O(n)            | Must traverse to find element             |

\*Note: Insertion at tail is O(1) only if a tail pointer is maintained.

### Advantages and Disadvantages

**Advantages:**

- Simple implementation
- Dynamic size
- Efficient insertion/deletion at the beginning
- Memory efficient (no preallocated space)

**Disadvantages:**

- Linear-time access to arbitrary elements
- Reverse traversal is not possible
- Extra memory for pointer storage
- Not cache-friendly due to non-contiguous memory allocation

### Practical Use Cases

Singly linked lists are useful when:

- You need efficient insertions and deletions at the start of the list
- Memory is a concern and you need a dynamic data structure
- You don't require random access to elements
- You need to implement other data structures like stacks or queues
- You're working with limited memory environments

Real-world applications include:

- Implementation of stacks, queues, and hash tables
- Symbol table management in compiler design
- Undo functionality in applications
- Music playlist management (next song)
- Browser history navigation (forward direction)

## Reversing a Singly Linked List

The `reverse()` method flips the direction of all the pointers in the list, effectively reversing the order of elements.

Initial state:

```
Head → 10 → 20 → 30 → 40 → null
```

After reversal:

```
null ← 10 ← 20 ← 30 ← 40 ← Head
```

### Algorithm

1. **Handle edge cases**:

   - If the list is empty, return null
   - If the list has only one node, just return the list (no changes needed)

2. **Set up initial pointers**:

   - Save the original head node (which will become the new tail)
   - Swap the head and tail pointers
   - Initialize three tracking variables:
     - `currentNode`: The node we're currently processing (starts at original head)
     - `previousNode`: The node that will come after current in reversed list (starts as null)
     - `nextNode`: Temporary storage for the next node (initialized in the loop)

3. **Traverse and reverse**:
   - While the current node is not null:
     - Save the reference to the next node
     - Point the current node's next pointer to the previous node
     - Move the previous pointer to the current node
     - Move the current pointer to the saved next node

### Time and Space Complexity

- **Time complexity**: O(n) where n is the number of nodes in the list. We need to visit each node once.
- **Space complexity**: O(1) as we only use a fixed number of pointers regardless of list size.

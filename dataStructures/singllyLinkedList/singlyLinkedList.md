## Singly Linked List

A singly linked list is a linear data structure consisting of nodes. Each node contains a value and a pointer to the next node in the sequence. The list maintains references to the `head` (first node), `tail` (last node), and its `length`.

- **No random access:** Elements cannot be accessed directly by index. To reach a specific node, you must traverse the list from the head, following the `next` pointers.
- **No indexes:** Unlike arrays, singly linked lists do not use indexes for element access.
- **Dynamic size:** The list can grow or shrink as nodes are added or removed.
- **Efficient insertions/removals:** Adding or removing nodes at the beginning is efficient (O(1)), but operations at the end or in the middle require traversal (O(n)).

Singly linked lists are useful when you need efficient insertions and deletions at the start of the list and do not require random access.

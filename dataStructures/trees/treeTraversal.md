# Tree Traversal

Tree traversal is a systematic approach to visit every node within a tree data structure. It's essential for finding elements within non-binary-search trees and performing operations on all nodes.

---

## Traversal Approaches

There are **two main approaches**:

### 1. Breadth-First Search (BFS)

- **Horizontal traversal**: Explores the tree level by level, starting from the root.
- **Uses a queue** (FIFO)
- Visits nodes in order of their distance from the root
- **Time Complexity:** O(n)
- **Space Complexity:** O(w), where w is the maximum width of the tree

#### BFS Algorithm Steps

1. Place the root node in the queue
2. While the queue is not empty:
   - Dequeue the front node
   - Store the node's value
   - Enqueue left child (if exists)
   - Enqueue right child (if exists)
3. Return the array of node values in BFS order

#### Example

```
Tree:        10
           /    \
          6      15
         / \       \
        3   8      20

BFS Order: [10, 6, 15, 3, 8, 20]
```

#### Use Cases

- Shortest path in unweighted graphs
- Level-order processing
- Finding nodes at a specific distance
- Looking for the first occurence or closest match from the root
- Web crawling

---

### 2. Depth-First Search (DFS)

- **Vertical traversal**: Explores as deep as possible along each branch before backtracking
- **Uses a stack** (explicit or recursion)
- **Time Complexity:** O(n)
- **Space Complexity:** O(h), where h is the height of the tree

#### DFS Variants

- **Pre-order:** Root → Left → Right
- **In-order:** Left → Root → Right (sorted order in BST)
- **Post-order:** Left → Right → Root

#### Stack vs Recursion

| Approach  | Pros                            | Cons                                  |
| --------- | ------------------------------- | ------------------------------------- |
| Recursion | Cleaner, more readable, natural | Stack overflow risk, less control     |
| Explicit  | No stack overflow, more control | More complex, manual stack management |

#### DFS Traversal Orders

| Order      | Sequence            | Use Cases                                    |
| ---------- | ------------------- | -------------------------------------------- |
| Pre-order  | Root → Left → Right | Tree copies, prefix eval, serialization      |
| In-order   | Left → Root → Right | Sorted data from BST, infix eval, validation |
| Post-order | Left → Right → Root | Deletion, directory sizes, postfix eval      |

#### Example Traversal Results

```
Tree:        10
           /    \
          6      15
         / \       \
        3   8      20

Pre-order:  [10, 6, 3, 8, 15, 20]
In-order:   [3, 6, 8, 10, 15, 20]
Post-order: [3, 8, 6, 20, 15, 10]
```

> **Key Insight:** In-order traversal of a BST produces values in sorted order.

---

## BFS vs DFS Comparison

| Aspect         | BFS                             | DFS                           |
| -------------- | ------------------------------- | ----------------------------- |
| Data Structure | Queue (FIFO)                    | Stack/Recursion (LIFO)        |
| Memory Usage   | O(w) - width of tree            | O(h) - height of tree         |
| Best for       | Shortest path, level processing | Memory efficiency, deep trees |
| Implementation | Always iterative                | Recursive or iterative        |
| Order          | Level by level                  | Depth by depth                |

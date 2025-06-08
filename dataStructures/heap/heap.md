# Heaps

Heaps are a specialized tree-based data structure. There are several types of heaps, but the most common is the **binary heap**, which can be further divided into two types: **min heap** and **max heap**.

---

## What is a Heap?

- **Similar to a binary search tree**, but with different ordering rules.
- In a **max binary heap**, parent nodes are always **greater than or equal to** their child nodes.
- In a **min binary heap**, parent nodes are always **less than or equal to** their child nodes.
- **Each node can have at most two children.**
- **No ordering between siblings**: There is no rule about the relationship between the left and right children of a node.
- **Compactness**: A binary heap is as compact as possible—all levels are filled except possibly the last, which is filled from left to right.
- **Insertion order**: All left children are filled before a new lower level is created.
- The only real rule is the parent-child relationship: in a max heap, children are less than or equal to the parent; in a min heap, children are greater than or equal to the parent.

---

## Use Cases

- **Priority Queues**: Heaps are the underlying data structure for efficient priority queue implementations.
- **Graph Algorithms**: Used in algorithms like Dijkstra's and Prim's for efficiently retrieving the next minimum or maximum element.
- **Heap Sort**: An efficient comparison-based sorting algorithm.

---

## Key Properties

| Property              | Max Heap                   | Min Heap                   |
| --------------------- | -------------------------- | -------------------------- |
| Parent-Child Relation | Parent ≥ children          | Parent ≤ children          |
| Shape                 | Complete binary tree       | Complete binary tree       |
| Use Case              | Priority queue (max-first) | Priority queue (min-first) |

---

## Heap Representation

A binary heap can be efficiently represented using a built-in array. The relationships between parent and child nodes are determined by simple index calculations:

- For a node at index `n`:
  - **Left child** is at index `2n + 1`
  - **Right child** is at index `2n + 2`
- For a node at index `m` (child):
  - **Parent** is at index `Math.floor((m - 1) / 2)`

```
Index:    0   1   2   3   4   5   6
Array:   [10, 6, 8, 3, 4, 7, 2]
         |    |   |
         |    |   +-- right child of 0 (2)
         |    +------ left child of 0 (1)
         +----------- root (0)
```

> **Note:** This array-based representation allows for efficient access and manipulation of heap elements without explicit node objects.

---

## Time Complexity

| Operation | Time Complexity | Description                           |
| --------- | --------------- | ------------------------------------- |
| Insert    | O(log n)        | Bubble up to maintain heap property   |
| Extract   | O(log n)        | Bubble down to maintain heap property |
| Peek      | O(1)            | Access root element                   |
| Build     | O(n)            | Create heap from array                |

---

## Advantages

- Efficient priority queue implementation
- Guaranteed O(log n) insertion and extraction
- Memory efficient (array-based representation)
- Complete binary tree structure ensures balance

## Disadvantages

- No efficient searching for arbitrary elements
- Not suitable for sorted data retrieval
- Limited ordering (only min/max accessible)

---

## Use Cases

- **Priority Queues**: Task scheduling, emergency room triage
- **Graph Algorithms**: Dijkstra's shortest path, Prim's minimum spanning tree
- **Heap Sort**: Efficient comparison-based sorting algorithm
- **Event Simulation**: Managing events by priority/time
- **Memory Management**: Garbage collection algorithms

---

## Summary

- Heaps are complete binary trees with specific parent-child ordering.
- They are not necessarily sorted, but always maintain the heap property.
- Efficient for priority-based retrieval and insertion operations.

## Tree Traversal

Tree traversal is a systematic approach to visit every node within a tree data structure. It's essential for finding elements within non-binary-search trees and performing operations on all nodes.

There are **2 main approaches**:

### Breadth-First Search (BFS)

**Horizontal traversal** - explores the tree level by level, starting from the root and visiting all nodes at the current depth before moving to the next level.

**Characteristics:**

- Uses a **queue** data structure (FIFO - First In, First Out)
- Visits nodes in order of their distance from the root
- Optimal for finding the shortest path or closest nodes
- **Time Complexity:** O(n) where n is the number of nodes
- **Space Complexity:** O(w) where w is the maximum width of the tree

### Depth-First Search (DFS)

**Vertical traversal** - explores the tree by going as deep as possible along each branch before backtracking. Has **3 main variants**:

- **Pre-order:** Visit root → left subtree → right subtree
- **In-order:** Visit left subtree → root → right subtree (produces sorted order in BST)
- **Post-order:** Visit left subtree → right subtree → root

**Characteristics:**

- Uses a **stack** data structure or recursion
- More memory efficient for deep trees
- **Time Complexity:** O(n) where n is the number of nodes
- **Space Complexity:** O(h) where h is the height of the tree

---

## BFS Implementation Details

BFS approaches tree traversal **iteratively** using a queue to store nodes to be visited.

### Algorithm Steps:

1. **Initialize:** Place the root node in the queue and create an empty results array
2. **Loop:** Continue while the queue is not empty:
   - **Dequeue** the front node from the queue
   - **Store** the node's value in the results array
   - **Enqueue left child** if it exists
   - **Enqueue right child** if it exists
3. **Return** the array containing all node values in BFS order

### Example Traversal:

```
Tree:        10
           /    \
          6      15
         / \       \
        3   8      20

BFS Order: [10, 6, 15, 3, 8, 20]
```

### Use Cases:

- Finding the shortest path in unweighted graphs
- Level-order processing
- Finding nodes at a specific distance from the root
- Web crawling (exploring pages level by level)

---

## DFS Implementation Details

DFS approaches tree traversal using **recursion** or an explicit **stack** data structure. There are three distinct traversal orders, each serving different purposes.

### Stack vs Recursion for DFS

Both approaches have their trade-offs:

#### Recursion (Generally Preferred)

**Pros:**

- Cleaner, more readable code
- Naturally expresses tree structure
- Less boilerplate and fewer lines of code
- Automatic backtracking when function returns

**Cons:**

- Stack overflow risk for very deep trees (typically ~1000-10000 calls)
- Less control over traversal process
- Function call overhead

#### Explicit Stack (Better for Production)

**Pros:**

- No stack overflow limitations
- Handles very deep or unbalanced trees
- More control (can pause/resume traversal)
- Predictable memory usage

**Cons:**

- More complex and verbose code
- Manual stack management required
- More error-prone implementation

### DFS Traversal Orders

DFS has three distinct traversal orders, each serving different purposes based on when the root node is processed relative to its subtrees.

#### Pre-order Traversal

**Order:** Root → Left Subtree → Right Subtree

**Use Cases:** Creating tree copies, prefix expression evaluation, tree serialization, file system directory listing

#### In-order Traversal

**Order:** Left Subtree → Root → Right Subtree

**Use Cases:** Getting sorted data from BST, infix expression evaluation, validating BST properties, range queries

#### Post-order Traversal

**Order:** Left Subtree → Right Subtree → Root

**Use Cases:** Safely deleting tree nodes, calculating directory sizes, postfix expression evaluation, bottom-up computations

#### Example Traversal Results:

```
Tree:        10
           /    \
          6      15
         / \       \
        3   8      20

Pre-order:  [10, 6, 3, 8, 15, 20]
In-order:   [3, 6, 8, 10, 15, 20] (sorted order!)
Post-order: [3, 8, 6, 20, 15, 10]
```

**Key Insight:** In-order traversal of a Binary Search Tree always produces values in sorted order, making it particularly useful for data retrieval and validation operations.

### DFS vs BFS Comparison

| Aspect             | BFS                             | DFS                           |
| ------------------ | ------------------------------- | ----------------------------- |
| **Data Structure** | Queue (FIFO)                    | Stack/Recursion (LIFO)        |
| **Memory Usage**   | O(w) - width of tree            | O(h) - height of tree         |
| **Best for**       | Shortest path, level processing | Memory efficiency, deep trees |
| **Implementation** | Always iterative                | Recursive or iterative        |
| **Order**          | Level by level                  | Depth by depth                |

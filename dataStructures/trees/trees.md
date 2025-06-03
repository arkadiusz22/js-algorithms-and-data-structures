## Trees

A **tree** is a hierarchical, non-linear data structure made up of nodes connected by edges. Trees are widely used in computer science for representing relationships where each item (node) can have multiple sub-items (children), but each child has only one parent (except for the root, which has none).

### Types of Trees

Trees come in various forms, each suited for different applications:

- **General Tree**: Each node can have zero or more children, with no restriction on the number.
- **Binary Tree**: Each node has at most two children, commonly referred to as the left and right child.
- **Binary Search Tree (BST)**: A binary tree in which, for every node, all values in the left subtree are less than the node’s value, and all values in the right subtree are greater. This property enables efficient searching, insertion, and deletion—typically O(log n) time in the best and average cases when the tree is balanced.
- **Balanced Binary Tree**: A binary tree where the height difference between left and right subtrees is minimized, improving performance for operations.
- **AVL Tree**: A self-balancing binary search tree where the heights of the two child subtrees of any node differ by at most one.
- **B-Tree**: A self-balancing search tree commonly used in databases and file systems, where nodes can have more than two children and are optimized for systems that read and write large blocks of data.
- **Heap**: A specialized tree-based structure that satisfies the heap property (e.g., max-heap or min-heap), often used to implement priority queues.

Each type of tree has unique properties and use cases, making them fundamental tools in computer science.

### Tree Structure

A tree consists of nodes arranged in a parent/child relationship, typically visualized from top (root) to bottom (leaves). Each node can have multiple children, and there is a single root node at the top. Unlike linear data structures (like arrays or linked lists), trees allow for multiple paths and branching.

A singly linked list can be considered a special case of a tree where each node has at most one child.

#### Terminology

- **Root**: The topmost node in a tree.
- **Child**: A node directly connected to another node when moving away from the root.
- **Parent**: The node directly above a given node.
- **Siblings**: Nodes that share the same parent.
- **Leaf**: A node with no children.
- **Edge**: The connection between a parent and its child node.
- **Height**: The length of the longest path from a node to a leaf (root height determines tree height).
- **Depth**: The length of the path from the root to a specific node.
- **Level**: All nodes at the same depth form a level (root is at level 0).
- **Subtree**: A tree consisting of a node and all its descendants.
- **Degree**: The number of children a node has.

### Time and Space Complexities

Understanding the performance characteristics of different tree operations is crucial for choosing the right tree structure for your application. The complexities vary significantly based on the type of tree and whether it maintains balance.

#### Binary Search Tree (BST)

| Operation | Best/Average Case | Worst Case | Notes                                  |
| --------- | ----------------- | ---------- | -------------------------------------- |
| Search    | O(log n)          | O(n)       | Worst case occurs with unbalanced tree |
| Insertion | O(log n)          | O(n)       | Worst case occurs with unbalanced tree |
| Deletion  | O(log n)          | O(n)       | Worst case occurs with unbalanced tree |
| Traversal | O(n)              | O(n)       | Must visit all nodes                   |

**Space Complexity**: O(n) for storing n nodes, O(h) for recursive operations where h is height

#### Self-Balancing Trees (AVL, Red-Black)

| Operation | Time Complexity | Notes                              |
| --------- | --------------- | ---------------------------------- |
| Search    | O(log n)        | Guaranteed due to balance property |
| Insertion | O(log n)        | Includes rebalancing operations    |
| Deletion  | O(log n)        | Includes rebalancing operations    |
| Traversal | O(n)            | Must visit all nodes               |

**Space Complexity**: O(n) for storage, O(log n) for operations due to guaranteed height

#### B-Tree (order m)

| Operation | Time Complexity | Notes                                     |
| --------- | --------------- | ----------------------------------------- |
| Search    | O(log_m n)      | Logarithmic base m due to m-way branching |
| Insertion | O(log_m n)      | May require node splitting                |
| Deletion  | O(log_m n)      | May require node merging                  |

**Space Complexity**: O(n) for storage, optimized for disk I/O operations

#### Heap (Binary Heap)

| Operation       | Time Complexity | Notes                 |
| --------------- | --------------- | --------------------- |
| Insert          | O(log n)        | Bubble up operation   |
| Extract Min/Max | O(log n)        | Bubble down operation |
| Peek Min/Max    | O(1)            | Root element access   |
| Build Heap      | O(n)            | From unsorted array   |

**Space Complexity**: O(n) for storage, O(1) auxiliary space for most operations

#### General Considerations

- **Balanced vs Unbalanced**: The difference between O(log n) and O(n) operations often depends on whether the tree maintains balance
- **Memory Overhead**: Trees typically have higher memory overhead than arrays due to storing parent/child pointers
- **Cache Performance**: Trees may have poor cache locality compared to arrays, especially for traversal operations
- **Recursive vs Iterative**: Recursive implementations use O(h) stack space, while iterative versions can achieve O(1) auxiliary space

#### Use Cases for Trees

- Representing hierarchical data, such as the HTML DOM or file systems.
- Network routing schemes (e.g. unicast, broadcast, multicast).
- Abstract syntax trees in compilers and interpreters.
- Decision-making in artificial intelligence (e.g., minimax trees).
- Organizing folders and files in operating systems.
- Storing and representing JSON data, which is inherently tree-structured.

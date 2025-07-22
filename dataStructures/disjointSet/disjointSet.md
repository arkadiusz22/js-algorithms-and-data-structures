# Disjoint Set / Union-Find (DSU)

A **disjoint-set** (also called **union-find**, **merge–find set**, or **DSU**) is a data structure for efficiently managing a collection of non-overlapping sets. It supports fast **union** and **find** operations and is fundamental in algorithms for connectivity, partitioning, and many other applications.

---

## Key Characteristics

- **Disjoint sets**: No common elements; their intersection is always empty.
- **Forest representation**: Each set is a tree; the root is the representative. The forest is an undirected acyclic graph where each connected subgraph is a tree.
- **Parent array**: Each element points to its parent; the root points to itself.
- **Efficient queries**: Quickly determine if two elements are in the same set and merge sets.

---

## Core Operations

| Operation   | Description                                                                  |
| ----------- | ---------------------------------------------------------------------------- |
| MakeSet(x)  | Create a new set containing element x. Each element starts as its own parent |
| Find(x)     | Return the representative (root) of the set containing x                     |
| Union(x, y) | Merge the sets containing x and y by connecting their representatives        |

- **Array implementation**: DSU is usually implemented as an array. Each index represents an element; the value at that index is its parent.
- **Initialization**: For n elements, parent[i] = i for all i.
- **Support for any values**: Non-numeric elements can be mapped to indices (hashing).

---

## Optimizations

- **Path compression**: During Find, make each node on the path point directly to the root, flattening the tree and speeding up future queries.
- **Union by rank/size**: Always attach the smaller (by rank or size) tree under the larger one to keep trees shallow.
  - _Rank_: An upper bound on the tree's depth.
  - _Size_: Number of elements in the tree.
- **Combined**: Both optimizations together yield nearly constant time per operation (O(α(n)), where α(n) is the inverse Ackermann function).

---

## Time & Space Complexity

| Operation  | Time Complexity   | Space Complexity |
| ---------- | ----------------- | ---------------- |
| MakeSet    | O(n)              | O(n)             |
| Find/Union | O(α(n)) amortized | O(n)             |

- α(n) is the inverse Ackermann function (grows extremely slowly; ≤ 5 for all practical n)

---

## Implementation Notes & Tips

- Each subset is represented as an inverted tree; all nodes point up toward the root, which points to itself.
- To navigate the tree, follow parent pointers until a node points to itself (the root/representative).
- In the worst case (no optimizations), the tree can become a chain (O(n) find). Union by rank/size and path compression prevent this.
- DSU is simple, fast, and uses low memory.
- Can be extended to support any value types by mapping to indices.

---

## Example Use Cases

- Detect cycles in graphs
- Check network connectivity
- Kruskal's algorithm for minimum spanning tree
- Image processing (connected regions)
- Partitioning into non-overlapping subsets
- Dynamic connectivity (as edges are added)
- Offline range minimum queries, lowest common ancestor queries

---

## Advanced Variants & Extensions

- **Union by index/coin-flip linking**: Randomized heuristics for merging sets (less efficient than rank/size)
- **Storing additional information**: Size, parity, or other properties can be maintained at the representative node
- **Explicit set lists**: Store each set as a list for certain applications, merging smaller lists into larger ones
- **Maintaining tree structure**: Both compressed and uncompressed tree representations may be useful for some algorithms

---

## Summary

Disjoint-set data structures efficiently manage non-overlapping sets, supporting fast union and find operations. With path compression and union by rank/size, they are nearly optimal for a wide range of partitioning and connectivity problems.

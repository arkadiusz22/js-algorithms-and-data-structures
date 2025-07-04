# Graphs

A **graph** is a fundamental, non-linear data structure used to model relationships between objects. Graphs are made up of **vertices** (nodes) and **edges** (connections). They are more general than trees: each node can have multiple connections, and cycles are allowed.

---

## Key Characteristics

- **Nodes (vertices):** The objects or points in the graph
- **Edges:** The connections between nodes
- **Directed/Undirected:** Edges may have a direction (one-way) or not (two-way)
- **Weighted/Unweighted:** Edges may have associated values (weights) or not
- **Self-loops:** Edges that connect a node to itself
- **Multi-edges:** Multiple edges between the same pair of nodes

---

## Use Cases

- Social networks (users and their friends)
- Geographic mapping (cities and roads)
- Routing algorithms (network paths, web links)
- Dependency graphs (build systems, tasks)
- Recommendation engines
- File system organization

---

## Types of Graphs

- **Undirected Graph:** Edges have no direction (A—B)
- **Directed Graph (Digraph):** Edges have direction (A → B)
- **Weighted Graph:** Edges have values (e.g., distances, costs)
- **Unweighted Graph:** Edges have no values
- **Multigraph:** Allows multiple edges between nodes
- **Pseudograph:** Allows both multi-edges and self-loops

---

## Graph Structure & Terminology

- **Vertex (Node):** Fundamental unit of a graph
- **Edge:** Connection between two vertices
- **Adjacent:** Two vertices connected by an edge
- **Degree:** Number of edges connected to a vertex
- **Path:** Sequence of edges connecting vertices
- **Cycle:** Path that starts and ends at the same vertex

---

## Connectivity

- **Connected (undirected):** Path exists between every pair of nodes
- **Disconnected:** Some nodes cannot reach others
- **Strongly connected (directed):** Path exists from every node to every other node
- **Weakly connected (directed):** Underlying undirected graph is connected

---

## Cyclic vs. Acyclic

- **Cyclic:** Contains at least one cycle
- **Acyclic:** Contains no cycles
- **Directed Acyclic Graph (DAG):** Directed, no cycles; used for scheduling, dependencies

---

## Graph Representation

- **Adjacency Matrix:** 2D array; cell [i][j] indicates edge (or weight) from i to j. Efficient for dense graphs, O(v^2) space.
- **Adjacency List:** Array or hash table; each key is a vertex, value is a list of adjacent vertices. Efficient for sparse graphs and large real-world data.

---

## Time & Space Complexity

Let v = number of vertices, e = number of edges.

| Operation     | Adjacency List | Adjacency Matrix |
| ------------- | -------------- | ---------------- |
| Add vertex    | O(1)           | O(v^2)           |
| Add edge      | O(1)           | O(1)             |
| Remove vertex | O(v+e)         | O(v^2)           |
| Remove edge   | O(e)           | O(1)             |
| Query edge    | O(v+e)         | O(1)             |
| Storage       | O(v+e)         | O(v^2)           |

---

## Common Algorithms

- **Breadth-First Search (BFS):** Level-order traversal, shortest path in unweighted graphs
- **Depth-First Search (DFS):** Explores as deep as possible, used for cycle detection, topological sort
- **Dijkstra's Algorithm:** Shortest path in weighted graphs (non-negative weights)
- **Kruskal's/Prim's Algorithms:** Minimum spanning tree
- **Topological Sort:** Orders nodes in a DAG

### Traversal Applications

- Searching for nodes or paths
- Pathfinding (shortest/any path)
- Cycle detection
- Component analysis (connected components)

---

## Tips & Best Practices

- Use adjacency lists for sparse or large graphs
- Use adjacency matrices for dense graphs or fast edge queries
- Choose representation based on graph density and required operations
- Real-world graphs are often large and sparse

---

## Summary

Graphs are versatile structures for modeling relationships and networks. Understanding their types, representations, and algorithms is essential for solving many real-world and computational problems.

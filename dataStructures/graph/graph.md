# Graph

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

## Tips & Best Practices

- Use adjacency lists for sparse or large graphs
- Use adjacency matrices for dense graphs or fast edge queries
- Choose representation based on graph density and required operations
- Real-world graphs are often large and sparse

---

## Graph Traversal

Traversal means visiting, updating, or checking each vertex in a graph. In real-world applications, traversing a graph may involve finding the nearest neighbors, the most similar nodes, or the shortest path between two vertices. It does not necessarily mean accessing every vertex in the graph.

Unlike trees, which have a root element, traversing a graph requires defining a starting point.

### Common Algorithms

- **Breadth-First Search (BFS):** Visits nodes level by level; finds the shortest path in unweighted graphs.
- **Depth-First Search (DFS):** Explores as deep as possible before backtracking; used for cycle detection and topological sorting.
- **Dijkstra's Algorithm:** Finds the shortest path in weighted graphs with non-negative weights.
- **Kruskal's/Prim's Algorithms:** Find the minimum spanning tree.
- **Topological Sort:** Orders nodes in a Directed Acyclic Graph (DAG).

### Traversal Applications

- Searching for nodes or paths
- Pathfinding (e.g., shortest path problems, GPS, mazes)
- Cycle detection
- Component analysis (finding connected components)
- Web crawling
- Finding closest matches or recommendations

### Depth-First vs. Breadth-First Graph Traversal

- **Depth-First:** Delays backtracking as long as possible; visits the children, siblings, or neighbors of a visited vertex before backtracking to the previous vertex.
- **Breadth-First:** Backtracks as early as possible; visits all neighbors of the current vertex, then backtracks and visits all neighbors of the next vertex.
- **Critical feature:** Remember already visited vertices to avoid cycles and redundant work.
- **Important feature:** Have a strategy for selecting which neighbor to visit first (e.g., visit neighbors with lower values, closer distance, or alphabetically first).
- **Dead ends:** If all neighbors have been visited, backtrack to the previously visited vertex.

---

## Dijkstra's Algorithm

Algorithm for finding the shortest path between two selected vertices in a weighted graph, with non-negative edge weights, using a priority queue.

### Modern applications

- GPS navigation (finding shortest driving routes)
- Network routing (optimal data transfer paths)
- Pathfinding in games and maps
- Analyzing social or transportation networks, e.g disease spread, cheapes airline connection.

### Key Points

- Works only with non-negative edge weights.
- Always explore the closest unvisited vertex.
- Update distances only if a shorter path is found.
- Track the previous vertex with shortest path for each node to reconstruct the shortest path.

### Steps

1. List all nodes as unvisited.
2. Set the start node distance to 0 and all other nodes to infinity.
3. While there are unvisited nodes with finite distances:
   - Choose the unvisited node with the smallest distance.
   - For each unvisited neighbor, calculate the distance via this node and update if it’s smaller.
   - Mark the current node as visited.
4. When no unvisited nodes with finite distances remain, the recorded distances are the shortest paths.

## Summary

Graphs are versatile structures for modeling relationships and networks. Understanding their types, representations, and algorithms is essential for solving many real-world and computational problems.

import { Stack } from "../stacksAndQueues/stack.js";
import { Queue } from "../stacksAndQueues/queue.js";
import { PriorityQueue } from "../heap/priorityQueue.js";

/**
 * Represents an undirected, weighted graph data structure capable of storing vertices as strings.
 */
export class Graph {
  constructor() {
    /** @type {Record<string, Array<{ name: string, weight: number }>>} */
    this.adjacencyList = {};
  }

  /** @param {string} vertex */
  addVertex(vertex) {
    this._validateVertexName(vertex);

    if (this._hasVertex(vertex)) {
      throw new Error(`Vertex '${vertex}' already exists.`);
    }

    this.adjacencyList[vertex] = [];
  }

  /**
   * @param {string} vertex1
   * @param {string} vertex2
   * @param {number} weight
   */
  addEdge(vertex1, vertex2, weight) {
    for (const vertex of [vertex1, vertex2]) {
      this._validateVertexName(vertex);

      if (!this._hasVertex(vertex)) {
        throw new Error(`There is no vertex '${vertex}' in the graph.`);
      }
    }

    if (vertex1 === vertex2) {
      throw new Error(`Self-loops are not allowed.`);
    }

    if (!weight || typeof weight !== "number" || weight <= 0) {
      throw new Error(`'${weight}' is not a valid edge weight.`);
    }

    if (this.adjacencyList[vertex1].some((vertex) => vertex.name === vertex2)) {
      throw new Error(`There is already an edge from vertex '${vertex1}' to vertex '${vertex2}'.`);
    }

    this.adjacencyList[vertex1].push({ name: vertex2, weight });
    this.adjacencyList[vertex2].push({ name: vertex1, weight });
  }

  /**
   * @param {string} vertex1
   * @param {string} vertex2
   */
  removeEdge(vertex1, vertex2) {
    for (const vertex of [vertex1, vertex2]) {
      this._validateVertexName(vertex);

      if (!this._hasVertex(vertex)) {
        throw new Error(`There is no vertex '${vertex}' in the graph.`);
      }
    }

    if (vertex1 === vertex2) {
      throw new Error(`Self-loops are not allowed.`);
    }

    if (!this.adjacencyList[vertex1].some((vertex) => vertex.name === vertex2)) {
      throw new Error(`There is no edge from vertex '${vertex1}' to vertex '${vertex2}'.`);
    }

    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((vertex) => vertex.name !== vertex2);
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter((vertex) => vertex.name !== vertex1);
  }

  /**
   * @param {string} vertex
   */
  removeVertex(vertex) {
    this._validateVertexName(vertex);

    if (!this._hasVertex(vertex)) {
      throw new Error(`There is no vertex '${vertex}' in the graph.`);
    }

    const vertexEdges = [...this.adjacencyList[vertex]];

    for (const vertexEdge of vertexEdges) {
      this.removeEdge(vertex, vertexEdge.name);
    }

    delete this.adjacencyList[vertex];
  }

  /**
   * @param {string} startVertex
   * @returns {Array<string>}
   */
  depthFirstRecursiveTraverse(startVertex) {
    this._validateVertexName(startVertex);

    if (!this._hasVertex(startVertex)) {
      throw new Error(`There is no vertex '${startVertex}' in the graph.`);
    }

    const adjacencyList = this.adjacencyList;

    /** @type {Array<string>} */
    const traversedOrder = [];

    /** @type {Record<string, boolean>} */
    const visitedVertices = {};

    /**
     * @param {string} vertex
     */
    function depthFirstRecursiveTraverseHelper(vertex) {
      traversedOrder.push(vertex);
      visitedVertices[vertex] = true;
      const neighbors = adjacencyList[vertex];

      if (!neighbors || !neighbors.length) return;

      // Sort neighbors alphabetically for deterministic traversal order
      for (const neighbor of neighbors.sort((a, b) => a.name.localeCompare(b.name))) {
        if (visitedVertices[neighbor.name]) continue;
        depthFirstRecursiveTraverseHelper(neighbor.name);
      }
    }

    depthFirstRecursiveTraverseHelper(startVertex);

    return traversedOrder;
  }

  /**
   * @param {string} startVertex
   * @returns {Array<string>}
   */
  depthFirstIterativeTraverse(startVertex) {
    this._validateVertexName(startVertex);

    if (!this._hasVertex(startVertex)) {
      throw new Error(`There is no vertex '${startVertex}' in the graph.`);
    }

    /** @type {Stack<string>} */
    const stack = new Stack();

    /** @type {Array<string>} */
    const traversedOrder = [];

    /** @type {Record<string, boolean>} */
    const visitedVertices = {};

    stack.push(startVertex);

    while (!stack.isEmpty()) {
      const vertex = stack.pop();
      if (vertex === null) continue;

      if (visitedVertices[vertex]) continue;

      traversedOrder.push(vertex);
      visitedVertices[vertex] = true;
      const neighbors = [...this.adjacencyList[vertex]];

      // Push neighbors to the stack in reverse alphabetical order so the alphabetically first neighbor is processed first, matching recursive DFS order
      for (const neighbor of neighbors.sort((a, b) => b.name.localeCompare(a.name))) {
        stack.push(neighbor.name);
      }
    }

    return traversedOrder;
  }

  /**
   * @param {string} startVertex
   * @returns {Array<string>}
   */
  breadthFirstTraverse(startVertex) {
    this._validateVertexName(startVertex);

    if (!this._hasVertex(startVertex)) {
      throw new Error(`There is no vertex '${startVertex}' in the graph.`);
    }

    /** @type {Queue<string>} */
    const queue = new Queue();

    /** @type {Array<string>} */
    const traversedOrder = [];

    /** @type {Record<string, boolean>} */
    const visitedVertices = {};

    visitedVertices[startVertex] = true;
    queue.enqueue(startVertex);

    while (!queue.isEmpty()) {
      const vertex = queue.dequeue();
      if (vertex === null) continue;

      traversedOrder.push(vertex);
      const neighbors = [...this.adjacencyList[vertex]];

      // Sort neighbors alphabetically for deterministic traversal order
      for (const neighbor of neighbors.sort((a, b) => a.name.localeCompare(b.name))) {
        if (!visitedVertices[neighbor.name]) {
          visitedVertices[neighbor.name] = true;
          queue.enqueue(neighbor.name);
        }
      }
    }

    return traversedOrder;
  }

  /**
   * @param {string} startVertex
   * @param {string} endVertex
   * @returns {Array<string> | null} An array of vertex names representing the shortest path, or null if no path exists.
   */
  findShortestPath(startVertex, endVertex) {
    for (const vertex of [startVertex, endVertex]) {
      this._validateVertexName(vertex);

      if (!this._hasVertex(vertex)) {
        throw new Error(`There is no vertex '${vertex}' in the graph.`);
      }
    }

    if (startVertex === endVertex) {
      throw new Error(`Self-loops are not allowed.`);
    }

    /** @type {Record<string, number>} */
    const shortestDistances = {};

    /** @type {PriorityQueue<string>} */
    const unvisitedQueue = new PriorityQueue();

    /** @type {Record<string, string | null>} */
    const predecessors = {};

    for (const vertex of Object.keys(this.adjacencyList)) {
      shortestDistances[vertex] = vertex === startVertex ? 0 : Infinity;
      predecessors[vertex] = null;
    }
    unvisitedQueue.enqueue(startVertex, 0);

    while (!unvisitedQueue.isEmpty()) {
      const currentVertexName = unvisitedQueue.dequeue();

      if (currentVertexName === null) continue;

      if (shortestDistances[currentVertexName] === Infinity) break;

      if (currentVertexName === endVertex) {
        const shortestPath = [];
        let current = endVertex;

        while (current) {
          shortestPath.unshift(current);
          current = predecessors[current];
        }

        // If no path exists, the reconstructed path will not start with the start vertex
        if (shortestPath[0] !== startVertex) return null;

        return shortestPath;
      }

      // Sort neighbors alphabetically for deterministic order
      for (const neighborVertex of [...this.adjacencyList[currentVertexName]].sort((a, b) =>
        a.name.localeCompare(b.name)
      )) {
        const newDistance = shortestDistances[currentVertexName] + neighborVertex.weight;

        if (newDistance < shortestDistances[neighborVertex.name]) {
          shortestDistances[neighborVertex.name] = newDistance;
          predecessors[neighborVertex.name] = currentVertexName;
          unvisitedQueue.enqueue(neighborVertex.name, newDistance);
        }
      }
    }

    return null;
  }

  /**
   * @param {string} vertex
   */
  _validateVertexName(vertex) {
    if (!vertex || typeof vertex !== "string" || !vertex.length) {
      throw new Error(`'${vertex}' is not a valid vertex.`);
    }
  }

  /**
   * @param {string} vertex
   * @returns {boolean}
   */
  _hasVertex(vertex) {
    return Object.hasOwn(this.adjacencyList, vertex);
  }
}

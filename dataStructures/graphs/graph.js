/**
 * Represents an undirected graph data structure capable of storing strings as vertices and edges.
 */
export class Graph {
  constructor() {
    /** @type {Record<string, string[]>} */
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
   */
  addEdge(vertex1, vertex2) {
    for (const vertex of [vertex1, vertex2]) {
      this._validateVertexName(vertex);

      if (!this._hasVertex(vertex)) {
        throw new Error(`There is no vertex '${vertex}' in the graph.`);
      }
    }

    if (vertex1 === vertex2) {
      throw new Error(`Self-loops are not allowed.`);
    }

    if (this.adjacencyList[vertex1].includes(vertex2)) {
      throw new Error(`There is already an edge from vertex '${vertex1}' to vertex '${vertex2}'.`);
    }

    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
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

    if (!this.adjacencyList[vertex1].includes(vertex2)) {
      throw new Error(`There is no edge from vertex '${vertex1}' to vertex '${vertex2}'.`);
    }

    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((vertex) => vertex !== vertex2);
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter((vertex) => vertex !== vertex1);
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
      this.removeEdge(vertex, vertexEdge);
    }

    delete this.adjacencyList[vertex];
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

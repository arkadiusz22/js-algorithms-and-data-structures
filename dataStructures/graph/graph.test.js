import { Graph } from "./graph.js";
import { describe, expect, test } from "@jest/globals";

describe("Graph", () => {
  describe("addVertex", () => {
    test("addVertex should correctly add vertices", () => {
      const graph = new Graph();

      graph.addVertex("Tokyo");
      graph.addVertex("Warsaw");
      graph.addVertex("Paris");
      graph.addVertex("London");

      expect(Object.keys(graph.adjacencyList).length).toBe(4);
      expect(graph.adjacencyList["Tokyo"]).toStrictEqual([]);
      expect(graph.adjacencyList["Warsaw"]).toStrictEqual([]);
      expect(graph.adjacencyList["Paris"]).toStrictEqual([]);
      expect(graph.adjacencyList["London"]).toStrictEqual([]);
    });

    test("addVertex should throw error for invalid name", () => {
      const graph = new Graph();

      expect(() => graph.addVertex()).toThrowError("'undefined' is not a valid vertex.");
    });

    test("addVertex should throw error when overwriting existing vertex", () => {
      const graph = new Graph();

      graph.addVertex("Tokyo");
      expect(() => graph.addVertex("Tokyo")).toThrowError("Vertex 'Tokyo' already exists.");
    });
  });

  describe("addEdge", () => {
    test("addEdge should correctly add edges", () => {
      const graph = new Graph();

      graph.addVertex("Tokyo");
      graph.addVertex("Warsaw");
      graph.addVertex("Paris");
      graph.addVertex("London");

      graph.addEdge("Tokyo", "Paris");
      graph.addEdge("Paris", "Warsaw");
      graph.addEdge("London", "Warsaw");
      graph.addEdge("Tokyo", "Warsaw");

      expect(Object.keys(graph.adjacencyList).length).toBe(4);
      expect(graph.adjacencyList["Tokyo"]).toStrictEqual(["Paris", "Warsaw"]);
      expect(graph.adjacencyList["Warsaw"]).toStrictEqual(["Paris", "London", "Tokyo"]);
      expect(graph.adjacencyList["Paris"]).toStrictEqual(["Tokyo", "Warsaw"]);
      expect(graph.adjacencyList["London"]).toStrictEqual(["Warsaw"]);
    });

    test("addEdge should throw error for invalid name", () => {
      const graph = new Graph();

      expect(() => graph.addEdge()).toThrowError("'undefined' is not a valid vertex.");
    });

    test("addEdge should throw error for not existing vertex", () => {
      const graph = new Graph();

      expect(() => graph.addEdge("Tokyo")).toThrowError("There is no vertex 'Tokyo' in the graph.");
    });

    test("addEdge should throw error for self looping edge", () => {
      const graph = new Graph();

      graph.addVertex("Tokyo");

      expect(() => graph.addEdge("Tokyo", "Tokyo")).toThrowError("Self-loops are not allowed.");
    });

    test("addEdge should throw error for duplicated edge", () => {
      const graph = new Graph();

      graph.addVertex("Tokyo");
      graph.addVertex("Warsaw");
      graph.addEdge("Tokyo", "Warsaw");

      expect(() => graph.addEdge("Tokyo", "Warsaw")).toThrowError(
        "There is already an edge from vertex 'Tokyo' to vertex 'Warsaw'."
      );
    });
  });

  describe("removeEdge", () => {
    test("removeEdge should correctly remove edges", () => {
      const graph = new Graph();

      graph.addVertex("Tokyo");
      graph.addVertex("Warsaw");
      graph.addVertex("Paris");
      graph.addVertex("London");

      graph.addEdge("Tokyo", "Paris");
      graph.addEdge("Paris", "Warsaw");
      graph.addEdge("London", "Warsaw");
      graph.addEdge("Tokyo", "Warsaw");

      graph.removeEdge("Tokyo", "Warsaw");
      graph.removeEdge("Paris", "Tokyo");

      expect(Object.keys(graph.adjacencyList).length).toBe(4);
      expect(graph.adjacencyList["Tokyo"]).toStrictEqual([]);
      expect(graph.adjacencyList["Warsaw"]).toStrictEqual(["Paris", "London"]);
      expect(graph.adjacencyList["Paris"]).toStrictEqual(["Warsaw"]);
      expect(graph.adjacencyList["London"]).toStrictEqual(["Warsaw"]);
    });

    test("removeEdge should throw error for invalid name", () => {
      const graph = new Graph();

      expect(() => graph.removeEdge()).toThrowError("'undefined' is not a valid vertex.");
    });

    test("removeEdge should throw error for not existing vertex", () => {
      const graph = new Graph();

      expect(() => graph.removeEdge("Tokyo")).toThrowError("There is no vertex 'Tokyo' in the graph.");
    });

    test("removeEdge should throw error for self looping edge", () => {
      const graph = new Graph();

      graph.addVertex("Tokyo");

      expect(() => graph.removeEdge("Tokyo", "Tokyo")).toThrowError("Self-loops are not allowed.");
    });

    test("removeEdge should throw error for not existing edge", () => {
      const graph = new Graph();

      graph.addVertex("Tokyo");
      graph.addVertex("Warsaw");

      expect(() => graph.removeEdge("Tokyo", "Warsaw")).toThrowError(
        "There is no edge from vertex 'Tokyo' to vertex 'Warsaw'."
      );
    });
  });

  describe("removeVertex", () => {
    test("removeVertex should correctly removes vertex without edges", () => {
      const graph = new Graph();

      graph.addVertex("Tokyo");
      graph.addVertex("Warsaw");
      graph.addVertex("Paris");
      graph.addVertex("London");

      graph.removeVertex("Warsaw");
      graph.removeVertex("Paris");

      expect(Object.keys(graph.adjacencyList).length).toBe(2);
      expect(graph.adjacencyList["Tokyo"]).toStrictEqual([]);
      expect(graph.adjacencyList["London"]).toStrictEqual([]);
      expect(graph.adjacencyList["Paris"]).not.toBeDefined();
      expect(graph.adjacencyList["Warsaw"]).not.toBeDefined();
    });

    test("removeVertex should correctly removes vertex and all of its edges", () => {
      const graph = new Graph();

      graph.addVertex("Tokyo");
      graph.addVertex("Warsaw");
      graph.addVertex("Paris");
      graph.addVertex("London");

      graph.addEdge("Tokyo", "Paris");
      graph.addEdge("Paris", "Warsaw");
      graph.addEdge("London", "Warsaw");
      graph.addEdge("Tokyo", "Warsaw");

      graph.removeVertex("Warsaw");

      expect(Object.keys(graph.adjacencyList).length).toBe(3);
      expect(graph.adjacencyList["Tokyo"]).toStrictEqual(["Paris"]);
      expect(graph.adjacencyList["Paris"]).toStrictEqual(["Tokyo"]);
      expect(graph.adjacencyList["London"]).toStrictEqual([]);
      expect(graph.adjacencyList["Warsaw"]).not.toBeDefined();
    });

    test("removeVertex should throw error for invalid name", () => {
      const graph = new Graph();

      expect(() => graph.removeVertex()).toThrowError("'undefined' is not a valid vertex.");
    });

    test("removeVertex should throw error for not existing vertex", () => {
      const graph = new Graph();

      expect(() => graph.removeVertex("Tokyo")).toThrowError("There is no vertex 'Tokyo' in the graph.");
    });
  });

  describe("depthFirstTraverse methods", () => {
    const traverseMethods = [
      ["depthFirstRecursiveTraverse", (graph, vertex) => graph.depthFirstRecursiveTraverse(vertex)],
      ["depthFirstIterativeTraverse", (graph, vertex) => graph.depthFirstIterativeTraverse(vertex)],
    ];

    test.each(traverseMethods)("%s should return correct order of traversed vertices", (methodName, traverse) => {
      const graph = new Graph();

      graph.addVertex("A");
      graph.addVertex("B");
      graph.addVertex("C");
      graph.addVertex("D");
      graph.addVertex("E");
      graph.addVertex("F");

      graph.addEdge("A", "B");
      graph.addEdge("A", "C");
      graph.addEdge("B", "D");
      graph.addEdge("C", "E");
      graph.addEdge("D", "E");
      graph.addEdge("D", "F");
      graph.addEdge("E", "F");

      expect(traverse(graph, "A")).toStrictEqual(["A", "B", "D", "E", "C", "F"]);
    });

    test.each(traverseMethods)(
      "%s should return only the starting vertex if it is disconnected",
      (methodName, traverse) => {
        const graph = new Graph();

        graph.addVertex("A");
        graph.addVertex("B");
        graph.addVertex("C");

        expect(traverse(graph, "B")).toStrictEqual(["B"]);
      }
    );

    test.each(traverseMethods)("%s should throw error for invalid startingVertex", (methodName, traverse) => {
      const graph = new Graph();

      expect(() => traverse(graph)).toThrowError("'undefined' is not a valid vertex.");
    });

    test.each(traverseMethods)("%s should throw error not existing startingVertex", (methodName, traverse) => {
      const graph = new Graph();

      expect(() => traverse(graph, "A")).toThrowError("There is no vertex 'A' in the graph.");
    });
  });

  describe("breadthFirstTraverse", () => {
    test("breadthFirstTraverse should return correct order of traversed vertices", () => {
      const graph = new Graph();

      graph.addVertex("A");
      graph.addVertex("B");
      graph.addVertex("C");
      graph.addVertex("D");
      graph.addVertex("E");
      graph.addVertex("F");

      graph.addEdge("A", "B");
      graph.addEdge("A", "C");
      graph.addEdge("B", "D");
      graph.addEdge("C", "E");
      graph.addEdge("D", "E");
      graph.addEdge("D", "F");
      graph.addEdge("E", "F");

      expect(graph.breadthFirstTraverse("A")).toStrictEqual(["A", "B", "C", "D", "E", "F"]);
    });

    test("breadthFirstTraverse should return only the starting vertex if it is disconnected", () => {
      const graph = new Graph();

      graph.addVertex("A");
      graph.addVertex("B");
      graph.addVertex("C");

      expect(graph.breadthFirstTraverse("B")).toStrictEqual(["B"]);
    });

    test("breadthFirstTraverse should throw error for invalid startingVertex", () => {
      const graph = new Graph();

      expect(() => graph.breadthFirstTraverse()).toThrowError("'undefined' is not a valid vertex.");
    });

    test("breadthFirstTraverse should throw error not existing startingVertex", () => {
      const graph = new Graph();

      expect(() => graph.breadthFirstTraverse("A")).toThrowError("There is no vertex 'A' in the graph.");
    });
  });

  describe("utilities", () => {
    test("_validateVertexName should throw error for invalid name", () => {
      const graph = new Graph();

      expect(() => graph._validateVertexName()).toThrowError("'undefined' is not a valid vertex.");
      expect(() => graph._validateVertexName(123)).toThrowError("'123' is not a valid vertex.");
      expect(() => graph._validateVertexName("")).toThrowError("'' is not a valid vertex.");
    });

    test("_validateVertexName should pass for valid name", () => {
      const graph = new Graph();

      expect(() => graph._validateVertexName("Tokyo")).not.toThrowError();
    });

    test("_hasVertex should return false for not existing vertex", () => {
      const graph = new Graph();

      expect(graph._hasVertex("Tokyo")).toBe(false);
    });

    test("_hasVertex should return true for existing vertex", () => {
      const graph = new Graph();

      graph.addVertex("Tokyo");

      expect(graph._hasVertex("Tokyo")).toBe(true);
    });
  });
});

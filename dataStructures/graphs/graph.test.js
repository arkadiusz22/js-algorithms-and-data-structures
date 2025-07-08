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

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

      expect(() => graph.addVertex()).toThrow("'undefined' is not a valid vertex.");
    });

    test("addVertex should throw error when overwriting existing vertex", () => {
      const graph = new Graph();

      graph.addVertex("Tokyo");
      expect(() => graph.addVertex("Tokyo")).toThrow("Vertex 'Tokyo' already exists.");
    });
  });

  describe("addEdge", () => {
    test("addEdge should correctly add edges", () => {
      const graph = new Graph();

      graph.addVertex("Tokyo");
      graph.addVertex("Warsaw");
      graph.addVertex("Paris");
      graph.addVertex("London");

      graph.addEdge("Tokyo", "Paris", 1);
      graph.addEdge("Paris", "Warsaw", 2);
      graph.addEdge("London", "Warsaw", 3);
      graph.addEdge("Tokyo", "Warsaw", 4);

      expect(Object.keys(graph.adjacencyList).length).toBe(4);
      expect(graph.adjacencyList["Tokyo"]).toStrictEqual([
        { name: "Paris", weight: 1 },
        { name: "Warsaw", weight: 4 },
      ]);
      expect(graph.adjacencyList["Warsaw"]).toStrictEqual([
        { name: "Paris", weight: 2 },
        { name: "London", weight: 3 },
        { name: "Tokyo", weight: 4 },
      ]);
      expect(graph.adjacencyList["Paris"]).toStrictEqual([
        { name: "Tokyo", weight: 1 },
        { name: "Warsaw", weight: 2 },
      ]);
      expect(graph.adjacencyList["London"]).toStrictEqual([{ name: "Warsaw", weight: 3 }]);
    });

    test("addEdge should throw error for invalid name", () => {
      const graph = new Graph();

      expect(() => graph.addEdge()).toThrow("'undefined' is not a valid vertex.");
    });

    test("addEdge should throw error for not existing vertex", () => {
      const graph = new Graph();

      expect(() => graph.addEdge("Tokyo")).toThrow("There is no vertex 'Tokyo' in the graph.");
    });

    test("addEdge should throw error for self looping edge", () => {
      const graph = new Graph();

      graph.addVertex("Tokyo");

      expect(() => graph.addEdge("Tokyo", "Tokyo")).toThrow("Self-loops are not allowed.");
    });

    test("addEdge should throw error for duplicated edge", () => {
      const graph = new Graph();

      graph.addVertex("Tokyo");
      graph.addVertex("Warsaw");
      graph.addEdge("Tokyo", "Warsaw", 4);

      expect(() => graph.addEdge("Tokyo", "Warsaw", 4)).toThrow(
        "There is already an edge from vertex 'Tokyo' to vertex 'Warsaw'."
      );
    });

    test("addEdge should throw error for missing weight", () => {
      const graph = new Graph();

      graph.addVertex("Tokyo");
      graph.addVertex("Warsaw");

      expect(() => graph.addEdge("Tokyo", "Warsaw")).toThrow("'undefined' is not a valid edge weight.");
    });

    test("addEdge should throw error for negative weight", () => {
      const graph = new Graph();

      graph.addVertex("Tokyo");
      graph.addVertex("Warsaw");

      expect(() => graph.addEdge("Tokyo", "Warsaw", -4).toThrow("'-4' is not a valid edge weight."));
    });
  });

  describe("removeEdge", () => {
    test("removeEdge should correctly remove edges", () => {
      const graph = new Graph();

      graph.addVertex("Tokyo");
      graph.addVertex("Warsaw");
      graph.addVertex("Paris");
      graph.addVertex("London");

      graph.addEdge("Tokyo", "Paris", 1);
      graph.addEdge("Paris", "Warsaw", 2);
      graph.addEdge("London", "Warsaw", 3);
      graph.addEdge("Tokyo", "Warsaw", 4);

      graph.removeEdge("Tokyo", "Warsaw");
      graph.removeEdge("Paris", "Tokyo");

      expect(Object.keys(graph.adjacencyList).length).toBe(4);
      expect(graph.adjacencyList["Tokyo"]).toStrictEqual([]);
      expect(graph.adjacencyList["Warsaw"]).toStrictEqual([
        { name: "Paris", weight: 2 },
        { name: "London", weight: 3 },
      ]);
      expect(graph.adjacencyList["Paris"]).toStrictEqual([{ name: "Warsaw", weight: 2 }]);
      expect(graph.adjacencyList["London"]).toStrictEqual([{ name: "Warsaw", weight: 3 }]);
    });

    test("removeEdge should throw error for invalid name", () => {
      const graph = new Graph();

      expect(() => graph.removeEdge()).toThrow("'undefined' is not a valid vertex.");
    });

    test("removeEdge should throw error for not existing vertex", () => {
      const graph = new Graph();

      expect(() => graph.removeEdge("Tokyo")).toThrow("There is no vertex 'Tokyo' in the graph.");
    });

    test("removeEdge should throw error for self looping edge", () => {
      const graph = new Graph();

      graph.addVertex("Tokyo");

      expect(() => graph.removeEdge("Tokyo", "Tokyo")).toThrow("Self-loops are not allowed.");
    });

    test("removeEdge should throw error for not existing edge", () => {
      const graph = new Graph();

      graph.addVertex("Tokyo");
      graph.addVertex("Warsaw");

      expect(() => graph.removeEdge("Tokyo", "Warsaw")).toThrow(
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

      graph.addEdge("Tokyo", "Paris", 1);
      graph.addEdge("Paris", "Warsaw", 2);
      graph.addEdge("London", "Warsaw", 3);
      graph.addEdge("Tokyo", "Warsaw", 4);

      graph.removeVertex("Warsaw");

      expect(Object.keys(graph.adjacencyList).length).toBe(3);

      expect(graph.adjacencyList["Tokyo"]).toStrictEqual([{ name: "Paris", weight: 1 }]);
      expect(graph.adjacencyList["Paris"]).toStrictEqual([{ name: "Tokyo", weight: 1 }]);
      expect(graph.adjacencyList["London"]).toStrictEqual([]);
      expect(graph.adjacencyList["Warsaw"]).not.toBeDefined();
    });

    test("removeVertex should throw error for invalid name", () => {
      const graph = new Graph();

      expect(() => graph.removeVertex()).toThrow("'undefined' is not a valid vertex.");
    });

    test("removeVertex should throw error for not existing vertex", () => {
      const graph = new Graph();

      expect(() => graph.removeVertex("Tokyo")).toThrow("There is no vertex 'Tokyo' in the graph.");
    });
  });

  describe("depth and breadth traverse methods", () => {
    const traverseMethods = [
      [
        "depthFirstRecursiveTraverse",
        (graph, vertex) => graph.depthFirstRecursiveTraverse(vertex),
        ["A", "B", "D", "E", "C", "F"],
      ],
      [
        "depthFirstIterativeTraverse",
        (graph, vertex) => graph.depthFirstIterativeTraverse(vertex),
        ["A", "B", "D", "E", "C", "F"],
      ],
      ["breadthFirstTraverse", (graph, vertex) => graph.breadthFirstTraverse(vertex), ["A", "B", "C", "D", "E", "F"]],
    ];

    test.each(traverseMethods)(
      "%s should return correct order of traversed vertices",
      (methodName, traverse, expectedTraverseOrder) => {
        const graph = new Graph();

        graph.addVertex("A");
        graph.addVertex("B");
        graph.addVertex("C");
        graph.addVertex("D");
        graph.addVertex("E");
        graph.addVertex("F");

        graph.addEdge("A", "B", 1);
        graph.addEdge("A", "C", 2);
        graph.addEdge("B", "D", 3);
        graph.addEdge("C", "E", 4);
        graph.addEdge("D", "E", 5);
        graph.addEdge("D", "F", 6);
        graph.addEdge("E", "F", 7);

        expect(traverse(graph, "A")).toStrictEqual(expectedTraverseOrder);
      }
    );

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

      expect(() => traverse(graph)).toThrow("'undefined' is not a valid vertex.");
    });

    test.each(traverseMethods)("%s should throw error not existing startingVertex", (methodName, traverse) => {
      const graph = new Graph();

      expect(() => traverse(graph, "A")).toThrow("There is no vertex 'A' in the graph.");
    });
  });

  describe("findShortestPath", () => {
    test("findShortestPath should return correct path for a trivial graph", () => {
      const graph = new Graph();

      graph.addVertex("P");
      graph.addVertex("Q");
      graph.addEdge("P", "Q", 1);

      expect(graph.findShortestPath("P", "Q")).toStrictEqual(["P", "Q"]);
    });

    test("findShortestPath should retturn correct shortest paths between given vertices", () => {
      const graph = new Graph();

      graph.addVertex("A");
      graph.addVertex("B");
      graph.addVertex("C");
      graph.addVertex("D");
      graph.addVertex("E");
      graph.addVertex("F");

      graph.addEdge("A", "B", 4);
      graph.addEdge("A", "C", 2);
      graph.addEdge("B", "E", 3);
      graph.addEdge("C", "D", 2);
      graph.addEdge("C", "F", 4);
      graph.addEdge("D", "E", 3);
      graph.addEdge("D", "F", 1);
      graph.addEdge("E", "F", 1);

      expect(graph.findShortestPath("A", "E")).toStrictEqual(["A", "C", "D", "F", "E"]);
      expect(graph.findShortestPath("A", "F")).toStrictEqual(["A", "C", "D", "F"]);
      expect(graph.findShortestPath("A", "D")).toStrictEqual(["A", "C", "D"]);
      expect(graph.findShortestPath("A", "B")).toStrictEqual(["A", "B"]);
      expect(graph.findShortestPath("B", "F")).toStrictEqual(["B", "E", "F"]);
      expect(graph.findShortestPath("C", "E")).toStrictEqual(["C", "D", "F", "E"]);
      expect(graph.findShortestPath("E", "A")).toStrictEqual(["E", "F", "D", "C", "A"]);
    });

    test("findShortestPath should throw error for invalid name", () => {
      const graph = new Graph();

      expect(() => graph.findShortestPath()).toThrow("'undefined' is not a valid vertex.");
    });

    test("findShortestPath should throw error for not existing vertex", () => {
      const graph = new Graph();

      expect(() => graph.findShortestPath("Tokyo")).toThrow("There is no vertex 'Tokyo' in the graph.");
    });

    test("findShortestPath should throw error for self looping edge", () => {
      const graph = new Graph();

      graph.addVertex("Tokyo");

      expect(() => graph.findShortestPath("Tokyo", "Tokyo")).toThrow("Self-loops are not allowed.");
    });

    test("findShortestPath should return null when there is no valid path", () => {
      const graph = new Graph();

      graph.addVertex("A");
      graph.addVertex("B");
      graph.addVertex("C");

      graph.addEdge("A", "C", 2);

      expect(graph.findShortestPath("A", "B")).toBeNull();
    });
  });

  describe("utilities", () => {
    test("_validateVertexName should throw error for invalid name", () => {
      const graph = new Graph();

      expect(() => graph._validateVertexName()).toThrow("'undefined' is not a valid vertex.");
      expect(() => graph._validateVertexName(123)).toThrow("'123' is not a valid vertex.");
      expect(() => graph._validateVertexName("")).toThrow("'' is not a valid vertex.");
    });

    test("_validateVertexName should pass for valid name", () => {
      const graph = new Graph();

      expect(() => graph._validateVertexName("Tokyo")).not.toThrow();
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

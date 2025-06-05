import { BinarySearchTree } from "./trees.js";
import { describe, expect, test } from "@jest/globals";

describe("BinarySearchTree", () => {
  describe("insert and find", () => {
    test("insert adds elements to empty tree and sets root correctly", () => {
      const bst = new BinarySearchTree();

      bst.insert(10);
      expect(bst.root.value).toBe(10);
      expect(bst.root.left).toBeNull();
      expect(bst.root.right).toBeNull();
    });

    test("insert adds elements correctly based on BST ordering rules", () => {
      const bst = new BinarySearchTree();

      bst.insert(10);
      bst.insert(5);
      bst.insert(15);
      bst.insert(3);
      bst.insert(7);
      bst.insert(12);
      bst.insert(18);

      expect(bst.root.value).toBe(10);

      expect(bst.root.left.value).toBe(5);
      expect(bst.root.left.left.value).toBe(3);
      expect(bst.root.left.right.value).toBe(7);

      expect(bst.root.right.value).toBe(15);
      expect(bst.root.right.left.value).toBe(12);
      expect(bst.root.right.right.value).toBe(18);
    });

    test("insert ignores duplicate values and does not insert them", () => {
      const bst = new BinarySearchTree();

      bst.insert(10);
      const result1 = bst.insert(10);
      const result2 = bst.insert(10);

      expect(bst.root.value).toBe(10);
      expect(bst.root.left).toBeNull();
      expect(bst.root.right).toBeNull();
      expect(result1).toBeNull();
      expect(result2).toBeNull();
    });

    test("insert works with different data types", () => {
      const bst = new BinarySearchTree();

      bst.insert("m");
      bst.insert("a");
      bst.insert("z");
      bst.insert("d");

      expect(bst.root.value).toBe("m");
      expect(bst.root.left.value).toBe("a");
      expect(bst.root.left.right.value).toBe("d");
      expect(bst.root.right.value).toBe("z");
    });
    test("find returns null for empty tree and non-existing values", () => {
      const bst = new BinarySearchTree();

      expect(bst.find(10)).toBeNull();
      expect(bst.find("test")).toBeNull();

      bst.insert(10);
      bst.insert(5);
      bst.insert(15);

      expect(bst.find(1)).toBeNull();
      expect(bst.find(6)).toBeNull();
      expect(bst.find(20)).toBeNull();
    });

    test("find returns correct node when value exists at different tree levels", () => {
      const bst = new BinarySearchTree();

      bst.insert(10);
      bst.insert(5);
      bst.insert(15);
      bst.insert(3);
      bst.insert(7);
      bst.insert(12);
      bst.insert(18);

      const rootNode = bst.find(10);
      expect(rootNode).not.toBeNull();
      expect(rootNode.value).toBe(10);

      const leftNode = bst.find(5);
      expect(leftNode).not.toBeNull();
      expect(leftNode.value).toBe(5);

      const leafNode = bst.find(18);
      expect(leafNode).not.toBeNull();
      expect(leafNode.value).toBe(18);
    });

    test("find works with different data types and edge cases", () => {
      const bst = new BinarySearchTree();

      bst.insert("m");
      bst.insert("a");
      bst.insert("z");

      expect(bst.find("a")).not.toBeNull();
      expect(bst.find("z")).not.toBeNull();
      expect(bst.find("b")).toBeNull();

      const numBst = new BinarySearchTree();
      numBst.insert(0);
      numBst.insert(-5);
      numBst.insert(3.14);
      numBst.insert(Number.MAX_SAFE_INTEGER);

      expect(numBst.find(0)).not.toBeNull();
      expect(numBst.find(-5)).not.toBeNull();
      expect(numBst.find(3.14)).not.toBeNull();
      expect(numBst.find(Number.MAX_SAFE_INTEGER)).not.toBeNull();
      expect(numBst.find(3.15)).toBeNull();
    });

    test("find returns actual node objects with correct structure and relationships", () => {
      const bst = new BinarySearchTree();

      bst.insert(42);
      const singleNode = bst.find(42);
      expect(singleNode).not.toBeNull();
      expect(singleNode.value).toBe(42);
      expect(singleNode.left).toBeNull();
      expect(singleNode.right).toBeNull();

      const multiBst = new BinarySearchTree();
      multiBst.insert(50);
      multiBst.insert(25);
      multiBst.insert(75);

      const foundRoot = multiBst.find(50);
      const foundLeft = multiBst.find(25);
      const foundRight = multiBst.find(75);

      expect(foundRoot.left).toBe(foundLeft);
      expect(foundRoot.right).toBe(foundRight);
      expect(foundLeft.left).toBeNull();
      expect(foundRight.right).toBeNull();
    });
  });
  describe("traversal", () => {
    describe("breadthFirstSearch", () => {
      test("handles empty tree and single-node tree correctly", () => {
        const emptyBst = new BinarySearchTree();
        expect(emptyBst.breadthFirstSearch()).toEqual([]);

        const singleBst = new BinarySearchTree();
        singleBst.insert(42);
        expect(singleBst.breadthFirstSearch()).toEqual([42]);
      });

      test("returns values in breadth-first order for balanced tree", () => {
        const bst = new BinarySearchTree();
        bst.insert(10);
        bst.insert(5);
        bst.insert(15);
        bst.insert(3);
        bst.insert(7);
        bst.insert(12);
        bst.insert(18);
        expect(bst.breadthFirstSearch()).toEqual([10, 5, 15, 3, 7, 12, 18]);
      });

      test("returns values in breadth-first order for string tree", () => {
        const bst = new BinarySearchTree();
        bst.insert("m");
        bst.insert("f");
        bst.insert("s");
        bst.insert("a");
        bst.insert("k");
        expect(bst.breadthFirstSearch()).toEqual(["m", "f", "s", "a", "k"]);
      });

      test("returns values in breadth-first order for unbalanced tree with mixed structure", () => {
        const bst = new BinarySearchTree();
        bst.insert(50);
        bst.insert(30);
        bst.insert(70);
        bst.insert(20);
        bst.insert(40);
        bst.insert(60);
        bst.insert(80);
        bst.insert(10);
        bst.insert(35);
        bst.insert(65);
        expect(bst.breadthFirstSearch()).toEqual([50, 30, 70, 20, 40, 60, 80, 10, 35, 65]);
      });
    });

    describe("depthFirstSearch pre-order", () => {
      test("handles empty tree and single-node tree correctly", () => {
        const emptyBst = new BinarySearchTree();
        expect(emptyBst.depthFirstSearch("preOrder")).toEqual([]);

        const singleBst = new BinarySearchTree();
        singleBst.insert(42);
        expect(singleBst.depthFirstSearch("preOrder")).toEqual([42]);
      });

      test("returns values in pre-order for balanced tree", () => {
        const bst = new BinarySearchTree();
        bst.insert(10);
        bst.insert(5);
        bst.insert(15);
        bst.insert(3);
        bst.insert(7);
        bst.insert(12);
        bst.insert(18);
        expect(bst.depthFirstSearch("preOrder")).toEqual([10, 5, 3, 7, 15, 12, 18]);
      });

      test("returns values in pre-order for string tree", () => {
        const bst = new BinarySearchTree();
        bst.insert("m");
        bst.insert("f");
        bst.insert("s");
        bst.insert("a");
        bst.insert("k");
        expect(bst.depthFirstSearch("preOrder")).toEqual(["m", "f", "a", "k", "s"]);
      });

      test("returns values in pre-order for unbalanced tree with mixed structure", () => {
        const bst = new BinarySearchTree();
        bst.insert(50);
        bst.insert(30);
        bst.insert(70);
        bst.insert(20);
        bst.insert(40);
        bst.insert(60);
        bst.insert(80);
        bst.insert(10);
        bst.insert(35);
        bst.insert(65);
        expect(bst.depthFirstSearch("preOrder")).toEqual([50, 30, 20, 10, 40, 35, 70, 60, 65, 80]);
      });
    });

    describe("depthFirstSearch in-order (default)", () => {
      test("handles empty tree and single-node tree correctly", () => {
        const emptyBst = new BinarySearchTree();
        expect(emptyBst.depthFirstSearch()).toEqual([]);

        const singleBst = new BinarySearchTree();
        singleBst.insert(42);
        expect(singleBst.depthFirstSearch()).toEqual([42]);
      });

      test("returns values in sorted order for balanced tree", () => {
        const bst = new BinarySearchTree();
        bst.insert(10);
        bst.insert(5);
        bst.insert(15);
        bst.insert(3);
        bst.insert(7);
        bst.insert(12);
        bst.insert(18);
        expect(bst.depthFirstSearch()).toEqual([3, 5, 7, 10, 12, 15, 18]);
      });

      test("returns values in sorted order for string tree", () => {
        const bst = new BinarySearchTree();
        bst.insert("m");
        bst.insert("f");
        bst.insert("s");
        bst.insert("a");
        bst.insert("k");
        expect(bst.depthFirstSearch()).toEqual(["a", "f", "k", "m", "s"]);
      });

      test("returns values in sorted order for unbalanced tree with mixed structure", () => {
        const bst = new BinarySearchTree();
        bst.insert(50);
        bst.insert(30);
        bst.insert(70);
        bst.insert(20);
        bst.insert(40);
        bst.insert(60);
        bst.insert(80);
        bst.insert(10);
        bst.insert(35);
        bst.insert(65);
        expect(bst.depthFirstSearch()).toEqual([10, 20, 30, 35, 40, 50, 60, 65, 70, 80]);
      });
    });

    describe("depthFirstSearch post-order", () => {
      test("handles empty tree and single-node tree correctly", () => {
        const emptyBst = new BinarySearchTree();
        expect(emptyBst.depthFirstSearch("postOrder")).toEqual([]);

        const singleBst = new BinarySearchTree();
        singleBst.insert(42);
        expect(singleBst.depthFirstSearch("postOrder")).toEqual([42]);
      });

      test("returns values in post-order for balanced tree", () => {
        const bst = new BinarySearchTree();
        bst.insert(10);
        bst.insert(5);
        bst.insert(15);
        bst.insert(3);
        bst.insert(7);
        bst.insert(12);
        bst.insert(18);
        expect(bst.depthFirstSearch("postOrder")).toEqual([3, 7, 5, 12, 18, 15, 10]);
      });

      test("returns values in post-order for string tree", () => {
        const bst = new BinarySearchTree();
        bst.insert("m");
        bst.insert("f");
        bst.insert("s");
        bst.insert("a");
        bst.insert("k");
        expect(bst.depthFirstSearch("postOrder")).toEqual(["a", "k", "f", "s", "m"]);
      });

      test("returns values in post-order for unbalanced tree with mixed structure", () => {
        const bst = new BinarySearchTree();
        bst.insert(50);
        bst.insert(30);
        bst.insert(70);
        bst.insert(20);
        bst.insert(40);
        bst.insert(60);
        bst.insert(80);
        bst.insert(10);
        bst.insert(35);
        bst.insert(65);
        expect(bst.depthFirstSearch("postOrder")).toEqual([10, 20, 35, 40, 30, 65, 60, 80, 70, 50]);
      });
    });
  });
});

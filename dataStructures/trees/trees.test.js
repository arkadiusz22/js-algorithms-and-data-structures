import { BinarySearchTree } from "./trees.js";
import { describe, expect, test } from "@jest/globals";

describe("BinarySearchTree", () => {
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

    // Check root
    expect(bst.root.value).toBe(10);

    // Check left subtree
    expect(bst.root.left.value).toBe(5);
    expect(bst.root.left.left.value).toBe(3);
    expect(bst.root.left.right.value).toBe(7);

    // Check right subtree
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

    // Test empty tree
    expect(bst.find(10)).toBeNull();
    expect(bst.find("test")).toBeNull();

    // Build a tree and test non-existing values
    bst.insert(10);
    bst.insert(5);
    bst.insert(15);

    expect(bst.find(1)).toBeNull();
    expect(bst.find(6)).toBeNull();
    expect(bst.find(20)).toBeNull();
  });

  test("find returns correct node when value exists at different tree levels", () => {
    const bst = new BinarySearchTree();

    // Build a tree with multiple values
    bst.insert(10);
    bst.insert(5);
    bst.insert(15);
    bst.insert(3);
    bst.insert(7);
    bst.insert(12);
    bst.insert(18);

    // Test finding existing values at different levels
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

    // Test with strings
    bst.insert("m");
    bst.insert("a");
    bst.insert("z");

    expect(bst.find("a")).not.toBeNull();
    expect(bst.find("z")).not.toBeNull();
    expect(bst.find("b")).toBeNull();

    // Test with edge numeric values
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

    // Test single node tree
    bst.insert(42);
    const singleNode = bst.find(42);
    expect(singleNode).not.toBeNull();
    expect(singleNode.value).toBe(42);
    expect(singleNode.left).toBeNull();
    expect(singleNode.right).toBeNull();

    // Test multi-node tree structure
    const multiBst = new BinarySearchTree();
    multiBst.insert(50);
    multiBst.insert(25);
    multiBst.insert(75);

    const foundRoot = multiBst.find(50);
    const foundLeft = multiBst.find(25);
    const foundRight = multiBst.find(75);

    // Verify node relationships are preserved
    expect(foundRoot.left).toBe(foundLeft);
    expect(foundRoot.right).toBe(foundRight);
    expect(foundLeft.left).toBeNull();
    expect(foundRight.right).toBeNull();
  });
});

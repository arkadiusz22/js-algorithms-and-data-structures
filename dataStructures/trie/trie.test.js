import { Trie } from "./trie.js";
import { describe, expect, test } from "@jest/globals";

describe("trie", () => {
  test("insert adds 'cat' to empty trie", () => {
    const trie = new Trie();

    trie.insert("cat");

    expect(trie.root.children[0]).toBeNull();
    expect(trie.root.children[1]).toBeNull();
    const cNode = trie.root.children[2];
    expect(cNode).toBeDefined();
    expect(trie.root.children[3]).toBeNull();
    expect(trie.root.children[4]).toBeNull();
    expect(trie.root.children[26]).toBeUndefined();
    expect(trie.root.isWord).toBe(false);

    const aNode = cNode.children[0];
    expect(aNode).toBeDefined();
    expect(cNode.children[1]).toBeNull();
    expect(cNode.children[2]).toBeNull();
    expect(cNode.children[26]).toBeUndefined();
    expect(cNode.isWord).toBe(false);

    expect(aNode.children[0]).toBeNull();
    expect(aNode.children[1]).toBeNull();
    expect(aNode.children[18]).toBeNull();
    const tNode = aNode.children[19];
    expect(tNode).toBeDefined();
    expect(aNode.children[20]).toBeNull();
    expect(aNode.children[25]).toBeNull();
    expect(aNode.children[26]).toBeUndefined();
    expect(aNode.isWord).toBe(false);

    for (let index = 0; index < 26; index++) {
      expect(tNode.children[index]).toBeNull();
    }
    expect(tNode.children[26]).toBeUndefined();
    expect(tNode.isWord).toBe(true);
  });

  test("insert adds 'cat' and 'car' to empty trie", () => {
    const trie = new Trie();

    trie.insert("cat");
    trie.insert("car");

    const cNode = trie.root.children[2];
    expect(cNode).toBeDefined();
    expect(trie.root.isWord).toBe(false);

    const aNode = cNode.children[0];
    expect(aNode).toBeDefined();
    expect(cNode.isWord).toBe(false);

    const rNode = aNode.children[17];
    const tNode = aNode.children[19];
    expect(rNode).toBeDefined();
    expect(tNode).toBeDefined();
    expect(aNode.isWord).toBe(false);

    expect(rNode.isWord).toBe(true);
    expect(tNode.isWord).toBe(true);
  });

  test("insert adds 'app' to trie containing 'apple'", () => {
    const trie = new Trie();

    trie.insert("apple");

    const aNode = trie.root.children[0];
    expect(aNode).toBeDefined();
    expect(trie.root.isWord).toBe(false);

    const p1Node = aNode.children[15];
    expect(p1Node).toBeDefined();
    expect(aNode.isWord).toBe(false);

    const p2Node = p1Node.children[15];
    expect(p2Node).toBeDefined();
    expect(p1Node.isWord).toBe(false);

    const lNode = p2Node.children[11];
    expect(lNode).toBeDefined();
    expect(p2Node.isWord).toBe(false);

    const eNode = lNode.children[4];
    expect(eNode).toBeDefined();
    expect(lNode.isWord).toBe(false);

    expect(eNode.isWord).toBe(true);

    trie.insert("app");

    expect(p2Node.isWord).toBe(true);
  });

  test("search returns correctly for trie containing 'cat' and 'car'", () => {
    const trie = new Trie();

    trie.insert("cat");
    trie.insert("car");

    expect(trie.search("cat")).toBe(true);
    expect(trie.search("car")).toBe(true);

    expect(trie.search("apple")).toBe(false);
    expect(trie.search("caterpillar")).toBe(false);
  });

  test("startsWith returns correctly for trie containing 'cat' and 'car ", () => {
    const trie = new Trie();

    trie.insert("cat");
    trie.insert("car");

    expect(trie.startsWith("c")).toBe(true);
    expect(trie.startsWith("ca")).toBe(true);
    expect(trie.startsWith("cat")).toBe(true);
    expect(trie.startsWith("car")).toBe(true);

    expect(trie.startsWith("apple")).toBe(false);
    expect(trie.startsWith("caterpillar")).toBe(false);
  });

  test("delete returns false when trying to remove 'cat', from empty trie", () => {
    const trie = new Trie();

    expect(trie.delete("cat")).toBe(false);
    expect(trie.search("cat")).toBe(false);
    expect(trie.root._isEmpty()).toBe(true);
  });

  test("delete returns true when trying to remove 'cat', from trie containing 'cat and 'apple'", () => {
    const trie = new Trie();

    trie.insert("cat");
    trie.insert("apple");

    expect(trie.delete("cat")).toBe(true);
    expect(trie.search("cat")).toBe(false);
    expect(trie.search("apple")).toBe(true);
    expect(trie.startsWith("ca")).toBe(false);
    expect(trie.startsWith("ap")).toBe(true);
  });

  test("delete returns true when removing 'caterpillar', from trie containing 'cat' and 'caterpillar'", () => {
    const trie = new Trie();

    trie.insert("cat");
    trie.insert("caterpillar");

    expect(trie.delete("caterpillar")).toBe(true);
    expect(trie.search("caterpillar")).toBe(false);
    expect(trie.search("cat")).toBe(true);
    expect(trie.startsWith("cat")).toBe(true);
  });

  test("delete returns true when removing 'machine', from trie containing 'machine' and 'machinable'", () => {
    const trie = new Trie();

    trie.insert("machine");
    trie.insert("machinable");

    expect(trie.delete("machine")).toBe(true);
    expect(trie.search("machine")).toBe(false);
    expect(trie.search("machinable")).toBe(true);
    expect(trie.startsWith("machin")).toBe(true);
  });

  test("_isEmpty returns true for empty node", () => {
    const trie = new Trie();

    expect(trie.root._isEmpty()).toBe(true);
  });

  test("_isEmpty returns false for non empty node", () => {
    const trie = new Trie();

    trie.insert("cat");

    expect(trie.root._isEmpty()).toBe(false);
  });

  test("_getCharCode returns correct codes", () => {
    const trie = new Trie();

    expect(trie._getCharCode("a")).toBe(0);
    expect(trie._getCharCode("n")).toBe(13);
    expect(trie._getCharCode("z")).toBe(25);
  });
});

import { Trie } from "./trie.js";
import { describe, expect, test } from "@jest/globals";

describe("trie", () => {
  test("insert adds 'cat' to empty trie ", () => {
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

  test("insert adds 'cat' and 'car' to empty trie ", () => {
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
});

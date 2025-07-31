/**
 * Represents a letter node in a trie.
 */
class Node {
  constructor() {
    /** @type {Array<Node | null>} */
    this.children = Array.from({ length: 26 }).fill(null);

    /** @type {boolean} */
    this.isWord = false;
  }
}

const LOWERCASE_ASCII_LETTER_OFFSET = 97;

/**
 * Represents a trie data structure for lowercase letters
 */
export class Trie {
  constructor() {
    this.root = new Node();
  }

  /**
   * @param {string} word
   */
  insert(word) {
    let parent = this.root;

    for (let index = 0; index < word.length; index++) {
      const char = word[index];

      const charCode = char.toLowerCase().charCodeAt(0) - LOWERCASE_ASCII_LETTER_OFFSET;

      if (parent.children[charCode] === null) {
        const newNode = new Node();
        parent.children[charCode] = newNode;
        parent = newNode;
      } else {
        parent = parent.children[charCode];
      }
    }
    parent.isWord = true;
  }

  /**
   * @param {string} word
   * @returns {boolean} true if word was inserted before
   */
  search(word) {
    return false;
  }

  /**
   * @param {string} prefix
   * @returns {boolean} true if word with the specified prefix was inserted before
   */
  startsWith(prefix) {
    return false;
  }

  /**
   * @param {string} word
   * @returns {boolean} true if element was deleted
   */
  delete(word) {
    return false;
  }
}

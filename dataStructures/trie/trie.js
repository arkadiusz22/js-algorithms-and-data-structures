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
    let node = this.root;

    for (let index = 0; index < word.length; index++) {
      const charCode = this._getCharCode(word[index]);

      if (node.children[charCode] === null) {
        const newNode = new Node();
        node.children[charCode] = newNode;
        node = newNode;
      } else {
        node = node.children[charCode];
      }
    }
    node.isWord = true;
  }

  /**
   * @param {string} word
   * @returns {boolean} true if word was inserted before
   */
  search(word) {
    const node = this._findNode(word);
    return node !== null && node.isWord;
  }

  /**
   * @param {string} prefix
   * @returns {boolean} true if word with the specified prefix was inserted before
   */
  startsWith(prefix) {
    const node = this._findNode(prefix);
    return node !== null;
  }

  /**
   * @param {string} word
   * @returns {boolean} true if element was deleted
   */
  delete(word) {
    return false;
  }

  /**
   * @param {string} word
   * @returns {Node | null}
   */
  _findNode(word) {
    let node = this.root;

    for (let index = 0; index < word.length; index++) {
      const charCode = this._getCharCode(word[index]);

      node = node.children[charCode];

      if (node === null) return null;
    }

    return node;
  }

  /**
   * @param {string} char
   * @returns {number}
   */
  _getCharCode(char) {
    return char.toLowerCase().charCodeAt(0) - LOWERCASE_ASCII_LETTER_OFFSET;
  }
}

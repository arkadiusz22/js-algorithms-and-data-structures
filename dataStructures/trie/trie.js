const LOWERCASE_ASCII_LETTER_OFFSET = 97;
const ALPHABET_SIZE = 26;

/**
 * Represents a letter node in a trie.
 */
class Node {
  constructor() {
    /** @type {Array<Node | null>} */
    this.children = Array.from({ length: ALPHABET_SIZE }).fill(null);

    /** @type {boolean} */
    this.isWord = false;
  }

  /**
   * @returns {boolean} true if node does not have any children
   */
  _isEmpty() {
    for (let index = 0; index < ALPHABET_SIZE; index++) {
      if (this.children[index] !== null) return false;
    }
    return true;
  }
}

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
    /**
     * @param {Node} node
     * @param {string} word
     * @param {number} depth
     * @returns {boolean} true if element should be deleted
     */
    const shouldRemoveNode = (node, word, depth) => {
      if (word.length === depth) {
        // if it's the last char in the word - remove its isWord indicator
        node.isWord = false;

        // if the node is empty - mark as the node which should be deleted
        return node._isEmpty();
      } else {
        const charCode = this._getCharCode(word[depth]);
        const child = node.children[charCode];
        if (child === null) return false;

        // if not the last char in the word - check the following char
        const shouldRemoveNextNode = shouldRemoveNode(child, word, depth + 1);

        // if next is true - should be deleted - remove it from the trie
        if (shouldRemoveNextNode) {
          node.children[charCode] = null;
        }

        return node._isEmpty() && !node.isWord;
      }
    };

    if (this.search(word)) {
      shouldRemoveNode(this.root, word, 0);
      return true;
    } else {
      return false;
    }
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

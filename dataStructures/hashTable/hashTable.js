/**
 * Represents a hash table data structure.
 * Uses separate chaining with arrays to handle hash collisions.
 * The keys are restricted to strings in this implementation.
 * @template V The type of values stored in the hash table
 */
export class HashTable {
  /**
   * Create a new, empty hash table of given size.
   * Uses a prime number (53) as default size for better hash distribution.
   * @param {number} [size=53] - The length of the hash table array. Should be a prime number for optimal distribution.
   */
  constructor(size = 53) {
    /** @type {Array<Array<{key: string, value: V}>|undefined>} */
    this.keyMap = new Array(size);
    /** @type {number} */
    this.size = 0;
  }

  /**
   * Simple hashing function which assigns numeric hash for given input string within defined max range.
   * Uses polynomial rolling hash with prime number 31 for good distribution.
   * Limits processing to MAX_CHARS=100 chars for performance improvement.
   * @param {string} str - The input string to hash
   * @returns {number} The assigned numeric hash (0 to keyMap.length - 1)
   */
  hashString(str) {
    const BASE_PRIME = 31;
    const MAX_CHARS = 100;
    let total = 0;

    for (let index = 0; index < Math.min(str.length, MAX_CHARS); index++) {
      let charCode = str.charCodeAt(index);
      total = (total * BASE_PRIME + charCode) % this.keyMap.length;
    }

    return total;
  }

  /**
   * Inserts or updates a key-value pair in the hash table.
   * If the key already exists, updates its value without changing the size.
   * Uses separate chaining to handle hash collisions.
   * @param {string} key - The key to insert or update. Must be a non-empty string.
   * @param {V} value - The value to associate with the key.
   * @returns {HashTable<V>|null} The hash table instance for chaining, or null if key is invalid.
   */
  set(key, value) {
    if (typeof key !== "string" || !key.length) return null;

    const hash = this.hashString(key);

    if (this.keyMap[hash]) {
      const existingEntryIndex = this.keyMap[hash].findIndex((entry) => entry.key === key);

      if (existingEntryIndex !== -1) {
        this.keyMap[hash][existingEntryIndex].value = value;
        return this;
      } else {
        this.keyMap[hash].push({ key, value });
        this.size += 1;
      }
    } else {
      this.keyMap[hash] = [{ key, value }];
      this.size += 1;
    }

    return this;
  }

  /**
   * Retrieves the value associated with the given key.
   * @param {string} key - The key to search for. Must be a non-empty string.
   * @returns {V|null} The value for the given key, or null if not found or key is invalid.
   */
  get(key) {
    if (typeof key !== "string" || !key.length) return null;

    const hash = this.hashString(key);
    const entries = this.keyMap[hash];

    if (!entries) return null;

    const entry = entries.find((entry) => entry.key === key);

    return entry ? entry.value : null;
  }

  /**
   * Retrieves all keys defined in the hash table
   * @returns {Array<string> | null} array of keys or null if hash table is empty
   */
  keys() {
    if (!this.size) return null;

    const keys = [];

    for (let index = 0; index < this.keyMap.length; index++) {
      if (this.keyMap[index]) {
        for (let j = 0; j < this.keyMap[index].length; j++) {
          const { key } = this.keyMap[index][j];
          keys.push(key);
        }
      }
    }

    return keys;
  }

  /**
   * Retrieves all unique values stored in the hash table
   * @returns {Array<V>|null} array of values or null if hash table is empty
   */
  values() {
    if (!this.size) return null;

    const uniqueValues = [];
    const seen = {};

    for (let index = 0; index < this.keyMap.length; index++) {
      if (this.keyMap[index]) {
        for (let j = 0; j < this.keyMap[index].length; j++) {
          const { value } = this.keyMap[index][j];

          const lookupKey = typeof value === "object" && value !== null ? JSON.stringify(value) : String(value);

          if (!seen[lookupKey]) {
            seen[lookupKey] = true;
            uniqueValues.push(value);
          }
        }
      }
    }

    return uniqueValues;
  }
}

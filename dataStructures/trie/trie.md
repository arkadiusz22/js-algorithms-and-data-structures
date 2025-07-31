# Trie (Prefix Tree / Digital Tree)

A **trie** is a tree-like data structure for efficient storage and retrieval of strings, especially useful for prefix-based searches, autocomplete, spell checking, and dictionary storage. Tries store words by sharing common prefixes, making them space-efficient for large sets with overlapping beginnings. The name comes from "retrieval" and is pronounced "tree" or "try".

---

## Key Properties & Structure

- Trie is a k-ary tree: each node can have up to k children (alphabet size)
- Nodes are connected by edges; each edge represents a character
- Root node does not store any character
- Each node represents a character; the path from root to node forms a prefix
- **isWord** flag marks the end of a valid word (sometimes a special marker is used)
- Terminal nodes can have children for longer words
- Children stored in a map/object/array for fast access
- Space efficiency: shares prefixes, but can be memory-intensive for sparse data
- Keys are derived from the path, not stored explicitly
- Tries are n-ary trees, unlike binary trees

---

## Operations & Complexity

| Operation  | Description                                | Time Complexity | Space Complexity |
| ---------- | ------------------------------------------ | --------------- | ---------------- |
| Insert     | Add word by traversing/creating nodes      | O(L)            | O(AL)            |
| Search     | Check if word exists; check isWord at end  | O(L)            |                  |
| StartsWith | Check if any word starts with given prefix | O(L)            |                  |
| Delete     | Unmark isWord and prune empty nodes        | O(L)            |                  |

**Where:** L = length of word/prefix, A = alphabet size

**Key Insight:** Trie operations scale with the length of the input string, not the number of stored words.

---

## Real-World Applications

- Autocomplete and suggest-as-you-type (e.g., social media user search)
- Spell checkers and dictionaries
- IP routing (binary tries)
- Word games and puzzles
- Blockchain (Merkle Patricia Trie)
- Web search engines (compressed tries)
- Bioinformatics (sequence alignment)
- Lexicographic sorting and burstsort

---

## Implementation Notes

```javascript
class TrieNode {
  constructor() {
    this.children = {};
    this.isEnd = false; // marks complete words vs prefixes
  }
}
```

**Key Design Decisions:**

- Children stored as object/map for O(1) character access
- Boolean flag distinguishes complete words from prefixes
- Supports any character set (Unicode, not just a-z)
- Keys derived from root-to-node path, not stored explicitly

---

## Strengths & Weaknesses

**Strengths:**

- **Prefix Operations:** Extremely fast prefix queries and autocomplete
- **Memory Efficiency:** Shares common prefixes, reducing storage
- **Predictable Performance:** O(L) operations regardless of dataset size
- **Lexicographic Order:** Natural alphabetical traversal
- **Scalability:** Performance independent of total word count

**Weaknesses:**

- **Memory Overhead:** Can use more space than hash sets for sparse data
- **Implementation:** Not built-in; requires manual implementation
- **Cache Performance:** Generally less cache-friendly than hash sets
- **Character Set Dependency:** Memory usage scales with alphabet size

---

## Variants & Advanced Features

**Common Variants:**

- **Compressed Trie (Radix Tree):** Merges single-child node chains for space optimization
- **Suffix Trie:** Enables fast substring search operations
- **Bitwise Trie:** Uses binary data bits as keys (useful for IP routing)
- **DAFSA (Directed Acyclic Finite State Automaton):** Compresses identical branches

**Advanced Features:**

- **Smart Deletion:** Prune childless, non-terminal nodes after word removal
- **Threshold-based Hybrid:** Store suffixes in leaf nodes until threshold, then split
- **Unicode Support:** Extend beyond ASCII to support international character sets

---

## Trie vs Hash Set/Map

| Aspect                | Trie                                           | Hash Set/Map           |
| --------------------- | ---------------------------------------------- | ---------------------- |
| **Prefix Queries**    | ✅ Excellent O(L)                              | ❌ Not supported       |
| **Exact Lookup**      | ✅ O(L)                                        | ✅ O(L) average        |
| **Memory Usage**      | Dense data: efficient<br>Sparse data: overhead | Generally more compact |
| **Ordering**          | ✅ Lexicographic traversal                     | ❌ No natural order    |
| **Cache Performance** | Lower (pointer chasing)                        | Higher (contiguous)    |

**When to Choose Trie:** Prefix operations, autocomplete, ordered traversal needed
**When to Choose Hash Set:** Simple lookups, memory-constrained, sparse data

---

## Summary

**Trie** is the go-to data structure for string prefix operations, offering:

🔹 **Predictable Performance:** O(L) operations independent of dataset size
🔹 **Prefix Power:** Unmatched efficiency for autocomplete and prefix searches
🔹 **Memory Smart:** Shares common prefixes, ideal for overlapping string sets
🔹 **Order Preservation:** Natural lexicographic traversal capability

**Best Use Cases:** Autocomplete systems, spell checkers, dictionary lookups, IP routing, and any application requiring fast prefix-based queries.

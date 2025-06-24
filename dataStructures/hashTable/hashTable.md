# Hash Tables

Hash tables, also known as hash maps, are data structures that store key-value pairs using a hash function to compute indices for efficient data access. They provide average O(1) time complexity for basic operations: insertion, retrieval, and deletion.

---

## Key Characteristics

- **Key-value storage**: Each entry consists of a unique key and associated value
- **Hash-based indexing**: Uses hash functions to map keys to array indices
- **No inherent ordering**: Keys have no specific order unlike arrays or linked lists
- **Dynamic sizing**: Can grow or shrink based on implementation
- **Collision handling**: Multiple strategies to handle keys that hash to the same index

---

## Hash Tables in Programming Languages

Hash tables are fundamental data structures built into most programming languages:

- **Python:** Dictionaries (`dict`)
- **JavaScript:** Objects and Maps (`Map`)
- **Java:** HashMap, Hashtable
- **Go, Scala:** Maps
- **Ruby:** Hashes
- **C++:** `std::unordered_map`

---

## Hash Functions

A hash function converts keys into hash codes (array indices) for the hash table. The function must be **deterministic**, always producing the same output for the same input.

### Properties of a Good Hash Function

For hash tables (not cryptographic purposes), a good hash function should be:

1. **Fast**: Runs in constant time O(1)
2. **Uniform Distribution**: Distributes hash codes evenly to minimize collisions
3. **Deterministic**: Same input always produces the same output
4. **Avalanche Effect**: Small input changes result in significantly different outputs

### Why Prime Numbers Matter

- **Better Distribution**: Prime numbers help distribute keys more uniformly across the hash table
- **Reduced Clustering**: Using prime table sizes helps prevent hash value clustering
- **Mathematical Properties**: Primes reduce patterns in hash value generation

---

## Collision Handling

Collisions occur when different keys produce the same hash code. Common resolution strategies:

### 1. Separate Chaining

- Store multiple key-value pairs at the same index using arrays or linked lists
- **Pros**: Simple implementation, handles high load factors well
- **Cons**: Extra memory overhead, potential cache misses

### 2. Open Addressing

- **Linear Probing**: Find next available slot sequentially
- **Quadratic Probing**: Use quadratic function to find next slot
- **Double Hashing**: Use second hash function for probe sequence
- **Pros**: Better cache performance, no extra memory for pointers
- **Cons**: Performance degrades with high load factors

---

## Time & Space Complexity

| Operation | Average Case | Worst Case | Notes                           |
| --------- | ------------ | ---------- | ------------------------------- |
| Insert    | O(1)         | O(n)       | Worst case with many collisions |
| Search    | O(1)         | O(n)       | Worst case with many collisions |
| Delete    | O(1)         | O(n)       | Worst case with many collisions |
| Space     | O(n)         | O(n)       | Linear space for n elements     |

> **Note**: Performance depends heavily on hash function quality and load factor management.

---

## Advantages

- Fast average-case performance for lookups, insertions, and deletions
- Flexible key types (strings, numbers, objects)
- Dynamic sizing capabilities
- Efficient for implementing caches, databases, and symbol tables

## Disadvantages

- No guaranteed ordering of elements
- Worst-case O(n) performance with poor hash function
- Memory overhead for collision handling
- Hash function design complexity

---

## Use Cases

- **Caching**: Store computed results for fast retrieval
- **Database Indexing**: Quick record lookups by key
- **Symbol Tables**: Variable/function name storage in compilers
- **Counting**: Frequency analysis and duplicate detection
- **Set Operations**: Implementing sets with fast membership testing
- **Memoization**: Dynamic programming optimization
- **Router Tables**: Network packet routing decisions

---

## Load Factor & Resizing

The **load factor** (α) is the ratio of stored elements to table size:

```
Load Factor = Number of Elements / Table Size
```

- **Typical threshold**: Resize when load factor exceeds 0.7-0.75
- **Resizing strategy**: Create larger table (usually 2x size) and rehash all elements
- **Performance impact**: Higher load factors increase collision probability

---

## Summary

Hash tables are highly efficient data structures for key-value storage with average O(1) performance. Their effectiveness depends on quality hash function design, appropriate collision resolution strategy, and proper load factor management. They excel in scenarios requiring fast lookups and are fundamental to many algorithms and applications.

# Map and Set

Map and Set are built-in ES6 data structures for storing collections of data with unique features and use cases. They provide efficient ways to manage key-value pairs and unique values, respectively.

---

## Map

A **Map** is a dictionary-like data structure where both the key and value can be any type (unlike objects, where keys must be strings or symbols). Maps maintain insertion order and provide efficient key-based access.

### Key Characteristics

- Stores key-value pairs (entries)
- Keys and values can be any type
- Maintains insertion order
- Keys are compared by reference (not by value)
- Size accessible via `map.size`

### Common Methods

- `set(key, value)`: Add or update an entry
- `get(key)`: Retrieve value by key
- `has(key)`: Check if key exists
- `delete(key)`: Remove entry by key
- `clear()`: Remove all entries

### Iteration & Conversion

- Iterable by keys, values, entries, or default iterator (Symbol.iterator)
- Convert to array of [key, value] pairs: `Array.from(map)` or `[...map]`
- Create from array: `new Map(array)`
- Convert to plain object (if all keys are strings/symbols): `Object.fromEntries(map)`
- Convert object to Map: `new Map(Object.entries(obj))`

### Use Cases

- When you need a dictionary with non-string keys
- When the set of keys may change dynamically at runtime
- Associating metadata with objects without modifying them
- Frequent additions/removals with predictable order
- Improved performance for frequent additions/removals than plain objects

## Set

A **Set** is a collection of unique values, ensuring no duplicates and providing fast membership checks. Sets maintain insertion order and are efficient for storing and checking unique items.

### Key Characteristics

- Stores unique values (no duplicates)
- Values can be any type
- Maintains insertion order
- Size accessible via `set.size`

### Common Methods

- `add(value)`: Add a value
- `has(value)`: Check if value exists
- `delete(value)`: Remove a value
- `clear()`: Remove all values

### Iteration & Conversion

- Iterable using `for...of` loops
- Convert to array: `Array.from(set)` or `[...set]`

### Set Operations (ES2025+)

- `union`, `intersection`, `difference`, `symmetricDifference` (combining sets)
- `isSubsetOf`, `isSupersetOf`, `isDisjointFrom` (comparing sets)

### Use Cases

- Storing a collection of unique values
- Removing duplicates from arrays
- Fast existence checks (often faster than arrays for large collections)
- Tracking unique values seen during iteration or processing
- Reference equality for objects (two objects with same content are different elements)

---

### WeakMap

A **WeakMap** is a variation of Map designed for storing object keys with weak references, allowing for automatic garbage collection when there are no other references to the key objects.

- Keys must be objects (not primitives)
- Values can be any type
- References to keys are weak (do not prevent garbage collection)
- Not iterable and does not expose its contents
- Provides methods: `set`, `get`, `has`, `delete`
- Useful for caching, storing metadata, or tracking auxiliary data for objects without risking memory leaks

**Use Cases:**

- Tracking metadata for web requests
- Caching results associated with objects
- Storing auxiliary data related to objects that should not persist in memory

---

### WeakSet

A **WeakSet** is a variation of Set designed for storing object values with weak references, allowing for automatic garbage collection when there are no other references to the objects.

- Values must be objects (not primitives)
- References to values are weak
- Not iterable and does not expose its contents
- Provides methods: `add`, `delete`, `has`
- Useful for tracking objects without preventing their garbage collection

**Use Cases:**

- Tracking objects that may be short-lived
- Managing temporary or auxiliary data for objects
- Avoiding memory leaks when storing references to objects

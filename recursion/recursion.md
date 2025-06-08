# Recursion

Recursion is a technique where a function calls itself to solve a problem. It often provides a cleaner solution than iteration, especially for complex data structures.

---

## What is Recursion?

- A function that calls itself
- Requires a **base case** (to stop recursion)
- Has a **recursive case** (calls itself with modified input)

---

## Advantages

- Useful for traversing trees and graphs
- Simplifies code for problems with a natural recursive structure (e.g., divide-and-conquer)

## Disadvantages

- Stack overflow risk if base case is missing or recursion is too deep
- May be less efficient than iteration (function call overhead)
- Harder to debug

---

## Real-World Examples

- `JSON.parse` / `JSON.stringify`
- DOM traversal (e.g., `getElementById`)
- Deep cloning/searching objects
- Quicksort, mergesort, binary search

---

## Call Stack

- Manages function invocations
- Each recursive call adds a new frame to the stack
- Exceeding stack limit causes stack overflow

---

## Types of Recursion

### Helper Method Recursion

- Uses an outer function to initialize state and an inner helper for recursion

### Pure Recursion

- Function calls itself directly, managing all logic internally
- Use array/string/object copies to avoid mutation

---

## Tips for Pure Recursion

- Use `slice`, `concat`, spread (`...`) for arrays
- Use `slice`, `substr`, `substring` for strings
- Use `Object.assign` or spread for objects

---

## Example Problems

- `factorial.js`
- `productOfArray.js`
- `flatten.js`
- `nestedEvenSum.js`

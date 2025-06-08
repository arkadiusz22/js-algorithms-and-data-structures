# Stack

A stack is an abstract data structure that follows the **LIFO (Last In, First Out)** principle. Elements can only be added or removed from the top, making it a restricted linear data structure.

---

## Key Characteristics

- **LIFO Ordering**: Last element added is the first removed
- **Single Access Point**: Only the top element is accessible
- **Primary Operations**:
  - **Push**: Add to the top
  - **Pop**: Remove and return the top
  - **Peek/Top**: View the top without removing

---

## Use Cases

- Function call management (call stack, recursion)
- Browser navigation (back/forward history)
- Undo/redo systems
- Expression parsing (parentheses matching, syntax analysis)
- Memory management (local variables, function calls)
- Algorithm implementation (backtracking, DFS, iterative tree traversal)

---

## Time & Space Complexity

| Operation | Time Complexity |
| --------- | --------------- |
| Push      | O(1)            |
| Pop       | O(1)            |
| Peek      | O(1)            |
| Search    | O(n)            |
| Space     | O(n)            |

> **Note:** If frequent searching or random access is needed, consider arrays or other data structures instead.

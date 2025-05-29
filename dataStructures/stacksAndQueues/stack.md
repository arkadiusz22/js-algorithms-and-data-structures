## Stack

A stack is an abstract data structure that follows the **LIFO (Last In, First Out)** principle. Elements can only be added or removed from the top, making it a restricted linear data structure.

### Key Characteristics

- **LIFO Ordering**: The last element added is the first one removed
- **Single Access Point**: Elements can only be accessed from the top
- **Three Primary Operations**:
  - **Push**: Add an element to the top
  - **Pop**: Remove and return the top element
  - **Peek/Top**: View the top element without removing it

### Real-World Examples & Use Cases

- **Function Call Management**: JavaScript call stack for function execution and recursion
- **Browser Navigation**: Back/forward history functionality
- **Undo/Redo Systems**: Text editors, image software, and state management
- **Expression Parsing**: Mathematical expressions, parentheses matching, compiler syntax analysis
- **Memory Management**: Local variables and function call allocation
- **Algorithm Implementation**:
  - Backtracking (maze solving, N-Queens)
  - Depth-First Search (DFS) with explicit stack
  - Tree traversal (iterative approaches)

### Time & Space Complexity

- **Insertion (Push)**: O(1) - primary strength
- **Removal (Pop)**: O(1) - primary strength
- **Peek**: O(1)
- **Search/Access**: O(n) - not optimized for these operations
- **Space**: O(n) where n is the number of elements

> **Note**: If frequent searching or random access is needed, consider using arrays or other data structures instead of stacks.

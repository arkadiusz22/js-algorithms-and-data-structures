## Recursion

Recursion is an alternative way of solving problems, often providing a cleaner solution compared to the classic iterative approach, especially for complex data structures.

### What is Recursion?

Recursion is a process where a function calls itself. For recursion to work correctly, it must have:

1. **Base Case**: The condition that stops the recursion. Without it, the recursion would continue indefinitely, leading to a stack overflow.
2. **Recursive Case**: The part of the function where it calls itself with modified input data, gradually moving towards the base case.

### Advantages of Recursion

- Particularly useful for traversing complex data structures like trees and graphs.
- Simplifies code for problems that have a natural recursive structure, such as divide-and-conquer algorithms.

### Disadvantages or pitfalls of Recursion

- Can lead to stack overflow if the base case is not properly defined or if the recursion depth is too large.
- May be less efficient than iteration due to overhead from multiple function calls.
- Debugging recursive functions can be challenging.

### Examples of Recursive Functions in Daily Use

- `JSON.parse` and `JSON.stringify`
- DOM traversal functions like `document.getElementById`
- Object traversal functions for deep cloning or searching
- Algorithms like quicksort, mergesort, and binary search

### Call Stack

The call stack is a built-in data structure in programming languages that manages function invocations:

- When a function is invoked, it is placed on top of the call stack.
- When the function exits (either through an implicit or explicit return), it is removed from the call stack.

Recursive functions push new calls of the same function onto the call stack. If the recursion depth exceeds the stack limit, it results in a **stack overflow error**.

### Types of Recursion

#### Helper Method Recursion

This pattern involves using an additional helper function to manage the recursive logic, often simplifying the main function. The main outer function is not recursive, is called externally and is responsible for initializing variables or state that the recursion will use. Inside this outer function, a helper function is defined, which contains the recursive logic and calls itself repeatedly. This approach is particularly useful when you need to maintain state or pass additional parameters during recursion without exposing them to the external code.

#### Pure Recursion

This pattern involves a function that calls itself directly to solve smaller instances of the same problem. The function is entirely self-contained, managing all logic and state internally without relying on external helpers. Each recursive call works on a reduced or modified version of the input, and the results of these calls are combined to produce the final output. Pure recursion is often used for problems with a clear base case and a straightforward way to break the problem into smaller subproblems.

Tips for writing pure recursion functions:

- Use methods like `slice`, `concat`, and the spread operator (`...`) to create copies of arrays to avoid mutation.
- For strings, use methods like `slice`, `substr`, or `substring` to create copies.
- For objects, use `Object.assign` or the spread operator to create shallow copies.

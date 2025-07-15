# Dynamic Programming

A **dynamic programming (DP)** approach solves complex problems by breaking them into simpler overlapping subproblems, solving each just once, and storing their solutions for reuse. DP is effective for problems with **overlapping subproblems** and **optimal substructure**.

---

## Key Characteristics

- **Overlapping subproblems:** Same subproblems recur multiple times (e.g., Fibonacci sequence)
- **Optimal substructure:** Optimal solution can be built from optimal solutions of subproblems
- **Memoization (Top-Down):** Store results of recursive calls to avoid redundant work
- **Tabulation (Bottom-Up):** Iteratively build solutions from base cases up

---

## Use Cases

- Fibonacci sequence
- Coin change problem
- Knapsack problem
- Longest common subsequence
- Edit distance
- Matrix chain multiplication
- Pathfinding (shortest/longest path in weighted graphs)

---

## Terminology & Concepts

- **Subproblem:** Smaller instance of the original problem
- **Memoization:** Cache results of expensive function calls (top-down, recursive)
- **Tabulation:** Fill a table iteratively (bottom-up, usually with loops)
- **State:** Representation of a subproblem (e.g., index, remaining capacity)
- **Transition:** How to move from one state to another

---

## Approaches

### Memoization (Top-Down)

- Use recursion to break down the problem
- Store results in a cache (object/array)
- Avoids redundant calculations

### Tabulation (Bottom-Up)

- Solve all subproblems iteratively, starting from the simplest
- Store results in a table (array/matrix)
- Often more space-efficient, avoids recursion stack

---

## Tips & Best Practices

- Identify overlapping subproblems and optimal substructure
- Choose memoization for naturally recursive problems
- Use tabulation for space efficiency or to avoid recursion limits
- Optimize space by storing only necessary previous results (e.g., last two Fibonacci numbers)

---

## Summary

Dynamic programming is a powerful technique for optimization problems with overlapping subproblems and optimal substructure. Choose memoization or tabulation based on problem structure and efficiency needs.

# Problem-Solving

---

## Common Patterns

- Frequency Counter
- Multiple Pointers
- Sliding Window
- Divide and Conquer
- Dynamic Programming
- Greedy Algorithms
- Backtracking

---

### Frequency Counter

- Use objects or maps to group values and their frequencies
- Avoids nested loops, often O(n)
- Example: `same`, `validAnagram`, `sameFrequency`

---

### Multiple Pointers

- Use pointers for positions in input data
- Move pointers based on conditions
- Efficient for minimal space, avoids nested loops, reduces number of iterations
- Used frequently in sorted arrays
- Example: `sumZero`, `countUniqueValues`, `isSubsequence`
- 2 variants:
  - Both pointers move in the same direction – e.g., fast and slow pointers, detection of patterns or cycles
  - Pointers move from the edges inward – checking for pairs, palindromes, reversals, k-size comparisons

---

### Sliding Window

- An extension of the two pointers approach, optimized for problems involving contiguous sequences.
- Maintains a "window" (a range of indices or subset) that moves through the data structure.
- The window can expand, contract, or shift based on problem-specific conditions.
- Highly efficient for tracking subsets in arrays or strings, such as substrings, subarrays, or groups of consecutive elements.
- Common use cases: finding maximum/minimum sums, lengths, or counts within a contiguous segment (e.g., `maxSubarraySum`, `minSubArrayLen`).
- Each element is visited at most twice, ensuring O(n) time complexity—much faster than brute force O(n²) approaches.
- Two main types:
  - **Fixed-size window:** The window size remains constant (e.g., sum of every k-length block).
  - **Dynamic-size window:** The window size changes to satisfy a condition (e.g., longest substring with at most k unique characters).
- The sliding window pattern is especially useful for problems involving optimal ranges, counts, or aggregations over contiguous data.

---

### Divide and Conquer

- Divide data into smaller chunks, solve each, combine results
- Reduces problem size at each step (often O(log n))
- Used in binary search, merge sort, quick sort
- Example: `sortedFrequency`

---

## Problem-Solving Plan

---

## Steps for Solving Problems

1. **Understand the problem**
2. **Explore concrete examples**
3. **Break it down**
4. **Solve or simplify**
5. **Look back and refactor**

---

### 1. Understand the Problem

- Restate the problem in your own words
- Identify inputs and outputs
- Determine if outputs can be derived from inputs
- Name important data pieces and terminology

---

### 2. Explore Examples

- Create example cases (simple, complex, edge cases)
- Use as sanity checks and unit tests

---

### 3. Break It Down

- Outline explicit steps to solve the problem
- Use comments to plan before coding

---

### 4. Solve or Simplify

- If stuck, solve a simpler version first
- Focus on core logic, then handle edge cases

---

### 5. Look Back and Refactor

- Review and test your solution
- Refactor for readability and efficiency
- Consider alternative approaches
- Write tests to validate and prevent regressions

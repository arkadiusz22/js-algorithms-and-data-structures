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

- Create a window (range of indices/subset) that moves through data
- Window expands, contracts, or shifts based on conditions
- Efficient for tracking subsets in arrays/strings
- Example: `maxSubarraySum`, `minSubArrayLen`

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

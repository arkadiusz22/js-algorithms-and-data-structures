# Problem-Solving Patterns

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

- Use objects to group values and their frequencies
- Avoids nested loops, often O(n)
- Example: `same`, `validAnagram`, `sameFrequency`

---

### Multiple Pointers

- Use pointers for positions in input data
- Move pointers based on conditions
- Efficient for minimal space, avoids nested loops
- Example: `sumZero`, `countUniqueValues`, `isSubsequence`

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

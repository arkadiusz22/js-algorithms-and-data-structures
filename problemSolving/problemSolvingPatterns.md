## 2. Master Common Problem-Solving Patterns

Popular problem patterns:

- Frequency Counter
- Multiple Pointers
- Sliding Window
- Divide and Conquer
- Dynamic Programming
- Greedy Algorithms
- Backtracking
- Many, many more

### Frequency Counter

- Use JavaScript objects to group values and their frequencies in the given input(s).
- This approach often avoids nested loops and can achieve a time complexity of O(n).
- Example: Refer to the `same` function in the `same.js` file or to the `validAnagram` function in the `validAnagram.js` file

### Multiple Pointers

- Create pointers or values that correspond to an index or position in the input data. These pointers move towards the beginning, end, or middle of the data based on a specific condition.
- This approach is very efficient for solving problems with minimal space complexity, often reducing the need for nested loops.
- Example: Refer to the `sumZero` function in the `sumZero.js` file or the `countUniqueValues` function in the `countUniqueValues.js` file.

### Sliding Window

- Involves creating a window (which can be a range of indices or a subset of data) that moves through the input data.
- Depending on conditions, the window expands, contracts, or shifts entirely to cover a different portion of the data.
- Useful for efficiently tracking a subset of data in arrays or strings without the need for nested loops.
- Typically, the window starts at the beginning and moves towards the end of the data.
- Example: Finding the longest substring with unique characters in a string.
- Example: Refer to the `maxSubarraySum` function in the `maxSubarraySum.js` file.

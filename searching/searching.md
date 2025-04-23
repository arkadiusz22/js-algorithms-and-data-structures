## Searching

### Linear search

- The simplest way to search, where each element is checked one by one in the order they appear.
- Optimal for unsorted arrays or small datasets.
- Commonly used by built-in functions such as `Array.indexOf` and `Array.includes`.
- Inefficient for large datasets as it has a time complexity of O(n).
- For sorted arrays, more efficient algorithms like binary search are preferable.
- Example implementation: `linearSearch.js`.

### Binary Search

- Significantly faster than linear search for sorted datasets.
- At each step, it eliminates half of the remaining elements, reducing the search space exponentially.
- Prerequisite: The array must be sorted beforehand.
- Follows the divide-and-conquer paradigm.
- Time complexity: O(log n), making it highly efficient for large datasets.
- Example implementation: `binarySearch.js`.

### Naive String Search

- A straightforward method to count how many times a smaller string appears within a larger string.
- Compares the smaller string to every possible substring of the larger string, one character at a time.
- Simple to implement but inefficient for large strings due to its time complexity of O(n \* m), where `n` is the length of the larger string and `m` is the length of the smaller string.
- Example implementation: `substringSearch.js`.

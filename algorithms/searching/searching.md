# Searching Algorithms

---

## Linear Search

- Checks each element one by one in order
- Best for unsorted arrays or small datasets
- Used by `Array.indexOf`, `Array.includes`
- Time complexity: O(n)
- For sorted arrays, use binary search for better efficiency

---

## Binary Search

## Binary Search

- Highly efficient for searching in sorted datasets
- At each step, eliminates half of the remaining search space
- Requires input to be sorted or monotonic
  _(Monotonic means the data is always increasing or always decreasing, never switching direction.)_
- Uses a divide-and-conquer strategy: repeatedly splits the array and focuses on the relevant half
- Time complexity: O(log n), making it much faster than linear search for large datasets
- Can be adapted to find the first or last occurrence of an element, or the first element meeting

---

## Naive String Search

- Counts how many times a smaller string appears in a larger string
- Compares the smaller string to every possible substring
- Time complexity: O(n \* m), where n = large string, m = small string

---

## Example Implementations

- `linearSearch.js`
- `binarySearch.js`
- `substringSearch.js`

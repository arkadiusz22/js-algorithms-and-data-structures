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

- Much faster for sorted datasets
- Eliminates half the search space at each step
- Requires sorted input
- Divide-and-conquer approach
- Time complexity: O(log n)

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

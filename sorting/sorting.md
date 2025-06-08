# Sorting Algorithms

Sorting is the process of rearranging items in a collection into a specific order (ascending or descending). It is fundamental in computer science for searching, organizing, and optimizing data.

---

## Key Concepts

- **Comparison Sort Lower Bound:** O(n log n) is the best possible for comparison-based sorts
- **Stable vs Unstable Sort:** Stable sorts preserve the order of equal elements

---

## JavaScript Built-in Sort

- By default, sorts elements as strings (Unicode order)
- Accepts a custom comparator function

---

## Bubble Sort

- Simple but inefficient for large datasets
- Time: O(n^2) worst/avg, O(n) best (nearly sorted)
- Space: O(1) (in-place)
- Stable, adaptive
- Repeatedly compares and swaps adjacent elements

---

## Selection Sort

- Selects the smallest/largest element and moves it to the sorted portion
- Time: O(n^2) all cases
- Space: O(1) (in-place)
- Unstable
- Fewer swaps than bubble sort

---

## Insertion Sort

- Builds sorted array one element at a time
- Time: O(n^2) worst/avg, O(n) best (nearly sorted)
- Space: O(1) (in-place)
- Stable, adaptive
- Good for small or nearly sorted arrays

---

## Merge Sort

- Divide-and-conquer, splits and merges arrays
- Time: O(n log n) all cases
- Space: O(n)
- Stable
- Good for large datasets

---

## Quick Sort

- Divide-and-conquer, partitions around a pivot
- Time: O(n log n) avg/best, O(n^2) worst
- Space: O(log n) (in-place, recursion stack)
- Unstable
- Fast in practice with good pivot selection

---

## Radix Sort

- Non-comparison sort for integers/strings
- Time: O(nk), where k = number of digits
- Space: O(n + k)
- Stable, not in-place
- Not for negative numbers (basic version)

---

## Other Important Sorts

- **Heap Sort:** In-place, O(n log n), not stable
- **Shell Sort:** In-place, faster than insertion for medium arrays
- **TimSort:** Hybrid, stable, adaptive (used in Python, Java)
- **Counting/Bucket Sort:** Non-comparison, fast for limited range integers

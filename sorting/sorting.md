## Sorting

- Sorting is the process of rearranging the items in a collection so that they follow a specific order, such as ascending or descending.
- It is a fundamental operation in computer science and programming, used in tasks like searching, organizing data, and optimizing algorithms.
- There are numerous sorting algorithms, each with unique characteristics, advantages, and trade-offs. Some are general-purpose and efficient for most cases, while others are tailored for specific scenarios or constraints.

- **Stable vs. Unstable Sort**: A stable sort preserves the relative order of records with equal keys (values). In contrast, an unstable sort may rearrange equal elements arbitrarily.

### Built-in JavaScript Sort Function

- By default, it behaves unexpectedly for numbers because it converts them to strings and compares their Unicode code points.
- Accepts a custom comparator function, which takes two elements as arguments and returns a positive number, a negative number, or 0 to determine their order.

### Bubble Sort

- Bubble Sort is a simple sorting algorithm but is not very efficient for large datasets due to its high time complexity.
- It is rarely used in practice but can be useful for educational purposes or specific niche scenarios. For example, it can be faster for small arrays than more advanced algorithms or when the array is nearly sorted.
- Time Complexity:
  - Worst and average case: O(n^2), where n is the number of elements in the array.
  - Best case: O(n) - when data is already (or almost) sorted.
- Space Complexity: O(1) (in-place sorting algorithm).
- Characteristics:
  - Stable: It preserves the relative order of equal elements.
  - Adaptive: Can be optimized to stop early if the array becomes sorted before completing all passes.
- The algorithm works by repeatedly stepping through the list, comparing adjacent elements, and swapping them if they are in the wrong order. This process causes larger elements to "bubble" to the end of the list.
- Example implementation: `bubbleSort.js`.

- Algorithm:

1. Start an outer loop from the end of the array, moving towards the beginning.
2. For each iteration of the outer loop, start an inner loop from the beginning of the array up to the current index of the outer loop.
3. In the inner loop, compare the current element with the next element. If the current element is greater, swap them.
4. If no swaps are made during an inner loop iteration, the array is already sorted, and the algorithm can terminate early.
5. Repeat until the outer loop completes, at which point the array will be sorted.

### Selection Sort

- Selection Sort is a straightforward comparison-based sorting algorithm. While it is not the most efficient for large datasets, it is simple to understand and implement.
- The algorithm repeatedly selects the smallest (or largest, depending on the desired order) element from the unsorted portion of the array and moves it to the sorted portion. This process continues until the entire array is sorted.
- Performs fewer swaps compared to Bubble Sort, as it only swaps once per iteration of the outer loop, whereas Bubble Sort may perform multiple swaps in a single pass.
- Time Complexity:
  - Worst, average, and best case: O(n^2), where n is the number of elements in the array.
- Space Complexity: O(1) (in-place sorting algorithm).
- Characteristics:
  - Unstable: The relative order of equal elements may not be preserved.
- Example implementation: `selectionSort.js`.

- Algorithm:

1. Begin with the first element of the array as the current position.
2. Search for the smallest element in the unsorted portion of the array.
3. Swap the smallest element with the element at the current position, if they are not the same.
4. Advance the current position to the next element and repeat steps 2-3 until the entire array is sorted.

### Insertion Sort

tbd

### Merge Sort

tbd

### Quick Sort

tbd

### Radix Sort

tbd

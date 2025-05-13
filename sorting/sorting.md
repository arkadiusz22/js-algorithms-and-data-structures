## Sorting

- Sorting is the process of rearranging the items in a collection so that they follow a specific order, such as ascending or descending.
- It is a fundamental operation in computer science and programming, used in tasks like searching, organizing data, and optimizing algorithms.
- There are numerous sorting algorithms, each with unique characteristics, advantages, and trade-offs. Some are general-purpose and efficient for most cases, while others are tailored for specific scenarios or constraints.
- **Comparison Sort Lower Bound**: There is a theoretical lower bound for the time complexity of all comparison-based sorting algorithms, which is O(n log n) in the worst case. No comparison-based algorithm can guarantee better performance for arbitrary data.
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

- Insertion Sort is another elementary sorting algorithm. It builds the sorted portion of the array incrementally by taking one element at a time and inserting it into its correct position within the sorted portion.
- It is simple to implement and works well for small or nearly sorted datasets but is inefficient for large datasets due to its high time complexity.
- It is also well-suited for cases where a previously sorted array has been extended by a small number of new elements.
- Time Complexity:
  - Worst and average case: O(n^2), where n is the number of elements in the array.
  - Best case: O(n) - when the array is already (or almost) sorted.
- Space Complexity: O(1) (in-place sorting algorithm).
- Characteristics:
  - Stable: It preserves the relative order of equal elements.
  - Adaptive: Performs fewer comparisons and shifts when the array is nearly sorted.
- Example implementation: `insertionSort.js`.

- Algorithm:

1. Start with the second element of the array (consider the first element as already sorted).
2. Compare the current element with elements in the sorted portion of the array, moving from right to left.
3. Shift elements in the sorted portion one position to the right to make space for the current element, if necessary.
4. Insert the current element into its correct position within the sorted portion.
5. Repeat steps 2-4 for all remaining elements in the array until the entire array is sorted.

### Merge Sort

- Created by John von Neumann in 1948.
- It is a combination of splitting, merging, and sorting arrays.
- Arrays containing 0 or 1 element are always considered sorted.
- It applies the divide-and-conquer approach:
  1. Splits the array into smaller portions until arrays with 1 or 0 elements are reached.
  2. Merges these smaller arrays while ensuring the resulting array is sorted.
- The merging process is repeated until the final sorted array is obtained.
- Step 1 of the implementation involves writing a function that takes two sorted arrays and merges them into a single sorted array. This function is a key component of the Merge Sort algorithm.
- Example implementation `mergeSort.js`.
- Time Complexity:
  - Best, worst, and average case: O(n log n), where n is the number of elements in the array. O(n log n) is the best possible complexity for data agnostic sort algorithm
- Space Complexity: O(n) (requires additional space for merging).
- Characteristics:
  - Stable: It preserves the relative order of equal elements.
  - Suitable for large datasets due to its predictable time complexity.

### Quick Sort

- Quick Sort is a highly efficient, comparison-based sorting algorithm that uses the divide-and-conquer strategy to sort elements.
- Like Merge Sort, it treats arrays with 0 or 1 element as already sorted.
- The algorithm selects a single element, called the pivot, and partitions the array so that all elements less than the pivot are moved to its left, and all elements greater are moved to its right. The pivot is then in its final sorted position.
- This partitioning process is applied recursively to the subarrays on either side of the pivot until the entire array is sorted.
- Common strategies for selecting the pivot include choosing the first element, last element, middle element, or a random element from the array. Choosing the first or last element can lead to poor performance (O(n^2)) on already sorted or reverse-sorted arrays. Selecting the middle or a random element helps avoid the worst-case scenario and generally results in better average performance.
- Step 1 of the implementation involves writing a function that partitions the array around the chosen pivot so that elements less than the pivot are moved to its left, and elements greater are moved to its right. The partitioning must be done in place, without creating new arrays. This function is a key component of the Quick Sort algorithm. Example implementation: `pivotHelper.js`.
- Quick Sort is often faster in practice than other O(n log n) algorithms due to its in-place sorting and low constant factors, but its performance can degrade to O(n^2) in the worst case (e.g., when the smallest or largest element is always chosen as the pivot).
- Time Complexity:
  - Best and average case: O(n log n), where n is the number of elements in the array.
  - Worst case: O(n^2) (rare in practice with good pivot selection).
- Space Complexity: O(log n) (in-place, due to recursion stack).
- Characteristics:
  - Unstable: The relative order of equal elements may not be preserved.
  - In-place: Does not require additional arrays for sorting.
  - Adaptive: Performance depends on pivot selection and input data.
- Example implementation: `quickSort.js`.

- Algorithm:

1. If the array has 0 or 1 element, it is already sorted.
2. Select a pivot element from the array.
3. Partition the array so that all elements less than the pivot are moved to its left, and all elements greater are moved to its right. The pivot is now in its correct sorted position.
4. Recursively apply the above steps to the subarrays to the left and right of the pivot.
5. Continue until all subarrays have 0 or 1 element, at which point the array is fully sorted.

### Radix Sort

tbd

### Other Important Sorting Algorithms

These algorithms are widely used in standard libraries and real-world applications, each chosen for specific strengths:

- **Heap Sort**: In-place, O(n log n), comparison-based. Uses a binary heap. Not stable, but valued for predictable performance and low memory use.
- **Shell Sort**: In-place, comparison-based. Generalizes insertion sort by allowing distant exchanges. Faster than insertion sort for medium arrays; used in some libraries.
- **TimSort**: Hybrid of merge and insertion sort. Stable, adaptive, and fast on real-world data. Default in Python and Java (non-primitive types).
- **Counting Sort & Bucket Sort**: Non-comparison sorts. Extremely fast for integers or data with a limited range.

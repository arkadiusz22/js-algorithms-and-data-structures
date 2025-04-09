# Evaluating Functions

## Key Metrics

1. **Faster** - Time complexity
2. **Less memory intensive** - Space complexity
3. **More readable**

## Example Functions

### Version 1: Iterative Sum

```javascript
function addUpTo_v1(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}
```

### Version 2: Formula-Based Sum

```javascript
function addUpTo_v2(n) {
  return (n * (n + 1)) / 2;
}
```

### Measuring Performance

```javascript
function measurePerformance(callback) {
  const t1 = performance.now();
  callback();
  const t2 = performance.now();
  console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds`);
}

measurePerformance(() => addUpTo_v1(10000));
measurePerformance(() => addUpTo_v2(10000));
```

### Why Time is Not Reliable for Performance Measurement

- Time cannot be precisely measured.
- Performance depends on hardware and other external factors.
- Code performance should ideally be estimated beforehand.

## Counting Operations

### addUpTo_v1

- Number of operations depends on `n`:
  - `n` additions and `n` assignments for updating `total`.
  - `n` additions and `n` assignments for incrementing the loop counter.
  - 1 assignment for initializing `total`.
  - 1 assignment for initializing the loop counter.
  - `n` comparisons between `n` and the loop counter.

**Simplification Rule**: Simplify the total number of operations. For example, `50n + 2` simplifies to `O(n)`.

### addUpTo_v2

- Always has only 3 operations.

### Big O Notation

- Describes the relationship between function runtime and input size.

#### Examples:

- **addUpTo_v1**: Proportional to `n` → `O(n)`
- **addUpTo_v2**: Constant number of operations → `O(1)`

## Additional Examples

### Counting Up and Down

```javascript
function countUpAndDown(n) {
  console.log("going up");
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
  console.log("at the top - going down...");
  for (let j = n - 1; j >= 0; j--) {
    console.log(j);
  }
  console.log("down");
}

measurePerformance(() => countUpAndDown(3));
measurePerformance(() => countUpAndDown(10));
```

**Complexity**: Simplifies to `O(n)`.

### Printing All Pairs

```javascript
function printAllPairs(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}

measurePerformance(() => printAllPairs(3));
measurePerformance(() => printAllPairs(10));
```

**Complexity**: Nested `O(n)` operations → `O(n^2)`.

## Simplifying Big O Expressions

### Rules:

1. **Constants don't matter**:
   - `O(500)` → `O(1)`
   - `O(2n)` → `O(n)`
   - `O(13n^2)` → `O(n^2)`
2. **Smaller terms don't matter**:
   - `O(n + 10)` → `O(n)`
   - `O(100n + 50)` → `O(n)`
   - `O(n^2 + 5n + 8)` → `O(n^2)`

### Key Points:

1. Arithmetic operations are constant.
2. Variable assignments are constant.
3. Accessing array elements by index or object fields by key is constant.
4. In a loop, complexity is the loop length times the complexity of operations inside the loop.

## Complexity Classifications

1. **O(1)** - Constant - Excellent
2. **O(log n)** - Logarithmic - Good
3. **O(n)** - Linear - Average
4. **O(n log n)** - Linearithmic - Poor
5. **O(n^2)** - Quadratic - Bad
6. **O(2^n)** - Exponential - Very Bad
7. **O(n!)** - Factorial - Extremely Bad

## Space Complexity

- **Auxiliary Space Complexity**: Space required by the algorithm itself (excluding input data).

### Examples:

1. Booleans, numbers, `undefined`, `null` → Constant space (`O(1)`).
2. Strings → `O(n)` space (where `n` is the string length).
3. Reference types (arrays, objects) → `O(n)` (array length, number of object keys).

### Space Complexity of addUpTo_v1

- 2 number declarations → `O(1)`.

### Doubling Array Elements

```javascript
function double(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(2 * array[i]);
  }
  return newArray;
}
```

**Space Complexity**: Creates an array of `n` elements → `O(n)`.

## Logarithms

- **Definition**: Inverse of exponentiation.
  - `log2(value) = exponent` → `2^exponent = value`
- In computer science, the base is typically omitted (assumed to be 2).

### Quick Approximation:

- Divide the value by the base repeatedly until the result is below 1.
- The number of divisions is the logarithm (approximately).

# Definitions

## What is an Algorithm?

An algorithm is a process or set of steps to accomplish a task.

---

## Evaluating Functions

### Key Metrics

1. **Faster** - Time complexity
2. **Less memory intensive** - Space complexity
3. **More readable**

#### Why Time is Not Reliable for Performance Measurement

- Time cannot be precisely measured.
- Performance depends on hardware and other external factors.
- Code performance should ideally be estimated beforehand using theoretical analysis.

---

## Counting Operations

### addUpTo_v1 function

- Number of operations depends on `n`:
  - `n` additions and assignments for updating `total`.
  - `n` additions and assignments for incrementing the loop counter.
  - 1 assignment for initializing `total`.
  - 1 assignment for initializing the loop counter.
  - `n` comparisons between `n` and the loop counter.

**Simplification Rule**: Simplify the total number of operations. For example, `50n + 2` simplifies to `O(n)`.

### addUpTo_v2 function

- Always has only 3 operations, regardless of `n`.

---

## Big O Notation

Big O describes the relationship between function runtime and input size.

### Examples:

- **addUpTo_v1**: Proportional to `n` → `O(n)`
- **addUpTo_v2**: Constant number of operations → `O(1)`

---

## Additional Examples

### countUpAndDown function

- **Complexity**: Simplifies to `O(n)`.

### printAllPairs function

- **Complexity**: Nested `O(n)` operations → `O(n^2)`.

---

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

- Arithmetic operations are constant.
- Variable assignments are constant.
- Accessing array elements by index or object fields by key is constant.
- In a loop, complexity is the loop length times the complexity of operations inside the loop.

---

## Complexity Classifications

1. **O(1)** - Constant - Excellent
2. **O(log n)** - Logarithmic - Good
3. **O(n)** - Linear - Average
4. **O(n log n)** - Linearithmic - Poor
5. **O(n^2)** - Quadratic - Bad
6. **O(2^n)** - Exponential - Very Bad
7. **O(n!)** - Factorial - Extremely Bad

---

## Space Complexity

### Auxiliary Space Complexity

Space required by the algorithm itself (excluding input data).

#### Examples:

1. Booleans, numbers, `undefined`, `null` → Constant space (`O(1)`).
2. Strings → `O(n)` space (where `n` is the string length).
3. Reference types (arrays, objects) → `O(n)` (array length, number of object keys).

---

## Logarithms

### Definition

Logarithms are the inverse of exponentiation.

- `log2(value) = exponent` → `2^exponent = value`
- In computer science, the base is typically omitted (assumed to be 2).

#### Quick Approximation:

- Divide the value by the base repeatedly until the result is below 1.
- The number of divisions is the logarithm (approximately).

---

# Arrays and Objects: Time Complexities and Use Cases

## Objects

### Use Case

Objects are ideal when you don't need order and require fast access, insertion, or removal.

### Time Complexities

- Access, insertion, or removal: **O(1)**
- Searching for a specific value: **O(n)**

### Common Methods

- `.keys`, `.values`, and `.entries`: **O(n)**
- `.hasOwnProperty`: **O(1)**

---

## Arrays

### Use Case

Arrays are ordered lists of data. Use arrays when you need order or fast access, insertion, and removal (depending on the specific case).

### Time Complexities

- Searching through an array: **O(n)**
- Accessing data by index: **O(1)**
- Inserting or removing an element at the end (`push`/`pop`): **O(1)**
- Inserting or removing an element at the beginning (`shift`/`unshift`): **O(n)** (requires re-indexing all elements)

### Common Methods and Their Time Complexities

- `.concat`, `.slice`, `.splice`, `.forEach`, `.map`, `.filter`, `.reduce`: **O(n)**
- `.sort`: **O(n log n)**

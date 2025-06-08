# Big O Notation & Complexity

---

## What is an Algorithm?

An algorithm is a process or set of steps to accomplish a task.

---

## Evaluating Functions

### Key Metrics

1. **Faster** - Time complexity
2. **Less memory intensive** - Space complexity
3. **More readable**

> **Note:** Time is not a reliable performance metric due to hardware and environment differences. Use theoretical analysis instead.

---

## Counting Operations

- **addUpToV1**: Number of operations depends on `n` (O(n))
- **addUpToV2**: Always 3 operations (O(1))

---

## Big O Notation

Big O describes the relationship between function runtime and input size.

| Example   | Complexity |
| --------- | ---------- |
| addUpToV1 | O(n)       |
| addUpToV2 | O(1)       |

---

## Simplifying Big O Expressions

- **Constants don't matter:**
  - O(500) → O(1)
  - O(2n) → O(n)
  - O(13n^2) → O(n^2)
- **Smaller terms don't matter:**
  - O(n + 10) → O(n)
  - O(n^2 + 5n + 8) → O(n^2)

---

## Common Complexity Classes

| Class        | Notation   | Description   |
| ------------ | ---------- | ------------- |
| Constant     | O(1)       | Excellent     |
| Logarithmic  | O(log n)   | Good          |
| Linear       | O(n)       | Average       |
| Linearithmic | O(n log n) | Poor          |
| Quadratic    | O(n^2)     | Bad           |
| Exponential  | O(2^n)     | Very Bad      |
| Factorial    | O(n!)      | Extremely Bad |

---

## Space Complexity

- **Auxiliary space**: Space required by the algorithm (not input data)
- Booleans, numbers, `undefined`, `null`: O(1)
- Strings: O(n)
- Arrays/objects: O(n)

---

## Logarithms

- Logarithms are the inverse of exponentiation
- In CS, base 2 is assumed (log2)
- log2(value) = exponent → 2^exponent = value

---

## Arrays vs Objects: Time Complexities

### Objects

| Operation         | Complexity |
| ----------------- | ---------- |
| Access/Insert/Del | O(1)       |
| Search            | O(n)       |
| .keys/.values     | O(n)       |
| .hasOwnProperty   | O(1)       |

### Arrays

| Operation         | Complexity |
| ----------------- | ---------- |
| Search            | O(n)       |
| Access by index   | O(1)       |
| push/pop          | O(1)       |
| shift/unshift     | O(n)       |
| .sort             | O(n log n) |
| .map/.filter/etc. | O(n)       |

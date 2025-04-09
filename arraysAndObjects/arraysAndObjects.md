# Arrays and Objects: Time Complexities and Use Cases

## Objects

- **Use Case**: Objects are ideal when you don't need order and require fast access, insertion, or removal.
- **Time Complexities**:
  - Access, insertion, or removal: **O(1)**
  - Searching for a specific value: **O(n)**
- **Common Methods**:
  - `.keys`, `.values`, and `.entries`: **O(n)**
  - `.hasOwnProperty`: **O(1)**

## Arrays

- **Use Case**: Arrays are ordered lists of data. Use arrays when you need order or fast access, insertion, and removal (depending on the specific case).
- **Time Complexities**:
  - Searching through an array: **O(n)**
  - Accessing data by index: **O(1)**
  - Inserting or removing an element at the end (`push`/`pop`): **O(1)**
  - Inserting or removing an element at the beginning (`shift`/`unshift`): **O(n)** (requires re-indexing all elements)
- **Common Methods and Their Time Complexities**:
  - `.concat`, `.slice`, `.splice`, `.forEach`, `.map`, `.filter`, `.reduce`: **O(n)**
  - `.sort`: **O(n \* log n)**

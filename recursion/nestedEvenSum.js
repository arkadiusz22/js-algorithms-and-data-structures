// Write a recursive function called nestedEvenSum.
// Return the sum of all even numbers in an object which may contain nested objects.

/**
 * @param {Object} object
 */
export function nestedEvenSum(object) {
  let accumulator = 0;

  for (const key in object) {
    const value = object[key];

    if (typeof value === "number" && value % 2 === 0) {
      accumulator += value;
    } else if (typeof value === "object" && value !== null) {
      accumulator += nestedEvenSum(value);
    }
  }

  return accumulator;
}

// Test Cases
const obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

const obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" },
};

const obj3 = {
  x: 4,
  y: { y1: 6, y2: { y3: 8, y4: { y5: 10 } } },
  z: "string",
};

const obj4 = {
  p: 1,
  q: { q1: 2, q2: { q3: 4, q4: { q5: 6, q6: { q7: 8 } } } },
  r: { r1: 3, r2: { r3: 5 } },
};

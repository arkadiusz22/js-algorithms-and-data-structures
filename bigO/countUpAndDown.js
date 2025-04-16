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

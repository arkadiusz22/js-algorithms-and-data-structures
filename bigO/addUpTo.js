function addUpTo_v1(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

function addUpTo_v2(n) {
  return (n * (n + 1)) / 2;
}

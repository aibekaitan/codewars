function factorial(n) {
  if (n < 0) throw new RangeError("n must be non-negative");
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i
  }
  return result;
}
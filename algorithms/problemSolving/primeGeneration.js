/**
 * @param {number} limit
 * @returns {Array<number>} array of all prime numbers lower than given limit
 */
export function primeGeneration(limit) {
  if (limit <= 2) return [];

  const candidates = new Array(limit).fill(true);

  candidates[0] = false;
  candidates[1] = false;

  for (let prime = 2; prime * prime < limit; prime++) {
    if (candidates[prime]) {
      for (let i = prime * prime; i < limit; i += prime) {
        candidates[i] = false;
      }
    }
  }

  let primes = [];
  for (let j = 2; j < limit; j++) {
    if (candidates[j]) primes.push(j);
  }

  return primes;
}

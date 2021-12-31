/**
 * Check if a number is even or not
 * @param {number} num The number to check
 * @return {boolean} True if the number is even, false otherwise
 */
export function isEven(num: number): boolean {
  return num % 2 == 0;
}

/**
 * Calculate the sum of an arithmetic sequence to the n'th element
 * @param {number} n The last element of the sequence
 * @param {number} a1 The first element of the sequence
 * @param {number} d The common difference
 * @return {number} The sum of the arithmetic sequence
 */
export function arithmeticSequenceSum(n: number, a1: number = 1, d: number = 1) {
  return n * ((2 * a1) + (n - 1) * d) / 2;
}

/**
 * Calculate if a given number is a prime number or not
 * @param {number} n The prime number candidate
 * @return {boolean} True if n is prime, false otherwise
 */
export function isPrime(n: number): boolean {
  if (n < 2) {
    return false;
  }

  const sqrtN = Math.sqrt(n);
  for (let i = 2; i < sqrtN; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

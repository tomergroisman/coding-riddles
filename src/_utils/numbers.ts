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

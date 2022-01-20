/**
 * Project Euler.net Problem 57
 * Square Root Convergents
 * https://projecteuler.net/problem=57
 */


let count = 0;

/**
 * Expand a fraction
 * @param {number} n The number of iterations
 * @param {number} numerator The fraction numerator
 * @param {number} denominator The fraction denominator
 * @return {number}
 */
export function expand(
    n: number,
    numerator: number,
    denominator: number,
): number {
  if (numerator.toString().length > denominator.toString().length) {
    count++;
  }

  if (n === 1) {
    return numerator / denominator;
  }

  return numerator / (denominator + expand(n - 1, numerator, denominator));
}

// eslint-disable-next-line require-jsdoc
export function squareRootConvergents(n: number) {
  expand(n, 1, 2);
  return count;
}

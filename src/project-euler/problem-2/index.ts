/**
 * Project Euler.net Problem 2
 * Even Fibonacci numbers
 * https://projecteuler.net/problem=2
 */

import {isEven} from '../../_utils/numbers';

/**
 * Calculate the n'th number in the fibonacci sequence
 * @param {number} n The Fibonacci sequence index number to calculate
 * @return {number} The n'th number of the Fibonacci sequence
 */
export function fibonacci(n: number): number {
  if (n == 0 || n == 1) {
    return n;
  }

  return fibonacci(n - 2) + fibonacci(n - 1);
}

/**
 * Calculate the sum of even Fibonacci sequence numbers up to a provided max number
 * @param {number} max Max number to sum to
 * @return {number} The sum of even Fibonacci sequence numbers up to max
 */
export function sumEvens(max: number): number {
  let sum = 0;
  let n = 0;
  let value = fibonacci(n);

  while (value < max) {
    value = fibonacci(++n);
    if (isEven(value)) {
      sum += value;
    }
  }

  return sum;
}

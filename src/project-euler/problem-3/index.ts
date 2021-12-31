/**
 * Project Euler.net Problem 3
 * Largest Prime Factor
 * https://projecteuler.net/problem=3
 */

import {isPrime} from '../../_utils/numbers';

/**
 * Calculate the largest prime factor of a number
 * @param {number} n The number to calculate its largest prime factor
 * @return {number} The largest prime factor of n
 * @throws {Error} If n is lower then 2 (doesn't have any prime factor)
 */
export function largestPrimeFactor(n: number): number {
  if (n < 2) {
    throw Error('n must have a prime factor');
  }

  if (isPrime(n)) {
    return n;
  }

  let currentLargestPrimeFactor = 2;
  let temp = n;

  while (temp > 1) {
    if (temp % currentLargestPrimeFactor == 0) {
      temp /= currentLargestPrimeFactor;
      if (isPrime(temp)) {
        return temp;
      }
    } else {
      currentLargestPrimeFactor++;
    }
  }
  return currentLargestPrimeFactor;
}

/**
 * Print the riddle's answer
 */
export function answer() {
  console.log(largestPrimeFactor(600851475143));
}

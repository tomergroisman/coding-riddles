/**
 * Project Euler.net Problem 1
 * Multiples of 3 or 5
 * https://projecteuler.net/problem=1
 */

import {arithmeticSequenceSum} from '../../_utils/numbers';

/**
 * Calculate the sum of 3 and 5 multiples of a number n
 * @param {number} n The number to calculate its 3 and 5 multiples sum
 * @return {number} The sum of 3 and 5 multiples of n
 */
export function multiplesOfThreeOrFive(n: number) {
  const numberOfThreeMultiples = Math.floor((n - 1) / 3);
  const threesArithmeticSequenceSum = 3 * arithmeticSequenceSum(numberOfThreeMultiples);
  const numberOfFiveMultiples = Math.floor((n - 1) / 5);
  const fivesArithmeticSequenceSum = 5 * arithmeticSequenceSum(numberOfFiveMultiples);

  const numberOfDuplications = Math.floor(numberOfFiveMultiples / 3);
  const duplicationsArithmeticSequenceSum = 15 * arithmeticSequenceSum(numberOfDuplications);

  return threesArithmeticSequenceSum + fivesArithmeticSequenceSum - duplicationsArithmeticSequenceSum;
}

/**
 * Print the riddle's answer
 */
export function answer() {
  multiplesOfThreeOrFive(1000);
}

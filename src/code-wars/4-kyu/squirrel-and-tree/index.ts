/**
 * CodeWars
 * One Line Task: Squirrel And Tree
 * https://www.codewars.com/kata/59016379ee5456d8cc00000f
 * /

/**
 * Calculates the distance that the squirrel pass
 * @param {number} h The height that the squirrel pass on every loop
 * @param {number} H The height of the tree
 * @param {number} S The length of the tree circumference
 * @return {number} the distance the squirrel passed to reach the top of the tree
 */
export const calcDistance = (h: number, H: number, S: number): number =>
  +(Math.hypot(h, S) * H / h).toFixed(4);

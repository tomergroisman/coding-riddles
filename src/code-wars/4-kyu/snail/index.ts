/**
 * CodeWars
 * Snail
 * https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1
 */

enum Direction {
  UP,
  DOWN,
  RIGHT,
  LEFT,
}

/**
 * Returns a snail representation of a matrix
 * @param {Array<number[]>} matrix A matrix to snail
 * @return {number[]} A snail array representation of the given matrix
 */
export function snail(matrix: number[][]): number[] {
  const visited: {[key: string]: true} = {};
  const n = matrix[0].length;

  let direction = Direction.RIGHT;
  let row = 0;
  let column = 0;

  const res: number[] = [];

  while (res.length < n ** 2) {
    let hasInserted = false;
    // Try to insert
    const isValidCell = 0 <= row && row < n && 0 <= column && column < n;
    if (!visited[`${row},${column}`] && isValidCell) {
      const value = matrix[row][column];
      res.push(value);
      visited[`${row},${column}`] = true;
      hasInserted = true;
    }

    // Update next
    {
      switch (direction) {
        case Direction.RIGHT: {
          if (hasInserted) {
            column++;
          } else {
            direction = Direction.DOWN;
            column--;
            row++;
          }
          break;
        }

        case Direction.DOWN: {
          if (hasInserted) {
            row++;
          } else {
            direction = Direction.LEFT;
            row--;
            column--;
          }
          break;
        }

        case Direction.LEFT: {
          if (hasInserted) {
            column--;
          } else {
            direction = Direction.UP;
            column++;
            row--;
          }
          break;
        }

        case Direction.UP: {
          if (hasInserted) {
            row--;
          } else {
            direction = Direction.RIGHT;
            row++;
            column++;
          }
          break;
        }
      }
    }
  }

  return res;
}

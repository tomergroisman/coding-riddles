import * as uut from './index';

describe('Snail Tests', function() {
  it('should print a snail representation', function() {
    const input = [[]];

    const result = uut.snail(input);
    const expectation: number[] = [];

    expect(result).toStrictEqual(expectation);
  });

  it('should print a snail representation', function() {
    const input = [[1]];

    const result = uut.snail(input);
    const expectation = [1];

    expect(result).toStrictEqual(expectation);
  });

  it('should print a snail representation', function() {
    const input = [
      [1, 2],
      [3, 4],
    ];

    const result = uut.snail(input);
    const expectation = [1, 2, 4, 3];

    expect(result).toStrictEqual(expectation);
  });

  it('should print a snail representation', function() {
    const input = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];

    const result = uut.snail(input);
    const expectation = [1, 2, 3, 6, 9, 8, 7, 4, 5];

    expect(result).toStrictEqual(expectation);
  });

  it('should print a snail representation', function() {
    const input = [
      [1, 2, 3],
      [8, 9, 4],
      [7, 6, 5],
    ];

    const result = uut.snail(input);
    const expectation = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    expect(result).toStrictEqual(expectation);
  });
});

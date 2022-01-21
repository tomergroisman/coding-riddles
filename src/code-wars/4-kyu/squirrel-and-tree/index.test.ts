import * as uut from './index';

describe('Squirrel and Tree Tests', () => {
  let h: number;
  let H: number;
  let S: number;

  it('should calculate distance', () => {
    h = 4;
    H = 16;
    S = 3;

    expect(uut.calcDistance(h, H, S)).toBe(20);
  });

  it('should calculate distance', () => {
    h = 8;
    H = 9;
    S = 37;

    expect(uut.calcDistance(h, H, S)).toBe(42.5869);
  });
});



import * as uut from './index';

describe('Expand Tests', () => {
  let expanded: number;

  it('should expand 1/2 one time', () => {
    expanded = uut.expand(1, 1, 2);
    expect(expanded.toFixed(10)).toBe((1 / 2).toFixed(10));
  });

  it('should expand 1/2 two time', () => {
    expanded = uut.expand(2, 1, 2);
    expect(expanded.toFixed(10)).toBe((2 / 5).toFixed(10));
  });

  it('should expand 1/2 three time', () => {
    expanded = uut.expand(3, 1, 2);
    expect(expanded.toFixed(10)).toBe((5 / 12).toFixed(10));
  });

  it('should expand 1/2 two time', () => {
    expanded = uut.expand(4, 1, 2);
    expect(expanded.toFixed(10)).toBe((12 / 29).toFixed(10));
  });
});

describe('Square Root Convergents Tests', () => {
  let count: number;

  it('should return one count for eight expansion', () => {
    count = uut.squareRootConvergents(8);
    expect(count).toBe(1);
  });
});

import * as uut from './index';

describe('Multiples of 3 or 5 Tests', () => {
  it('should calculate the multiples of 3 or 5 under 10', () => {
    const sum = uut.multiplesOfThreeOrFive(10);
    expect(sum).toBe(23);
  });

  it('should calculate the multiples of 3 or 5 under 20', () => {
    const sum = uut.multiplesOfThreeOrFive(20);
    expect(sum).toBe(78);
  });

  it('should calculate the multiples of 3 or 5 under 30', () => {
    const sum = uut.multiplesOfThreeOrFive(30);
    expect(sum).toBe(195);
  });

  it('should calculate the multiples of 3 or 5 under 1000', () => {
    const sum = uut.multiplesOfThreeOrFive(1000);
    expect(sum).toBe(233168);
  });
});

import * as uut from './index';

describe('Largest Prime Factor Tests', () => {
  let largestPrimeFactor: number | null;

  it('should return the largest prime factor of 29', () => {
    largestPrimeFactor = uut.largestPrimeFactor(29);
    expect(largestPrimeFactor).toBe(29);
  });

  it('should return the largest prime factorx of 13195', () => {
    largestPrimeFactor = uut.largestPrimeFactor(13195);
    expect(largestPrimeFactor).toBe(29);
  });

  it('should return the largest prime factor of 600851475143', () => {
    largestPrimeFactor = uut.largestPrimeFactor(600851475143);
    expect(largestPrimeFactor).toBe(6857);
  });
});

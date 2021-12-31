import * as uut from './numbers';

describe('Numbers Utils Tests', () => {
  describe('Even Number Tests', () => {
    it('should return true for even number', () => {
      const isEven = uut.isEven(6);
      expect(isEven).toBeTruthy();
    });

    it('should return false for odd number', () => {
      const isEven = uut.isEven(9);
      expect(isEven).toBeFalsy();
    });

    it('should return true for 0', () => {
      const isEven = uut.isEven(0);
      expect(isEven).toBeTruthy();
    });

    it('should return true for negative even number', () => {
      const isEven = uut.isEven(-456);
      expect(isEven).toBeTruthy();
    });

    it('should return false for negative off number', () => {
      const isEven = uut.isEven(-13);
      expect(isEven).toBeFalsy();
    });
  });

  describe('Arithmetic Sequence Sum', () => {
    it('should calculate the sum of d=1, a1=1, n=10 arithmetic sequence', () => {
      const sum = uut.arithmeticSequenceSum(10);
      expect(sum).toBe(55);
    });

    it('should calculate the sum of d=3, a1=1, n=10 arithmetic sequence', () => {
      const sum = uut.arithmeticSequenceSum(10, 1, 3);
      expect(sum).toBe(145);
    });

    it('should calculate the sum of d=3, a1=1, n=10 arithmetic sequence', () => {
      const sum = uut.arithmeticSequenceSum(10, -4, 3);
      expect(sum).toBe(95);
    });

    it('should calculate the sum of d=4, a1=1, n=20 arithmetic sequence', () => {
      const sum = uut.arithmeticSequenceSum(20, 1, 4);
      expect(sum).toBe(780);
    });
  });
});

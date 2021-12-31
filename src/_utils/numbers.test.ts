import * as uut from './numbers';

describe('Numbers Utils Tests', () => {
  describe('Even Number Tests', () => {
    let isEven: boolean;

    it('should return true for even number', () => {
      isEven = uut.isEven(6);
      expect(isEven).toBeTruthy();
    });

    it('should return false for odd number', () => {
      isEven = uut.isEven(9);
      expect(isEven).toBeFalsy();
    });

    it('should return true for 0', () => {
      isEven = uut.isEven(0);
      expect(isEven).toBeTruthy();
    });

    it('should return true for negative even number', () => {
      isEven = uut.isEven(-456);
      expect(isEven).toBeTruthy();
    });

    it('should return false for negative off number', () => {
      isEven = uut.isEven(-13);
      expect(isEven).toBeFalsy();
    });
  });

  describe('Arithmetic Sequence Sum', () => {
    let sum: number;
    it('should calculate the sum of d=1, a1=1, n=10 arithmetic sequence', () => {
      sum = uut.arithmeticSequenceSum(10);
      expect(sum).toBe(55);
    });

    it('should calculate the sum of d=3, a1=1, n=10 arithmetic sequence', () => {
      sum = uut.arithmeticSequenceSum(10, 1, 3);
      expect(sum).toBe(145);
    });

    it('should calculate the sum of d=3, a1=1, n=10 arithmetic sequence', () => {
      sum = uut.arithmeticSequenceSum(10, -4, 3);
      expect(sum).toBe(95);
    });

    it('should calculate the sum of d=4, a1=1, n=20 arithmetic sequence', () => {
      sum = uut.arithmeticSequenceSum(20, 1, 4);
      expect(sum).toBe(780);
    });
  });

  describe('Is Prime Tests', () => {
    let isPrime: boolean;
    it('should return true for small prime number', () => {
      isPrime = uut.isPrime(29);
      expect(isPrime).toBeTruthy();
    });

    it('should return true for mid prime number', () => {
      isPrime = uut.isPrime(7919);
      expect(isPrime).toBeTruthy();
    });

    it('should return true for large prime number', () => {
      isPrime = uut.isPrime(1000003751);
      expect(isPrime).toBeTruthy();
    });

    it('should return false for small prime number', () => {
      isPrime = uut.isPrime(27);
      expect(isPrime).toBeFalsy();
    });

    it('should return false for mid prime number', () => {
      isPrime = uut.isPrime(7980);
      expect(isPrime).toBeFalsy();
    });

    it('should return false for large prime number', () => {
      isPrime = uut.isPrime(1000003757);
      expect(isPrime).toBeFalsy();
    });

    it('should return true for 2', () => {
      isPrime = uut.isPrime(2);
      expect(isPrime).toBeTruthy();
    });

    it('should return false for 1', () => {
      isPrime = uut.isPrime(1);
      expect(isPrime).toBeFalsy();
    });

    it('should return false for negative number', () => {
      isPrime = uut.isPrime(-29);
      expect(isPrime).toBeFalsy();
    });
  });
});

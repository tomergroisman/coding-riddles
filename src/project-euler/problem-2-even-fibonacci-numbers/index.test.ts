import * as uut from './index.ts';

describe('Even Fibonacci Numbers Sum Tests', () => {
  describe('Fibonacci Sequence Tests', () => {
    it('should calculate the first two  numbers in the Fibonacci sequence', () => {
      const n0 = 0;
      const n1 = 1;

      const fibonacci0 = uut.fibonacci(n0);
      const fibonacci1 = uut.fibonacci(n1);
      expect(fibonacci0).toBe(0);
      expect(fibonacci1).toBe(1);
    });

    it('should calculate second number in Fibonacci sequence', () => {
      const n = 2;

      const fibonacci = uut.fibonacci(n);
      expect(fibonacci).toBe(1);
    });

    it('should calculate 10th number in Fibonacci sequence', () => {
      const n = 10;

      const fibonacci = uut.fibonacci(n);
      expect(fibonacci).toBe(55);
    });

    it('should calculate 20th number in Fibonacci sequence', () => {
      const n = 20;

      const fibonacci = uut.fibonacci(n);
      expect(fibonacci).toBe(6765);
    });

    it('should calculate 40th number in Fibonacci sequence', () => {
      const n = 30;

      const fibonacci = uut.fibonacci(n);
      expect(fibonacci).toBe(832040);
    });
  });

  describe('Even Fibonacci Numbers Sum', () => {
    it('should calculate the even Fibonacci numbers sum up to 10', () => {
      const sum = uut.sumEvens(10);
      expect(sum).toBe(10);
    });

    it('should calculate the even Fibonacci numbers sum up to 1000', () => {
      const sum = uut.sumEvens(1000);
      expect(sum).toBe(798);
    });

    it('should calculate the even Fibonacci numbers sum up to 4 million', () => {
      const sum = uut.sumEvens(4000000);
      expect(sum).toBe(4613732);
    });
  });
});

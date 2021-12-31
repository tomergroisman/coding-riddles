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
});

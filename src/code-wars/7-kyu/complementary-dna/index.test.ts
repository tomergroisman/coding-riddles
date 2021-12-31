import * as uut from './index';

describe('Complementary DNA Tests', () => {
  it('should get a complementary DNA', () => {
    expect(uut.dnaStrand('AAAA')).toBe('TTTT');
    expect(uut.dnaStrand('ATTGC')).toBe('TAACG');
    expect(uut.dnaStrand('GTAT')).toBe('CATA');
  });
});

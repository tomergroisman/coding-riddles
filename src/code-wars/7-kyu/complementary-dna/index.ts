/**
 * Returns a complementary DNA representation of a DNA strand
 * @param {string} dna A DNA strand representation
 * @return {string} The complementary DNA
 */
export function dnaStrand(dna: string): string {
  return [...dna].map((char) => {
    // @ts-ignore
    const newChar = dnaComplementaryMap[char];
    if (!newChar) {
      throw Error('Invalid DNA input');
    }
    return newChar;
  }).join('');
}

const dnaComplementaryMap = {
  'A': 'T',
  'T': 'A',
  'C': 'G',
  'G': 'C',
};

import * as uut from './index';

describe('Who Likes It Tests', () => {
  let likeString: string;

  it('should print no likes', () => {
    const peopleLike: string[] = [];
    likeString = uut.likeString(peopleLike);

    expect(likeString).toBe('no one likes this');
  });

  it('should print one like', () => {
    const peopleLike: string[] = ['Peter'];
    likeString = uut.likeString(peopleLike);

    expect(likeString).toBe('Peter likes this');
  });

  it('should print no likes', () => {
    const peopleLike: string[] = ['Jacob', 'Alex'];
    likeString = uut.likeString(peopleLike);

    expect(likeString).toBe('Jacob and Alex like this');
  });

  it('should print no likes', () => {
    const peopleLike: string[] = ['Max', 'John', 'Mark'];
    likeString = uut.likeString(peopleLike);

    expect(likeString).toBe('Max, John and Mark like this');
  });

  it('should print no likes', () => {
    const peopleLike: string[] = ['Alex', 'Jacob', 'Mark', 'Max'];
    likeString = uut.likeString(peopleLike);

    expect(likeString).toBe('Alex, Jacob and 2 others like this');
  });

  it('should print no likes', () => {
    const peopleLike: string[] = ['Aya', 'Tomer', 'Alex', 'Ben', 'Jacob', 'Mark', 'Max'];
    likeString = uut.likeString(peopleLike);

    expect(likeString).toBe('Aya, Tomer and 5 others like this');
  });
});

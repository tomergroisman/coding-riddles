/**
 * CodeWars
 * Who Likes It?
 * https://www.codewars.com/kata/5266876b8f4bf2da9b000362
 * /

/**
 * Returns a string representation for an array of people who likes an item
 * @param {string[]} names An array of the people who likes the item
 * @return {string} A string representation of the people who likes the item
 */
export function likeString(names: string[]): string {
  const numberOfPeople = names.length;
  switch (numberOfPeople) {
    case 0: {
      return 'no one likes this';
    }
    case 1: {
      return `${names[0]} likes this`;
    }
    case 2: {
      return `${names[0]} and ${names[1]} like this`;
    }
    case 3: {
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    }
    default: {
      return `${names[0]}, ${names[1]} and ${numberOfPeople - 2} others like this`;
    }
  }
}

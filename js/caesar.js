const lowercaseTable = 'abcdefghijklmnopqrstuvwxyz';
const uppercaseTable = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const caesar = (text, key) => {
  if (typeof text !== 'string') throw new Error('text should be a string');
  if (typeof key !== 'number') throw new Error('key should be a number');
  const characters = text.split('');
  const cipher = characters.map((character) => {
    if (/[a-z]/.test(character)) {
      return lowercaseTable[(lowercaseTable.indexOf(character) + key) % 26];
    }
    if (/[A-Z]/.test(character)) {
      return uppercaseTable[(uppercaseTable.indexOf(character) + key) % 26];
    }
    return character;
  });
  return cipher.join('');
};

export default caesar;
const reverseString = (str) => {
  if (typeof str !== 'string') throw new Error('Invalid parameter');
  const characters = str.split('');
  const result = characters.reduce((accumulator, currentChar) => currentChar + accumulator, '');
  return result;
};

export default reverseString;
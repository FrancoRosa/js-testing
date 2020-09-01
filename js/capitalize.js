const capOne = (sample) => {
  if (!sample) return null;
  sample = sample.toLowerCase();
  const first = sample[0].toUpperCase();
  sample = sample.slice(1, sample.length);
  sample = first + sample;
  return sample;
};

const capitalize = (sample) => {
  const words = sample.split(' ');
  const wordsArray = words.map(word => capOne(word));
  return wordsArray.join(' ');
};

export default capitalize;
const analyze = (arr) => {
  if (!arr) return null;
  if (arr.some(data => typeof data !== 'number')) throw new Error('Invalid data');

  const average = (arr) => {
    const sum = arr.reduce((prev, curr) => prev + curr, 0);
    return sum / arr.length;
  };
  const min = (arr) => {
    const minimum = arr.reduce((prev, curr) => (prev > curr ? curr : prev), arr[0]);
    return minimum;
  };
  const max = (arr) => {
    const maximum = arr.reduce((prev, curr) => (prev < curr ? curr : prev), arr[0]);
    return maximum;
  };
  const length = (arr) => {
    const len = arr.reduce(prev => prev + 1, 0);
    return len;
  };

  return {
    average: arr.length > 0 ? average(arr) : null,
    min: arr.length > 0 ? min(arr) : null,
    max: arr.length > 0 ? max(arr) : null,
    length: length(arr),
  };
};

export default analyze;
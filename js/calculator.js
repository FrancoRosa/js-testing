const add = (a, b) => {
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  throw new Error('Not numeric parameters or missing');
};

const subtract = (a, b) => {
  if (typeof a === 'number' && typeof b === 'number') return a - b;
  throw new Error('Not numeric parameters or missing');
};

const divide = (a, b) => {
  if (typeof a === 'number' && typeof b === 'number') {
    if (b === 0) return Infinity;
    return a / b;
  }
  throw new Error('Not numeric parameters or missing');
};

const multiply = (a, b) => {
  if (typeof a === 'number' && typeof b === 'number') return a * b;
  throw new Error('Not numeric parameters or missing');
};

const calculator = {
  add,
  subtract,
  divide,
  multiply,
};

export default calculator;
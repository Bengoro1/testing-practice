const analyzeArray = require('./analyzeArray');

test('analyze array for average, min, max number and length', () => {
  expect(analyzeArray([4, 6, 5, 2, 7, 9, 1, 2, 9])).toEqual({
    average: 5,
    min: 1,
    max: 9,
    length: 9,
  });
});

test('analyzing non-array', () => {
  expect(analyzeArray(4, 6, 5, 2, 7, 9, 1, 2, 9)).toBe('not an array');
});

test('analyze array with non-number elements', () => {
  expect(analyzeArray([4, 6, 5, 'a', 7, 9, 1, 2, 9])).toBe('only numbers are valid as array items');
});
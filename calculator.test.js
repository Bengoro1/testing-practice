const calculator = require('./calculator');

test('add 3 and 5', () => {
  expect(calculator.add(3, 5)).toBe(8);
});

test('subtract 18 and 9', () => {
  expect(calculator.subtract(18, 9)).toBe(9);
});

test('divide 24 and 6', () => {
  expect(calculator.divide(24, 6)).toBe(4);
});

test('add 17 and 5', () => {
  expect(calculator.multiply(17, 5)).toBe(85);
});

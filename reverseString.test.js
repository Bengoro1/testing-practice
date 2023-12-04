const reverseString = require('./reverseString');

test('reverse sentence "Hi, I\'m good', () => {
  expect(reverseString('Hi, I\'m good')).toBe('doog m\'I ,iH');
});
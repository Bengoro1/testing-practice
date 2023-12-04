const capitalize = require('./capitalize');

test('capitalize sentance "hello, how are you"', () => {
  expect(capitalize('hello, how are you')).toBe('Hello, How Are You');
});
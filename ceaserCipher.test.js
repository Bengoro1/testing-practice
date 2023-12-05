const ceaserCipher = require('./ceaserCipher');

test('ceaser cipher "ceaser cipher"', () => {
  expect(ceaserCipher('ceaser cipher')).toBe('dfbtfs djqifs')
});
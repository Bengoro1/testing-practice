function analyzeArray(arr) {
  if (!Array.isArray(arr)) return 'not an array';
  if (!arr.every(x => typeof x === 'number')) return 'only numbers are valid as array items';
  const average = arr.reduce((a, b) => a + b) / arr.length;
  const min = arr.reduce((a, b) => Math.min(a, b));
  const max = arr.reduce((a, b) => Math.max(a, b));
  const length = arr. length;
  return { average, min, max, length}
}

module.exports = analyzeArray;
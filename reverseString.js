function reverseString(str) {
  const arr = str.split('');
  const reverseArr = [];
  arr.forEach(el => reverseArr.unshift(el));
  return reverseArr.join('');
}

module.exports = reverseString;
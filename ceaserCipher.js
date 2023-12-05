function ceaserCipher(str) {
  const ceaserArr = [];
  const arr = str.split('');
  arr.forEach(el => {
    const charCode = el.charCodeAt(0);
    if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123)) {
      switch (charCode) {
        case 90: ceaserArr.push('Z');
        case 122: ceaserArr.push('z');
        default: ceaserArr.push(String.fromCharCode(charCode + 1));
      }
    } else ceaserArr.push(String.fromCharCode(charCode));
  });
  return ceaserArr.join('');
}

module.exports = ceaserCipher;
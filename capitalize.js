function capitalize(sentence) {
  const words = sentence.split(' ');
  const arr = [];
  words.forEach(word => {
    arr.push(word.charAt(0).toUpperCase() + word.slice(1));
  });
  return arr.join(' ');
}

module.exports = capitalize;
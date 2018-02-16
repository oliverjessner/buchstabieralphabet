module.exports = function ({ word, type }) {
    const tafel = require('./tafel');
    const alphabet = tafel[type];
    const longKeys = Object.keys(alphabet).filter(a => a.length > 1);
    const splitWord = word.split('').map(w => w.toUpperCase());

    splitWord.forEach(word => console.log(`${word} -> ${alphabet[word]}`));
};

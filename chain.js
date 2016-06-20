var _ = require("lodash");

var worker = function(words) {
  function wordFormatter(word) {
    return word.toUpperCase() + 'CHAINED';
  }

  var formattedWords = _.chain(words)
    .map(function(word) {
      return wordFormatter(word);
    })
    .sort()

  return formattedWords;
};

module.exports = worker;

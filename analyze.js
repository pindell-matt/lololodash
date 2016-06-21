var _ = require("lodash");

var worker = function(people) {

  var sumPeopleIncome = _.chain(people)
    .map(function(person) {
      return person.income;
    })
    .reduce(function(sum, num) {
      return sum + num;
    });

  var avgIncome = sumPeopleIncome / parseFloat(people.length);

  var result =  {
    "average": avgIncome,
    "underperform": _.chain(people)
        .filter(function(person) {
          return person.income <= avgIncome;
        })
        .sortBy('income'),
    "overperform": _.chain(people)
        .filter(function(person) {
          return person.income > avgIncome;
        })
        .sortBy('income')
  }

  return result;
};

module.exports = worker;

var _ = require("lodash");

var worker = function(cities) {
  var citiesByTemp = {
    hot: [],
    warm: []
  }

  function checkTemp(temp) {
    return temp > 19;
  }

  _.forEach(cities, function(temperatures, city) {
    if (_.every(temperatures, checkTemp)) {
      citiesByTemp.hot.push(city);
    } else if (_.some(temperatures, checkTemp)) {
      citiesByTemp.warm.push(city);
    }
  });

  return citiesByTemp;
};

module.exports = worker;

var _ = require("lodash");

var array = [
              { id: 22, username: "martin", active: true},
              { id: 23, username: "max",    active: false},
              { id: 24, username: "linda",  active: false}
            ];

var worker = function(array) {
  return _.filter(array, { active: true });
};

module.exports = worker;

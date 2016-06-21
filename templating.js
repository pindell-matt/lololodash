var _ = require("lodash");

var worker = function(userData) {
  var userName = userData.name;
  var loginCount = userData.login.length;
  var data = {
    user: userName,
    loginCount: loginCount
  }

  return _.template('Hello <%= user %> (logins: <%= loginCount %>)')(data);
};

module.exports = worker;

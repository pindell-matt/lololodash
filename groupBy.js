var _ = require("lodash");

var worker = function(comments) {

  function userCommentCountFormatter(comments, name) {
    return {
      username:      name,
      comment_count: _.size(comments)
    }
  }

  return _.chain(comments)
    .groupBy('username')
    .map(function(comments, name) {
      return userCommentCountFormatter(comments, name);
    })
    .reverse()
};

module.exports = worker;

var _ = require("lodash");

var worker = function(articles) {

  return _.chain(articles)
    .groupBy('article')
    .map(function(articles, title) {

      var totalCount = _.reduce(articles, function(sum, article) {
        return sum + article.quantity;
      }, 0);

      return { article: parseInt(title), total_orders: totalCount }
    })
    .reverse()
};

module.exports = worker;

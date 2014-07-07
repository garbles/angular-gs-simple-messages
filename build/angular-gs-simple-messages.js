if (typeof module !== 'undefined' && typeof exports !== 'undefined' && module.exports === exports){
  module.exports = 'gs.simple-messages';
}

(function(window, angular, undefined) {'use strict';

angular.module('gs.simple-messages', [])
.provider('messages', function () {
  var _templates = 'messagesTemplates',
    _delimeter = '.';

  this.setTemplates = function (templates) {
    _templates = templates;
  };

  this.setDelimeter = function (delimeter) {
    _delimeter = delimeter;
  };

  this.$get = ['$injector', function ($injector) {
    var templates = $injector.get(_templates);

    return function (message, data) {
      var template = _.reduce(message.split(_delimeter), function (acc, key) {
        return acc[key];
      }, templates);

      if (!_.isString(template)) {
        throw 'messages service: \"' + message + '\" did not resolve a string.';
      }

      return _.template(template, data || {}, { interpolate: /{{([\s\S]+?)}}/g });
    };
  }];
});

})(window, window.angular);

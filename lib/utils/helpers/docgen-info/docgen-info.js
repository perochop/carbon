"use strict";

require("core-js/modules/es.array.find");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.string.match");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

// // takes object and regular expression
var keyMatch = function keyMatch(obj, regex) {
  var matched = Object.keys(obj).find(function (key) {
    return key.match(regex) ? obj[key] : null;
  });
  return matched ? obj[matched][0] : null;
};

var getDocGenInfo = function getDocGenInfo(obj, regex) {
  return obj ? keyMatch(obj, regex) : null;
};

var _default = getDocGenInfo;
exports.default = _default;
"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.from");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateGroups = exports.toSum = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var toSum = function toSum(acc, i) {
  return acc + i;
};

exports.toSum = toSum;

var generateGroups = function generateGroups(groups, rawValue) {
  return groups.reduce(function (acc, group, index, src) {
    var soFar = src.slice(0, index).reduce(toSum, 0);
    var toAdd = rawValue.slice(soFar, soFar + group);
    return toAdd ? [].concat(_toConsumableArray(acc), [toAdd]) : acc;
  }, []);
};

exports.generateGroups = generateGroups;
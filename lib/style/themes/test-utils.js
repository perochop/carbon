"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.for-each");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assertIsSubset = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var isObject = function isObject(obj) {
  return _typeof(obj) === 'object' && obj !== null;
}; // eslint-disable-next-line import/prefer-default-export


var assertIsSubset = function assertIsSubset(obj, comparison) {
  if (!isObject(obj)) {
    // no further nesting
    return;
  }

  var objKeys = Object.keys(obj);
  var comparisonKeys = Object.keys(comparison);
  objKeys.forEach(function (key) {
    // assert that keys are present
    expect(comparisonKeys).toContain(key); // repeat for nested objects

    assertIsSubset(obj[key], comparison[key]);
  });
};

exports.assertIsSubset = assertIsSubset;
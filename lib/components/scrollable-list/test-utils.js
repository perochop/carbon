"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.from");

require("core-js/modules/es.array.includes");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.includes");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _testUtils = require("../../__spec_helper__/test-utils");

var _scrollableListItem = _interopRequireDefault(require("./scrollable-list-item.component"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var listItemReducer = function listItemReducer(_ref) {
  var _ref$nonSelectables = _ref.nonSelectables,
      nonSelectables = _ref$nonSelectables === void 0 ? [] : _ref$nonSelectables,
      _ref$customSelectable = _ref.customSelectables,
      customSelectables = _ref$customSelectable === void 0 ? [] : _ref$customSelectable;
  // generate jsx for selectable list items, based on indexes in config
  return function (acc, item, index) {
    if (nonSelectables.includes(item)) return [].concat(_toConsumableArray(acc), [_react.default.createElement("div", null)]);
    if (customSelectables.includes(item)) return [].concat(_toConsumableArray(acc), [_react.default.createElement("div", {
      isSelectable: true
    })]);
    return [].concat(_toConsumableArray(acc), [_react.default.createElement(_scrollableListItem.default, {
      id: index
    })]);
  };
};

var renderListItems = function renderListItems(opts) {
  return (0, _testUtils.makeArrayKeys)(opts.num).reduce(listItemReducer(opts), []);
};

var _default = renderListItems;
exports.default = _default;
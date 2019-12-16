"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.find");

require("core-js/modules/es.array.from");

require("core-js/modules/es.array.includes");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.join");

require("core-js/modules/es.object.entries");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.includes");

require("core-js/modules/es.string.iterator");

require("core-js/modules/es.string.split");

require("core-js/modules/web.dom-collections.for-each");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.simulate = exports.click = exports.listFrom = exports.assertHoverTraversal = exports.assertKeyboardTraversal = exports.keyboard = exports.makeArrayKeys = exports.childrenFrom = exports.selectedItemOf = exports.hoverList = exports.toCSSCase = exports.assertStyleMatch = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var isUpper = function isUpper(char) {
  return char.toUpperCase() === char;
};

var humpToDash = function humpToDash(acc, char) {
  return "".concat(acc).concat(isUpper(char) ? "-".concat(char.toLowerCase()) : char);
};

var toCSSCase = function toCSSCase(str) {
  return str.split('').reduce(humpToDash, '');
};

exports.toCSSCase = toCSSCase;

var assertStyleMatch = function assertStyleMatch(styleSpec, component, opts) {
  Object.entries(styleSpec).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        attr = _ref2[0],
        value = _ref2[1];

    expect(component).toHaveStyleRule(toCSSCase(attr), value, opts);
  });
};

exports.assertStyleMatch = assertStyleMatch;

var makeArrayKeys = function makeArrayKeys(n) {
  return _toConsumableArray(Array(n).keys());
};

exports.makeArrayKeys = makeArrayKeys;

var dispatchKeyPress = function dispatchKeyPress(code) {
  var ev = new KeyboardEvent('keydown', {
    which: code
  });
  document.dispatchEvent(ev);
};

var keyMap = {
  UpArrow: '38',
  DownArrow: '40',
  RightArrow: '39',
  LeftArrow: '37',
  Enter: '13',
  Tab: '9',
  Space: '32',
  Escape: '27',
  End: '35',
  Home: '36',
  D: '68',
  E: '69',
  P: '80',
  Z: '90',
  1: '49'
};

var repeat = function repeat(action) {
  return function () {
    var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    return makeArrayKeys(n).forEach(function () {
      return action();
    });
  };
};

var keyboard = Object.keys(keyMap).reduce(function (acc, key) {
  acc["press".concat(key)] = function () {
    return repeat(dispatchKeyPress(keyMap[key]));
  };

  return acc;
}, {}); // Build an object of Enzyme simulate helpers
// e.g. simulate.keydown.pressTab(target, { shiftKey: true })
// e.g. simulate.keydown.pressEscape(target)

exports.keyboard = keyboard;
var keydown = Object.keys(keyMap).reduce(function (acc, key) {
  acc["press".concat(key)] = function (target) {
    var _ref3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      shiftKey: false
    },
        shiftKey = _ref3.shiftKey;

    target.simulate('keydown', {
      shiftKey: shiftKey,
      key: key,
      which: parseInt(keyMap[key], 0)
    });
  };

  return acc;
}, {});
var simulate = {
  keydown: keydown
};
exports.simulate = simulate;

var listFrom = function listFrom(wrapper) {
  return wrapper.find('ul');
};

exports.listFrom = listFrom;

var childrenFrom = function childrenFrom(node) {
  return node.children();
};

exports.childrenFrom = childrenFrom;

var hoverList = function hoverList(wrapper) {
  return function (item) {
    childrenFrom(listFrom(wrapper)).at(item).simulate('mouseover');
  };
};

exports.hoverList = hoverList;

var simulateEvent = function simulateEvent(eventName) {
  return function (wrapper) {
    return wrapper.simulate(eventName);
  };
};

var click = simulateEvent('click');
exports.click = click;

var selectedItemOf = function selectedItemOf(wrapper) {
  return wrapper.state().selectedItem;
};

exports.selectedItemOf = selectedItemOf;

var isUnique = function isUnique(val, index, self) {
  return self.indexOf(val) === index;
};

var isSelectableGiven = function isSelectableGiven(nonSelectables) {
  return function (i) {
    return !nonSelectables.includes(i);
  };
};

var selectedItemReducer = function selectedItemReducer(method) {
  return function (wrapper) {
    return function (acc, i) {
      method(wrapper)(i);
      return [].concat(_toConsumableArray(acc), [selectedItemOf(wrapper)]);
    };
  };
};

var arraysEqual = function arraysEqual(arr1, arr2) {
  return arr1.sort().join(',') === arr2.sort().join(',');
};

var assertCorrectTraversal = function assertCorrectTraversal(method) {
  return function (expect) {
    return function (_ref4) {
      var num = _ref4.num,
          _ref4$nonSelectables = _ref4.nonSelectables,
          nonSelectables = _ref4$nonSelectables === void 0 ? [] : _ref4$nonSelectables;
      return function (wrapper) {
        var array = makeArrayKeys(num);
        var validIndexes = array.filter(isSelectableGiven(nonSelectables));
        var selectedItem = selectedItemOf(wrapper);
        var indexesThatWereSelected = array.reduce(selectedItemReducer(method)(wrapper), [selectedItem]).filter(isUnique);
        expect(arraysEqual(validIndexes, indexesThatWereSelected)).toBeTruthy();
      };
    };
  };
};

var assertKeyboardTraversal = assertCorrectTraversal(function () {
  return keyboard.pressDownArrow;
})(expect);
exports.assertKeyboardTraversal = assertKeyboardTraversal;
var assertHoverTraversal = assertCorrectTraversal(function (wrapper) {
  return hoverList(wrapper);
})(expect);
exports.assertHoverTraversal = assertHoverTraversal;
"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-own-property-descriptors");

require("core-js/modules/es.object.keys");

require("core-js/modules/web.dom-collections.for-each");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeWithBase = exports.default = void 0;

var _baseTheme = _interopRequireDefault(require("./base-theme.config"));

var _colorConfig = _interopRequireDefault(require("../../color-config"));

var _atOpacity = _interopRequireDefault(require("../../utils/at-opacity"));

var _mergeDeep = require("../../utils/merge-deep");

var _palette = _interopRequireDefault(require("../../palette"));

var _addHexSymbols = _interopRequireDefault(require("../../utils/add-hex-symbols"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var palette = _objectSpread({}, (0, _palette.default)(_colorConfig.default), {
  atOpacity: _atOpacity.default
}, (0, _addHexSymbols.default)(_colorConfig.default));

var baseTheme = (0, _baseTheme.default)(palette);
var _default = baseTheme;
exports.default = _default;

var mergeWithBase = function mergeWithBase(configureTheme) {
  var themeToMergeWithBase = configureTheme(palette);
  return (0, _mergeDeep.mergeDeep)(baseTheme, themeToMergeWithBase);
};

exports.mergeWithBase = mergeWithBase;
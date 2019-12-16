"use strict";

require("core-js/modules/es.object.assign");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _tags = _interopRequireDefault(require("../../utils/helpers/tags"));

var _optionsHelper = _interopRequireDefault(require("../../utils/helpers/options-helper"));

var _loader = _interopRequireDefault(require("./loader.style"));

var _loaderSquare = _interopRequireDefault(require("./loader-square.style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Loader = function Loader(props) {
  return _react.default.createElement(_loader.default, _extends({}, props, (0, _tags.default)('loader', props)), _react.default.createElement(_loaderSquare.default, props), _react.default.createElement(_loaderSquare.default, props), _react.default.createElement(_loaderSquare.default, props));
};

Loader.defaultProps = {
  size: 'small',
  isInsideButton: false,
  isActive: true
};
Loader.propTypes = {
  /** Size of the loader. */
  size: _propTypes.default.oneOf(_optionsHelper.default.sizesBinary),

  /** Applies white color. */
  isInsideButton: _propTypes.default.bool,

  /** Applies slate color. Available only when isInsideButton is true. */
  isActive: _propTypes.default.bool
};
var _default = Loader;
exports.default = _default;
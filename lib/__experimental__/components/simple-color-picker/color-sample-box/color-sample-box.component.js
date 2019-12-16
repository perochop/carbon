"use strict";

require("core-js/modules/es.string.match");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.colorSampleBoxCheck = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _colorSampleBox = _interopRequireDefault(require("./color-sample-box.style"));

var _tickIcon = _interopRequireDefault(require("../tick-icon/tick-icon.style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ColorSampleBox = function ColorSampleBox(_ref) {
  var color = _ref.color,
      checked = _ref.checked;
  return _react.default.createElement(_colorSampleBox.default, {
    color: color
  }, checked && _react.default.createElement(_tickIcon.default, {
    color: color,
    checked: true,
    type: "tick"
  }));
};

var colorSampleBoxCheck = function colorSampleBoxCheck(props, propName, component) {
  var color = props[propName],
      hexRegex = /\b[0-9A-Fa-f]{6}\b/g;

  if (!color.match(hexRegex)) {
    return new Error("Provide color in a six-digit hex format in ".concat(component, "."));
  }

  return null;
};

exports.colorSampleBoxCheck = colorSampleBoxCheck;
ColorSampleBox.propTypes = {
  checked: _propTypes.default.bool,
  color: colorSampleBoxCheck
};
var _default = ColorSampleBox;
exports.default = _default;
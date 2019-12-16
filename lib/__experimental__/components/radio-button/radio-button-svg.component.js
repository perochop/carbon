"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _checkableInputSvgWrapper = _interopRequireDefault(require("../checkable-input/checkable-input-svg-wrapper.style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RadioButtonSvg = function RadioButtonSvg() {
  return _react.default.createElement(_checkableInputSvgWrapper.default, null, _react.default.createElement("svg", {
    focusable: "false",
    viewBox: "0 0 15 15"
  }, _react.default.createElement("g", {
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, _react.default.createElement("circle", {
    className: "radio-button-check",
    fill: "#FFFFFF",
    cx: "7.5",
    cy: "7.5",
    r: "5"
  }))));
};

var _default = _react.default.memo(RadioButtonSvg, function () {
  return true;
});

exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _checkableInputSvgWrapper = _interopRequireDefault(require("../checkable-input/checkable-input-svg-wrapper.style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CheckboxSvg = function CheckboxSvg() {
  return _react.default.createElement(_checkableInputSvgWrapper.default, null, _react.default.createElement("svg", {
    focusable: "false",
    width: "12",
    height: "10",
    viewBox: "0 0 12 10"
  }, _react.default.createElement("path", {
    d: 'M.237 6.477A.752.752 0 0 1 .155 5.47l.851-1.092a.63.63 0 0 1 .934-.088l2.697 1.964, ' + '4.674-6a.63.63 0 0 1 .933-.088l1.015.917c.28.254.317.703.081 1.005L6.353 8.492a.725.725, ' + '0 0 1-.095.16l-.85 1.093a.637.637 0 0 1-.626.244.638.638 0 0 1-.335-.16L.237 6.476z',
    fill: "#FFFFFF",
    fillRule: "evenodd"
  })));
};

var _default = CheckboxSvg;
exports.default = _default;
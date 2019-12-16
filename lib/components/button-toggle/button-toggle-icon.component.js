"use strict";

require("core-js/modules/es.object.assign");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _buttonToggle = require("./button-toggle.style");

var _icon = _interopRequireDefault(require("../icon"));

var _optionsHelper = _interopRequireDefault(require("../../utils/helpers/options-helper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var ButtonToggleIcon = function ButtonToggleIcon(props) {
  return _react.default.createElement(_buttonToggle.StyledButtonToggleIcon, props, _react.default.createElement(_icon.default, _extends({
    type: props.buttonIcon,
    fontSize: props.buttonIconSize
  }, props, {
    bgTheme: "none"
  })));
};

ButtonToggleIcon.propTypes = {
  /** buttonIcon to render. */
  buttonIcon: _propTypes.default.string,

  /** Sets the size of the buttonIcon (eg. large) */
  buttonIconSize: _propTypes.default.oneOf(_optionsHelper.default.sizesBinary)
};
var _default = ButtonToggleIcon;
exports.default = _default;
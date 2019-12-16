"use strict";

require("core-js/modules/es.function.name");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _buttonToggle = require("./button-toggle.style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ButtonToggleInput(props) {
  return _react.default.createElement(_buttonToggle.StyledButtonToggleInput, {
    type: "radio",
    name: props.name,
    id: props.guid,
    disabled: props.disabled,
    checked: props.checked,
    onChange: props.onChange,
    value: props.value
  });
}

ButtonToggleInput.propTypes = {
  /** Set the checked value of the radio button */
  checked: _propTypes.default.bool,

  /** Name used on the hidden radio button. */
  name: _propTypes.default.string,

  /** Disable all user interaction. */
  disabled: _propTypes.default.bool,

  /** Unique ID attribute for input */
  guid: _propTypes.default.string,

  /** Value for the input */
  value: _propTypes.default.string,

  /** Change handler passed in from parent. */
  onChange: _propTypes.default.func
};
var _default = ButtonToggleInput;
exports.default = _default;
"use strict";

require("core-js/modules/es.function.name");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _buttonToggle = require("./button-toggle.style");

var _guid = _interopRequireDefault(require("../../utils/helpers/guid"));

var _buttonToggleIcon = _interopRequireDefault(require("./button-toggle-icon.component"));

var _buttonToggleInput = _interopRequireDefault(require("./button-toggle-input.component"));

var _optionsHelper = _interopRequireDefault(require("../../utils/helpers/options-helper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ButtonToggle = function ButtonToggle(props) {
  var name = props.name,
      checked = props.checked,
      grouped = props.grouped,
      children = props.children,
      disabled = props.disabled,
      buttonIcon = props.buttonIcon,
      buttonIconSize = props.buttonIconSize,
      onChange = props.onChange,
      value = props.value,
      size = props.size;
  var inputGuid = (0, _guid.default)();
  var icon;

  if (buttonIcon) {
    icon = _react.default.createElement(_buttonToggleIcon.default, {
      buttonIcon: buttonIcon,
      buttonIconSize: buttonIconSize,
      disabled: disabled
    });
  }

  return _react.default.createElement(_buttonToggle.StyledButtonToggle, {
    "data-component": "button-toggle",
    grouped: grouped
  }, _react.default.createElement(_buttonToggleInput.default, {
    name: name,
    checked: checked,
    disabled: disabled,
    guid: inputGuid,
    value: value,
    onChange: onChange
  }), _react.default.createElement(_buttonToggle.StyledButtonToggleLabel, {
    buttonIcon: buttonIcon,
    buttonIconSize: buttonIconSize,
    disabled: disabled,
    htmlFor: inputGuid,
    size: size
  }, _react.default.createElement(_buttonToggle.StyledButtonToggleContentWrapper, null, icon, children)));
};

ButtonToggle.propTypes = {
  /** Set the checked value of the radio button */
  checked: _propTypes.default.bool,

  /** Name used on the hidden radio button. */
  name: _propTypes.default.string,

  /** Change handler passed in from parent. */
  onChange: _propTypes.default.func,

  /** buttonIcon to render. */
  buttonIcon: _propTypes.default.string,

  /** Sets the size of the buttonIcon (eg. large) */
  buttonIconSize: _propTypes.default.oneOf(_optionsHelper.default.sizesBinary),

  /** Sets the size of the button (padding, font-size). Only used in Classic theme. */
  size: _propTypes.default.string,

  /** Remove spacing from between buttons. */
  grouped: _propTypes.default.bool,

  /** Disable all user interaction. */
  disabled: _propTypes.default.bool,

  /** A required prop. This is the button text. */
  children: _propTypes.default.node.isRequired,

  /** Set the default value of the Group if component is meant to be used as uncontrolled. */
  defaultChecked: _propTypes.default.bool,
  // eslint-disable-line react/no-unused-prop-types

  /** Value for the input */
  value: _propTypes.default.string
};
ButtonToggle.defaultProps = {
  size: 'large',
  buttonIconSize: 'small'
};
var _default = ButtonToggle;
exports.default = _default;
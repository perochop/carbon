"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.keys");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.OriginalTextbox = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _input = require("../input");

var _inputIconToggle = _interopRequireDefault(require("../input-icon-toggle"));

var _formField = _interopRequireDefault(require("../form-field"));

var _validations = require("../../../components/validations");

var _withUniqueIdProps = _interopRequireDefault(require("../../../utils/helpers/with-unique-id-props"));

var _optionsHelper = _interopRequireDefault(require("../../../utils/helpers/options-helper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// This component is a working example of what a Textbox might look like
// using only the new input componentry. It is still under development with
// subject to change as we continue to remove the decorator classes.
var Textbox = function Textbox(_ref) {
  var children = _ref.children,
      inputIcon = _ref.inputIcon,
      leftChildren = _ref.leftChildren,
      formattedValue = _ref.formattedValue,
      value = _ref.value,
      childOfForm = _ref.childOfForm,
      isOptional = _ref.isOptional,
      props = _objectWithoutProperties(_ref, ["children", "inputIcon", "leftChildren", "formattedValue", "value", "childOfForm", "isOptional"]);

  return _react.default.createElement(_formField.default, _extends({
    childOfForm: childOfForm,
    isOptional: isOptional
  }, props, {
    useValidationIcon: false
  }), _react.default.createElement(_input.InputPresentation, _extends({
    type: "text"
  }, removeParentProps(props)), leftChildren, _react.default.createElement(_input.Input, _extends({}, removeParentProps(props), {
    placeholder: props.disabled || props.readOnly ? '' : props.placeholder,
    "aria-invalid": props.hasError,
    value: visibleValue(value, formattedValue)
  })), children, inputIcon && _react.default.createElement(_inputIconToggle.default, _extends({}, removeParentProps(props), {
    inputIcon: inputIcon
  }))));
};

exports.OriginalTextbox = Textbox;

function removeParentProps(props) {
  delete props['data-element'];
  delete props['data-component'];
  delete props['data-role'];
  delete props.className;
  return props;
}

function visibleValue(value, formattedValue) {
  return typeof formattedValue === 'string' ? formattedValue : value;
}

Textbox.propTypes = {
  /**
   * An optional alternative for props.value, this is useful if the
   * real value is an ID but you want to show a human-readable version.
   */
  formattedValue: _propTypes.default.string,

  /** The value of the Textbox */
  value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.array // Allows the textbox to be used in the Multi-Select component
  ]),

  /** The unformatted value  */
  rawValue: _propTypes.default.string,

  /** If true, the component will be disabled */
  disabled: _propTypes.default.bool,

  /** If true, the component will be read-only */
  readOnly: _propTypes.default.bool,

  /** Event handler for the change event */
  onChange: _propTypes.default.func,

  /** Event handler for the keyDown event */
  onKeyDown: _propTypes.default.func,

  /** Defered callback called after the onChange event */
  onChangeDeferred: _propTypes.default.func,

  /** Integer to determine timeout for defered callback */
  deferTimeout: _propTypes.default.number,

  /** Label */
  label: _propTypes.default.string,

  /** Text applied to label help tooltip */
  labelHelp: _propTypes.default.string,

  /** When true, label is placed in line an input */
  labelInline: _propTypes.default.bool,

  /** Width of a label in percentage. Works only when labelInline is true */
  labelWidth: _propTypes.default.number,

  /** Width of an input in percentage. Works only when labelInline is true */
  inputWidth: _propTypes.default.number,

  /** Help content to be displayed under an input */
  fieldHelp: _propTypes.default.node,

  /** Type of the icon that will be rendered next to the input */
  children: _propTypes.default.node,

  /** Icon to display inside of the Textbox */
  inputIcon: _propTypes.default.string,

  /** Additional child elements to display before the input */
  leftChildren: _propTypes.default.node,

  /** List of error validation functions */
  validations: _validations.validationsPropTypes,

  /** List of warning validation functions */
  warnings: _validations.validationsPropTypes,

  /** List of info validation functions */
  info: _validations.validationsPropTypes,

  /** Flag to configure component when in a Form */
  childOfForm: _propTypes.default.bool,

  /** Flag to configure component as optional in Form */
  isOptional: _propTypes.default.bool,

  /** Status of error validations */
  hasError: _propTypes.default.bool,

  /** Status of warnings */
  hasWarning: _propTypes.default.bool,

  /** Status of info */
  hasInfo: _propTypes.default.bool,

  /** Size of an input */
  size: _propTypes.default.oneOf(_optionsHelper.default.sizesRestricted),

  /** Placeholder string to be displayed in input */
  placeholder: _propTypes.default.string
};
Textbox.defaultProps = {
  labelWidth: 30,
  inputWidth: 70,
  size: 'medium'
};

var _default = (0, _withUniqueIdProps.default)((0, _validations.withValidation)(Textbox));

exports.default = _default;
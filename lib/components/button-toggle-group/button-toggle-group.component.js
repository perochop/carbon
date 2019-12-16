"use strict";

require("core-js/modules/es.function.name");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _formField = _interopRequireDefault(require("../../__experimental__/components/form-field"));

var _buttonToggleGroup = _interopRequireDefault(require("./button-toggle-group.style"));

var _withValidation = _interopRequireDefault(require("../validations/with-validation.hoc"));

var _radioButtonMapper = _interopRequireDefault(require("../../__experimental__/components/radio-button/radio-button-mapper.component"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BaseButtonToggleGroup = function BaseButtonToggleGroup(props) {
  var name = props.name,
      inputWidth = props.inputWidth,
      errorMessage = props.errorMessage,
      label = props.label,
      onChange = props.onChange,
      onBlur = props.onBlur,
      children = props.children,
      value = props.value;
  return _react.default.createElement(_formField.default, props, _react.default.createElement(_buttonToggleGroup.default, {
    "data-component": "button-toggle-group",
    "aria-label": label,
    role: "group",
    inputWidth: inputWidth,
    errorMessage: errorMessage
  }, _react.default.createElement(_radioButtonMapper.default, {
    name: name,
    onBlur: onBlur,
    onChange: onChange,
    value: value
  }, children)));
};

BaseButtonToggleGroup.propTypes = {
  /** Specifies the name prop to be applied to each button in the group */
  name: _propTypes.default.string.isRequired,

  /** Children to be rendered (ButtonToggle). */
  children: _propTypes.default.node.isRequired,

  /** Message displayed on error */
  errorMessage: _propTypes.default.string,

  /** Text for the label. */
  label: _propTypes.default.string,

  /** Text for the labels help tooltip. */
  labelHelp: _propTypes.default.string,

  /** The percentage width of the ButtonToggleGroup. */
  inputWidth: _propTypes.default.number,

  /** The text for the field help. */
  fieldHelp: _propTypes.default.string,

  /** Sets the field help to inline. */
  fieldHelpInline: _propTypes.default.bool,

  /** Sets the label to be inline. */
  labelInline: _propTypes.default.bool,

  /** The percentage width of the label. */
  labelWidth: _propTypes.default.number,

  /** The alignment for the text in the label. */
  labelAlign: _propTypes.default.string,

  /** callback to handle change event */
  onChange: _propTypes.default.func,

  /** Callback fired when each RadioButton is blurred */
  onBlur: _propTypes.default.func,

  /** The value of the Button Toggle Group */
  value: _propTypes.default.string
};
BaseButtonToggleGroup.displayName = 'BaseButtonToggleGroup';

var _default = (0, _withValidation.default)(BaseButtonToggleGroup);

exports.default = _default;
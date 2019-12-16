"use strict";

require("core-js/modules/es.function.name");

require("core-js/modules/es.object.assign");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _tags = _interopRequireDefault(require("../../../utils/helpers/tags"));

var _radioButtonFieldset = _interopRequireDefault(require("./radio-button-fieldset.style"));

var _radioButtonMapper = _interopRequireDefault(require("./radio-button-mapper.component"));

var _withValidation = _interopRequireDefault(require("../../../components/validations/with-validation.hoc"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var RadioButtonGroup = function RadioButtonGroup(props) {
  var children = props.children,
      name = props.name,
      legend = props.legend,
      hasError = props.hasError,
      hasWarning = props.hasWarning,
      hasInfo = props.hasInfo,
      onBlur = props.onBlur,
      onChange = props.onChange,
      value = props.value,
      tooltipMessage = props.tooltipMessage;
  var groupLabelId = "".concat(name, "-label");
  return _react.default.createElement(_radioButtonFieldset.default, _extends({
    "aria-labelledby": groupLabelId,
    role: "radiogroup",
    legend: legend,
    hasError: hasError,
    hasWarning: hasWarning,
    hasInfo: hasInfo,
    tooltipMessage: tooltipMessage
  }, (0, _tags.default)('radiogroup', props)), _react.default.createElement(_radioButtonMapper.default, {
    name: name,
    onBlur: onBlur,
    onChange: onChange,
    value: value
  }, children));
};

RadioButtonGroup.propTypes = {
  /** The RadioButton objects to be rendered in the group */
  children: _propTypes.default.node.isRequired,

  /** Specifies the name prop to be applied to each button in the group */
  name: _propTypes.default.string.isRequired,

  /** The content for the RadioGroup Legend */
  legend: _propTypes.default.string.isRequired,

  /** Help text */
  labelHelp: _propTypes.default.string,

  /** Prop to indicate that an error has occurred */
  hasError: _propTypes.default.bool,

  /** Prop to indicate that a warning has occurred */
  hasWarning: _propTypes.default.bool,

  /** Prop to indicate additional information  */
  hasInfo: _propTypes.default.bool,

  /** Callback fired when each RadioButton is blurred */
  onBlur: _propTypes.default.func,

  /** Callback fired when the user selects a RadioButton */
  onChange: _propTypes.default.func,

  /** value of the selected RadioButton */
  value: _propTypes.default.string,

  /** Message to be displayed in a Tooltip when the user hovers over the help icon */
  tooltipMessage: _propTypes.default.string
};
RadioButtonGroup.defaultProps = {
  hasError: false,
  hasWarning: false,
  hasInfo: false
};

var _default = (0, _withValidation.default)(RadioButtonGroup, {
  unblockValidation: true
});

exports.default = _default;
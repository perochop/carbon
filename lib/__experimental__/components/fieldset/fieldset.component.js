"use strict";

require("core-js/modules/es.object.assign");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ether = require("../../../utils/ether");

var _tags = _interopRequireDefault(require("../../../utils/helpers/tags"));

var _fieldset = require("./fieldset.style");

var _validationIcon = _interopRequireDefault(require("../../../components/validations/validation-icon.component"));

var _withValidation = require("../../../components/validations/with-validation.hoc");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var validationsPresent = function validationsPresent(_ref) {
  var hasError = _ref.hasError,
      hasWarning = _ref.hasWarning,
      hasInfo = _ref.hasInfo;
  return hasError || hasWarning || hasInfo;
};

var Fieldset = function Fieldset(props) {
  var validationIcon = function validationIcon() {
    if (validationsPresent(props) && props.tooltipMessage) {
      return _react.default.createElement(_validationIcon.default, {
        type: (0, _withValidation.getValidationType)(props),
        tooltipMessage: props.tooltipMessage,
        tabIndex: 0
      });
    }

    return null;
  };

  var legend = function legend() {
    if (!props.legend) return null;
    return _react.default.createElement(_fieldset.LegendContainerStyle, null, _react.default.createElement("legend", {
      "data-element": "legend"
    }, props.legend), validationIcon());
  };

  var _validProps = (0, _ether.validProps)({
    propTypes: Fieldset.propTypes,
    props: props
  }),
      safeProps = Object.assign({}, _validProps);

  return _react.default.createElement(_fieldset.FieldsetStyle, _extends({}, (0, _tags.default)('fieldset', props), safeProps), legend(), props.children);
};

Fieldset.propTypes = {
  /** Child elements */
  children: _propTypes.default.node,

  /** The text for the fieldsets legend element. */
  legend: _propTypes.default.string,

  /** Prop to indicate that an error has occurred */
  hasError: _propTypes.default.bool,

  /** Prop to indicate that a warning has occurred */
  hasWarning: _propTypes.default.bool,

  /** Prop to indicate additional information  */
  hasInfo: _propTypes.default.bool,

  /** A message that the ValidationIcon component will display */
  tooltipMessage: _propTypes.default.string
};
var _default = Fieldset;
exports.default = _default;
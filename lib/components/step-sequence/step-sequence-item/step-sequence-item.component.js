"use strict";

require("core-js/modules/es.object.assign");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _stepSequenceItem = _interopRequireDefault(require("./step-sequence-item.style"));

var _stepSequenceItemContent = _interopRequireDefault(require("./step-sequence-item-content.style"));

var _stepSequenceItemIndicator = _interopRequireDefault(require("./step-sequence-item-indicator.style"));

var _stepSequenceItemHiddenLabel = _interopRequireDefault(require("./step-sequence-item-hidden-label.style"));

var _icon = _interopRequireDefault(require("../../icon"));

var _optionsHelper = _interopRequireDefault(require("../../../utils/helpers/options-helper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var StepSequenceItem = function StepSequenceItem(props) {
  var indicatorText = function indicatorText() {
    return _react.default.createElement(_stepSequenceItemIndicator.default, null, props.indicator);
  };

  var icon = function icon() {
    return props.status === 'complete' ? _react.default.createElement(_icon.default, {
      type: "tick"
    }) : indicatorText();
  };

  var hiddenLabel = function hiddenLabel() {
    var status = props.status,
        hiddenCompleteLabel = props.hiddenCompleteLabel,
        hiddenCurrentLabel = props.hiddenCurrentLabel;

    if (hiddenCompleteLabel && status === 'complete') {
      return _react.default.createElement(_stepSequenceItemHiddenLabel.default, null, hiddenCompleteLabel);
    }

    if (hiddenCurrentLabel && status === 'current') {
      return _react.default.createElement(_stepSequenceItemHiddenLabel.default, null, hiddenCurrentLabel);
    }

    return null;
  };

  return _react.default.createElement(_stepSequenceItem.default, _extends({
    "data-component": "step-sequence-item"
  }, props, {
    key: "step-seq-item-".concat(props.indicator)
  }), hiddenLabel(), _react.default.createElement(_stepSequenceItemContent.default, null, icon(), " ", props.children));
};

StepSequenceItem.propTypes = {
  /** Text content for the step item */
  children: _propTypes.default.node.isRequired,

  /** Value to be displayed before text for uncomplete steps */
  indicator: _propTypes.default.string.isRequired,

  /** Aria label */
  ariaLabel: _propTypes.default.string,

  /** Status for the step */
  status: _propTypes.default.oneOf(_optionsHelper.default.steps),

  /** Hidden label to be displayed if item is complete */
  hiddenCompleteLabel: _propTypes.default.string,

  /** Hidden label to be displayed if item is current */
  hiddenCurrentLabel: _propTypes.default.string
};
StepSequenceItem.defaultProps = {
  status: 'incomplete'
};
var _default = StepSequenceItem;
exports.default = _default;
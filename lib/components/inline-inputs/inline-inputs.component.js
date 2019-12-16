"use strict";

require("core-js/modules/es.array.map");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _row = require("../row");

var _label = _interopRequireDefault(require("../../__experimental__/components/label"));

var _inlineInputs = _interopRequireDefault(require("./inline-inputs.style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var columnWrapper = function columnWrapper(children) {
  var inputs = children;

  if (!Array.isArray(inputs)) {
    inputs = [children];
  }

  return inputs.map(function (input, index) {
    // Input is never going to be re-ordered so we don't require a defined key

    /* eslint-disable react/no-array-index-key */
    return _react.default.createElement(_row.Column, {
      key: index
    }, input);
  });
};

var InlineInputs = function InlineInputs(props) {
  var label = props.label,
      htmlFor = props.htmlFor,
      children = props.children,
      className = props.className;

  function renderLabel() {
    if (!label) return null;
    return _react.default.createElement(_label.default, {
      inline: true,
      htmlFor: htmlFor
    }, label);
  }

  return _react.default.createElement(_inlineInputs.default, {
    "data-component": "inline-inputs",
    className: className
  }, renderLabel(), _react.default.createElement(_row.Row, {
    gutter: "none"
  }, columnWrapper(children)));
}; // Assign props over for demo site


InlineInputs.propTypes = {
  /** Children elements */
  children: _propTypes.default.node,

  /** [Legacy prop] A custom class name for the component. */
  className: _propTypes.default.string,

  /** Defines the label text for the heading. */
  label: _propTypes.default.string,

  /** The id of the corresponding input control for the label */
  htmlFor: _propTypes.default.string
};
InlineInputs.defaultProps = {
  children: null,
  className: ''
};
var _default = InlineInputs;
exports.default = _default;
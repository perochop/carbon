"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var classes = function classes(props) {
  var _classNames;

  return (0, _classnames.default)('carbon-column', props.className, props.columnClasses, (_classNames = {}, _defineProperty(_classNames, "carbon-column--offset-".concat(props.columnOffset), props.columnOffset), _defineProperty(_classNames, "carbon-column--span-".concat(props.columnSpan), props.columnSpan), _defineProperty(_classNames, "carbon-column--align-".concat(props.columnAlign), props.columnAlign), _defineProperty(_classNames, 'carbon-column--column-divide', props.columnDivide), _classNames));
};

var Column = function Column(props) {
  return _react.default.createElement("div", {
    className: classes(props)
  }, props.children);
};

Column.defaultProps = {
  columnOffset: '0',
  columnSpan: '1',
  columnAlign: 'left'
};
/* eslint-disable react/no-unused-prop-types */

Column.propTypes = {
  /**
   * This component supports children.
   */
  children: _propTypes.default.node,

  /**
   * Classes to apply to the component.
   */
  className: _propTypes.default.string,

  /**
   * Classes applied by row component to affect all rows
   */
  columnClasses: _propTypes.default.string,

  /**
   * Show a divide between columns. This is defined by the row component.
   */
  columnDivide: _propTypes.default.bool,

  /**
   * Alignment of content within column.
   */
  columnAlign: _propTypes.default.string,

  /**
   * Offset this column by a certain number of columns.
   */
  columnOffset: _propTypes.default.string,

  /**
   * Span this column by a certain number of columns.
   */
  columnSpan: _propTypes.default.string
};
var _default = Column;
exports.default = _default;
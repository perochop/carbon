"use strict";

require("core-js/modules/es.object.assign");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _tags = _interopRequireDefault(require("../../utils/helpers/tags"));

var _preview = _interopRequireDefault(require("./preview.style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Preview = function Preview(props) {
  if (isLoading(props.loading, props.children)) {
    var previews = [];

    for (var i = 1; i <= props.lines; i++) {
      previews.push(createPreview(props, i));
    }

    return previews;
  }

  return props.children;
};

Preview.propTypes = {
  /** Children content to render in the component. */
  children: _propTypes.default.node,

  /** Classes to be applied to the component. */
  height: _propTypes.default.string,

  /** The number of lines to render. */
  lines: _propTypes.default.number,

  /* Provides more control over when in a loading state. */
  loading: _propTypes.default.bool,

  /** A custom width */
  width: _propTypes.default.string
};
Preview.defaultProps = {
  lines: 1
};

function isLoading(loading, children) {
  if (typeof loading !== 'undefined') {
    return loading;
  }

  return !children;
}

function createPreview(allProps, index) {
  var height = allProps.height,
      lines = allProps.lines;
  var width = allProps.width;

  if (!width && lines > 1 && lines === index) {
    width = '80%';
  }

  return _react.default.createElement(_preview.default, _extends({
    key: index,
    style: {
      height: height,
      width: width
    }
  }, (0, _tags.default)('preview', allProps)));
}

var _default = Preview;
exports.default = _default;
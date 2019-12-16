"use strict";

require("core-js/modules/es.object.assign");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactTransitionGroup = require("react-transition-group");

var _tags = _interopRequireDefault(require("../../../utils/helpers/tags/tags"));

var _slide = require("./slide.style");

var _styleHelper = require("../../../utils/helpers/style-helper");

var _base = _interopRequireDefault(require("../../../style/themes/base"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Slide = function Slide(props) {
  if ((0, _styleHelper.isClassic)(props.theme)) {
    return _react.default.createElement(_reactTransitionGroup.CSSTransition, _extends({
      className: "carbon-carouse__transition",
      classNames: props.transitionName(),
      timeout: props.timeout
    }, props), _react.default.createElement(_slide.SlideStyle, _extends({}, props.slideProps, (0, _tags.default)('slide', props))));
  }

  return _react.default.createElement(_slide.SlideStyle, _extends({}, props, (0, _tags.default)('slide', props)));
};

Slide.defaultProps = {
  theme: _base.default
};
var _default = Slide;
exports.default = _default;
"use strict";

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.includes");

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.freeze");

require("core-js/modules/es.object.get-own-property-descriptor");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FlashCloseStyle = exports.FlashIconStyle = exports.FlashLink = exports.FlashMessageStyle = exports.FlashContentStyle = exports.FlashSliderStyle = exports.FlashStyle = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _link = _interopRequireDefault(require("../link"));

var _icon = _interopRequireDefault(require("../icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n        ", " {\n          background: ", ";\n        };\n\n        ", "\n    "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  bottom: 0px;\n  overflow: hidden;\n  position: fixed;\n  right: 0;\n  text-align: center;\n  width: 100%;\n\n  // tag added by CSSTransitionGroup\n    > div {\n    display: inline-block;\n    height: 100%;\n    width: 100%;\n  };\n\n    ", ";\n\n    ", ";\n    ", ";\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  content: 'h';\n  display: inline-block;\n  font-size: 13px;\n  height: 100%;\n  left: 0;\n  line-height: 18px;\n  position: absolute;\n  right: 0;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  background-color: transparent ;\n  margin: 0 auto;\n  max-width: 1600px;\n  min-width: 958px;\n  position: relative;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  color: rgba(0,0,0,0.85);\n  font-size: 14px;\n  font-weight: 700;\n  margin: 20px 70px;\n  position: relative;\n  text-align: left;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n\n  color: #fff;\n\n  a:hover{\n    color: #fff\n  }\n\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  left: 0;\n  position: absolute;\n  width: 70px;\n  top: -3px;\n\n  &:before {\n    color: rgba(0, 0, 0, 0.85);\n    font-size: 16px;\n    margin: auto;\n  }\n\n  svg {\n    height: 16px;\n    margin: auto;\n    width: 16px;\n  }\n\n  .carbon-icon__svg-group {\n    fill: rgba(0, 0, 0, 0.85);\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  color: rgba(0, 0, 0, 0.85);\n  cursor: pointer;\n  display: flex;\n  outline: none;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 70px;\n\n  &:before {\n    font-size: 16px;\n    margin: auto;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var colors = {
  warning: '#FF7D00',
  default: '#335B6D',
  error: '#c7384f',
  info: '#1573E6',
  new: '#663399',
  success: '#50B848',
  help: '#FFAB00',
  maintenance: '#FF7D00'
};
var requireWhiteTextColor = ['error', 'new', 'info'];
var sliderAnimation = "\n  .carbon-flash__slider-appear,\n  .carbon-flash__slider-enter {\n    left: 50%;\n    opacity: 0;\n    right: 50%;\n  }\n\n  .carbon-flash__slider-appear-active,\n  .carbon-flash__slider-enter-active {\n    left: 0%;\n    opacity: 1;\n    right: 0%;\n    transition: 500ms ease 100ms;\n  }\n\n  .carbon-flash__slider-exit {\n    opacity: 1;\n  }\n\n  .carbon-flash__slider-exit-active  {\n    opacity: 0;\n    transition: 500ms ease 100ms;\n  }\n";
var contentAnimation = "\n  .carbon-flash__content-appear,\n  .carbon-flash__content-enter {\n    opacity: 0;\n  }\n\n  .carbon-flash__content-appear-active,\n  .carbon-flash__content-enter-active {\n    opacity: 1;\n    transition: 400ms ease 400ms;\n  }\n\n  .carbon-flash__content-exit {\n    opacity: 1;\n  }\n\n  .carbon-flash__content-exit-active  {\n    opacity: 0;\n    transition: 400ms ease-out 100ms;\n  }\n";
var FlashCloseStyle = (0, _styledComponents.default)(_icon.default)(_templateObject());
exports.FlashCloseStyle = FlashCloseStyle;
var FlashIconStyle = (0, _styledComponents.default)(_icon.default)(_templateObject2());
exports.FlashIconStyle = FlashIconStyle;
var FlashLink = (0, _styledComponents.default)(_link.default)(_templateObject3());
exports.FlashLink = FlashLink;

var FlashMessageStyle = _styledComponents.default.div(_templateObject4());

exports.FlashMessageStyle = FlashMessageStyle;

var FlashContentStyle = _styledComponents.default.div(_templateObject5());

exports.FlashContentStyle = FlashContentStyle;

var FlashSliderStyle = _styledComponents.default.div(_templateObject6());

exports.FlashSliderStyle = FlashSliderStyle;

var FlashStyle = _styledComponents.default.div(_templateObject7(), function (_ref) {
  var variant = _ref.variant;
  return variant && (0, _styledComponents.css)(_templateObject8(), FlashSliderStyle, colors[variant], requireWhiteTextColor.includes(variant) && "\n        \n          ".concat(FlashMessageStyle, ",\n          ").concat(FlashCloseStyle, ",\n          ").concat(FlashIconStyle, ":before {\n            color: white;\n          };\n\n        "));
}, sliderAnimation, contentAnimation);

exports.FlashStyle = FlashStyle;
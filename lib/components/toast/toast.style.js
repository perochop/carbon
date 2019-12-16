"use strict";

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.freeze");

require("core-js/modules/es.object.get-own-property-descriptor");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToastWrapper = exports.ToastContentStyle = exports.ToastTypeStyle = exports.ToastStyle = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _toastClassic = require("./toast-classic.style");

var _message = _interopRequireDefault(require("../message/message.style"));

var _messageContent = _interopRequireDefault(require("../message/message-content/message-content.style"));

var _typeIcon = _interopRequireDefault(require("../message/type-icon/type-icon.style"));

var _styleHelper = require("../../utils/helpers/style-helper");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n      position: fixed;\n      width: 100%; \n      height: 0;\n      justify-content: center;\n      display: flex;\n  "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  ", "\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n      padding-right: 48px;\n    "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  padding: 8px 16px 8px 16px;\n  \n  ", "\n\n  ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    &", "-appear,\n    &", "-enter {\n      opacity: 0;\n      transform: scale(0.5)};\n    }\n\n    &", "-appear.toast-appear-active,\n    &", "-enter.toast-enter-active {\n      opacity: 1;\n      transform: ", ";\n      transition: all 300ms cubic-bezier(0.250, 0.250, 0.000, 1.500);\n    }\n\n    &", "-exit.toast-exit-active {\n      opacity: 0;\n      transform: translateY(-20px);\n      transition: all 150ms ease-out;\n    }\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  box-shadow: 0 10px 30px 0 rgba(0,20,29,.1), 0 30px 60px 0 rgba(0,20,29,.1);\n  line-height: 22px;\n  margin-top: 30px;\n  max-width: 300px;\n  position: ", ";\n  right: ", ";\n  top: 0;\n\n  ", "\n  \n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var animationName = '.toast';
var ToastStyle = (0, _styledComponents.default)(_message.default)(_templateObject(), function (_ref) {
  var isCenter = _ref.isCenter;
  return isCenter ? '' : 'fixed';
}, function (_ref2) {
  var isCenter = _ref2.isCenter;
  return isCenter ? '0px' : '30px';
}, function (_ref3) {
  var theme = _ref3.theme;
  return !(0, _styleHelper.isClassic)(theme) && (0, _styledComponents.css)(_templateObject2(), animationName, animationName, animationName, animationName, function (_ref4) {
    var isCenter = _ref4.isCenter;
    return isCenter ? ' scale(1) translateY(0)' : 'scale(1)';
  }, animationName);
}, _toastClassic.classicToastStyle);
exports.ToastStyle = ToastStyle;
var ToastTypeStyle = (0, _styledComponents.default)(_typeIcon.default)(_templateObject3(), _toastClassic.classicToastTypeStyle);
exports.ToastTypeStyle = ToastTypeStyle;
var ToastContentStyle = (0, _styledComponents.default)(_messageContent.default)(_templateObject4(), function (_ref5) {
  var isDismiss = _ref5.isDismiss;
  return isDismiss && (0, _styledComponents.css)(_templateObject5());
}, _toastClassic.classicToastContentStyle);
exports.ToastContentStyle = ToastContentStyle;

var ToastWrapper = _styledComponents.default.div(_templateObject6(), function (_ref6) {
  var isCenter = _ref6.isCenter;
  return isCenter && (0, _styledComponents.css)(_templateObject7());
});

exports.ToastWrapper = ToastWrapper;
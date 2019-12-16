"use strict";

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.freeze");

require("core-js/modules/es.object.get-own-property-descriptor");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledModalBackground = exports.StyledModal = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    .", "-enter,\n    .", "-appear {\n      opacity: 0;\n      margin-top: ", ";\n    }\n\n    .", "-enter.", "-enter-active,\n    .", "-appear.", "-appear-active {\n      opacity: 1;\n      margin-top: 0;\n      transition: all ", " 100ms ease-out;\n    }\n\n    .", "-exit {\n      opacity: 1;\n      margin-top: 0;\n    }\n\n    .", "-exit.", "-exit-active {\n      opacity: 0;\n      margin-top: ", ";\n      transition: all ", " ease-out;\n    }\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    .", "-enter,\n    .", "-appear {\n      opacity: 0;\n    }\n\n    .", "-enter.", "-enter-active,\n    .", "-appear.", "-appear-active {\n      opacity: ", ";\n      transition: opacity ", " ease-out;\n    }\n\n    .", "-exit {\n      opacity: ", ";\n    }\n\n    .", "-exit.", "-exit-active {\n      opacity: 0;\n      transition: opacity ", " 100ms ease-out;\n    }\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background-color: rgba(0, 20, 29, 0.6);\n  bottom: 0;\n  left: 0;\n  opacity: ", ";\n  position: fixed;\n  right: 0;\n  top: 0;\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var backgroundOpacity = '0.6';
var backgroundAnimationLength = '300ms';
var initialPosition = '50px';
var animationLength = '300ms';

var StyledModalBackground = _styledComponents.default.div(_templateObject(), backgroundOpacity, function (_ref) {
  var transitionName = _ref.transitionName;
  return (0, _styledComponents.css)(_templateObject2(), transitionName, transitionName, transitionName, transitionName, transitionName, transitionName, backgroundOpacity, backgroundAnimationLength, transitionName, backgroundOpacity, transitionName, transitionName, backgroundAnimationLength);
});

exports.StyledModalBackground = StyledModalBackground;

var StyledModal = _styledComponents.default.div(_templateObject3(), function (_ref2) {
  var transitionName = _ref2.transitionName;
  return (0, _styledComponents.css)(_templateObject4(), transitionName, transitionName, initialPosition, transitionName, transitionName, transitionName, transitionName, animationLength, transitionName, transitionName, transitionName, initialPosition, animationLength);
});

exports.StyledModal = StyledModal;
"use strict";

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.freeze");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = require("styled-components");

var _stepSequenceItemContent = _interopRequireDefault(require("./step-sequence-item-content.style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    height: auto;\n    \n    &::before {\n      height: 32px;\n      margin: 0;\n      background-color: transparent;\n    }\n\n    ", " {\n      height: 17px;\n    }\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    color: rgba(0, 0, 0, 0.55);\n    \n    &::before {\n      background-color: rgba(0, 0, 0, 0.55);\n    }\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  height: 24px;\n\n  ", ";\n\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StepSequenceItemClassicStyle = (0, _styledComponents.css)(_templateObject(), function (_ref) {
  var status = _ref.status;
  return status !== 'complete' && status !== 'current' && (0, _styledComponents.css)(_templateObject2());
}, function (_ref2) {
  var orientation = _ref2.orientation;
  return orientation === 'vertical' && (0, _styledComponents.css)(_templateObject3(), _stepSequenceItemContent.default);
});
var _default = StepSequenceItemClassicStyle;
exports.default = _default;
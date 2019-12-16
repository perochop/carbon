"use strict";

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.freeze");

require("core-js/modules/es.object.get-own-property-descriptor");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.wiggleAnimation = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["animation: 0.4s ", " 1 ease-in forwards"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  transform: translate3d(0, 0, 0);\n  ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  0% {\n    transform: translate3d(-5px, 0, 0);\n  }\n  25% {\n    transform: translate3d(5px, 0, 0);\n  }\n  50% {\n    transform: translate3d(-5px, 0, 0);\n  }\n  75% {\n    transform: translate3d(5px, 0, 0);\n  }\n  100% {\n    transform: translate3d(0px, 0, 0);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var wiggleAnimation = (0, _styledComponents.keyframes)(_templateObject());
exports.wiggleAnimation = wiggleAnimation;

var StyledWiggle = _styledComponents.default.div(_templateObject2(), function (p) {
  return p.isAnimating && (0, _styledComponents.css)(_templateObject3(), wiggleAnimation);
});

var _default = StyledWiggle;
exports.default = _default;
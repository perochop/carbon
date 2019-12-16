"use strict";

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.freeze");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fadeAnimation = exports.slideAnimation = void 0;

var _styledComponents = require("styled-components");

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n\n// FADE\n.carousel-transition-fade-enter {\n  opacity: 0;\n  position: absolute;\n}\n\n.carousel-transition-fade-enter.carousel-transition-fade-enter-active {\n  opacity: 1;\n  transition: ", ";\n}\n\n.carousel-transition-fade-exit {\n  opacity: 1;\n  position: relative;\n}\n\n.carousel-transition-fade-exit.carousel-transition-fade-exit-active {\n  opacity: 0;\n  transition: ", ";\n}\n\n.carbon-carousel__transition{\n  height: 100%;\n}"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\n// NEXT\n.slide-next-enter {\n  opacity: 0;\n  left: 100%;\n  position: absolute;\n}\n\n.slide-next-enter.slide-next-enter-active {\n  opacity: 1;\n  left: 0;\n  transition: ", ";\n}\n\n.slide-next-exit {\n  opacity: 1;\n  left: 0;\n  position: relative;\n}\n\n.slide-next-exit.slide-next-exit-active {\n  opacity: 0;\n  left: -100%;\n  transition: ", ";\n}\n\n// PREVIOUS\n.slide-previous-enter {\n  opacity: 0;\n  left: -100%;\n  position: absolute;\n}\n\n.slide-previous-enter.slide-previous-enter-active {\n  opacity: 1;\n  left: 0;\n  transition: ", ";\n}\n\n.slide-previous-exit {\n  opacity: 1;\n  left: 0;\n  position: relative;\n}\n\n.slide-previous-exit.slide-previous-exit-active {\n  opacity: 0;\n  left: 100%;\n  transition: ", ";\n}"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var animationStyle = 'all 500ms cubic-bezier(.23,1.10,.69,1.01)';
var slideAnimation = (0, _styledComponents.css)(_templateObject(), animationStyle, animationStyle, animationStyle, animationStyle);
exports.slideAnimation = slideAnimation;
var fadeAnimation = (0, _styledComponents.css)(_templateObject2(), animationStyle, animationStyle);
exports.fadeAnimation = fadeAnimation;
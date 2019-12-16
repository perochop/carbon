"use strict";

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.freeze");

require("core-js/modules/es.object.get-own-property-descriptor");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _base = _interopRequireDefault(require("../../../style/themes/base"));

var _switchSliderPanel = _interopRequireDefault(require("./switch-slider-panel.style"));

var _switchSliderClassic = _interopRequireDefault(require("./switch-slider-classic.style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n      &::before {\n        height: 36px;\n        width: 36px;\n\n        ", "\n      }\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n      background-color: ", ";\n\n      &::before {\n        opacity: 0.8;\n      }\n\n      ", " { color: ", "; }\n\n      ", "\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    background-color: ", ";\n    display: flex;\n    font-size: 12px;\n    font-weight: bold;\n    height: 24px;\n    left: 0;\n    letter-spacing: 1px;\n    position: absolute;\n    top: 0;\n    width: 60px;\n    z-index: 2;\n\n    &::before {\n      background-color: ", ";\n      bottom: 2px;\n      box-shadow: ", ";\n      content: \"\";\n      height: 20px;\n      position: absolute;\n      left: 2px;\n      transition: transform .4s;\n      width: 20px;\n      z-index: 1;\n    }\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledSwitchSlider = _styledComponents.default.span(_templateObject(), function (_ref) {
  var checked = _ref.checked,
      disabled = _ref.disabled,
      size = _ref.size,
      theme = _ref.theme;
  return (0, _styledComponents.css)(_templateObject2(), theme.switch.off, theme.colors.white, theme.shadows.cards, checked && "\n      background-color: ".concat(theme.colors.primary, ";\n\n      &::before {\n        transform: translateX(36px);\n      }\n    "), disabled && (0, _styledComponents.css)(_templateObject3(), theme.disabled.background, _switchSliderPanel.default, theme.disabled.disabled, checked && "\n        background-color: ".concat(theme.colors.disabled, ";\n\n        ").concat(_switchSliderPanel.default, " { color: ").concat(theme.colors.white, "; }\n      ")), size === 'large' && (0, _styledComponents.css)(_templateObject4(), checked && "\n          transform: translateX(38px);\n        "), _switchSliderClassic.default);
});

StyledSwitchSlider.propTypes = {
  checked: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  size: _propTypes.default.string,
  theme: _propTypes.default.object
};
StyledSwitchSlider.defaultProps = {
  theme: _base.default
};
var _default = StyledSwitchSlider;
exports.default = _default;
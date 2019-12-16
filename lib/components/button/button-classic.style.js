"use strict";

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.freeze");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.classicColorsSet = void 0;

var _styledComponents = require("styled-components");

var _icon = _interopRequireDefault(require("../icon/icon.style"));

var _buttonTypes = require("./button-types.style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    box-sizing: border-box;\n    font-weight: 700;\n    ", "\n    ", "\n    text-decoration: none;\n    margin-right: 15px;\n    &:last-child {\n      margin-right: 0;\n    }\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      box-sizing: border-box;\n      font-weight: 700;\n      ", "\n      ", "\n      margin-right: 15px;\n      &:last-child {\n        margin-right: 0;\n      }\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var classicColorsSet = {
  blue: {
    default: '#255bc7',
    hover: '#1e499f',
    active: '#1963f6'
  },
  grey: {
    default: '#335c6d',
    hover: '#003349',
    active: '#335c6d'
  },
  magenta: {
    default: '#ed1c5f',
    hover: '#be164c',
    active: '#f32e6d'
  },
  magentaDull: {
    default: '#ca2a60',
    hover: '#be164c',
    active: '#d55580'
  },
  red: {
    default: '#c7384f',
    hover: '#9f2d3f',
    active: '#e42c2d'
  },
  white: {
    default: '#ffffff',
    hover: '#cccccc',
    text: '#1b1d21',
    active: '#e6ebed'
  }
};
exports.classicColorsSet = classicColorsSet;

var buttonStyles = function () {
  var blue = classicColorsSet.blue,
      grey = classicColorsSet.grey,
      magenta = classicColorsSet.magenta,
      magentaDull = classicColorsSet.magentaDull,
      red = classicColorsSet.red,
      white = classicColorsSet.white;
  return {
    primary: {
      blue: "\n        background: ".concat(blue.default, ";\n        border: 1px solid transparent;\n        ").concat((0, _buttonTypes.makeColors)(white.default), "\n        &:active {\n          background-color: ").concat(blue.active, ";\n          border-color: ").concat(blue.active, ";\n        }\n        &:hover {\n          background: ").concat(blue.hover, ";\n          border-color: ").concat(blue.hover, ";\n        }\n        &:focus {\n          box-shadow: 0 0 6px rgba(25,99,246,.6);\n          outline: none;\n        }\n      "),
      grey: "\n        background: ".concat(grey.default, ";\n        border: 1px solid transparent;\n        ").concat((0, _buttonTypes.makeColors)(white.default), "\n        &:active {\n          background-color: ").concat(grey.active, ";\n          border-color: ").concat(grey.active, ";\n        }\n        &:hover {\n          background: ").concat(grey.hover, ";\n          border-color: ").concat(grey.hover, ";\n        }\n        &:focus {\n          box-shadow: 0 0 6px rgba(51,92,109,.6);\n          outline: none;\n        }\n      "),
      magenta: "\n        background: ".concat(magenta.default, ";\n        border: 1px solid transparent;\n        ").concat((0, _buttonTypes.makeColors)(white.default), "\n        &:active: {\n          background-color: ").concat(magenta.active, ";\n          border-color: ").concat(magenta.active, ";\n        }\n        &:hover {\n          background: ").concat(magenta.hover, ";\n          border-color: ").concat(magenta.hover, ";\n        }\n        &:focus {\n          box-shadow: 0 0 6px rgba(243,46,109,.6);\n          outline: none;\n        }\n      "),
      'magenta-dull': "\n        background: ".concat(magentaDull.default, ";\n        border: 1px solid transparent;\n        ").concat((0, _buttonTypes.makeColors)(white.default), "\n        &:active {\n          background-color: ").concat(magentaDull.active, ";\n          border-color: ").concat(magentaDull.active, ";\n        }\n        &:hover {\n          background: ").concat(magentaDull.hover, ";\n          border-color: ").concat(magentaDull.hover, ";\n        }\n        &:focus {\n          box-shadow: 0 0 6px rgba(213,85,128,.6);\n          outline: none;\n        }\n      "),
      red: "\n        background: ".concat(red.default, ";\n        border: 1px solid transparent;\n        ").concat((0, _buttonTypes.makeColors)(white.default), "\n        &:active {\n          background-color: ").concat(red.active, ";\n          border-color: ").concat(red.active, ";\n        }\n        &:hover {\n          background: ").concat(red.hover, ";\n          border-color: ").concat(red.hover, ";\n        }\n        &:focus {\n          box-shadow: 0 0 6px rgba(228,44,45,.6);\n          outline: none;\n        }\n      "),
      white: "\n        background: ".concat(white.default, ";\n        border: 1px solid transparent;\n        ").concat((0, _buttonTypes.makeColors)('rgba(0,0,0, .85)'), "\n        &:active {\n          background-color: ").concat(white.active, ";\n          border-color: ").concat(white.active, "\n          color: ").concat(white.text, ";\n        }\n        &:hover {\n          background: ").concat(white.hover, ";\n          border-color: ").concat(white.hover, ";\n          color: ").concat(white.text, ";\n        }\n        &:focus {\n          box-shadow: 0 0 6px rgba(51,92,109,.6);\n          outline: none;\n        }\n      ")
    },
    secondary: {
      blue: "\n        background: transparent;\n        border: 1px solid ".concat(blue.default, ";\n        ").concat((0, _buttonTypes.makeColors)(blue.default), "\n        &:active {\n          background-color: ").concat(blue.active, ";\n          border-color: ").concat(blue.active, ";\n          color: ").concat(white.default, ";\n          ").concat(_icon.default, " {\n            color: ").concat(blue.default, ";\n          }\n        }\n        &:hover {\n          background: ").concat(blue.hover, ";\n          border-color: ").concat(blue.hover, ";\n          ").concat((0, _buttonTypes.makeColors)(white.default), "\n        }\n        &:focus {\n          box-shadow: 0 0 6px rgba(25,99,246,.6);\n          outline: none;\n          background: ").concat(blue.hover, ";\n          border-color: ").concat(blue.hover, ";\n          ").concat((0, _buttonTypes.makeColors)(white.default), "\n        }\n      "),
      grey: "\n        background: transparent;\n        border: 1px solid ".concat(grey.default, ";\n        ").concat((0, _buttonTypes.makeColors)(grey.default), "\n        &:active {\n          background-color: ").concat(grey.active, ";\n          border-color: ").concat(grey.active, ";\n          ").concat((0, _buttonTypes.makeColors)(white.default), "\n        }\n        &:hover {\n          background: ").concat(grey.hover, ";\n          border-color: ").concat(grey.hover, ";\n          ").concat((0, _buttonTypes.makeColors)(white.default), "\n        }\n        &:focus {\n          box-shadow: 0 0 6px rgba(51,92,109,.6);\n          outline: none;\n          background: ").concat(grey.hover, ";\n          border-color: ").concat(grey.hover, ";\n          ").concat((0, _buttonTypes.makeColors)(white.default), "\n        }\n      "),
      magenta: "\n        background: transparent;\n        border: 1px solid ".concat(magenta.default, ";\n        ").concat((0, _buttonTypes.makeColors)(magenta.default), "\n        &:active {\n          background-color: ").concat(magenta.active, ";\n          border-color: ").concat(magenta.active, ";\n          ").concat((0, _buttonTypes.makeColors)(white.default), "\n        }\n        &:hover {\n          background: ").concat(magenta.hover, ";\n          border-color: ").concat(magenta.hover, ";\n          ").concat((0, _buttonTypes.makeColors)(white.default), "\n        }\n        &:focus {\n          box-shadow: 0 0 6px rgba(243,46,109,.6);\n          outline: none;\n          background: ").concat(magenta.hover, ";\n          border-color: ").concat(magenta.hover, ";\n          ").concat((0, _buttonTypes.makeColors)(white.default), "\n        }\n      "),
      'magenta-dull': "\n        background: transparent;\n        border: 1px solid ".concat(magentaDull.default, ";\n        ").concat((0, _buttonTypes.makeColors)(magentaDull.default), "\n        &:active {\n          background-color: ").concat(magentaDull.active, ";\n          border-color: ").concat(magentaDull.active, ";\n          ").concat((0, _buttonTypes.makeColors)(white.default), "\n        }\n        &:hover {\n          background: ").concat(magentaDull.hover, ";\n          border-color: ").concat(magentaDull.hover, ";\n          ").concat((0, _buttonTypes.makeColors)(white.default), "\n        }\n        &:focus {\n          box-shadow: 0 0 6px rgba(213,85,128,.6);\n          outline: none;\n          background: ").concat(magentaDull.hover, ";\n          border-color: ").concat(magentaDull.hover, ";\n          ").concat((0, _buttonTypes.makeColors)(white.default), "\n        }\n      "),
      red: "\n        background: transparent;\n        border: 1px solid ".concat(red.default, ";\n        ").concat((0, _buttonTypes.makeColors)(red.default), "\n        &:active {\n          background-color: ").concat(red.active, ";\n          border-color: ").concat(red.active, ";\n          ").concat((0, _buttonTypes.makeColors)(white.default), "\n        }\n        &:hover {\n          background: ").concat(red.hover, ";\n          border-color: ").concat(red.hover, ";\n          ").concat((0, _buttonTypes.makeColors)(white.default), "\n        }\n        &:focus {\n          box-shadow: 0 0 6px rgba(228,44,45,.6);\n          outline: none;\n          background: ").concat(red.hover, ";\n          border-color: ").concat(red.hover, ";\n          ").concat((0, _buttonTypes.makeColors)(white.default), "\n        }\n      "),
      white: "\n        background: transparent;\n        border: 1px solid ".concat(white.default, ";\n        ").concat((0, _buttonTypes.makeColors)(white.default), ";\n        &:active {\n          background-color: ").concat(white.active, ";\n          border-color: ").concat(white.active, "\n          color: ").concat(white.text, ";\n          ").concat(_icon.default, " {\n            color:  ").concat(white.default, ";\n          }\n        }\n        &:hover {\n          background: ").concat(white.hover, ";\n          border-color: ").concat(white.hover, ";\n          ").concat((0, _buttonTypes.makeColors)(white.text), "\n        }\n        &:focus {\n          box-shadow: 0 0 6px rgba(51,92,109,.6);\n          outline: none;\n          ").concat((0, _buttonTypes.makeColors)(white.default), "\n        }\n      ")
    },
    disabled: "\n      background: #e6ebed;\n      border: 1px solid transparent;\n      color: rgba(0,0,0,.2);\n      ".concat(_icon.default, " {\n        color: rgba(0,0,0,.2);\n      }\n      ").concat((0, _buttonTypes.makeColors)('rgba(0,0,0,.2)'), "\n      cursor: default;\n      &:hover {\n        background: #e6ebed;\n        border: 1px solid transparent;\n        color: rgba(0,0,0,.2);\n        ").concat(_icon.default, " {\n          color: rgba(0,0,0,.2);\n          background-color: transparent;\n        }\n      }\n    "),
    small: "\n      border-radius: 0;\n      font-size: 11px;\n      height: 25px;\n      letter-spacing: .5px;\n      padding: 2px 10px;\n    ",
    medium: "\n      border-radius: 0;\n      font-size: 14px;\n      height: 31px;\n      line-height: 16px;\n      margin-left: 0;\n      margin-right: 0;\n      padding: 0 18px;\n    ",
    large: "\n      border-radius: 0;\n      font-size: 14px;\n      height: 43px;\n      line-height: 16px;\n      margin-left: 0;\n      margin-right: 0;\n      padding: 0 20px;\n    "
  };
}();

var _default = function _default(_ref) {
  var disabled = _ref.disabled,
      buttonType = _ref.buttonType,
      legacyColorVariant = _ref.legacyColorVariant,
      size = _ref.size;

  if (disabled) {
    return (0, _styledComponents.css)(_templateObject(), buttonStyles.disabled, buttonStyles[size]);
  }

  return (0, _styledComponents.css)(_templateObject2(), buttonStyles[buttonType][legacyColorVariant], buttonStyles[size]);
};

exports.default = _default;
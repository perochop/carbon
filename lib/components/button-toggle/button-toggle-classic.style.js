"use strict";

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.freeze");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledButtonToggleClassicIcon = exports.StyledButtonToggleClassicLabel = void 0;

var _styledComponents = require("styled-components");

var _icon = _interopRequireDefault(require("../icon/icon.style"));

var _styleHelper = require("../../utils/helpers/style-helper");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n      margin-right: 3px;\n  "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n      .carbon-icon__svg--credit-card-slash {\n        margin-left: 10px;\n      }\n    "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    display: block;\n\n    ", " {\n      margin-bottom: 0;\n      ::before {\n        ", "\n      }\n    }\n\n    ", "\n  "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: inline;\n\n  ", ";\n\n  ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    height: auto;\n    padding-top: 15px;\n    padding-bottom: 15px;\n\n    .carbon-button-toggle__button-icon {\n      margin-right: 3px;\n    }\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    height: auto;\n    padding: 5px 8px;\n    font-weight: 700;\n    font-size: 12px;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  height: auto;\n  min-width: auto;\n  padding: 15px 25px;\n  font-weight: 900;\n  border: 1px solid #ccd6db;\n\n  input:checked ~ & {\n    color: ", ";\n    background-color: #1573e6;\n\n    ", " {\n      color: ", ";\n    }\n  }\n\n  input:focus ~ & {\n    outline: 0;\n  }  \n  \n  &:hover {\n    border-color: #1e499f;\n    color: ", ";\n    background-color: #1e499f;\n\n    ", " {\n      color: ", ";\n    }\n  }\n\n  ", ";\n\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledButtonToggleClassicLabel = function StyledButtonToggleClassicLabel(_ref) {
  var theme = _ref.theme;
  return (0, _styleHelper.isClassic)(theme) && (0, _styledComponents.css)(_templateObject(), theme.colors.white, _icon.default, theme.colors.white, theme.colors.white, _icon.default, theme.colors.white, function (_ref2) {
    var size = _ref2.size;
    return size === 'small' && (0, _styledComponents.css)(_templateObject2());
  }, function (_ref3) {
    var size = _ref3.size,
        buttonIcon = _ref3.buttonIcon,
        buttonIconSize = _ref3.buttonIconSize;
    return buttonIcon && size === 'large' && buttonIconSize === 'large' && (0, _styledComponents.css)(_templateObject3());
  });
};

exports.StyledButtonToggleClassicLabel = StyledButtonToggleClassicLabel;
var iconFontSizes = {
  smallIcon: 16,
  largeIcon: 60
};

function applyIconStyle(id) {
  return "\n    font-size: ".concat("".concat(iconFontSizes[id], "px"), ";\n    line-height: ", "".concat(iconFontSizes[id], "px"), ";\n  ");
}

var StyledButtonToggleClassicIcon = function StyledButtonToggleClassicIcon(_ref4) {
  var theme = _ref4.theme;
  return (0, _styleHelper.isClassic)(theme) && (0, _styledComponents.css)(_templateObject4(), function (_ref5) {
    var buttonIconSize = _ref5.buttonIconSize;
    return buttonIconSize === 'large' && (0, _styledComponents.css)(_templateObject5(), _icon.default, applyIconStyle("".concat(buttonIconSize, "Icon")), buttonIconSize === 'large' && (0, _styledComponents.css)(_templateObject6()));
  }, function (_ref6) {
    var buttonIcon = _ref6.buttonIcon,
        buttonIconSize = _ref6.buttonIconSize;
    return buttonIcon && buttonIconSize === 'large' && (0, _styledComponents.css)(_templateObject7());
  });
};

exports.StyledButtonToggleClassicIcon = StyledButtonToggleClassicIcon;
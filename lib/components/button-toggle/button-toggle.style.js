"use strict";

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.freeze");

require("core-js/modules/es.object.get-own-property-descriptor");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledButtonToggleContentWrapper = exports.StyledButtonToggleInput = exports.StyledButtonToggleIcon = exports.StyledButtonToggleLabel = exports.StyledButtonToggle = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _base = _interopRequireDefault(require("../../style/themes/base"));

var _buttonToggleClassic = require("./button-toggle-classic.style");

var _icon = _interopRequireDefault(require("../icon/icon.style"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  width: 0;\n  height: 0;\n  opacity: 0;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n    &:not(:first-of-type) {\n      margin-left: 0;\n      ", " {\n        border-left-width: 0;\n      }\n    }\n  "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  vertical-align: middle;\n\n  &:not(:first-of-type) {\n    margin-left: 10px;\n  }\n  \n  ", ";\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    margin-right: 0;\n    \n    ", " {\n      margin-right: 0;\n      margin-bottom: 8px;\n    }\n\n    ", "::before {\n      font-size: ", ";\n      line-height: ", ";\n    }\n\n    .carbon-icon__svg--credit-card-slash {\n      margin-left: 6px;\n    }\n  "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  margin-right: 8px;\n  \n  ", "\n\n  ", "\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    & {\n      background-color: ", ";\n      border-color: ", ";\n      color: ", ";\n      \n      ", " {\n        color: ", ";\n      }\n    }\n    cursor: not-allowed;\n  "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    min-width: 104px;\n    height: 102px;\n    padding: 0 16px;\n\n    ", " {\n      flex-direction: column;\n    }\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    border: 1px solid ", ";\n    font-size: ", ";\n    background-color: ", ";\n    \n    input:checked ~ & {\n      color: ", ";\n      background-color: ", ";\n\n      ", " {\n        color: ", ";\n      }\n    }\n\n    input:focus ~ & {\n      outline: 3px solid ", ";\n    }\n\n    &:hover {\n      background-color: ", ";\n      border-color: ", ";\n    }\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  height: 38px;\n  padding: 0 24px;\n  font-weight: 600;\n  cursor: pointer;\n  \n  ", ";\n\n  ", "\n\n  ", ";\n\n    ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledButtonToggleContentWrapper = _styledComponents.default.div(_templateObject());

exports.StyledButtonToggleContentWrapper = StyledButtonToggleContentWrapper;

var StyledButtonToggleLabel = _styledComponents.default.label(_templateObject2(), function (_ref) {
  var theme = _ref.theme;
  return (0, _styledComponents.css)(_templateObject3(), theme.colors.border, theme.text.size, theme.colors.white, theme.colors.white, theme.colors.tertiary, _icon.default, theme.colors.white, theme.colors.focus, theme.colors.whiteMix, theme.colors.tertiary);
}, function (_ref2) {
  var buttonIcon = _ref2.buttonIcon,
      buttonIconSize = _ref2.buttonIconSize;
  return buttonIcon && buttonIconSize === 'large' && (0, _styledComponents.css)(_templateObject4(), StyledButtonToggleContentWrapper);
}, function (_ref3) {
  var disabled = _ref3.disabled,
      theme = _ref3.theme;
  return disabled && (0, _styledComponents.css)(_templateObject5(), theme.disabled.button, theme.disabled.button, theme.disabled.buttonText, _icon.default, theme.disabled.buttonText);
}, _buttonToggleClassic.StyledButtonToggleClassicLabel);

exports.StyledButtonToggleLabel = StyledButtonToggleLabel;
var iconFontSizes = {
  smallIcon: 16,
  largeIcon: 32
};

var StyledButtonToggleIcon = _styledComponents.default.div(_templateObject6(), function (_ref4) {
  var buttonIconSize = _ref4.buttonIconSize;
  return buttonIconSize === 'large' && (0, _styledComponents.css)(_templateObject7(), _icon.default, _icon.default, "".concat(iconFontSizes["".concat(buttonIconSize, "Icon")], "px"), "".concat(iconFontSizes["".concat(buttonIconSize, "Icon")], "px"));
}, _buttonToggleClassic.StyledButtonToggleClassicIcon);

exports.StyledButtonToggleIcon = StyledButtonToggleIcon;

var StyledButtonToggle = _styledComponents.default.div(_templateObject8(), function (_ref5) {
  var grouped = _ref5.grouped;
  return grouped && (0, _styledComponents.css)(_templateObject9(), StyledButtonToggleLabel);
});

exports.StyledButtonToggle = StyledButtonToggle;

var StyledButtonToggleInput = _styledComponents.default.input(_templateObject10());

exports.StyledButtonToggleInput = StyledButtonToggleInput;
StyledButtonToggle.propTypes = {
  buttonSize: _propTypes.default.string
};
StyledButtonToggleIcon.propTypes = {
  buttonIconSize: _propTypes.default.string
};
StyledButtonToggleLabel.defaultProps = {
  theme: _base.default
};
StyledButtonToggleLabel.defaultProps = {
  theme: _base.default
};
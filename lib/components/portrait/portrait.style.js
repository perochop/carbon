"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.from");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.freeze");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getColorsForInitials = getColorsForInitials;
exports.StyledIcon = exports.StyledCustomImg = exports.StyledPortraitGravatar = exports.StyledPortraitInitialsImg = exports.StyledPortraitInitials = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _portraitSize = _interopRequireDefault(require("./portrait-size.config"));

var _base = _interopRequireDefault(require("../../style/themes/base"));

var _icon = _interopRequireDefault(require("../icon"));

var _optionsHelper = _interopRequireDefault(require("../../utils/helpers/options-helper"));

var _styleHelper = require("../../utils/helpers/style-helper");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject14() {
  var data = _taggedTemplateLiteral(["border: 1px dashed ", ";"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n  && {\n    box-sizing: border-box;\n    line-height: 14px;\n    ", "\n    ", "\n    ", "\n    ", "\n  }\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  ", "\n  ", "\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  vertical-align: middle;\n  ", "\n  ", "\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _templateObject9() {
  var data = _taggedTemplateLiteral(["border: 1px solid ", ";"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  vertical-align: middle;\n  box-sizing: border-box;\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n      border: 1px solid #8099a4;\n    "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n      svg {\n        width:  ", "px;\n        height: ", "px;\n      }\n    "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    padding: ", "px;\n    background-color: ", ";\n    color: ", ";\n\n    ", "\n\n    ", "\n  "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["", ""]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    width:  ", "px;\n    height: ", "px;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function stylingForSize(_ref) {
  var size = _ref.size,
      theme = _ref.theme;
  var params = (0, _portraitSize.default)(theme, size);

  if (!params) {
    return (0, _styledComponents.css)(_templateObject());
  }

  return (0, _styledComponents.css)(_templateObject2(), params.dimensions, params.dimensions);
}

function stylingForShape(_ref2) {
  var shape = _ref2.shape;
  var cssString = 'overflow: hidden;';
  if (shape === 'standard') cssString += 'border-radius: 0px;';
  if (shape === 'square') cssString += 'border-radius: 0px;';
  if (shape === 'circle') cssString += 'border-radius: 50%;';
  if (shape === 'leaf') cssString += 'border-radius: 10% 40% 10%;';
  return (0, _styledComponents.css)(_templateObject3(), cssString);
}

function stylingForIcon(_ref3) {
  var size = _ref3.size,
      theme = _ref3.theme,
      darkBackground = _ref3.darkBackground;
  var isThemeClassic = (0, _styleHelper.isClassic)(theme);
  var params = (0, _portraitSize.default)(theme, size);

  if (!params) {
    return (0, _styledComponents.css)(_templateObject4());
  }

  var color = theme.portrait.border;
  var backgroundColor = theme.portrait.background;
  var iconPadding = (params.dimensions - params.iconDimensions) / 2 - 1;

  if (darkBackground) {
    color = theme.portrait.background;
    backgroundColor = theme.portrait.border;
  }

  if (isThemeClassic) {
    color = darkBackground ? '#ffffff' : '#335c6d';
    backgroundColor = darkBackground ? '#668592' : '#ccd6db';
    iconPadding = params.iconPadding;
  }

  return (0, _styledComponents.css)(_templateObject5(), iconPadding, backgroundColor, color, params.iconDimensions && (0, _styledComponents.css)(_templateObject6(), params.iconDimensions, params.iconDimensions), isThemeClassic && (0, _styledComponents.css)(_templateObject7()));
}

function getColorsForInitials(theme, darkBackground) {
  if ((0, _styleHelper.isClassic)(theme)) {
    return {
      textColor: darkBackground ? '#FFFFFF' : '#636872',
      bgColor: darkBackground ? '#8A8E95' : '#D8D9DC'
    };
  }

  return {
    textColor: darkBackground ? theme.portrait.background : theme.portrait.initials,
    bgColor: darkBackground ? theme.portrait.initials : theme.portrait.background
  };
}

var StyledPortraitInitials = _styledComponents.default.div(_templateObject8(), stylingForSize, stylingForShape, function (_ref4) {
  var theme = _ref4.theme;
  return !(0, _styleHelper.isClassic)(theme) && (0, _styledComponents.css)(_templateObject9(), theme.portrait.border);
});

exports.StyledPortraitInitials = StyledPortraitInitials;
StyledPortraitInitials.propTypes = {
  theme: _propTypes.default.object,
  size: _propTypes.default.oneOf([].concat(_toConsumableArray(_optionsHelper.default.sizesFull), _toConsumableArray(_optionsHelper.default.sizesPortrait))).isRequired,
  shape: _propTypes.default.oneOf([].concat(_toConsumableArray(_optionsHelper.default.shapesVaried), _toConsumableArray(_optionsHelper.default.shapesPortrait)))
};
StyledPortraitInitials.defaultProps = {
  theme: _base.default,
  shape: 'square'
};

var StyledPortraitInitialsImg = _styledComponents.default.img(_templateObject10());

exports.StyledPortraitInitialsImg = StyledPortraitInitialsImg;
StyledPortraitInitialsImg.propTypes = {
  src: _propTypes.default.string.isRequired,
  alt: _propTypes.default.string
};

var StyledPortraitGravatar = _styledComponents.default.img(_templateObject11(), stylingForSize, stylingForShape);

exports.StyledPortraitGravatar = StyledPortraitGravatar;
StyledPortraitGravatar.propTypes = {
  shape: _propTypes.default.oneOf([].concat(_toConsumableArray(_optionsHelper.default.shapesVaried), _toConsumableArray(_optionsHelper.default.shapesPortrait))),
  size: _propTypes.default.oneOf([].concat(_toConsumableArray(_optionsHelper.default.sizesFull), _toConsumableArray(_optionsHelper.default.sizesPortrait))).isRequired,
  src: _propTypes.default.string.isRequired,
  alt: _propTypes.default.string
};

var StyledCustomImg = _styledComponents.default.img(_templateObject12(), stylingForSize, stylingForShape);

exports.StyledCustomImg = StyledCustomImg;
StyledCustomImg.propTypes = {
  src: _propTypes.default.string.isRequired,
  alt: _propTypes.default.string,
  shape: _propTypes.default.oneOf([].concat(_toConsumableArray(_optionsHelper.default.shapesVaried), _toConsumableArray(_optionsHelper.default.shapesPortrait))),
  size: _propTypes.default.oneOf([].concat(_toConsumableArray(_optionsHelper.default.sizesFull), _toConsumableArray(_optionsHelper.default.sizesPortrait))).isRequired
}; // && is used here to increase the specificity

var StyledIcon = (0, _styledComponents.default)(function (_ref5) {
  var darkBackground = _ref5.darkBackground,
      rest = _objectWithoutProperties(_ref5, ["darkBackground"]);

  return _react.default.createElement(_icon.default, rest);
})(_templateObject13(), stylingForSize, stylingForIcon, stylingForShape, function (_ref6) {
  var theme = _ref6.theme;
  return !(0, _styleHelper.isClassic)(theme) && (0, _styledComponents.css)(_templateObject14(), theme.portrait.border);
});
exports.StyledIcon = StyledIcon;
StyledIcon.propTypes = {
  darkBackground: _propTypes.default.bool,
  size: _propTypes.default.oneOf([].concat(_toConsumableArray(_optionsHelper.default.sizesFull), _toConsumableArray(_optionsHelper.default.sizesPortrait))),
  shape: _propTypes.default.oneOf([].concat(_toConsumableArray(_optionsHelper.default.shapesVaried), _toConsumableArray(_optionsHelper.default.shapesPortrait))),
  theme: _propTypes.default.object,
  type: _propTypes.default.string.isRequired
};
StyledIcon.defaultProps = {
  darkBackground: false,
  size: 'M',
  shape: 'square',
  theme: _base.default
};
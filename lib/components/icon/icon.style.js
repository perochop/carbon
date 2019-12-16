"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.from");

require("core-js/modules/es.array.includes");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.freeze");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("../../style/fonts/fonts.css");

var _iconUnicodes = _interopRequireDefault(require("./icon-unicodes"));

var _iconClassic = _interopRequireDefault(require("./icon-classic.style"));

var _base = _interopRequireDefault(require("../../style/themes/base"));

var _palette = _interopRequireDefault(require("../../style/palette"));

var _iconConfig = _interopRequireDefault(require("./icon-config"));

var _optionsHelper = _interopRequireDefault(require("../../utils/helpers/options-helper"));

var _browserTypeCheck = _interopRequireWildcard(require("../../utils/helpers/browser-type-check"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["margin-top: -6px;"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n        margin-top: ", ";\n      "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n      align-items: center;\n      display: inline-flex;\n      justify-content: center;\n      height: ", ";\n      width: ", ";\n      border-radius: ", ";\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n\n    display: inline-block;\n    position: relative;\n    color: ", ";\n    background-color: ", ";\n\n    &:hover {\n      color: ", ";\n      background-color: ", ";\n    }\n\n    ", "\n\n    &::before {\n      -webkit-font-smoothing: antialiased;\n      -moz-osx-font-smoothing: grayscale;\n\n      font-family: CarbonIcons;\n      content: \"", "\";\n      font-size: ", ";\n      font-style: normal;\n      font-weight: normal;\n      line-height: ", ";\n      vertical-align: middle;\n      ", "\n      ", "\n      display: block;\n    }\n\n    ", ";\n  "]);

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

var getBackgroundColor = function getBackgroundColor(theme, bgTheme, disabled, isHover) {
  if (bgTheme !== 'none') {
    if (disabled) return theme.icon.disabled;
  }

  var palette = (0, _palette.default)({
    statusColor: theme.colors[bgTheme],
    businessColor: theme.colors.primary
  });
  var statuses = ['info', 'error', 'success', 'warning'];

  if (statuses.includes(bgTheme)) {
    return isHover ? palette.statusColorShade(20) : theme.colors[bgTheme];
  }

  if (bgTheme === 'business') {
    return isHover ? palette.businessColorShade(20) : theme.colors.primary;
  }

  return 'transparent';
};

var getIconColor = function getIconColor(bgTheme, theme, iconColor, disabled, isHover) {
  if (disabled) return theme.icon.disabled;

  if (bgTheme !== 'none') {
    var whiteIconBackgrounds = ['error', 'info', 'business'];
    var darkIconBackgrounds = ['success', 'warning'];
    if (whiteIconBackgrounds.includes(bgTheme)) return theme.colors.white;

    if (darkIconBackgrounds.includes(bgTheme)) {
      return isHover ? theme.icon.defaultHover : theme.icon.default;
    }
  }

  var palette = (0, _palette.default)({
    businessColor: theme.colors.primary
  });

  switch (iconColor) {
    case 'on-dark-background':
      return theme.colors.white;

    case 'on-light-background':
      return isHover ? theme.icon.onLightBackgroundHover : theme.icon.onLightBackground;

    case 'business-color':
      return isHover ? palette.businessColorShade(20) : theme.colors.primary;

    default:
      return isHover ? theme.icon.defaultHover : theme.icon.default;
  }
};

function adjustIconBgSize(fontSize, bgSize) {
  if (fontSize === 'large' && (bgSize === 'small' || bgSize === 'medium')) {
    return _iconConfig.default.backgroundSize.large;
  }

  return _iconConfig.default.backgroundSize[bgSize];
}

var StyledIcon = _styledComponents.default.span(_templateObject(), function (_ref) {
  var bgTheme = _ref.bgTheme,
      theme = _ref.theme,
      iconColor = _ref.iconColor,
      bgSize = _ref.bgSize,
      bgShape = _ref.bgShape,
      type = _ref.type,
      fontSize = _ref.fontSize,
      disabled = _ref.disabled;
  return (0, _styledComponents.css)(_templateObject2(), getIconColor(bgTheme, theme, iconColor, disabled, false), getBackgroundColor(theme, bgTheme, disabled, false), getIconColor(bgTheme, theme, iconColor, disabled, true), getBackgroundColor(theme, bgTheme, disabled, true), bgTheme !== 'none' && (0, _styledComponents.css)(_templateObject3(), adjustIconBgSize(fontSize, bgSize), adjustIconBgSize(fontSize, bgSize), _iconConfig.default.backgroundShape[bgShape]), _iconUnicodes.default[type], _iconConfig.default.iconSize[fontSize], _iconConfig.default.iconSize[fontSize], type === 'services' && (0, _browserTypeCheck.default)(window) && (0, _styledComponents.css)(_templateObject4(), fontSize === 'small' ? '-7px' : '-8px'), type === 'services' && (0, _browserTypeCheck.isSafari)(navigator) && !(0, _browserTypeCheck.default)(window) && (0, _styledComponents.css)(_templateObject5()), _iconClassic.default);
});

StyledIcon.propTypes = {
  theme: _propTypes.default.object,
  type: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  bgSize: _propTypes.default.oneOf(_optionsHelper.default.sizesRestricted),
  bgShape: _propTypes.default.oneOf(_optionsHelper.default.shapes),
  bgTheme: _propTypes.default.oneOf([].concat(_toConsumableArray(_optionsHelper.default.colors), _toConsumableArray(_optionsHelper.default.iconBackgrounds), [''])),
  fontSize: _propTypes.default.oneOf(_optionsHelper.default.sizesBinary),
  iconColor: _propTypes.default.oneOf(_optionsHelper.default.iconColors)
};
StyledIcon.defaultProps = {
  theme: _base.default
};
var _default = StyledIcon;
exports.default = _default;
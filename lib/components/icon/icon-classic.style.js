"use strict";

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.freeze");

require("core-js/modules/es.object.get-own-property-descriptor");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = require("styled-components");

var _styleHelper = require("../../utils/helpers/style-helper");

var _iconClassicConfig = _interopRequireDefault(require("./icon-classic-config"));

var _browserTypeCheck = _interopRequireWildcard(require("../../utils/helpers/browser-type-check"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["margin-top: -4px;"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["margin-top: -7px;"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    background-color: ", ";\n    &:hover {\n      color: ", ";\n      background-color: ", ";\n    }\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  color: rgba(0, 0, 0, 0.85);\n\n  .common-input__label--help & {\n    width: auto;\n    height: auto;\n  }\n\n  ", "\n\n  &::before {\n    font-size: 16px;\n    font-style: normal;\n    font-weight: normal;\n    line-height: 16px;\n    vertical-align: middle;\n    ", "\n    ", "\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _default = function _default(_ref) {
  var theme = _ref.theme,
      bgTheme = _ref.bgTheme,
      type = _ref.type;
  return (0, _styleHelper.isClassic)(theme) && (0, _styledComponents.css)(_templateObject(), bgTheme && (0, _styledComponents.css)(_templateObject2(), _iconClassicConfig.default.backgroundColor[bgTheme], theme.icon.defaultHover, _iconClassicConfig.default.backgroundColor[bgTheme]), type === 'services' && (0, _browserTypeCheck.default)(window) && (0, _styledComponents.css)(_templateObject3()), type === 'services' && (0, _browserTypeCheck.isSafari)(navigator) && !(0, _browserTypeCheck.default)(window) && (0, _styledComponents.css)(_templateObject4()));
};

exports.default = _default;
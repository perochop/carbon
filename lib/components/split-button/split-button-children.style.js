"use strict";

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.freeze");

require("core-js/modules/es.object.get-own-property-descriptor");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _base = _interopRequireDefault(require("../../style/themes/base"));

var _button = _interopRequireDefault(require("../button/button.style"));

var _splitButtonClassic = require("./split-button-classic.style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    position: absolute;\n    right: 0;\n    background-color: ", ";\n    min-width: 75%;\n    white-space: nowrap;\n    z-index: 100;\n\n    ", " {\n      background-color: ", ";\n      border: 1px solid ", ";\n      color: ", ";\n      display: block;\n      margin-left: 0;\n      margin-top: 3px;\n      margin-bottom: 3px;\n      min-width: 100%;\n      text-align: ", ";\n      z-index: 10;\n\n      &:focus,\n      &:hover {\n        background-color: ", ";\n      }\n\n      & + & {\n        margin-top: 3px;\n      }\n    }\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", "\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledSplitButtonChildrenContainer = _styledComponents.default.div(_templateObject(), function (_ref) {
  var theme = _ref.theme,
      align = _ref.align;
  return (0, _styledComponents.css)(_templateObject2(), theme.colors.secondary, _button.default, theme.colors.secondary, theme.colors.secondary, theme.colors.white, align, theme.colors.tertiary);
}, _splitButtonClassic.getSplitButtonChildrenClassicStyles);

StyledSplitButtonChildrenContainer.defaultProps = {
  theme: _base.default
};
var _default = StyledSplitButtonChildrenContainer;
exports.default = _default;
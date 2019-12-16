"use strict";

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.freeze");

require("core-js/modules/es.object.get-own-property-descriptor");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _button = _interopRequireDefault(require("../button/button.style"));

var _splitButtonChildren = _interopRequireDefault(require("../split-button/split-button-children.style"));

var _base = _interopRequireDefault(require("../../style/themes/base"));

var _splitButton = _interopRequireDefault(require("../split-button/split-button.style"));

var _multiActionButtonClassic = _interopRequireDefault(require("./multi-action-button-classic.style"));

var _styleHelper = require("../../utils/helpers/style-helper");

var _icon = _interopRequireDefault(require("../icon/icon.style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n      left: auto;\n      right: 0;\n\n      ", " {\n        text-align: right;\n      }\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    ", " > ", " {\n      background-color: ", ";\n      border-color: ", ";\n\n      &,\n      ", " {\n        color: ", ";\n        margin-right: 0;\n        top: 2px;\n        left: ", ";\n      }\n\n      &:focus {\n        border-color: ", ";\n        margin: 0 -1px;\n      }\n    }\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  \n  ", " {\n    min-width: 100%;\n    white-space: nowrap;\n    left: 0;\n    right: auto;\n    z-index: 12;\n\n    ", "\n  }\n\n  ", " {\n    margin-right: 0px;\n    top: 2px;\n    left: ", ";\n  }\n  \n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledMultiActionButton = _styledComponents.default.div(_templateObject(), function (_ref) {
  var disabled = _ref.disabled,
      displayed = _ref.displayed,
      theme = _ref.theme;
  return !disabled && displayed && (0, _styledComponents.css)(_templateObject2(), _splitButton.default, _button.default, theme.colors.secondary, theme.colors.secondary, _icon.default, theme.colors.white, (0, _styleHelper.isClassic)(theme) ? '6px' : '8px', theme.colors.focus);
}, _splitButtonChildren.default, function (_ref2) {
  var align = _ref2.align;
  return align === 'right' && (0, _styledComponents.css)(_templateObject3(), _button.default);
}, _icon.default, function (_ref3) {
  var theme = _ref3.theme;
  return (0, _styleHelper.isClassic)(theme) ? '6px' : '8px';
}, _multiActionButtonClassic.default);

StyledMultiActionButton.defaultProps = {
  theme: _base.default,
  size: 'medium',
  legacyColorVariant: 'blue'
};
var _default = StyledMultiActionButton;
exports.default = _default;
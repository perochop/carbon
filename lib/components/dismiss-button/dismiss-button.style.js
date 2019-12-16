"use strict";

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.freeze");

require("core-js/modules/es.object.get-own-property-descriptor");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LinkStyle = exports.DismissButtonStyle = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _base = _interopRequireDefault(require("../../style/themes/base"));

var _optionsHelper = _interopRequireDefault(require("../../utils/helpers/options-helper"));

var _dismissButtonClassic = _interopRequireDefault(require("./dismiss-button-classic.style"));

var _link = _interopRequireDefault(require("../link"));

var _icon = _interopRequireDefault(require("../icon/icon.style"));

var _styleHelper = require("../../utils/helpers/style-helper");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    a:focus {\n      outline: none;\n      background-color: transparent;\n       span {\n        &:before {\n          outline: 2px solid ", ";\n          outline-offset: 3px;\n        }\n      }\n    }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  ", "\n\n  .carbon-link__content {\n    display: none;\n  }\n\n  ", " {\n    margin-right: 0;\n    top: -2px;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    margin-top: -10px;\n    top: 50%;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  border: none;\n  position: absolute;\n  right: 16px;\n  ", "\n  ", " {\n    &:before {\n      color: ", ";\n    }\n\n    &:hover:before{\n      color: ", ";\n    }\n  }\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var DismissButtonStyle = _styledComponents.default.div(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return !(0, _styleHelper.isClassic)(theme) && (0, _styledComponents.css)(_templateObject2());
}, _icon.default, function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.border;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.focusedIcon;
}, _dismissButtonClassic.default);

exports.DismissButtonStyle = DismissButtonStyle;
var LinkStyle = (0, _styledComponents.default)(_link.default)(_templateObject3(), function (_ref4) {
  var theme = _ref4.theme;
  return !(0, _styleHelper.isClassic)(theme) && (0, _styledComponents.css)(_templateObject4(), theme.colors.focus);
}, _icon.default);
exports.LinkStyle = LinkStyle;
DismissButtonStyle.defaultProps = {
  variant: 'info',
  roundedCorners: true,
  theme: _base.default,
  transparent: false
};
DismissButtonStyle.propTypes = {
  variant: _propTypes.default.oneOf(_optionsHelper.default.colors),
  border: _propTypes.default.bool,
  roundedCorners: _propTypes.default.bool,
  transparent: _propTypes.default.bool
};
LinkStyle.defaultProps = {
  theme: _base.default
};
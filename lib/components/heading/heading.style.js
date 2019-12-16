"use strict";

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.freeze");

require("core-js/modules/es.object.get-own-property-descriptor");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledHeading = exports.StyledHeadingIcon = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _icon = _interopRequireDefault(require("../icon"));

var _icon2 = _interopRequireDefault(require("../icon/icon.style"));

var _base = _interopRequireDefault(require("../../style/themes/base"));

var _link = _interopRequireDefault(require("../link/link.style"));

var _styleHelper = require("../../utils/helpers/style-helper");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  cursor: pointer;\n  top: 50%;\n  z-index: 1002;\n  position: absolute;\n\n  .carbon-heading--has-divider & {\n    margin-top: -8px;\n  }\n\n  &, &.", " {\n    position: absolute;\n    display: block;\n    color: ", ";\n  }\n  \n  &:before, &", ":before {\n    font-size: 24px;\n  }\n  \n  &:hover {\n    color: ", ";\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n      margin-top: ", ";\n      margin-top: ", ";\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      margin-top: ", ";\n      margin-top: ", ";\n      margin-top: ", ";\n      margin-top: ", ";\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  &&&& ", " {\n    a, button {\n      text-decoration: none;\n      padding-top: ", ";\n    }\n    \n    ", "\n\n    ", "\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledHeading = _styledComponents.default.div(_templateObject(), _link.default, function (_ref) {
  var divider = _ref.divider;
  return divider ? '8px' : '1px';
}, function (_ref2) {
  var divider = _ref2.divider,
      subheader = _ref2.subheader,
      theme = _ref2.theme;
  return !(0, _styleHelper.isClassic)(theme) && (0, _styledComponents.css)(_templateObject2(), !divider ? '-16px' : '', !subheader ? '-22px' : '', !divider && !subheader ? '-12px' : '', divider && !subheader ? '-14px' : '');
}, function (_ref3) {
  var divider = _ref3.divider,
      subheader = _ref3.subheader,
      theme = _ref3.theme;
  return (0, _styleHelper.isClassic)(theme) && (0, _styledComponents.css)(_templateObject3(), !divider && subheader ? '-14px' : '', !divider && !subheader ? '-10px' : '');
});

exports.StyledHeading = StyledHeading;
var StyledHeadingIcon = (0, _styledComponents.default)(_icon.default)(_templateObject4(), function (_ref4) {
  var theme = _ref4.theme;
  return theme.colors.border;
}, _icon2.default, function (_ref5) {
  var theme = _ref5.theme;
  return theme.icon;
}, _icon2.default, function (_ref6) {
  var theme = _ref6.theme;
  return theme.icon.focus;
});
exports.StyledHeadingIcon = StyledHeadingIcon;
StyledHeadingIcon.defaultProps = {
  theme: _base.default
};
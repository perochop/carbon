"use strict";

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.freeze");

require("core-js/modules/es.object.get-own-property-descriptor");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SidebarCloseStyle = exports.SidebarStyle = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _base = _interopRequireDefault(require("../../style/themes/base"));

var _sidebarClassic = require("./sidebar-classic.style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  cursor: pointer;\n  position: absolute;\n  right: 20px;\n  top: 26px;\n  z-index: 1;\n  color: ", ";\n\n  &:hover {\n      color: ", ";\n  };\n\n  ", "\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n      box-shadow: ", ";\n      ", ": 0;\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      width: ", ";\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  border-radius: 1px;\n  bottom: 0;\n  position: fixed;\n  top: 0;\n  padding: 27px 32px 32px 32px;\n  z-index: 1002;\n  \n  ", ";\n\n  ", ";\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var sidebarSizes = {
  'extra-small': '150px',
  small: '250px',
  'medium-small': '350px',
  medium: '450px',
  'medium-large': '550px',
  large: '650px',
  'extra-large': '750px'
};

var SidebarStyle = _styledComponents.default.div(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.disabled.input;
}, function (_ref2) {
  var size = _ref2.size;
  return size && (0, _styledComponents.css)(_templateObject2(), sidebarSizes[size]);
}, function (_ref3) {
  var position = _ref3.position,
      theme = _ref3.theme;
  return position && (0, _styledComponents.css)(_templateObject3(), theme.shadows.depth3, position);
}, _sidebarClassic.sidebarClassicStyle);

exports.SidebarStyle = SidebarStyle;

var SidebarCloseStyle = _styledComponents.default.div(_templateObject4(), function (_ref4) {
  var theme = _ref4.theme;
  return theme.colors.border;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.colors.focusedIcon;
}, _sidebarClassic.sidebarCloseClassicStyle);

exports.SidebarCloseStyle = SidebarCloseStyle;
SidebarStyle.defaultProps = {
  theme: _base.default
};
SidebarCloseStyle.defaultProps = {
  theme: _base.default
};
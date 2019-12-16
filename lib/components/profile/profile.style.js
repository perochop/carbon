"use strict";

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.freeze");

require("core-js/modules/es.object.get-own-property-descriptor");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProfileEmailStyle = exports.ProfileAvatarStyle = exports.ProfileDetailsStyle = exports.ProfileNameStyle = exports.ProfileStyle = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _portrait = _interopRequireDefault(require("../portrait"));

var _base = _interopRequireDefault(require("../../style/themes/base"));

var _profile = _interopRequireDefault(require("./profile.config"));

var _styleHelper = require("../../utils/helpers/style-helper");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n    line-height: 16px;\n    margin-left: 14px;\n    margin-right: 14px;\n  "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  vertical-align: middle;\n  display: inline-block;\n  line-height: ", ";\n  margin-left: ", ";\n\n  ", "\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    ", " {\n      font-size: 20px;\n      font-weight: 400;\n      line-height: 21px;\n    }\n  "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["color: ", ""]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  white-space: nowrap;\n  ", ";\n\n  ", "\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    font-size: 14px;\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  font-size: ", ";\n\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-weight: bold;\n  display: block;\n  font-size: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ProfileNameStyle = _styledComponents.default.span(_templateObject(), function (_ref) {
  var size = _ref.size;
  return _profile.default[size].nameSize;
});

exports.ProfileNameStyle = ProfileNameStyle;

var ProfileEmailStyle = _styledComponents.default.span(_templateObject2(), function (_ref2) {
  var size = _ref2.size;
  return _profile.default[size].emailSize;
}, function (_ref3) {
  var theme = _ref3.theme;
  return (0, _styleHelper.isClassic)(theme) && (0, _styledComponents.css)(_templateObject3());
});

exports.ProfileEmailStyle = ProfileEmailStyle;

var ProfileStyle = _styledComponents.default.div(_templateObject4(), function (_ref4) {
  var theme = _ref4.theme;
  return !(0, _styleHelper.isClassic)(theme) && (0, _styledComponents.css)(_templateObject5(), theme.text.color);
}, function (_ref5) {
  var large = _ref5.large,
      theme = _ref5.theme;
  return (0, _styleHelper.isClassic)(theme) && large && (0, _styledComponents.css)(_templateObject6(), ProfileNameStyle);
});

exports.ProfileStyle = ProfileStyle;

var ProfileDetailsStyle = _styledComponents.default.div(_templateObject7(), function (_ref6) {
  var size = _ref6.size;
  return _profile.default[size].lineHeight;
}, function (_ref7) {
  var size = _ref7.size;
  return _profile.default[size].marginLeft;
}, function (_ref8) {
  var theme = _ref8.theme;
  return (0, _styleHelper.isClassic)(theme) && (0, _styledComponents.css)(_templateObject8());
});

exports.ProfileDetailsStyle = ProfileDetailsStyle;
var ProfileAvatarStyle = (0, _styledComponents.default)(_portrait.default)(_templateObject9());
exports.ProfileAvatarStyle = ProfileAvatarStyle;
ProfileStyle.defaultProps = {
  theme: _base.default
};
ProfileNameStyle.defaultProps = {
  size: 'M',
  theme: _base.default
};
ProfileEmailStyle.defaultProps = {
  size: 'M',
  theme: _base.default
};
ProfileDetailsStyle.defaultProps = {
  size: 'M',
  theme: _base.default
};
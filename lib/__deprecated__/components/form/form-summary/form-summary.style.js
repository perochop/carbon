"use strict";

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.freeze");

require("core-js/modules/es.object.get-own-property-descriptor");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.StyledSummaryText = exports.StyledInternalSummary = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _base = _interopRequireDefault(require("../../../../style/themes/base"));

var _icon = _interopRequireDefault(require("../../../../components/icon/icon.style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _templateObject9() {
  var data = _taggedTemplateLiteral(["color: ", ";"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  padding: 0 3px;\n  ", "\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["color: ", ";"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["color: ", ";"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["color: ", ";"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["color: ", ";"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  padding: 0 3px;\n\n  ", " {\n    padding: 0 3px;\n    position: relative;\n    top: -2px;\n    vertical-align: middle;\n    ", "\n    ", "\n  }\n  ", "\n  ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    background-color: ", ";\n    margin-left: 15px;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: inline-flex;\n  align-items: center;\n  font-size: 13px;\n  font-weight: 700;\n  margin: -8px;\n  white-space: nowrap;\n  padding: 8px;\n \n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledFormSummary = _styledComponents.default.div(_templateObject(), function (_ref) {
  var isInvalid = _ref.isInvalid,
      theme = _ref.theme;
  return isInvalid && (0, _styledComponents.css)(_templateObject2(), theme.form.invalid);
});

var StyledInternalSummary = _styledComponents.default.span(_templateObject3(), _icon.default, function (_ref2) {
  var type = _ref2.type,
      theme = _ref2.theme;
  return type === 'warning' && (0, _styledComponents.css)(_templateObject4(), theme.colors.warning);
}, function (_ref3) {
  var type = _ref3.type,
      theme = _ref3.theme;
  return type === 'error' && (0, _styledComponents.css)(_templateObject5(), theme.colors.error);
}, function (_ref4) {
  var type = _ref4.type,
      theme = _ref4.theme;
  return type === 'warning' && (0, _styledComponents.css)(_templateObject6(), theme.colors.warning);
}, function (_ref5) {
  var type = _ref5.type,
      theme = _ref5.theme;
  return type === 'error' && (0, _styledComponents.css)(_templateObject7(), theme.colors.error);
});

exports.StyledInternalSummary = StyledInternalSummary;

var StyledSummaryText = _styledComponents.default.span(_templateObject8(), function (_ref6) {
  var type = _ref6.type,
      theme = _ref6.theme;
  return type === 'warning' && (0, _styledComponents.css)(_templateObject9(), theme.colors.warning);
});

exports.StyledSummaryText = StyledSummaryText;
StyledFormSummary.defaultProps = {
  theme: _base.default
};
StyledFormSummary.propTypes = {
  theme: _propTypes.default.object,
  isInvalid: _propTypes.default.bool
};
StyledInternalSummary.defaultProps = {
  theme: _base.default
};
StyledInternalSummary.propTypes = {
  theme: _propTypes.default.object,
  type: _propTypes.default.oneOf(['error', 'warning'])
};
StyledSummaryText.defaultProps = {
  theme: _base.default
};
StyledSummaryText.propTypes = {
  theme: _propTypes.default.object,
  type: _propTypes.default.oneOf(['error', 'warning'])
};
var _default = StyledFormSummary;
exports.default = _default;
"use strict";

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.freeze");

require("core-js/modules/es.object.get-own-property-descriptor");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _base = _interopRequireDefault(require("../../../style/themes/base"));

var _optionsHelper = _interopRequireDefault(require("../../../utils/helpers/options-helper"));

var _inputSizes = _interopRequireDefault(require("../input/input-sizes.style"));

var _inputIconToggle = _interopRequireDefault(require("../input-icon-toggle/input-icon-toggle.style"));

var _help = _interopRequireDefault(require("../../../components/help/help.style"));

var _validationIcon = _interopRequireDefault(require("../../../components/validations/validation-icon.style"));

var _styleHelper = require("../../../utils/helpers/style-helper");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n      ::after {\n        content: '(optional)';\n        font-weight: 350;\n        margin-left: 4px;\n      }\n    "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n      margin-left: 12px;\n    "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n      margin-bottom: 12px;\n    "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    ", "\n\n    ", "\n\n    ", "\n  "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n      padding-left: 0;\n      padding-right: 8px;\n    "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    color: #003349;\n    padding-left: 6px;\n    padding-right: 6px;\n\n    ", "\n\n    &:hover ", " {\n      background-color: #1e499f;\n      border-color: #1e499f;\n    }\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    color: ", ";\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    box-sizing: border-box;\n    padding-bottom: 0;\n    padding-right: ", ";\n    text-align: ", ";\n    width: ", "%;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  display: block;\n  font-weight: 600;\n  padding-bottom: 8px;\n\n  ", ",\n  ", " {\n    vertical-align: middle;\n  }\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var LabelStyle = _styledComponents.default.label(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.text.color;
}, _help.default, _validationIcon.default, function (_ref2) {
  var align = _ref2.align,
      inline = _ref2.inline,
      inputSize = _ref2.inputSize,
      width = _ref2.width;
  return inline && (0, _styledComponents.css)(_templateObject2(), _inputSizes.default[inputSize].padding, align, width === 0 ? LabelStyle.defaultProps.width : width);
}, function (_ref3) {
  var disabled = _ref3.disabled,
      theme = _ref3.theme;
  return disabled && (0, _styledComponents.css)(_templateObject3(), theme.disabled.disabled);
}, function (_ref4) {
  var inline = _ref4.inline,
      theme = _ref4.theme;
  return (0, _styleHelper.isClassic)(theme) && (0, _styledComponents.css)(_templateObject4(), inline && (0, _styledComponents.css)(_templateObject5()), _inputIconToggle.default);
}, function (_ref5) {
  var childOfForm = _ref5.childOfForm,
      inline = _ref5.inline,
      align = _ref5.align,
      optional = _ref5.optional,
      theme = _ref5.theme;
  return childOfForm && !(0, _styleHelper.isClassic)(theme) && (0, _styledComponents.css)(_templateObject6(), !inline && (0, _styledComponents.css)(_templateObject7()), inline && align === 'right' && (0, _styledComponents.css)(_templateObject8()), optional && (0, _styledComponents.css)(_templateObject9()));
});

LabelStyle.defaultProps = {
  align: 'left',
  inputSize: 'medium',
  theme: _base.default,
  width: 30
};
LabelStyle.propTypes = {
  align: _propTypes.default.oneOf(_optionsHelper.default.alignBinary),
  inline: _propTypes.default.bool,
  inputSize: _propTypes.default.oneOf(_optionsHelper.default.sizesRestricted),
  width: _propTypes.default.number,
  readOnly: _propTypes.default.bool
};
var _default = LabelStyle;
exports.default = _default;
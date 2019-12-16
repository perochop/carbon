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

var _styleHelper = require("../../../utils/helpers/style-helper");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n      width: 20px;\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    background-color: #e6ebed;\n    border-left: 1px solid #bfccd2;\n    margin-left: 6px;\n    margin-right: -6px;\n    \n    &:hover {\n      color: #fff;\n    }\n\n    ", "\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    margin-right: -", ";\n    width: ", ";\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  align-items: center;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n\n  ", "\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var InputIconToggleStyle = _styledComponents.default.span(_templateObject(), function (_ref) {
  var size = _ref.size;
  return (0, _styledComponents.css)(_templateObject2(), _inputSizes.default[size].padding, getWidth(size));
}, function (_ref2) {
  var type = _ref2.type,
      theme = _ref2.theme;
  return (0, _styleHelper.isClassic)(theme) && (0, _styledComponents.css)(_templateObject3(), type === 'dropdown' && (0, _styledComponents.css)(_templateObject4()));
});

function getWidth(size) {
  switch (size) {
    case 'small':
      return '32px';

    case 'large':
      return '48px';

    default:
      return '40px';
  }
}

InputIconToggleStyle.safeProps = ['size', 'type'];
InputIconToggleStyle.defaultProps = {
  size: 'medium',
  theme: _base.default
};
InputIconToggleStyle.propTypes = {
  size: _propTypes.default.oneOf(_optionsHelper.default.sizesRestricted),
  type: _propTypes.default.string
};
var _default = InputIconToggleStyle;
exports.default = _default;
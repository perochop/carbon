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

var _optionsHelper = _interopRequireDefault(require("../../../utils/helpers/options-helper/options-helper"));

var _base = _interopRequireDefault(require("../../../style/themes/base"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    margin: ", ";\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var sizesRestricted = _optionsHelper.default.sizesRestricted;
var marginSizes = {
  small: '16px 0',
  medium: '24px 0',
  large: '32px 0'
};

var StyledCardRow = _styledComponents.default.div(_templateObject(), function (_ref) {
  var spacing = _ref.spacing;
  return (0, _styledComponents.css)(_templateObject2(), marginSizes[spacing]);
});

StyledCardRow.propTypes = {
  spacing: _propTypes.default.oneOf(sizesRestricted)
};
StyledCardRow.defaultProps = {
  spacing: 'medium',
  theme: _base.default
};
var _default = StyledCardRow;
exports.default = _default;
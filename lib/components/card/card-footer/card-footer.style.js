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

var _cardColumn = _interopRequireDefault(require("../card-column/card-column.style"));

var _icon = _interopRequireDefault(require("../../icon/icon.style"));

var _link = _interopRequireDefault(require("../../link/link.style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    background-color: ", ";\n    border-top: ", ";\n    border-top-width: 1px;\n    border-top-style: solid;\n    font-size: 14px;\n    font-weight: 600;\n    margin: ", ";\n    display: flex;\n\n    ", " {\n      margin: 0;\n      color: ", ";\n      padding: ", ";\n    }\n\n    ", ",\n    ", ",\n    ", ":before {\n      color: ", ";\n    }\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var sizesRestricted = _optionsHelper.default.sizesRestricted;
var marginSizes = {
  small: '0 -24px',
  medium: '0 -32px',
  large: '0 -48px'
};
var paddingSizes = {
  small: '16px 24px',
  medium: '18px 32px',
  large: '20px 48px'
};

var StyledCardFooter = _styledComponents.default.div(_templateObject(), function (_ref) {
  var spacing = _ref.spacing,
      theme = _ref.theme;
  return (0, _styledComponents.css)(_templateObject2(), theme.card.footerBackground, theme.card.footerBorder, marginSizes[spacing], _cardColumn.default, theme.card.footerText, paddingSizes[spacing], _link.default, _icon.default, _icon.default, theme.card.footerText);
});

StyledCardFooter.propTypes = {
  spacing: _propTypes.default.oneOf(sizesRestricted)
};
StyledCardFooter.defaultProps = {
  spacing: 'medium',
  theme: _base.default
};
var _default = StyledCardFooter;
exports.default = _default;
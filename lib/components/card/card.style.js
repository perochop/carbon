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

var _base = _interopRequireDefault(require("../../style/themes/base"));

var _optionsHelper = _interopRequireDefault(require("../../utils/helpers/options-helper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n      cursor: move;\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n      cursor: pointer;\n\n      :hover, :focus {\n        box-shadow: ", ";\n      }\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    background-color: ", ";\n    border: none;\n    box-shadow: ", ";\n    color: ", ";\n    margin: 25px;\n    padding: ", ";\n    transition: all 0.3s ease-in-out;\n    vertical-align: top;\n    width: ", ";\n    outline: none;\n\n    ", "\n\n    ", "\n\n    /* Fix for IE specific box-shadow display */\n    @media all and (-ms-high-contrast: none) {\n      box-shadow: ", ";\n    }\n\n    ::-moz-focus-inner {border:0;}\n  "]);

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

var paddingSizes = {
  small: '0 24px',
  medium: '0 32px',
  large: '0 48px'
};

var StyledCard = _styledComponents.default.button(_templateObject(), function (_ref) {
  var cardWidth = _ref.cardWidth,
      interactive = _ref.interactive,
      draggable = _ref.draggable,
      spacing = _ref.spacing,
      theme = _ref.theme;
  return (0, _styledComponents.css)(_templateObject2(), theme.colors.white, theme.shadows.cards, theme.text.color, paddingSizes[spacing], cardWidth, interactive && (0, _styledComponents.css)(_templateObject3(), theme.shadows.depth1), draggable && (0, _styledComponents.css)(_templateObject4()), theme.shadows.cardsIE);
});

StyledCard.defaultProps = {
  cardWidth: '500px',
  spacing: 'medium',
  theme: _base.default
};
StyledCard.propTypes = {
  border: _propTypes.default.bool,
  cardWidth: _propTypes.default.string,
  interactive: _propTypes.default.bool,
  draggable: _propTypes.default.bool,
  spacing: _propTypes.default.oneOf(_optionsHelper.default.sizesRestricted),
  theme: _propTypes.default.object
};
var _default = StyledCard;
exports.default = _default;
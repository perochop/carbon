"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _optionsHelper = _interopRequireDefault(require("../../../utils/helpers/options-helper"));

var _cardFooter = _interopRequireDefault(require("./card-footer.style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sizesRestricted = _optionsHelper.default.sizesRestricted;

var CardFooter = function CardFooter(_ref) {
  var spacing = _ref.spacing,
      children = _ref.children;
  return _react.default.createElement(_cardFooter.default, {
    key: "card-footer",
    "data-element": "card-footer",
    spacing: spacing
  }, children);
};

CardFooter.propTypes = {
  children: _propTypes.default.node.isRequired,

  /** size of card for applying padding (small | medium | large) */
  spacing: _propTypes.default.oneOf(sizesRestricted)
};
var _default = CardFooter;
exports.default = _default;
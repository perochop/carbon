"use strict";

require("core-js/modules/es.array.map");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _optionsHelper = _interopRequireDefault(require("../../utils/helpers/options-helper"));

var _card = _interopRequireDefault(require("./card.style"));

var _icon = _interopRequireDefault(require("../icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sizesRestricted = _optionsHelper.default.sizesRestricted;

var Card = function Card(_ref) {
  var action = _ref.action,
      children = _ref.children,
      cardWidth = _ref.cardWidth,
      interactive = _ref.interactive,
      draggable = _ref.draggable,
      spacing = _ref.spacing;

  var handleClick = function handleClick(ev) {
    if (!draggable && action) {
      action(ev);
    }
  };

  var renderChildren = function renderChildren() {
    return _react.default.Children.map(children, function (child) {
      return _react.default.cloneElement(child, {
        spacing: spacing
      });
    });
  };

  var onClickHandler = interactive ? handleClick : null;
  return _react.default.createElement(_card.default, {
    "data-component": "card",
    cardWidth: cardWidth,
    interactive: interactive,
    draggable: draggable,
    spacing: spacing,
    type: "button",
    onClick: onClickHandler
  }, draggable && _react.default.createElement(_icon.default, {
    type: "drag"
  }), renderChildren());
};

Card.defaultProps = {
  spacing: 'medium'
};
Card.propTypes = {
  /** action to be executed when card is clicked or enter pressed */
  action: _propTypes.default.func,
  children: _propTypes.default.node.isRequired,

  /** style value for width of card */
  cardWidth: _propTypes.default.string,

  /** flag to indicate if card is interactive */
  interactive: _propTypes.default.bool,

  /** flag to indicate if card is draggable */
  draggable: _propTypes.default.bool,

  /** size of card for applying padding (small | medium | large) */
  spacing: _propTypes.default.oneOf(sizesRestricted)
};
var _default = Card;
exports.default = _default;
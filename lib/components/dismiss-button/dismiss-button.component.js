"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _dismissButton = require("./dismiss-button.style");

var _optionsHelper = _interopRequireDefault(require("../../utils/helpers/options-helper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DismissButton = function DismissButton(_ref) {
  var variant = _ref.variant,
      onDismiss = _ref.onDismiss,
      transparent = _ref.transparent;
  return _react.default.createElement(_dismissButton.DismissButtonStyle, {
    variant: variant,
    transparent: transparent
  }, _react.default.createElement(_dismissButton.LinkStyle, {
    icon: "close",
    "data-element": "dismiss",
    onClick: onDismiss
  }));
};

DismissButton.defaultProps = {
  variant: 'info',
  transparent: false
};
DismissButton.propTypes = {
  variant: _propTypes.default.oneOf(_optionsHelper.default.colors),
  onDismiss: _propTypes.default.func,
  transparent: _propTypes.default.bool
};
var _default = DismissButton;
exports.default = _default;
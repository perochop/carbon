"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _typeIcon = _interopRequireDefault(require("./type-icon.style"));

var _icon = _interopRequireDefault(require("../../icon"));

var _optionsHelper = _interopRequireDefault(require("../../../utils/helpers/options-helper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TypeIcon = function TypeIcon(_ref) {
  var variant = _ref.variant,
      roundedCorners = _ref.roundedCorners,
      transparent = _ref.transparent;
  return _react.default.createElement(_typeIcon.default, {
    variant: variant,
    roundedCorners: roundedCorners,
    transparent: transparent
  }, _react.default.createElement(_icon.default, {
    type: variant,
    bgTheme: "none"
  }));
};

TypeIcon.defaultProps = {
  variant: 'info',
  transparent: false,
  roundedCorners: true
};
TypeIcon.propTypes = {
  variant: _propTypes.default.oneOf(_optionsHelper.default.colors),
  roundedCorners: _propTypes.default.bool,
  transparent: _propTypes.default.bool
};
var _default = TypeIcon;
exports.default = _default;
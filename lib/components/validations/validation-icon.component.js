"use strict";

require("core-js/modules/es.object.assign");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = require("styled-components");

var _icon = _interopRequireDefault(require("../icon"));

var _validationIcon = _interopRequireDefault(require("./validation-icon.style"));

var _input = require("../../__experimental__/components/input");

var _optionsHelper = _interopRequireDefault(require("../../utils/helpers/options-helper/options-helper"));

var _styleHelper = require("../../utils/helpers/style-helper");

var _base = _interopRequireDefault(require("../../style/themes/base"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var ValidationIcon = function ValidationIcon(_ref) {
  var theme = _ref.theme,
      type = _ref.type,
      size = _ref.size,
      iconId = _ref.iconId,
      isPartOfInput = _ref.isPartOfInput,
      tooltipMessage = _ref.tooltipMessage,
      tabIndex = _ref.tabIndex,
      isFocused = _ref.isFocused,
      onClick = _ref.onClick;
  var modernTooltipProps = {};

  if (!(0, _styleHelper.isClassic)(theme)) {
    // overrides default positioning for non legacy themes
    modernTooltipProps = {
      tooltipPosition: 'right',
      tooltipAlign: 'center',
      isThemeModern: true,
      isPartOfInput: isPartOfInput
    };
  }

  return _react.default.createElement(_input.InputPresentationContext.Consumer, null, function (context) {
    return _react.default.createElement(_validationIcon.default, {
      id: iconId,
      validationType: type,
      role: "tooltip",
      "aria-label": tooltipMessage,
      onClick: onClick
    }, _react.default.createElement(_icon.default, _extends({
      key: "".concat(type, "-icon"),
      tooltipType: type,
      tooltipMessage: tooltipMessage,
      tooltipVisible: isFocused || context && (context.hasFocus || context.hasMouseOver),
      type: type,
      size: size,
      tabIndex: tabIndex
    }, modernTooltipProps)));
  });
};

ValidationIcon.propTypes = {
  /** A string to represent the type of validation */
  type: _propTypes.default.oneOf(_optionsHelper.default.validationTypes),

  /** A small string to indicate the size of the icon */
  size: _propTypes.default.oneOf(_optionsHelper.default.sizesRestricted),

  /** The unique id of the component (used with aria-describedby for accessibility) */
  iconId: _propTypes.default.string,

  /** A message that the ValidationIcon component will display */
  tooltipMessage: _propTypes.default.string,

  /** Properties related to the theme */
  theme: _propTypes.default.object,

  /** A boolean to indicate if the icon is part of an input */
  onClick: _propTypes.default.func,

  /** An onClick handler */
  isPartOfInput: _propTypes.default.bool,

  /** Overrides the default tabindex of the component */
  tabIndex: _propTypes.default.number,

  /** A boolean received from IconWrapper */
  isFocused: _propTypes.default.bool
};
ValidationIcon.defaultProps = {
  theme: _base.default,
  tabIndex: -1
};

var _default = (0, _styledComponents.withTheme)(ValidationIcon);

exports.default = _default;
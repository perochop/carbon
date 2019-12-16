"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.keys");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _actionPopover = require("./action-popover.style");

var _optionsHelper = _interopRequireDefault(require("../../utils/helpers/options-helper"));

var _events = _interopRequireDefault(require("../../utils/helpers/events"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var MenuItem = _react.default.forwardRef(function (_ref, ref) {
  var children = _ref.children,
      icon = _ref.icon,
      disabled = _ref.disabled,
      onClickProp = _ref.onClick,
      rest = _objectWithoutProperties(_ref, ["children", "icon", "disabled", "onClick"]);

  var onClick = (0, _react.useCallback)(function (e) {
    if (!disabled) {
      onClickProp();
    } else {
      e.stopPropagation();
    }
  }, [disabled, onClickProp]);
  var onKeyDown = (0, _react.useCallback)(function (e) {
    if (_events.default.isEnterKey(e)) {
      onClick(e);
    } else if (_events.default.isSpaceKey(e)) {
      e.preventDefault();
      e.stopPropagation();
    }
  }, [onClick]);
  return _react.default.createElement("div", _extends({}, rest, {
    ref: ref,
    onClick: onClick,
    onKeyDown: onKeyDown
  }, disabled && {
    'aria-disabled': true
  }, {
    type: "button",
    tabIndex: "0",
    role: "menuitem"
  }), _react.default.createElement(_actionPopover.MenuItemIcon, {
    type: icon
  }), children);
});

var ActionPopoverItem = (0, _actionPopover.MenuItemFactory)(MenuItem);
ActionPopoverItem.displayName = 'ActionPopoverItem';
ActionPopoverItem.propTypes = {
  /** The name of the icon to display next to the label */
  icon: _propTypes.default.oneOf(_optionsHelper.default.icons).isRequired,

  /** The text label to display for this Item */
  children: _propTypes.default.string.isRequired,
  disabled: _propTypes.default.bool,
  onClick: _propTypes.default.func.isRequired
};
ActionPopoverItem.defaultProps = {
  disabled: false
};
var _default = ActionPopoverItem;
exports.default = _default;
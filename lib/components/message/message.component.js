"use strict";

require("core-js/modules/es.object.assign");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _message = _interopRequireDefault(require("./message.style"));

var _dismissButton = _interopRequireDefault(require("../dismiss-button"));

var _typeIcon = _interopRequireDefault(require("./type-icon/type-icon.component"));

var _messageContent = _interopRequireDefault(require("./message-content/message-content.component"));

var _optionsHelper = _interopRequireDefault(require("../../utils/helpers/options-helper"));

var _tags = _interopRequireDefault(require("../../utils/helpers/tags"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Message = function Message(props) {
  var open = props.open,
      border = props.border,
      className = props.className,
      transparent = props.transparent,
      title = props.title,
      variant = props.variant,
      roundedCorners = props.roundedCorners,
      children = props.children,
      onDismiss = props.onDismiss,
      as = props.as,
      id = props.id;
  return open && _react.default.createElement(_message.default, _extends({}, (0, _tags.default)('Message', props), {
    border: border,
    className: className,
    transparent: transparent,
    variant: variant || as,
    roundedCorners: roundedCorners,
    role: "status",
    id: id
  }), _react.default.createElement(_typeIcon.default, {
    variant: variant || as,
    roundedCorners: roundedCorners,
    transparent: transparent
  }), _react.default.createElement(_messageContent.default, {
    variant: variant || as,
    transparent: transparent,
    title: title
  }, children), onDismiss && _react.default.createElement(_dismissButton.default, {
    variant: variant || as,
    onDismiss: onDismiss,
    transparent: transparent
  }));
};

Message.defaultProps = {
  as: 'info',
  border: true,
  open: true,
  roundedCorners: true,
  transparent: false
};
Message.propTypes = {
  /** set type of message based on new DLS standard */
  variant: _propTypes.default.oneOf(_optionsHelper.default.colors),

  /** set type of message. This is legacy property */
  as: _propTypes.default.string,

  /** set border to component */
  border: _propTypes.default.bool,

  /** set content to component */
  children: _propTypes.default.node,

  /** set custom class to component */
  className: _propTypes.default.string,

  /** set custom id to component root */
  id: _propTypes.default.string,

  /** show message component */
  open: _propTypes.default.bool,

  /** function runs when user click dismiss button */
  onDismiss: _propTypes.default.func,

  /** set corners to be rounded or sharp */
  roundedCorners: _propTypes.default.bool,

  /** set message title */
  title: _propTypes.default.node,

  /** set background to be invisible */
  transparent: _propTypes.default.bool
};
var _default = Message;
exports.default = _default;
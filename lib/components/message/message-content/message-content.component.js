"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _content = _interopRequireDefault(require("../../content/content"));

var _messageContent = _interopRequireDefault(require("./message-content.style"));

var _optionsHelper = _interopRequireDefault(require("../../../utils/helpers/options-helper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MessageContent = function MessageContent(_ref) {
  var variant = _ref.variant,
      title = _ref.title,
      transparent = _ref.transparent,
      children = _ref.children;
  return _react.default.createElement(_messageContent.default, {
    variant: variant,
    transparent: transparent
  }, _react.default.createElement(_content.default, {
    title: title,
    className: "message-content"
  }, children));
};

MessageContent.defaultProps = {
  variant: 'info',
  transparent: false
};
MessageContent.propTypes = {
  variant: _propTypes.default.oneOf(_optionsHelper.default.colors),
  title: _propTypes.default.string,
  transparent: _propTypes.default.bool,
  children: _propTypes.default.node
};
var _default = MessageContent;
exports.default = _default;
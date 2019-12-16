"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _tabsHeader = _interopRequireDefault(require("./tabs-header.style"));

var _optionsHelper = _interopRequireDefault(require("../../../utils/helpers/options-helper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TabsHeader = function TabsHeader(_ref) {
  var align = _ref.align,
      children = _ref.children,
      position = _ref.position,
      role = _ref.role;
  return _react.default.createElement(_tabsHeader.default, {
    align: align,
    position: position,
    role: role
  }, children);
};

TabsHeader.defaultProps = {
  align: 'left',
  position: 'top'
};
TabsHeader.propTypes = {
  align: _propTypes.default.oneOf(_optionsHelper.default.alignBinary),
  children: _propTypes.default.node.isRequired,
  position: _propTypes.default.oneOf(['top', 'left']),
  role: _propTypes.default.string
};
var _default = TabsHeader;
exports.default = _default;
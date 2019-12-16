"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.object.keys");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Option = function Option(_ref) {
  var text = _ref.text,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["text", "children"]);

  return _react.default.createElement("div", props, children || text);
};

Option.propTypes = {
  /** The option's visible text, displayed within <Textbox> of <Select>, and used for filtering */
  text: _propTypes.default.string.isRequired,

  /** Optional: alternative rendered content, displayed within <SelectList> of <Select> (eg: an icon, an image, etc) */
  children: _propTypes.default.node,

  /** The option's invisible internal value */
  value: _propTypes.default.string.isRequired,

  /** if defined, this object can be used to provide optional extra properties */
  options: _propTypes.default.object
};
var _default = Option;
exports.default = _default;
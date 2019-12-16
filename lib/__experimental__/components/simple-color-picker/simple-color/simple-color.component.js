"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.function.name");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.keys");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _tags = _interopRequireDefault(require("../../../../utils/helpers/tags/tags"));

var _simpleColor = _interopRequireDefault(require("./simple-color.style"));

var _colorSampleBox = _interopRequireDefault(require("../color-sample-box"));

var _simpleColorInput = _interopRequireDefault(require("../simple-color-input/simple-color-input.style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var SimpleColor = _react.default.forwardRef(function (props, ref) {
  var onChange = props.onChange,
      onBlur = props.onBlur,
      onMouseDown = props.onMouseDown,
      value = props.value,
      name = props.name,
      checked = props.checked,
      className = props.className,
      rest = _objectWithoutProperties(props, ["onChange", "onBlur", "onMouseDown", "value", "name", "checked", "className"]);

  return _react.default.createElement(_simpleColor.default, _extends({
    color: value,
    checked: checked,
    className: className
  }, (0, _tags.default)('simple-color', props)), _react.default.createElement(_simpleColorInput.default, _extends({
    onChange: onChange,
    onBlur: onBlur,
    onMouseDown: onMouseDown,
    checked: checked,
    name: name,
    type: "radio",
    role: "radio",
    value: value,
    "aria-checked": checked,
    ref: ref
  }, rest)), _react.default.createElement(_colorSampleBox.default, {
    color: value,
    checked: checked
  }));
});

SimpleColor.defaultProps = {
  checked: false,
  onChange: null
};
SimpleColor.propTypes = {
  /** the value of the color that is represented by this SimpleColor */
  value: _propTypes.default.string,

  /** the input name */
  name: _propTypes.default.string,

  /** called when the user selects or deselects this color option */
  onChange: _propTypes.default.func,
  onBlur: _propTypes.default.func,
  onMouseDown: _propTypes.default.func,

  /** determines if this color option is selected or unselected */
  checked: _propTypes.default.bool,

  /** [Legacy] Custom classname */
  className: _propTypes.default.string
};
SimpleColor.displayName = 'SimpleColor';
var _default = SimpleColor;
exports.default = _default;
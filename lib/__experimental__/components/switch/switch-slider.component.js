"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-own-property-descriptors");

require("core-js/modules/es.object.keys");

require("core-js/modules/web.dom-collections.for-each");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = require("styled-components");

var _base = _interopRequireDefault(require("../../../style/themes/base"));

var _icon = _interopRequireDefault(require("../../../components/icon"));

var _loader = _interopRequireDefault(require("../../../components/loader/loader.component"));

var _switchSlider = _interopRequireDefault(require("./switch-slider.style"));

var _switchSliderPanel = _interopRequireDefault(require("./switch-slider-panel.style"));

var _styleHelper = require("../../../utils/helpers/style-helper");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SwitchSlider = function SwitchSlider(props) {
  var theme = props.theme,
      checked = props.checked,
      disabled = props.disabled,
      loading = props.loading,
      size = props.size;
  var on = (0, _styleHelper.isClassic)(theme) ? _react.default.createElement(_icon.default, {
    type: "tick",
    bgTheme: "none"
  }) : 'ON';
  var off = (0, _styleHelper.isClassic)(theme) ? _react.default.createElement(_icon.default, {
    type: "cross",
    bgTheme: "none"
  }) : 'OFF';
  var panelContent = checked ? on : off;
  var switchSliderStyleProps = {
    isLoading: loading,
    checked: checked,
    disabled: disabled,
    size: size
  };
  var sliderPanelStyleProps = {
    isLoading: loading,
    size: size,
    type: checked ? 'on' : 'off'
  };

  var loaderProps = _objectSpread({
    isInsideButton: true,
    isActive: props.checked
  }, props);

  var sliderContent = _react.default.createElement(_switchSliderPanel.default, sliderPanelStyleProps, loading ? _react.default.createElement(_loader.default, loaderProps) : panelContent);

  return _react.default.createElement(_switchSlider.default, switchSliderStyleProps, sliderContent);
};

SwitchSlider.propTypes = {
  checked: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  loading: _propTypes.default.bool,
  size: _propTypes.default.string,
  theme: _propTypes.default.object
};
SwitchSlider.defaultProps = {
  theme: _base.default
};

var _default = (0, _styledComponents.withTheme)(SwitchSlider);

exports.default = _default;
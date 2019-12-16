"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.keys");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _tags = _interopRequireDefault(require("../../../utils/helpers/tags"));

var _optionsHelper = _interopRequireDefault(require("../../../utils/helpers/options-helper"));

var _spinner = _interopRequireDefault(require("./spinner.style"));

var _warnAsDeprecated = _interopRequireDefault(require("../../../utils/helpers/warn-as-deprecated"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var deprecatedWarnTriggered = false;

var Spinner = function Spinner(props) {
  var as = props.as,
      spinnerProps = _objectWithoutProperties(props, ["as"]);

  if (!deprecatedWarnTriggered) {
    deprecatedWarnTriggered = true;
    (0, _warnAsDeprecated.default)('Spinner', '/components/loader');
  }

  return _react.default.createElement(_spinner.default, _extends({
    type: as
  }, spinnerProps, (0, _tags.default)('spinner', props)));
};

Spinner.defaultProps = {
  as: 'info',
  size: 'medium'
};
Spinner.propTypes = {
  /** Sets the theme for the component. */
  as: _propTypes.default.oneOf(_optionsHelper.default.colors),

  /** Custom className */
  className: _propTypes.default.string,

  /** Size of the spinner */
  size: _propTypes.default.oneOf(_optionsHelper.default.sizesFull)
};
var _default = Spinner;
exports.default = _default;
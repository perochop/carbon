"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.function.name");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.keys");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _hiddenCheckableInput = _interopRequireDefault(require("./hidden-checkable-input.style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var HiddenCheckableInput = function HiddenCheckableInput(_ref) {
  var helpId = _ref.helpId,
      labelId = _ref.labelId,
      name = _ref.name,
      inputType = _ref.inputType,
      inputValue = _ref.inputValue,
      role = _ref.role,
      tabindex = _ref.tabindex,
      props = _objectWithoutProperties(_ref, ["helpId", "labelId", "name", "inputType", "inputValue", "role", "tabindex"]);

  return _react.default.createElement(_hiddenCheckableInput.default, _extends({
    "aria-checked": props.checked,
    "aria-labelledby": labelId,
    "aria-describedby": helpId,
    name: name,
    role: role || inputType,
    tabIndex: tabindex,
    type: inputType,
    value: inputValue
  }, props));
};

HiddenCheckableInput.propTypes = {
  checked: _propTypes.default.bool,
  labelId: _propTypes.default.string,
  helpId: _propTypes.default.string,
  name: _propTypes.default.string,
  inputType: _propTypes.default.string.isRequired,
  inputValue: _propTypes.default.string,
  role: _propTypes.default.string,
  tabindex: _propTypes.default.number
};

var _default = _react.default.memo(HiddenCheckableInput);

exports.default = _default;
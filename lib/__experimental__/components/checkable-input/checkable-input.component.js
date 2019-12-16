"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-own-property-descriptors");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.for-each");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ether = require("../../../utils/ether");

var _checkableInput = require("./checkable-input.style");

var _formField = _interopRequireDefault(require("../form-field"));

var _hiddenCheckableInput = _interopRequireDefault(require("./hidden-checkable-input.component"));

var _guid = _interopRequireDefault(require("../../../utils/helpers/guid"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var CheckableInput =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CheckableInput, _React$Component);

  function CheckableInput(props) {
    var _this;

    _classCallCheck(this, CheckableInput);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CheckableInput).call(this, props));
    _this.inputId = props.inputId || (0, _guid.default)();
    return _this;
  }

  _createClass(CheckableInput, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          onChange = _this$props.onChange,
          rest = _objectWithoutProperties(_this$props, ["children", "onChange"]);

      var id = this.inputId;
      var labelId = "".concat(id, "-label");
      var helpId = "".concat(id, "-help");

      var formFieldProps = _objectSpread({}, (0, _ether.validProps)(this, ['fieldHelp', 'fieldHelpInline', 'labelHelp', 'reverse']), {
        labelId: labelId,
        helpId: helpId,
        label: rest.inputLabel,
        labelHelpIcon: 'info',
        name: id
      });

      var _validProps$labelId$h = _objectSpread({}, (0, _ether.validProps)(this, ['checked', 'disabled', 'inputType', 'onChange', 'tabindex']), {
        labelId: labelId,
        helpId: helpId,
        id: id
      }),
          fieldHelp = _validProps$labelId$h.fieldHelp,
          labelHelp = _validProps$labelId$h.labelHelp,
          inputProps = _objectWithoutProperties(_validProps$labelId$h, ["fieldHelp", "labelHelp"]);

      return _react.default.createElement(_checkableInput.StyledCheckableInputWrapper, rest, _react.default.createElement(_formField.default, formFieldProps, _react.default.createElement(_checkableInput.StyledCheckableInput, null, _react.default.createElement(_hiddenCheckableInput.default, inputProps), children)));
    }
  }]);

  return CheckableInput;
}(_react.default.Component);

CheckableInput.propTypes = {
  /** Set the value of the CheckableInput */
  checked: _propTypes.default.bool,

  /** Used to set the visible aspect of the input (i.e. the checkbox sprite, input slider etc) */
  children: _propTypes.default.node,

  /** Toggles disabling of input */
  disabled: _propTypes.default.bool,

  /** Toggles error styles */
  error: _propTypes.default.bool,

  /** The fieldHelp content to display for the input */
  fieldHelp: _propTypes.default.node,

  /** Displays fieldHelp inline with the CheckableInput */
  fieldHelpInline: _propTypes.default.bool,

  /** Unique Identifier for the input. Will use a randomly generated GUID if none is provided */
  inputId: _propTypes.default.string,

  /** The content for the Label to apply to the input */
  inputLabel: _propTypes.default.node,

  /** Sets percentage-based input width */
  inputWidth: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),

  /** Sets label alignment - accepted values: 'left' (default), 'right' */
  labelAlign: _propTypes.default.string,

  /** The content for the help tooltip, to appear next to the Label */
  labelHelp: _propTypes.default.node,

  /** Sets percentage-based label width */
  labelWidth: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),

  /** Accepts a callback function which can be used to update parent state on change */
  onChange: _propTypes.default.func,

  /** Reverses label and CheckableInput display */
  reverse: _propTypes.default.bool,

  /** Specifies input type, 'checkbox' or 'switch' */
  inputType: _propTypes.default.string.isRequired
};
CheckableInput.defaultProps = {
  reverse: false
};
var _default = CheckableInput;
exports.default = _default;
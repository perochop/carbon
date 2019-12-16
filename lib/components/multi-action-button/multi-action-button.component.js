"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.reflect.get");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _icon = _interopRequireDefault(require("../icon"));

var _splitButton = _interopRequireDefault(require("../split-button"));

var _multiActionButton = _interopRequireDefault(require("./multi-action-button.style"));

var _button = _interopRequireDefault(require("../button"));

var _optionsHelper = _interopRequireDefault(require("../../utils/helpers/options-helper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var MultiActionButton =
/*#__PURE__*/
function (_SplitButton) {
  _inherits(MultiActionButton, _SplitButton);

  function MultiActionButton() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, MultiActionButton);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MultiActionButton)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "componentTags", function () {
      return {
        'data-component': 'multi-action-button',
        'data-element': _this.props['data-element'],
        'data-role': _this.props['data-role']
      };
    });

    return _this;
  }

  _createClass(MultiActionButton, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_multiActionButton.default, {
        buttonType: this.props.buttonType || this.props.as,
        displayed: this.state.showAdditionalButtons,
        align: this.props.align
      }, _get(_getPrototypeOf(MultiActionButton.prototype), "render", this).call(this));
    }
  }, {
    key: "multiActionButtonProps",
    get: function get() {
      var _this$props = this.props,
          iconType = _this$props.iconType,
          iconPosition = _this$props.iconPosition,
          props = _objectWithoutProperties(_this$props, ["iconType", "iconPosition"]);

      props['aria-haspopup'] = 'true';
      props['aria-expanded'] = this.state.showAdditionalButtons;
      props['aria-label'] = 'Show more';
      props['data-element'] = 'toggle-button';
      props.key = 'toggle-button';
      props.onKeyDown = this.handleToggleButtonKeyDown;
      return props;
    }
    /**
     * Returns the HTML for the main button.
     */

  }, {
    key: "renderMainButton",
    get: function get() {
      return _react.default.createElement(_button.default, _extends({}, this.multiActionButtonProps, this.toggleButtonProps), this.props.text, _react.default.createElement(_icon.default, {
        type: "dropdown",
        bgTheme: "none",
        iconColor: this.getIconColor(this.props.buttonType || this.props.as),
        disabled: this.toggleButtonProps.disabled
      }));
    }
  }]);

  return MultiActionButton;
}(_splitButton.default);

MultiActionButton.propTypes = {
  /**
   * Customizes the appearance, can be set to 'primary', 'secondary' or 'transparent'.
   */
  as: _propTypes.default.string,

  /**
   * The text to be displayed in the SplitButton.
   */
  text: _propTypes.default.string.isRequired,

  /**
   * Gives the button a disabled state.
   */
  disabled: _propTypes.default.bool,

  /**
   * A custom value for the data-element attribute
   */
  'data-element': _propTypes.default.string,

  /**
   * A custom value for the data-element attribute
   */
  'data-role': _propTypes.default.string,

  /**
   * Aligns the button's options
   */
  align: _propTypes.default.oneOf(_optionsHelper.default.alignBinary)
};
var _default = MultiActionButton;
exports.default = _default;
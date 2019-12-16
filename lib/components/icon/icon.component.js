"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.from");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _tooltipDecorator = _interopRequireDefault(require("../../utils/decorators/tooltip-decorator"));

var _ether = require("../../utils/ether");

var _tags = _interopRequireDefault(require("../../utils/helpers/tags"));

var _icon = _interopRequireDefault(require("./icon.style"));

var _optionsHelper = _interopRequireDefault(require("../../utils/helpers/options-helper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Icon =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Icon, _React$Component);

  function Icon() {
    _classCallCheck(this, Icon);

    return _possibleConstructorReturn(this, _getPrototypeOf(Icon).apply(this, arguments));
  }

  _createClass(Icon, [{
    key: "render",

    /** Renders the component. */
    value: function render() {
      var _this = this;

      return [_react.default.createElement(_icon.default, _extends({
        bgSize: this.props.bgSize,
        bgShape: this.props.bgShape,
        bgTheme: this.props.bgTheme,
        fontSize: this.props.fontSize,
        iconColor: this.props.iconColor,
        disabled: this.props.disabled,
        type: this.type,
        key: "icon",
        className: this.props.className || null
      }, this.componentProps, (0, _tags.default)('icon', this.props), {
        ref: function ref(comp) {
          _this._target = comp;
        },
        "data-element": this.type
      })), this.tooltipHTML];
    }
  }, {
    key: "componentProps",

    /** Return component props */
    get: function get() {
      return (0, _ether.validProps)(this);
    }
    /** Return Icon type with overrides */

  }, {
    key: "type",
    get: function get() {
      // switch tweaks icon names for actual icons in the set
      switch (this.props.type) {
        case 'help':
          return 'question';

        case 'maintenance':
          return 'settings';

        case 'new':
          return 'gift';

        case 'success':
          return 'tick';

        case 'messages':
        case 'email':
          return 'message';

        default:
          return this.props.type;
      }
    }
  }]);

  return Icon;
}(_react.default.Component);

Icon.propTypes = {
  /** Add classes to this component */
  className: _propTypes.default.string,

  /** Icon type */
  type: _propTypes.default.string.isRequired,

  /** Background size */
  bgSize: _propTypes.default.oneOf(_optionsHelper.default.sizesRestricted),

  /** Background shape */
  bgShape: _propTypes.default.oneOf(_optionsHelper.default.shapes),

  /** Background color theme */
  bgTheme: _propTypes.default.oneOf([].concat(_toConsumableArray(_optionsHelper.default.colors), _toConsumableArray(_optionsHelper.default.iconBackgrounds), [''])),

  /** Icon font size */
  fontSize: _propTypes.default.oneOf(_optionsHelper.default.sizesBinary),

  /** Icon color */
  iconColor: _propTypes.default.oneOf(_optionsHelper.default.iconColors),

  /** Sets the icon in the disabled state */
  disabled: _propTypes.default.bool
};
Icon.defaultProps = {
  bgSize: 'small',
  fontSize: 'small',
  disabled: false
};

var _default = (0, _tooltipDecorator.default)(Icon);

exports.default = _default;
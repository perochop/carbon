"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputPresentation = exports.InputPresentationContext = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _inputPresentation = _interopRequireDefault(require("./input-presentation.style"));

var _extractProps = _interopRequireDefault(require("../../../utils/helpers/extract-props"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var InputPresentationContext = _react.default.createContext(); // This is a component in progress to incrementally remove the reliance
// on the input decorators. For now we still rely on fieldProps being
// fed into this component from the decorated parent component and a div
// wrapping the carbon-input-presentation that handles the fieldProps if you want
// to use the full supported feature set of a Carbon component. Over time we
// will add additional supported on the decorated features without the need
// for the decorators themselves.


exports.InputPresentationContext = InputPresentationContext;

var InputPresentation =
/*#__PURE__*/
function (_React$Component) {
  _inherits(InputPresentation, _React$Component);

  function InputPresentation() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, InputPresentation);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(InputPresentation)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      hasFocus: false,
      hasMouseOver: false
    });

    _defineProperty(_assertThisInitialized(_this), "input", {});

    _defineProperty(_assertThisInitialized(_this), "container", _react.default.createRef());

    _defineProperty(_assertThisInitialized(_this), "onFocus", function () {
      return _this.setState({
        hasFocus: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onBlur", function () {
      return _this.setState({
        hasFocus: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "assignInput", function (input) {
      _this.input = input;
    });

    _defineProperty(_assertThisInitialized(_this), "handleMouseDown", function () {
      // use a zero timeout to ensure focus is applied even on click and drag events
      setTimeout(function () {
        return _this.input.current.focus();
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleMouseEnter", function () {
      return _this.setState({
        hasMouseOver: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleMouseLeave", function () {
      return _this.setState({
        hasMouseOver: false
      });
    });

    return _this;
  }

  _createClass(InputPresentation, [{
    key: "contextForInput",
    value: function contextForInput() {
      return {
        hasFocus: this.state.hasFocus,
        hasMouseOver: this.state.hasMouseOver,
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        inputRef: this.assignInput
      };
    } // use mouse down rather than click to accomodate click and drag events too

  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          props = _objectWithoutProperties(_this$props, ["children"]);

      var styleProps = (0, _extractProps.default)(props, _inputPresentation.default);
      return (// eslint-disable-next-line jsx-a11y/mouse-events-have-key-events
        _react.default.createElement(_inputPresentation.default, _extends({
          hasFocus: this.state.hasFocus,
          role: "presentation",
          ref: this.container,
          onMouseDown: this.handleMouseDown,
          onMouseEnter: this.handleMouseEnter,
          onMouseLeave: this.handleMouseLeave
        }, styleProps), _react.default.createElement(InputPresentationContext.Provider, {
          value: this.contextForInput()
        }, children))
      );
    }
  }]);

  return InputPresentation;
}(_react.default.Component);

exports.InputPresentation = InputPresentation;

_defineProperty(InputPresentation, "propTypes", {
  children: _propTypes.default.node
});
"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactTransitionGroup = require("react-transition-group");

var _icon = _interopRequireDefault(require("../icon"));

var _tags = _interopRequireDefault(require("../../utils/helpers/tags"));

var _devices = _interopRequireDefault(require("../../utils/helpers/devices"));

var _ether = require("../../utils/ether");

require("./animated-menu-button.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * An AnimatedMenuButton widget.
 *
 * == How to use an AnimatedMenuButton in a component:
 *
 * In your file
 *
 *   import AnimatedMenuButton from 'carbon-react/lib/components/animated-menu-button';
 *
 * To render a AnimatedMenuButton, pass children to be rendered in the expanded menu:
 *
 *  <AnimatedMenuButton>
 *    <Row>
 *      <div>
 *        <h2 className="title">Foo</h2>
 *          <p><Link href='#'>Bar</Link></p>
 *       </div>
 *     </Row>
 *  </AnimatedMenuButton>
 *
 * @class AnimatedMenuButton
 * @constructor
 */
var AnimatedMenuButton =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AnimatedMenuButton, _React$Component);

  function AnimatedMenuButton() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, AnimatedMenuButton);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AnimatedMenuButton)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      open: false,
      touch: _devices.default.isTouchDevice()
    });

    _this.blockBlur = false;
    _this.closeHandler = _this.closeHandler.bind(_assertThisInitialized(_this));
    _this.closeIcon = _this.closeIcon.bind(_assertThisInitialized(_this));
    _this.componentProps = _this.componentProps.bind(_assertThisInitialized(_this));
    _this.handleBlur = _this.handleBlur.bind(_assertThisInitialized(_this));
    _this.innerHTML = _this.innerHTML.bind(_assertThisInitialized(_this));
    _this.labelHTML = _this.labelHTML.bind(_assertThisInitialized(_this));
    _this.mainClasses = _this.mainClasses.bind(_assertThisInitialized(_this));
    _this.openHandler = _this.openHandler.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(AnimatedMenuButton, [{
    key: "labelHTML",
    value: function labelHTML() {
      if (this.props.label) {
        return _react.default.createElement("span", {
          className: "carbon-animated-menu-button__label",
          "data-element": "label",
          key: "label"
        }, this.props.label);
      }

      return '';
    }
  }, {
    key: "innerHTML",
    value: function innerHTML() {
      var contents = []; // If device supports touch, add close icon.

      if (this.state.touch) {
        contents.push(this.closeIcon());
      }

      contents.push(this.labelHTML());
      contents.push(this.props.children);
      return _react.default.createElement("div", {
        className: "carbon-animated-menu-button__content"
      }, contents);
    }
  }, {
    key: "mainClasses",
    value: function mainClasses() {
      return (0, _classnames.default)(this.props.className, 'carbon-animated-menu-button', "carbon-animated-menu-button--".concat(this.props.direction), "carbon-animated-menu-button--".concat(this.props.size));
    }
  }, {
    key: "componentProps",
    value: function componentProps() {
      var _this2 = this;

      var _validProps = (0, _ether.validProps)(this),
          props = Object.assign({}, _validProps);

      delete props['data-element'];
      delete props['data-role'];
      props.className = this.mainClasses();
      props.onBlur = this.handleBlur;
      props.onFocus = this.openHandler;
      props.onMouseEnter = this.openHandler;
      props.onMouseLeave = this.closeHandler;
      props.onTouchEnd = this.state.touch ? this.openHandler : null;

      props.ref = function (comp) {
        _this2._button = comp;
      };

      return props;
    }
  }, {
    key: "closeIcon",
    value: function closeIcon() {
      var _this3 = this;

      return _react.default.createElement("button", {
        className: "carbon-animated-menu-button__close-button",
        "data-element": "close",
        key: "close",
        onClick: this.closeHandler,
        ref: function ref(comp) {
          _this3._closeIcon = comp;
        },
        type: "button"
      }, _react.default.createElement(_icon.default, {
        type: "close"
      }));
    }
  }, {
    key: "openHandler",
    value: function openHandler() {
      this.setState({
        open: true
      });
      this.blockBlur = true;
    }
  }, {
    key: "closeHandler",
    value: function closeHandler(event) {
      event.preventDefault();
      this.setState({
        open: false
      });
      this.blockBlur = false;
    }
  }, {
    key: "handleBlur",
    value: function handleBlur() {
      if (!this.blockBlur) {
        this.setState({
          open: false
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var content;

      if (this.state.open) {
        content = _react.default.createElement(_reactTransitionGroup.CSSTransition, {
          timeout: {
            enter: 500,
            exit: 500
          },
          classNames: "carbon-animated-menu-button"
        }, this.innerHTML());
      }

      return _react.default.createElement("div", _extends({}, this.componentProps(), (0, _tags.default)('animated-menu-button', this.props)), _react.default.createElement(_icon.default, {
        type: "add",
        "data-element": "open",
        iconColor: "on-dark-background"
      }), _react.default.createElement(_reactTransitionGroup.TransitionGroup, null, content));
    }
  }]);

  return AnimatedMenuButton;
}(_react.default.Component);

AnimatedMenuButton.propTypes = {
  /** Content rendered inside of the menu button component */
  children: _propTypes.default.node,

  /** Custom class name provided to the component */
  className: _propTypes.default.string,

  /** Direction of component animation. Available `left` or `right` */
  direction: _propTypes.default.string,

  /** Content of label */
  label: _propTypes.default.string,

  /** Width of the animation menu button container */
  size: _propTypes.default.string
};
AnimatedMenuButton.defaultProps = {
  direction: 'left',
  size: 'medium'
};
var _default = AnimatedMenuButton;
exports.default = _default;
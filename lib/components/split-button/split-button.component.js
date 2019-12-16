"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.find-index");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.map");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _icon = _interopRequireDefault(require("../icon"));

var _button = _interopRequireWildcard(require("../button"));

var _splitButton = _interopRequireDefault(require("./split-button.style"));

var _splitButtonToggle = _interopRequireDefault(require("./split-button-toggle.style"));

var _splitButtonChildren = _interopRequireDefault(require("./split-button-children.style"));

var _ether = require("../../utils/ether/ether");

var _optionsHelper = _interopRequireDefault(require("../../utils/helpers/options-helper"));

var _events = _interopRequireDefault(require("../../utils/helpers/events"));

var _guid = _interopRequireDefault(require("../../utils/helpers/guid"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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

var SplitButton =
/*#__PURE__*/
function (_Component) {
  _inherits(SplitButton, _Component);

  function SplitButton(props) {
    var _this;

    _classCallCheck(this, SplitButton);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SplitButton).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "state", {
      showAdditionalButtons: false
    });

    _defineProperty(_assertThisInitialized(_this), "splitButtonNode", _react.default.createRef());

    _defineProperty(_assertThisInitialized(_this), "focusToggleButton", function () {
      _this.isToggleButtonFocused = true;

      _this.showButtons();
    });

    _defineProperty(_assertThisInitialized(_this), "showButtons", function () {
      document.addEventListener(_this.userInputType, _this.handleClickOutside);

      _this.setState({
        showAdditionalButtons: true
      });

      if (!_this.listening) {
        document.addEventListener('keydown', _this.handleKeyDown);
        _this.listening = true;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "hideButtons", function () {
      if (_this.isToggleButtonFocused) return;

      _this.setState({
        showAdditionalButtons: false
      });

      document.removeEventListener(_this.userInputType, _this.handleClickOutside);

      if (_this.listening) {
        document.removeEventListener('keydown', _this.handleKeyDown);
        _this.listening = false;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleClickOutside", function (ev) {
      if (!_this.splitButtonNode.current.contains(ev.target)) {
        _this.hideButtons();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyDown", function (ev) {
      var children = _this.props.children;

      var currentIndex = _this.additionalButtons.findIndex(_this.isActiveElement);

      var nextIndex = -1;

      if (_events.default.isUpKey(ev)) {
        nextIndex = currentIndex > 0 ? currentIndex - 1 : children.length - 1;
        ev.preventDefault();
      }

      if (_events.default.isDownKey(ev)) {
        nextIndex = currentIndex < children.length - 1 ? currentIndex + 1 : 0;
        ev.preventDefault();
      } else if (_events.default.isTabKey(ev)) {
        // timeout enforces thet the "hideButtons" method will be run after browser focuses on the next element
        setTimeout(_this.hideButtons, 0);
      }

      if (nextIndex > -1) {
        _this.additionalButtons[nextIndex].focus();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "componentTags", function () {
      return {
        'data-component': 'split-button',
        'data-element': _this.props['data-element'],
        'data-role': _this.props['data-role']
      };
    });

    _defineProperty(_assertThisInitialized(_this), "handleToggleButtonKeyDown", function (ev) {
      if (_events.default.isEnterKey(ev) || _events.default.isSpaceKey(ev)) {
        _this.additionalButtons[0].focus();
      }
    });

    _this.buttonLabelId = (0, _guid.default)();
    _this.additionalButtons = [];
    _this.listening = false;
    _this.isToggleButtonFocused = false;
    _this.userInputType = 'ontouchstart' in document.documentElement ? 'touchstart' : 'click';
    return _this;
  }

  _createClass(SplitButton, [{
    key: "isActiveElement",
    value: function isActiveElement(node) {
      return node === document.activeElement;
    }
  }, {
    key: "addRef",
    value: function addRef(ref, index) {
      if (!ref) return;
      this.additionalButtons[index] = ref;
    }
  }, {
    key: "getIconColor",
    value: function getIconColor(buttonType) {
      var colorsMap = {
        primary: 'on-dark-background',
        secondary: 'business-color'
      };
      return colorsMap[buttonType];
    }
    /**
     * Returns the HTML for the main button.
     */

  }, {
    key: "childrenWithProps",
    value: function childrenWithProps() {
      var _this2 = this;

      var children = this.props.children;
      var childArray = Array.isArray(children) ? children : [children];
      return childArray.filter(Boolean).map(function (child, index) {
        var props = {
          key: index.toString(),
          role: 'menu-item',
          ref: function ref(button) {
            return _this2.addRef(button, index);
          },
          tabIndex: -1
        };

        if (child.type === _button.default) {
          return _react.default.createElement(_button.ButtonWithForwardRef, _extends({}, child.props, props));
        }

        return _react.default.cloneElement(child, props);
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener(this.userInputType, this.handleClickOutside);
      document.removeEventListener('keydown', this.handleKeyDown);
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement(_splitButton.default, _extends({
        "aria-haspopup": "true",
        onMouseLeave: this.hideButtons,
        ref: this.splitButtonNode
      }, this.componentTags()), this.renderMainButton, this.renderAdditionalButtons);
    }
  }, {
    key: "mainButtonProps",
    get: function get() {
      var _validProps = (0, _ether.validProps)(this),
          props = Object.assign({}, _validProps);

      props.onMouseEnter = this.hideButtons;
      props.onFocus = this.hideButtons;
      props.onTouchStart = this.hideButtons;
      props.iconPosition = this.props.iconPosition;
      return props;
    }
  }, {
    key: "toggleButtonProps",
    get: function get() {
      var _this3 = this;

      var opts = {
        disabled: this.props.disabled,
        displayed: this.state.showAdditionalButtons,
        onTouchStart: this.showButtons,
        onFocus: this.focusToggleButton,
        onBlur: function onBlur() {
          _this3.isToggleButtonFocused = false;
        },
        onKeyDown: this.handleToggleButtonKeyDown,
        buttonType: this.props.buttonType || this.props.as,
        size: this.props.size
      };

      if (!this.props.disabled) {
        opts.onMouseEnter = this.showButtons;
      }

      return opts;
    }
  }, {
    key: "renderMainButton",
    get: function get() {
      return [_react.default.createElement(_button.default, _extends({
        "data-element": "main-button",
        key: "main-button",
        id: this.buttonLabelId
      }, this.mainButtonProps), this.props.text), _react.default.createElement(_splitButtonToggle.default, _extends({
        "aria-haspopup": "true",
        "aria-expanded": this.state.showAdditionalButtons,
        "aria-label": "Show more",
        "data-element": "toggle-button",
        key: "toggle-button"
      }, this.toggleButtonProps), _react.default.createElement(_icon.default, {
        type: "dropdown",
        bgTheme: "none",
        iconColor: this.getIconColor(this.toggleButtonProps.buttonType),
        disabled: this.toggleButtonProps.disabled
      }))];
    }
  }, {
    key: "renderAdditionalButtons",
    get: function get() {
      var children = this.childrenWithProps();
      if (!this.state.showAdditionalButtons) return null;
      return _react.default.createElement(_splitButtonChildren.default, {
        role: "menu",
        "aria-labelledby": this.buttonLabelId,
        "data-element": "additional-buttons",
        align: this.props.align
      }, children);
    }
  }]);

  return SplitButton;
}(_react.Component);

SplitButton.propTypes = {
  /** Button type: "primary" | "secondary" */
  buttonType: _propTypes.default.oneOf(_optionsHelper.default.themesBinary),

  /** Button type: "primary" | "secondary" for legacy theme */
  as: _propTypes.default.oneOf(_optionsHelper.default.themesBinary),

  /** The additional button to display. */
  children: _propTypes.default.node.isRequired,

  /** A custom value for the data-element attribute */
  'data-element': _propTypes.default.string,

  /** A custom value for the data-role attribute */
  'data-role': _propTypes.default.string,

  /** Gives the button a disabled state. */
  disabled: _propTypes.default.bool,

  /** The size of the buttons in the SplitButton. */
  size: _propTypes.default.oneOf(_optionsHelper.default.sizesRestricted),

  /** The text to be displayed in the SplitButton. */
  text: _propTypes.default.string.isRequired,

  /** Defines an Icon position within the button: "before" | "after" */
  iconPosition: _propTypes.default.oneOf(_optionsHelper.default.buttonIconPositions),

  /** Set align of the rendered content */
  align: _propTypes.default.oneOf(_optionsHelper.default.alignBinary)
};
SplitButton.defaultProps = {
  as: 'secondary',
  disabled: false,
  size: 'medium',
  iconPosition: 'before',
  align: 'left'
};
SplitButton.safeProps = ['buttonType', 'as', 'disabled', 'size'];
var _default = SplitButton;
exports.default = _default;
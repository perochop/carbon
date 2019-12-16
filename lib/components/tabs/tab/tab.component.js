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

var _tab = _interopRequireDefault(require("./tab.style"));

var _tags = _interopRequireDefault(require("../../../utils/helpers/tags"));

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

var Tab =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Tab, _React$Component);

  function Tab() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Tab);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Tab)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "setValidity", function (valid) {
      _this.context.tabs.changeValidity(_this.props.tabId, valid);
    });

    _defineProperty(_assertThisInitialized(_this), "setWarning", function (warning) {
      _this.context.tabs.changeWarning(_this.props.tabId, warning);
    });

    return _this;
  }

  _createClass(Tab, [{
    key: "getChildContext",

    /**
     * Returns tab object to context children.
     */
    value: function getChildContext() {
      return {
        tab: {
          setValidity: this.setValidity,
          setWarning: this.setWarning
        }
      };
    }
    /**
     * Sets valid state to passed param
     * it notifies the parent context of the change
     * and sets the current valid state to the new value
     *
     */

  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children,
          isTabSelected = _this$props.isTabSelected,
          position = _this$props.position,
          ariaLabelledby = _this$props.ariaLabelledby,
          role = _this$props.role;
      return _react.default.createElement(_tab.default, _extends({
        className: className,
        role: role,
        isTabSelected: isTabSelected,
        "aria-labelledby": ariaLabelledby,
        position: position
      }, (0, _tags.default)('tab', this.props)), children);
    }
  }]);

  return Tab;
}(_react.default.Component);

_defineProperty(Tab, "contextTypes", {
  /**
   * Defines what contexts are available to this tab componenet
   * https://facebook.github.io/react/docs/context.html
   */
  tabs: _propTypes.default.object
});

_defineProperty(Tab, "childContextTypes", {
  /**
   * Defines a context object for context children of this tab component.
   * https://facebook.github.io/react/docs/context.html
   */
  tab: _propTypes.default.object
});

Tab.defaultProps = {
  position: 'top',
  role: 'tabpanel'
};
Tab.propTypes = {
  tabId: _propTypes.default.string.isRequired,
  className: _propTypes.default.string,
  children: _propTypes.default.node,
  isTabSelected: _propTypes.default.bool,
  position: _propTypes.default.oneOf(['top', 'left']),
  role: _propTypes.default.string,
  ariaLabelledby: _propTypes.default.string
};
var _default = Tab;
exports.default = _default;
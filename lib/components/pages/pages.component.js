"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.number.constructor");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Page", {
  enumerable: true,
  get: function get() {
    return _page.default;
  }
});
exports.Pages = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactTransitionGroup = require("react-transition-group");

var _lodash = require("lodash");

var _styledComponents = require("styled-components");

var _tags = _interopRequireDefault(require("../../utils/helpers/tags"));

var _page = _interopRequireDefault(require("./page/page.component"));

var _pages = require("./pages.style");

var _base = _interopRequireDefault(require("../../style/themes/base"));

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

var NEXT = 'next';
var PREVIOUS = 'previous';
var TRANSITION_TIME = 500;

var Pages =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Pages, _React$Component);

  function Pages() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Pages);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Pages)).call.apply(_getPrototypeOf2, [this].concat(args)));
    /** Direction of animation */

    _defineProperty(_assertThisInitialized(_this), "state", {
      // Currently selected page
      pageIndex: Number(_this.props.pageIndex) || Number(_this.props.initialpageIndex)
    });

    _defineProperty(_assertThisInitialized(_this), "numOfPages", function () {
      return Array.isArray(_this.props.children) ? (0, _lodash.compact)(_this.props.children).length : 1;
    });

    _defineProperty(_assertThisInitialized(_this), "visiblePage", function () {
      var index = _this.state.pageIndex;
      var visiblePage = (0, _lodash.compact)(_react.default.Children.toArray(_this.props.children))[index];
      index = visiblePage.props.id || index;
      var additionalProps = {
        transitionName: _this.transitionName,
        timeout: TRANSITION_TIME,
        'data-element': 'visible-page',
        key: "carbon-page-".concat(index),
        className: visiblePage.props.className
      };
      return _react.default.cloneElement(visiblePage, (0, _lodash.assign)({}, visiblePage.props, additionalProps));
    });

    _defineProperty(_assertThisInitialized(_this), "transitionName", function () {
      if (_this.props.transition === 'slide') {
        return "slide-".concat(_this.transitionDirection);
      }

      return "carousel-transition-".concat(_this.props.transition);
    });

    _this.transitionDirection = NEXT;
    return _this;
  }

  _createClass(Pages, [{
    key: "componentDidUpdate",

    /** A lifecycle method that is called before re-render. */
    value: function componentDidUpdate(prevProps) {
      if (this.props.pageIndex === prevProps.pageIndex) return;
      if (typeof this.props.pageIndex === 'undefined') return;
      var newIndex = this.verifyNewIndex(this.props.pageIndex);
      var currentIndex = this.state.pageIndex;
      if (newIndex === currentIndex) return;

      if (newIndex > currentIndex) {
        this.transitionDirection = NEXT;
      } else {
        this.transitionDirection = PREVIOUS;
      }

      this.handleStateUpdate(newIndex);
    }
  }, {
    key: "handleStateUpdate",
    value: function handleStateUpdate(newIndex) {
      this.setState({
        pageIndex: newIndex
      });
    }
    /** Verifies the new index and corrects it if necessary */

  }, {
    key: "verifyNewIndex",
    value: function verifyNewIndex(newIndex) {
      if (newIndex < 0) {
        // If the new index is negative, select the last page
        return this.numOfPages() - 1;
      }

      if (newIndex > this.numOfPages() - 1) {
        // If the new index is bigger than the number of slides, select the first page
        return 0;
      }

      return newIndex;
    }
    /** Gets the number of slides */

  }, {
    key: "render",

    /** Renders the Slide Component */
    value: function render() {
      return _react.default.createElement(_pages.PagesWrapperStyle, _extends({
        className: this.props.className
      }, (0, _tags.default)('carousel', this.props)), _react.default.createElement(_pages.PagesContent, {
        className: "carbon-carousel__content",
        theme: this.props.theme
      }, _react.default.createElement(_reactTransitionGroup.TransitionGroup, null, this.visiblePage())));
    }
  }]);

  return Pages;
}(_react.default.Component);

Pages.propTypes = {
  /** [legacy] Custom className */
  className: _propTypes.default.string,

  /** The selected tab on page load */
  initialpageIndex: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  pageIndex: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),

  /** Individual tabs */
  children: _propTypes.default.oneOfType([_propTypes.default.array, _propTypes.default.object]),

  /** Controls which transition to use. */
  transition: _propTypes.default.string,

  /** theme is used only to support legacy code */
  theme: _propTypes.default.object
};
Pages.defaultProps = {
  initialpageIndex: 0,
  transition: 'slide',
  theme: _base.default
};
var PagesWithHOC = (0, _styledComponents.withTheme)(Pages);
exports.Pages = PagesWithHOC;
var _default = Pages;
exports.default = _default;
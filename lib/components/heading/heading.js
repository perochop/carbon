"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

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

var _help = _interopRequireDefault(require("../help"));

var _link = _interopRequireDefault(require("../link"));

var _tags = _interopRequireDefault(require("../../utils/helpers/tags"));

require("./heading.scss");

var _heading2 = require("./heading.style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Heading =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Heading, _React$Component);

  function Heading() {
    _classCallCheck(this, Heading);

    return _possibleConstructorReturn(this, _getPrototypeOf(Heading).apply(this, arguments));
  }

  _createClass(Heading, [{
    key: "render",

    /**
     * @method render
     * @return {Object} JSX
     */
    value: function render() {
      if (!this.props.title) {
        return null;
      }

      return _react.default.createElement(_heading2.StyledHeading, _extends({
        className: this.classes,
        divider: this.props.divider,
        subheader: this.props.subheader
      }, (0, _tags.default)('heading', this.props)), _react.default.createElement("div", {
        className: "carbon-heading__header"
      }, this.back, _react.default.createElement("div", {
        className: "carbon-heading__headers"
      }, _react.default.createElement("div", {
        className: "carbon-heading__main-header"
      }, _react.default.createElement("h1", {
        className: "carbon-heading__title",
        "data-element": "title",
        id: this.props.titleId
      }, this.props.title), this.help), this.separator, this.subheader)), this.props.children);
    }
  }, {
    key: "help",
    get: function get() {
      if (!this.props.help && !this.props.helpLink) {
        return null;
      }

      return _react.default.createElement(_help.default, {
        className: "carbon-heading__help",
        "data-element": "help",
        tooltipAlign: "center",
        tooltipPosition: "right",
        href: this.props.helpLink
      }, this.props.help);
    }
    /**
     * Returns the back button.
     *
     * @method back
     * @return {Object} JSX
     */

  }, {
    key: "back",
    get: function get() {
      if (!this.props.backLink) {
        return null;
      }

      var props;

      if (typeof this.props.backLink === 'string') {
        props = {
          href: this.props.backLink
        };
      } else {
        props = {
          onClick: this.props.backLink
        };
      }

      return _react.default.createElement(_link.default // this event allows an element to be focusable on click event on IE
      , _extends({
        onMouseDown: function onMouseDown(e) {
          return e.currentTarget.focus();
        },
        className: "carbon-heading__back",
        "data-element": "back"
      }, props), _react.default.createElement(_heading2.StyledHeadingIcon, {
        type: "chevron_left"
      }));
    }
    /**
     * Returns the subheader.
     *
     * @method subheader
     * @return {Object} JSX
     */

  }, {
    key: "subheader",
    get: function get() {
      if (!this.props.subheader) {
        return null;
      }

      return _react.default.createElement("div", {
        className: "carbon-heading__subheader",
        "data-element": "subtitle",
        id: this.props.subtitleId
      }, this.props.subheader);
    }
    /**
     * Returns the classes for the component.
     *
     * @method classes
     * @return {String}
     */

  }, {
    key: "classes",
    get: function get() {
      return (0, _classnames.default)('carbon-heading', this.props.className, {
        'carbon-heading--has-subheader': this.props.subheader,
        'carbon-heading--has-back': this.props.backLink,
        'carbon-heading--has-divider': this.props.divider
      });
    }
    /**
     * Returns the separator if enabled and needed.
     *
     * @method separator
     * @return {Object} JSX
     */

  }, {
    key: "separator",
    get: function get() {
      return this.props.separator ? _react.default.createElement("hr", {
        className: "carbon-heading__separator"
      }) : null;
    }
  }]);

  return Heading;
}(_react.default.Component);

_defineProperty(Heading, "propTypes", {
  /**
   * Children elements
   */
  children: _propTypes.default.node,

  /**
   * Custom className
   */
  className: _propTypes.default.string,

  /**
   * Defines the title for the heading.
   */
  title: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),

  /**
   * Defines the title id for the heading.
   */
  titleId: _propTypes.default.string,

  /**
   * Defines the subheader for the heading.
   */
  subheader: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),

  /**
   * Defines the subtitle id for the heading.
   */
  subtitleId: _propTypes.default.string,

  /**
   * Defines the help text for the heading.
   */
  help: _propTypes.default.string,

  /**
   * Defines the help link for the heading.
   */
  helpLink: _propTypes.default.string,

  /**
   * Defines the a href for the back link.
   */
  backLink: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func]),

  /**
   * Adds a divider below the heading and the content.
   */
  divider: _propTypes.default.bool,

  /**
   * Adds a separator between the title and the subheader.
   */
  separator: _propTypes.default.bool
});

_defineProperty(Heading, "defaultProps", {
  divider: true,
  separator: false
  /**
   * Returns the help component.
   *
   * @method help
   * @return {Object} JSX
   */

});

var _default = Heading;
exports.default = _default;
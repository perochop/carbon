"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.iterator");

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

var _icon = _interopRequireDefault(require("../icon"));

var _modal = _interopRequireDefault(require("../modal"));

var _sidebar = require("./sidebar.style");

require("./sidebar.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Sidebar =
/*#__PURE__*/
function (_Modal) {
  _inherits(Sidebar, _Modal);

  function Sidebar() {
    _classCallCheck(this, Sidebar);

    return _possibleConstructorReturn(this, _getPrototypeOf(Sidebar).apply(this, arguments));
  }

  _createClass(Sidebar, [{
    key: "componentTags",
    value: function componentTags(props) {
      return {
        'data-component': 'sidebar',
        'data-element': props['data-element'],
        'data-role': props['data-role']
      };
    }
    /** Returns the computed HTML for the sidebar. */

  }, {
    key: "mainClasses",

    /** Returns classes for the component. */
    get: function get() {
      return (0, _classnames.default)('carbon-sidebar', this.props.className);
    }
    /** Returns the markup for the close icon. */

  }, {
    key: "closeButton",
    get: function get() {
      if (this.props.onCancel) {
        return _react.default.createElement(_sidebar.SidebarCloseStyle, null, _react.default.createElement(_icon.default, {
          className: "carbon-sidebar__close-icon",
          "data-element": "close",
          onClick: this.props.onCancel,
          type: "close"
        }));
      }

      return null;
    }
  }, {
    key: "modalHTML",
    get: function get() {
      return _react.default.createElement(_sidebar.SidebarStyle, {
        position: this.props.position,
        size: this.props.size,
        "data-element": "sidebar"
      }, this.closeButton, this.props.children);
    }
  }, {
    key: "transitionName",
    get: function get() {
      return "sidebar--".concat(this.props.position);
    }
  }]);

  return Sidebar;
}(_modal.default);

Sidebar.propTypes = {
  onCancel: _propTypes.default.func,

  /** A boolean to track the open state of the dialog */
  open: _propTypes.default.bool,

  /** Set this prop to false to hide the translucent background when the dialog is open. */
  enableBackgroundUI: _propTypes.default.bool,

  /** Sets the position of sidebar, either left or right. */
  position: _propTypes.default.string,

  /** Sets the size of the sidebar when open. */
  size: _propTypes.default.string
};
Sidebar.defaultProps = {
  position: 'right',
  size: 'medium',
  open: false,
  enableBackgroundUI: false
};
var _default = Sidebar;
exports.default = _default;
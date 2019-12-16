"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.function.name");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.OriginalProfile = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = require("styled-components");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ether = require("../../utils/ether/ether");

var _tags = _interopRequireDefault(require("../../utils/helpers/tags/tags"));

var _profile = require("./profile.style");

var _styleHelper = require("../../utils/helpers/style-helper");

var _base = _interopRequireDefault(require("../../style/themes/base"));

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

var Profile =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Profile, _React$Component);

  function Profile() {
    _classCallCheck(this, Profile);

    return _possibleConstructorReturn(this, _getPrototypeOf(Profile).apply(this, arguments));
  }

  _createClass(Profile, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_profile.ProfileStyle, _extends({
        large: this.props.large,
        className: this.classes
      }, (0, _tags.default)('profile', this.props)), this.avatar, this.text);
    }
  }, {
    key: "classes",

    /** Returns the classes for the component. */
    get: function get() {
      return (0, _classnames.default)(this.props.className);
    }
    /** Returns the initials for the name. */

  }, {
    key: "initials",
    get: function get() {
      if (this.props.initials) return this.props.initials;
      return (0, _ether.acronymize)(this.props.name);
    }
    /** Returns the avatar portion of the profile. */

  }, {
    key: "avatar",
    get: function get() {
      return _react.default.createElement(_profile.ProfileAvatarStyle, {
        initials: this.initials,
        gravatar: this.props.email,
        size: (0, _styleHelper.isClassic)(this.props.theme) ? 'medium-small' : this.props.size
      });
    }
    /** Returns the text portion of the profile. */

  }, {
    key: "text",
    get: function get() {
      return _react.default.createElement(_profile.ProfileDetailsStyle, {
        size: this.props.size
      }, _react.default.createElement(_profile.ProfileNameStyle, {
        size: this.props.size,
        "data-element": "name"
      }, this.props.name), _react.default.createElement(_profile.ProfileEmailStyle, {
        size: this.props.size,
        "data-element": "email"
      }, this.props.email));
    }
  }]);

  return Profile;
}(_react.default.Component);

exports.OriginalProfile = Profile;
Profile.propTypes = {
  /** [Legacy] A custom class name for the component */
  className: _propTypes.default.string,

  /** Define the name to display. */
  name: _propTypes.default.string.isRequired,

  /** Define the email to use (will check Gravatar for image). */
  email: _propTypes.default.string.isRequired,

  /** Define initials to display if there is no Gravatar image. */
  initials: _propTypes.default.string,

  /** [Legacy] Enable a larger theme for the name. */
  large: _propTypes.default.bool,

  /** Allow to setup size for the component */
  size: _propTypes.default.string,

  /** theme to detect which component should be rendered */
  theme: _propTypes.default.object
};
Profile.defaultProps = {
  large: false,
  theme: _base.default
};

var _default = (0, _styledComponents.withTheme)(Profile);

exports.default = _default;
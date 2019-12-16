"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.keys");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactTransitionGroup = require("react-transition-group");

var _tags = _interopRequireDefault(require("../../../utils/helpers/tags"));

var _fullScreenHeading = _interopRequireDefault(require("../../dialog-full-screen/full-screen-heading"));

var _appWrapper = _interopRequireDefault(require("../../app-wrapper"));

var _page = require("./page.style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Page = function Page(_ref) {
  var title = _ref.title,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["title", "children"]);

  return _react.default.createElement(_reactTransitionGroup.CSSTransition, _extends({
    className: "carbon-carousel__transition" // eslint-disable-next-line react/prop-types
    ,
    classNames: props.transitionName()
  }, props), _react.default.createElement(_page.StyledPage, (0, _tags.default)('page', props), _react.default.createElement(_fullScreenHeading.default, {
    hasContent: title
  }, title), _react.default.createElement(_page.StyledPageContent, {
    "data-element": "carbon-page-content"
  }, _react.default.createElement(_appWrapper.default, null, children))));
};

Page.propTypes = {
  /**
   * The title for the page, normally a Heading component.
   */
  title: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),

  /**
   * This component supports children.
   */
  children: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object, _propTypes.default.node])
};
var _default = Page;
exports.default = _default;
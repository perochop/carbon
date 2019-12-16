"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _icon = _interopRequireDefault(require("../icon"));

var _tags = _interopRequireDefault(require("../../utils/helpers/tags"));

var _help = _interopRequireDefault(require("./help.style"));

var _events = _interopRequireDefault(require("../../utils/helpers/events/events"));

var _optionsHelper = _interopRequireDefault(require("../../utils/helpers/options-helper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Help = function Help(props) {
  var helpElement = (0, _react.useRef)(null);

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isTooltipVisible = _useState2[0],
      updateTooltipVisible = _useState2[1];

  var className = props.className,
      href = props.href,
      helpId = props.helpId,
      children = props.children,
      tabIndex = props.tabIndex,
      as = props.as,
      tooltipPosition = props.tooltipPosition,
      tooltipAlign = props.tooltipAlign,
      isFocused = props.isFocused;
  (0, _react.useEffect)(function () {
    document.addEventListener('keydown', handleKeyPress);
    return function cleanup() {
      document.removeEventListener('keydown', handleKeyPress);
    };
  });
  var tagType = as || href && 'a';

  function handleKeyPress(ev) {
    if (_events.default.isEscKey(ev)) {
      helpElement.current.blur();
      updateTooltipVisible(false);
    }
  }

  function handleFocusBlur(bool) {
    return function (ev) {
      ev.stopPropagation();
      updateTooltipVisible(bool);
    };
  }

  return _react.default.createElement(_help.default, _extends({
    role: "tooltip",
    className: className,
    as: tagType,
    href: href,
    id: helpId,
    target: "_blank",
    rel: "noopener noreferrer",
    ref: helpElement,
    onClick: function onClick(e) {
      e.preventDefault();
      helpElement.current.focus();
    },
    onFocus: handleFocusBlur(true),
    onBlur: handleFocusBlur(false)
  }, (0, _tags.default)('help', props), {
    tabIndex: tabIndex,
    value: children,
    "aria-label": children
  }), _react.default.createElement(_icon.default, {
    type: "help",
    tooltipMessage: children,
    tooltipPosition: tooltipPosition,
    tooltipAlign: tooltipAlign,
    tooltipVisible: isFocused || isTooltipVisible
  }));
};

Help.propTypes = {
  /** [Legacy] A custom class name for the component. */
  className: _propTypes.default.string,

  /** Message to display in tooltip */
  children: _propTypes.default.string,

  /** The unique id of the component (used with aria-describedby for accessibility) */
  helpId: _propTypes.default.string,

  /** Overrides the default tabindex of the component */
  tabIndex: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),

  /** Overrides the default 'as' attribute of the Help component */
  as: _propTypes.default.string,

  /** Position of tooltip relative to target */
  tooltipPosition: _propTypes.default.oneOf(_optionsHelper.default.positions),

  /** Aligment of pointer */
  tooltipAlign: _propTypes.default.oneOf(_optionsHelper.default.alignAroundEdges),

  /** A path for the anchor */
  href: _propTypes.default.string,

  /** A boolean recived from IconWrapper */
  isFocused: _propTypes.default.bool
};
Help.defaultProps = {
  tooltipPosition: 'top',
  tooltipAlign: 'center',
  tabIndex: 0
};
var _default = Help;
exports.default = _default;
"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.function.name");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.for-each");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _tags = _interopRequireDefault(require("../../../utils/helpers/tags/tags"));

var _simpleColor = _interopRequireDefault(require("./simple-color"));

var _radioButtonMapper = _interopRequireDefault(require("../radio-button/radio-button-mapper.component"));

var _simpleColorPicker = require("./simple-color-picker.style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var SimpleColorPicker = function SimpleColorPicker(props) {
  var children = props.children,
      name = props.name,
      legend = props.legend,
      onChange = props.onChange,
      onBlur = props.onBlur,
      value = props.value,
      _props$isBlurBlocked = props.isBlurBlocked,
      isBlurBlocked = _props$isBlurBlocked === void 0 ? false : _props$isBlurBlocked;
  var myRef = (0, _react.useRef)(null);

  var _useState = (0, _react.useState)(isBlurBlocked),
      _useState2 = _slicedToArray(_useState, 2),
      blurBlocked = _useState2[0],
      setIsBlurBlocked = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      focusedElement = _useState4[0],
      setFocusedElement = _useState4[1];

  var handleClickOutside = function handleClickOutside(ev) {
    if (myRef.current && ev.target && !myRef.current.contains(ev.target)) {
      setIsBlurBlocked(false);
    }
  };

  (0, _react.useEffect)(function () {
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleClickOutside);
    return function () {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleClickOutside);
    };
  });

  var handleOnBlur = function handleOnBlur(ev) {
    ev.preventDefault();

    if (!blurBlocked) {
      onBlur(ev);
    }
  };

  var handleOnMouseDown = function handleOnMouseDown(ev) {
    setIsBlurBlocked(true); // If the mousedown event occurred on the currently-focused <SimpleColor>

    if (focusedElement !== null && focusedElement === ev.target) {
      ev.preventDefault(); // If a different <SimpleColor> is currently focused
    } else if (focusedElement !== null) {
      ev.preventDefault();
      setIsBlurBlocked(false);
      setFocusedElement(ev.target); // If no <SimpleColor> is currently focused
    } else {
      setIsBlurBlocked(true);
      setFocusedElement(ev.target);
    }
  };

  return _react.default.createElement(_simpleColorPicker.SimpleColorFieldset, _extends({
    role: "radiogroup",
    legend: legend,
    isBlurBlocked: blurBlocked
  }, (0, _tags.default)('simple-color-picker', props)), _react.default.createElement(_simpleColorPicker.StyledColorOptions, {
    ref: myRef
  }, _react.default.createElement(_radioButtonMapper.default, {
    name: name,
    value: value,
    onChange: onChange,
    onMouseDown: handleOnMouseDown,
    onBlur: handleOnBlur
  }, children)));
};

SimpleColorPicker.propTypes = {
  /** The SimpleColor components to be rendered in the group */
  children: function children(props, propName, componentName) {
    var error;
    var prop = props[propName];

    _react.default.Children.forEach(prop, function (child) {
      if (_simpleColor.default.displayName !== child.type.displayName) {
        error = new Error("`".concat(componentName, "` only accepts children of type `").concat(_simpleColor.default.displayName, "`."));
      }
    });

    return error;
  },

  /** Should the onBlur callback prop be initially blocked? */
  isBlurBlocked: _propTypes.default.bool,

  /** The content for the RadioGroup Legend */
  legend: _propTypes.default.string.isRequired,

  /** The currently selected color. */
  value: _propTypes.default.string,

  /** The name to apply to the input. */
  name: _propTypes.default.string,

  /** A callback triggered when a color is selected. */
  onChange: _propTypes.default.func,

  /** A callback triggered when a color is selected. */
  onBlur: _propTypes.default.func
};
var _default = SimpleColorPicker;
exports.default = _default;
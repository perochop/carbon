"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.join");

require("core-js/modules/es.function.name");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-own-property-descriptors");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/es.string.split");

require("core-js/modules/web.dom-collections.for-each");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _textbox = _interopRequireDefault(require("../textbox"));

var _groupedCharacter = require("./grouped-character.utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var buildCustomTarget = function buildCustomTarget(_ref, value) {
  var target = _ref.target;
  var name = target.name,
      id = target.id;
  return _objectSpread({}, name && {
    name: name
  }, {}, id && {
    id: id
  }, {
    value: value
  });
};

var GroupedCharacter = function GroupedCharacter(_ref2) {
  var defaultValue = _ref2.defaultValue,
      groups = _ref2.groups,
      onBlur = _ref2.onBlur,
      onChange = _ref2.onChange,
      rawSeparator = _ref2.separator,
      externalValue = _ref2.value,
      rest = _objectWithoutProperties(_ref2, ["defaultValue", "groups", "onBlur", "onChange", "separator", "value"]);

  var _useState = (0, _react.useState)(defaultValue || ''),
      _useState2 = _slicedToArray(_useState, 2),
      internalValue = _useState2[0],
      setInternalValue = _useState2[1];

  var isControlled = externalValue !== undefined;
  var separator = rawSeparator.substring(0, 1); // Ensure max length is 1

  var maxRawLength = groups.reduce(_groupedCharacter.toSum);

  var formatValue = function formatValue(val) {
    return (0, _groupedCharacter.generateGroups)(groups, val).join(separator);
  };

  var sanitizeValue = function sanitizeValue(val) {
    return val.split(separator).join('').substring(0, maxRawLength);
  };

  var value = isControlled ? externalValue : internalValue;

  var handleChange = function handleChange(ev) {
    var target = ev.target;
    var selectionEnd = target.selectionEnd;
    var newCursorPos = selectionEnd;
    var rawValue = sanitizeValue(target.value);
    var formattedValue = formatValue(rawValue);
    var isLastPosition = target.value.length === newCursorPos;
    var isAtOneBeyondSeparator = formattedValue[selectionEnd - 1] === separator;

    if (isLastPosition) {
      var targetValSeparatorCount = target.value.split(separator).length - 1;
      var formatValSeparatorCount = formattedValue.split(separator).length - 1;
      var separatorDiff = formatValSeparatorCount - targetValSeparatorCount;
      newCursorPos += separatorDiff;
    } else if (isAtOneBeyondSeparator) {
      var isDeleting = value.length > rawValue.length;
      newCursorPos += isDeleting ? -1 : 1;
    }

    ev.target = buildCustomTarget(ev, {
      rawValue: rawValue,
      formattedValue: formattedValue
    });
    onChange(ev);

    if (!isControlled) {
      setInternalValue(rawValue);
    }

    setTimeout(function () {
      return target.setSelectionRange(newCursorPos, newCursorPos);
    });
  };

  var handleBlur = function handleBlur(ev) {
    if (onBlur) {
      var target = ev.target;
      var rawValue = sanitizeValue(target.value);
      var formattedValue = formatValue(rawValue);
      ev.target = buildCustomTarget(ev, {
        rawValue: rawValue,
        formattedValue: formattedValue
      });
      onBlur(ev);
    }
  };

  var handleKeyPress = function handleKeyPress(ev) {
    var _ev$target = ev.target,
        selectionStart = _ev$target.selectionStart,
        selectionEnd = _ev$target.selectionEnd;
    var hasSelection = selectionEnd - selectionStart > 0;

    if (maxRawLength === value.length && !hasSelection) {
      ev.preventDefault();
    }
  };

  return _react.default.createElement(_textbox.default, _extends({}, rest, {
    value: value,
    formattedValue: formatValue(value),
    onChange: handleChange,
    onBlur: handleBlur,
    onKeyPress: handleKeyPress
  }));
};

GroupedCharacter.propTypes = {
  /** character to be used as separator */
  separator: function separator(props, propName, componentName) {
    if (typeof props[propName] !== 'string' || props[propName].length > 1) {
      return new Error("Invalid prop ".concat(propName, " supplied to ").concat(componentName, ". Must be string of length 1."));
    }

    return null;
  },

  /** pattern by which input value should be grouped */
  groups: _propTypes.default.array,

  /** Input value if component is meant to be used as a controlled component */
  value: _propTypes.default.string,

  /** Default input value if component is meant to be used as an uncontrolled component */
  defaultValue: _propTypes.default.string,

  /** on change handler which receives the event with object as a value containing rawValue and formattedValue */
  onChange: _propTypes.default.func,

  /** on blur handler which receives the event with object as a value containing rawValue and formattedValue */
  onBlur: _propTypes.default.func
};
var _default = GroupedCharacter;
exports.default = _default;
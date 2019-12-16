"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.map");

require("core-js/modules/es.function.name");

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var RadioButtonMapper = function RadioButtonMapper(_ref) {
  var children = _ref.children,
      name = _ref.name,
      onBlur = _ref.onBlur,
      onChange = _ref.onChange,
      onMouseDown = _ref.onMouseDown,
      value = _ref.value;
  var anyChecked = (0, _react.useMemo)(function () {
    var result = false;

    _react.default.Children.forEach(children, function (child) {
      if (Object.prototype.hasOwnProperty.call(child.props, 'defaultChecked')) {
        result = true;
      }
    });

    return result;
  }, [children]);
  var isControlled = value !== undefined;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      checkedValue = _useState2[0],
      setCheckedValue = _useState2[1];

  var onChangeProp = (0, _react.useCallback)(function (e) {
    onChange(e);

    if (!isControlled) {
      setCheckedValue(e.target.value);
    }
  }, [onChange, setCheckedValue, isControlled]);

  var buttons = _react.default.Children.map(children, function (child) {
    var checked;

    if (isControlled) {
      // The user is controlling the input via the value prop
      checked = value === child.props.value;
    } else if (!checkedValue && anyChecked) {
      // Uncontrolled and the user has not made a selection, but at least one has a checked prop
      checked = child.props.defaultChecked || false;
    } else {
      // Uncontrolled, existing selection or none marked as checked
      checked = checkedValue === child.props.value;
    }

    return _react.default.cloneElement(child, {
      defaultChecked: undefined,
      checked: checked,
      name: name,
      onBlur: onBlur,
      onMouseDown: onMouseDown,
      onChange: onChangeProp
    });
  });

  return buttons;
};

RadioButtonMapper.propTypes = {
  /** The RadioButton objects to be rendered in the group */
  children: _propTypes.default.node.isRequired,

  /** Specifies the name prop to be applied to each button in the group */
  name: _propTypes.default.string.isRequired,

  /** Callback fired when each RadioButton is blurred */
  onBlur: _propTypes.default.func,

  /** Callback fired when the user selects a RadioButton */
  onChange: _propTypes.default.func,

  /** Value of the selected RadioButton */
  value: _propTypes.default.string
};
var _default = RadioButtonMapper;
exports.default = _default;
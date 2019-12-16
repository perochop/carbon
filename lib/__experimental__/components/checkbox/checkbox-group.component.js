"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.map");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-own-property-descriptors");

require("core-js/modules/es.object.keys");

require("core-js/modules/web.dom-collections.for-each");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _tags = _interopRequireDefault(require("../../../utils/helpers/tags"));

var _checkbox = require("./checkbox.style");

var _validations = require("../../../components/validations");

var _formField = _interopRequireDefault(require("../form-field"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CheckboxGroup = function CheckboxGroup(props) {
  var children = props.children,
      groupName = props.groupName,
      hasError = props.hasError,
      hasWarning = props.hasWarning,
      hasInfo = props.hasInfo;
  var groupLabelId = "".concat(groupName, "-label");

  var buttons = _react.default.Children.map(children, function (child) {
    var handleChange = function handleChange(ev) {
      child.props.onChange(ev);
    };

    var childProps = {
      inputName: groupName,
      onChange: handleChange
    };

    if (!child.props.checked) {
      childProps = _objectSpread({}, childProps, {
        hasError: hasError,
        hasWarning: hasWarning,
        hasInfo: hasInfo
      });
    }

    return _react.default.cloneElement(child, childProps);
  });

  return _react.default.createElement(_checkbox.StyledCheckboxGroup, _extends({
    "aria-labelledby": groupLabelId,
    role: "checkbox",
    hasError: hasError,
    hasWarning: hasWarning,
    hasInfo: hasInfo
  }, (0, _tags.default)('checkboxgroup', props)), _react.default.createElement(_formField.default, props, buttons));
};

CheckboxGroup.propTypes = {
  /** The RadioButton objects to be rendered in the group */
  children: _propTypes.default.node.isRequired,

  /** Specifies the name prop to be applied to each button in the group */
  groupName: _propTypes.default.string.isRequired,

  /** Prop to indicate that an error has occurred */
  hasError: _propTypes.default.bool,

  /** Prop to indicate that a warning has occurred */
  hasWarning: _propTypes.default.bool,

  /** Prop to indicate additional information  */
  hasInfo: _propTypes.default.bool
};
CheckboxGroup.defaultProps = {
  hasError: false,
  hasWarning: false,
  hasInfo: false
};

var _default = (0, _validations.withValidation)(CheckboxGroup);

exports.default = _default;
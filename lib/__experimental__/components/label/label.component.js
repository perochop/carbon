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

var _help = _interopRequireDefault(require("../../../components/help"));

var _label = _interopRequireDefault(require("./label.style"));

var _validationIcon = _interopRequireDefault(require("../../../components/validations/validation-icon.component"));

var _withValidation = require("../../../components/validations/with-validation.hoc");

var _ether = require("../../../utils/ether");

var _iconWrapper = _interopRequireDefault(require("./icon-wrapper.style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var validationsPresent = function validationsPresent(_ref) {
  var hasError = _ref.hasError,
      hasWarning = _ref.hasWarning,
      hasInfo = _ref.hasInfo;
  return hasError || hasWarning || hasInfo;
};

var Label = function Label(props) {
  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isFocused = _useState2[0],
      setFocus = _useState2[1];

  var labelId = props.labelId,
      helpId = props.helpId,
      children = props.children,
      help = props.help,
      helpIcon = props.helpIcon,
      helpTag = props.helpTag,
      helpTabIndex = props.helpTabIndex,
      tooltipMessage = props.tooltipMessage,
      useValidationIcon = props.useValidationIcon,
      htmlFor = props.htmlFor,
      tabIndex = props.tabIndex;
  var labelProps = (0, _ether.filterByProps)(props, ['theme', 'disabled', 'inline', 'align', 'inputSize', 'width', 'childOfForm', 'optional']);

  var icon = function icon() {
    var wrapperProps = {
      tabIndex: tabIndex,
      onFocus: function onFocus() {
        return setFocus(true);
      },
      onBlur: function onBlur() {
        return setFocus(false);
      }
    };

    if (useValidationIcon && validationsPresent(props) && tooltipMessage) {
      return _react.default.createElement(_iconWrapper.default, wrapperProps, _react.default.createElement(_validationIcon.default, {
        iconId: helpId,
        type: (0, _withValidation.getValidationType)(props),
        tooltipMessage: tooltipMessage,
        tabIndex: helpTabIndex,
        isFocused: isFocused
      }));
    }

    return help && _react.default.createElement(_iconWrapper.default, wrapperProps, _react.default.createElement(_help.default, {
      helpId: helpId,
      as: helpTag,
      tabIndex: -1,
      type: helpIcon,
      isFocused: isFocused
    }, help));
  };

  return _react.default.createElement(_label.default, _extends({
    "data-element": "label"
  }, labelProps, {
    id: labelId,
    htmlFor: htmlFor
  }), children, icon());
};

Label.propTypes = {
  /** The unique id of the label element */
  labelId: _propTypes.default.string,

  /** The unique id of the Help component */
  helpId: _propTypes.default.string,

  /** Children elements */
  children: _propTypes.default.node,

  /** A message that the Help component will display */
  help: _propTypes.default.string,

  /** Icon type */
  helpIcon: _propTypes.default.string,

  /** Overrides the default 'as' attribute of the Help component */
  helpTag: _propTypes.default.string,

  /** Overrides the default tabindex of the Help component */
  helpTabIndex: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),

  /** A message that the ValidationIcon component will display */
  tooltipMessage: _propTypes.default.string,

  /** Whether to show the validation icon */
  useValidationIcon: _propTypes.default.bool,

  /** A string that represents the ID of another form element */
  htmlFor: _propTypes.default.string,

  /** Set focus possibilities to an <IconWrapperStyle /> element.
   *  More information: https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex
  */
  tabIndex: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
};
Label.defaultProps = {
  useValidationIcon: false,
  tabIndex: 0
};

var _default = _react.default.memo(Label);

exports.default = _default;
"use strict";

require("core-js/modules/es.object.get-own-property-descriptor");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.FlashWithoutHOC = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = require("styled-components");

var _toast = _interopRequireDefault(require("../toast"));

var _flashLegacy = _interopRequireDefault(require("./flash-legacy.component"));

var _base = _interopRequireDefault(require("../../style/themes/base"));

var _styleHelper = require("../../utils/helpers/style-helper");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var Flash = function Flash(props) {
  var timer = null;

  var stopTimeout = function stopTimeout() {
    clearTimeout(timer);
  };

  (0, _react.useEffect)(function () {
    stopTimeout();

    if (!props.timeout || !props.open) {
      return;
    }

    timer = setTimeout(function () {
      return props.onDismiss();
    }, props.timeout);
  }, timer);

  if ((0, _styleHelper.isClassic)(props.theme)) {
    return _react.default.createElement(_flashLegacy.default, props);
  }

  return _react.default.createElement(_toast.default, {
    isCenter: props.isCenter,
    open: props.open,
    variant: props.variant || props.as,
    onDismiss: props.timeout ? null : props.onDismiss,
    id: props.id,
    "data-component": "flash"
  }, props.message);
};

exports.FlashWithoutHOC = Flash;
Flash.propTypes = {
  /** A custom close event handler. If the `onDismiss` is false then dismiss button isn't visible */
  onDismiss: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.bool]).isRequired,

  /** Sets the open state of the flash. */
  open: _propTypes.default.bool.isRequired,

  /** Type of notification. Legacy standard (see the 'iconColorSets' for possible values) */
  as: _propTypes.default.string,

  /** An identifier passed to the component root element */
  id: _propTypes.default.string,

  /** Type of notification with new DLS standard */
  variant: _propTypes.default.string,

  /** Contents of message. */
  message: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object, _propTypes.default.array]).isRequired,

  /** Time for flash to remain on screen */
  timeout: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),

  /** supporting legacy components. Theme help us pick up a right component */
  theme: _propTypes.default.object,

  /** allow to center keep flash component centered */
  isCenter: _propTypes.default.bool
};
Flash.defaultProps = {
  as: 'success',
  timeout: 0,
  isCenter: true,
  theme: _base.default
};

var _default = (0, _styledComponents.withTheme)(Flash);

exports.default = _default;
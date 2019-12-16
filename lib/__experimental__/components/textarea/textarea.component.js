"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.OriginalTextarea = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _i18nJs = _interopRequireDefault(require("i18n-js"));

var _optionsHelper = _interopRequireDefault(require("../../../utils/helpers/options-helper"));

var _input = require("../input");

var _formField = _interopRequireDefault(require("../form-field"));

var _characterCount = _interopRequireDefault(require("./character-count"));

var _textareaInput = _interopRequireDefault(require("./textarea-input.component"));

var _withValidation = _interopRequireDefault(require("../../../components/validations/with-validation.hoc"));

var _validationIcon = _interopRequireDefault(require("../../../components/validations/validation-icon.component"));

var _guid = _interopRequireDefault(require("../../../utils/helpers/guid/guid"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var i18nNumberOpts = {
  precision: 0
};

var Textarea =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Textarea, _React$Component);

  function Textarea() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Textarea);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Textarea)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "minHeight", 0);

    _defineProperty(_assertThisInitialized(_this), "id", _this.props.id || (0, _guid.default)());

    _defineProperty(_assertThisInitialized(_this), "expandTextarea", function () {
      var textarea = _this._input;

      if (textarea.scrollHeight > _this.minHeight) {
        // Reset height to zero - IE specific
        textarea.style.height = '0px'; // Set the height so all content is shown

        textarea.style.height = "".concat(Math.max(textarea.scrollHeight, _this.minHeight), "px");
      }
    });

    _defineProperty(_assertThisInitialized(_this), "inputRefCallback", function (inputRef) {
      _this._input = inputRef.current;
    });

    return _this;
  }

  _createClass(Textarea, [{
    key: "componentDidMount",

    /**
     * A lifecycle method that is called after initial render.
     * Allows access to refs and DOM to set expandable variables
     */
    value: function componentDidMount() {
      if (this.props.expandable) {
        window.addEventListener('resize', this.expandTextarea); // Set the min height to the initially rendered height.
        // Without minHeight expandable textareas will only have
        // one line when no content is present.

        this.minHeight = this._input.clientHeight;
        this.expandTextarea();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.props.expandable) {
        window.removeEventListener('resize', this.expandTextarea);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var expandable = this.props.expandable;

      if (expandable) {
        this.expandTextarea();
      }
    }
  }, {
    key: "renderValidation",
    value: function renderValidation() {
      if (hasFailedValidation(this.props)) {
        return _react.default.createElement(_validationIcon.default, {
          type: this.props.inputIcon,
          tooltipMessage: this.props.tooltipMessage,
          isPartOfInput: true
        });
      }

      return null;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          label = _this$props.label,
          size = _this$props.size,
          children = _this$props.children,
          characterLimit = _this$props.characterLimit,
          enforceCharacterLimit = _this$props.enforceCharacterLimit,
          onChange = _this$props.onChange,
          disabled = _this$props.disabled,
          readOnly = _this$props.readOnly,
          placeholder = _this$props.placeholder,
          rows = _this$props.rows,
          cols = _this$props.cols,
          props = _objectWithoutProperties(_this$props, ["label", "size", "children", "characterLimit", "enforceCharacterLimit", "onChange", "disabled", "readOnly", "placeholder", "rows", "cols"]);

      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_formField.default, _extends({
        label: label,
        disabled: disabled,
        id: this.id
      }, props, {
        useValidationIcon: false
      }), _react.default.createElement(_input.InputPresentation, _extends({
        type: "text",
        size: size,
        disabled: disabled
      }, props), _react.default.createElement(_textareaInput.default, _extends({
        inputRef: this.inputRefCallback,
        maxLength: enforceCharacterLimit && characterLimit ? characterLimit : undefined,
        onChange: onChange,
        disabled: disabled,
        readOnly: readOnly,
        placeholder: disabled ? '' : placeholder,
        rows: rows,
        cols: cols,
        id: this.id
      }, props)), children, this.renderValidation())), this.characterCount);
    }
  }, {
    key: "overLimit",
    get: function get() {
      var value = this.props.value || '';
      return value.length > parseInt(this.props.characterLimit, 10);
    }
  }, {
    key: "characterCount",
    get: function get() {
      var value = this.props.value || '';
      var _this$props2 = this.props,
          characterLimit = _this$props2.characterLimit,
          warnOverLimit = _this$props2.warnOverLimit;

      if (!characterLimit) {
        return null;
      }

      return _react.default.createElement(_characterCount.default, {
        isOverLimit: this.overLimit && warnOverLimit,
        value: _i18nJs.default.toNumber(value.length, i18nNumberOpts),
        limit: _i18nJs.default.toNumber(characterLimit, i18nNumberOpts),
        "data-element": "character-limit"
      });
    }
  }]);

  return Textarea;
}(_react.default.Component);

exports.OriginalTextarea = Textarea;
Textarea.propTypes = {
  /** id of the input */
  id: _propTypes.default.string,

  /** Character limit of the textarea */
  characterLimit: _propTypes.default.string,

  /** Type of the icon that will be rendered next to the input */
  children: _propTypes.default.node,

  /** The visible width of the text control, in average character widths */
  cols: _propTypes.default.number,

  /** Adds disabled property */
  disabled: _propTypes.default.bool,

  /** Stop the user typing over the characterLimit */
  enforceCharacterLimit: _propTypes.default.bool,

  /** Allows the Textareas Height to change based on user input */
  expandable: _propTypes.default.bool,

  /** The content of the label for the input */
  label: _propTypes.default.string,

  /** Name of the input */
  name: _propTypes.default.string,

  /** Callback fired when the user types in the Textarea */
  onChange: _propTypes.default.func,

  /** Placeholder text for the component */
  placeholder: _propTypes.default.string,

  /** Adds readOnly property */
  readOnly: _propTypes.default.bool,

  /** The number of visible text lines for the control */
  rows: _propTypes.default.number,

  /** One of type of size to apply to the textarea */
  size: _propTypes.default.oneOf(_optionsHelper.default.sizesRestricted),

  /** The value of the Textarea */
  value: _propTypes.default.string,

  /** Whether to display the character count message in red */
  warnOverLimit: _propTypes.default.bool,

  /** Status of error validations */
  hasError: _propTypes.default.bool,

  /** Status of warnings */
  hasWarning: _propTypes.default.bool,

  /** Status of info */
  hasInfo: _propTypes.default.bool,

  /** Icon to display inside of the Textarea */
  inputIcon: _propTypes.default.string,

  /** Message to be displayed in a Tooltip when the user hovers over the help icon */
  tooltipMessage: _propTypes.default.string
};
Textarea.defaultProps = {
  disabled: false,
  expandable: false,
  enforceCharacterLimit: true,
  readOnly: false,
  warnOverLimit: false
};

function hasFailedValidation(_ref) {
  var hasError = _ref.hasError,
      hasWarning = _ref.hasWarning,
      hasInfo = _ref.hasInfo;
  return hasError || hasWarning || hasInfo;
}

var _default = (0, _withValidation.default)(Textarea);

exports.default = _default;
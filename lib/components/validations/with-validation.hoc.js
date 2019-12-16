"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.function.name");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-own-property-descriptors");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

require("core-js/modules/es.string.iterator");

require("core-js/modules/es.string.replace");

require("core-js/modules/web.dom-collections.for-each");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getValidationType = getValidationType;
exports.default = exports.validationsPropTypes = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _formWithValidations = require("./form-with-validations.hoc");

var _validator = _interopRequireDefault(require("../../utils/validations/validator"));

var _validationTypes = _interopRequireDefault(require("./validation-types.config"));

var _optionsHelper = _interopRequireDefault(require("../../utils/helpers/options-helper/options-helper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var validationTypes = _optionsHelper.default.validationTypes;

var validationShape = _propTypes.default.shape({
  message: _propTypes.default.func,
  validate: _propTypes.default.func
});

var validationsPropTypes = _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.func, validationShape]))]);

exports.validationsPropTypes = validationsPropTypes;

var withValidation = function withValidation(WrappedComponent) {
  var defaultProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var WithValidation =
  /*#__PURE__*/
  function (_React$PureComponent) {
    _inherits(WithValidation, _React$PureComponent);

    function WithValidation() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, WithValidation);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(WithValidation)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_this), "state", {
        errorMessage: '',
        warningMessage: '',
        infoMessage: '',
        value: ''
      });

      _defineProperty(_assertThisInitialized(_this), "validate", function () {
        var types = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : validationTypes;
        var isOnSubmit = arguments.length > 1 ? arguments[1] : undefined;
        if (!isOnSubmit && _this.blockValidation) return new Promise(function (resolve) {
          return resolve(true);
        });
        var validationPromises = [];
        var typesArr = Array.isArray(types) ? types : [types];
        typesArr.forEach(function (type) {
          var validationPromise = _this.runValidation(type);

          if (validationPromise) validationPromises.push(validationPromise);
        });
        return Promise.all(validationPromises).then(_this.processValidationResults.bind(_assertThisInitialized(_this)));
      });

      _defineProperty(_assertThisInitialized(_this), "handleBlur", function (ev) {
        _this.blockValidation = false;

        _this.validate();

        if (_this.props.onBlur) _this.props.onBlur(ev);
      });

      _defineProperty(_assertThisInitialized(_this), "handleChange", function (ev) {
        _this.blockValidation = !_this.props.unblockValidation;

        _this.resetValidation();

        _this.setState({
          value: ev.target.value
        }, function () {
          return _this.updateFormState();
        });

        if (_this.props.onChange) {
          _this.props.onChange(ev);
        }
      });

      return _this;
    }

    _createClass(WithValidation, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.updateFormState(this.props.value || this.state.value);

        if (this.checkValidations()) {
          this.context.addInput(this.props.name, this.validate);
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        if (this.checkContext('removeInput')) this.context.removeInput(this.props.name);
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        var isUpdateForced = prevProps.forceUpdateTriggerToggle !== this.props.forceUpdateTriggerToggle;

        if (this.isUpdatedValidationProps(prevProps) && this.checkValidations()) {
          this.context.addInput(this.props.name, this.validate);
          this.updateFormState(this.props.value || this.state.value);
        }

        if (isUpdateForced || prevProps.value !== this.props.value) {
          this.resetValidation();
          this.validate();
        }
      }
    }, {
      key: "isUpdatedValidationProps",
      value: function isUpdatedValidationProps(prevProps) {
        var updated = false;
        if (this.props.validations !== prevProps.validations) updated = true;
        return updated;
      }
    }, {
      key: "checkValidations",
      value: function checkValidations() {
        var _this2 = this;

        if (!this.checkContext('addInput')) return false;
        var hasValidations = false;
        validationTypes.forEach(function (validationType) {
          var type = _validationTypes.default[validationType];
          var validation = _this2.props[type];
          var isArray = Array.isArray(validation);
          var isPopulatedArray = isArray && validation.length;
          var isDefined = typeof validation !== 'undefined';

          if (isPopulatedArray || !isArray && isDefined) {
            hasValidations = true;
          }
        });
        return hasValidations;
      }
    }, {
      key: "checkContext",
      value: function checkContext(contextProp) {
        return this.context && this.context[contextProp];
      }
    }, {
      key: "processValidationResults",
      value: function processValidationResults(results) {
        var _this3 = this;

        if (results.length === 0) {
          return true;
        }

        var _results$reduce = results.reduce(function (acc, validation) {
          var pass = validation.pass,
              type = validation.type,
              errorMessage = validation.errorMessage;
          var hasValidationPassed = acc.pass && pass;

          var combinedState = _objectSpread({}, acc.state, {}, _this3.getValidationStatus(type, errorMessage));

          return {
            pass: hasValidationPassed,
            state: combinedState
          };
        }, {
          pass: true
        }),
            result = _results$reduce.pass,
            state = _results$reduce.state;

        this.adjustAllCounts(results);
        this.setState(state);
        return result;
      }
    }, {
      key: "getValidationStatus",
      value: function getValidationStatus(type, newMessage) {
        if (type === 'error') {
          return {
            errorMessage: newMessage
          };
        }

        if (type === 'warning') {
          return {
            warningMessage: newMessage
          };
        }

        return {
          infoMessage: newMessage
        };
      }
    }, {
      key: "adjustAllCounts",
      value: function adjustAllCounts(validationResults) {
        var _this4 = this;

        if (validationResults) {
          validationResults.forEach(function (_ref) {
            var type = _ref.type,
                errorMessage = _ref.errorMessage;

            _this4.adjustFormValidationCount(type, errorMessage);
          });
        } else {
          validationTypes.forEach(function (type) {
            _this4.adjustFormValidationCount(type);
          });
        }
      }
    }, {
      key: "adjustFormValidationCount",
      value: function adjustFormValidationCount(type, newMessage) {
        var hasExistingMessage = this.hasExistingMessage(type);
        if (!this.context || !this.context.adjustCount) return;

        if (newMessage && !hasExistingMessage) {
          this.context.adjustCount(type, true);
        } else if (!newMessage && hasExistingMessage) {
          this.context.adjustCount(type);
        }
      }
    }, {
      key: "hasExistingMessage",
      value: function hasExistingMessage(type) {
        if (type === 'error') {
          return !!this.state.errorMessage;
        }

        if (type === 'warning') {
          return !!this.state.warningMessage;
        }

        return !!this.state.infoMessage;
      }
    }, {
      key: "runValidation",
      value: function runValidation(type) {
        var _this5 = this;

        var validationTypePropName = _validationTypes.default[type];
        var validationProp = this.props[validationTypePropName];
        if (typeof validationProp === 'undefined') return null;
        var isValidationPropEmpty = Array.isArray(validationProp) && validationProp.length === 0;
        if (isValidationPropEmpty) return null;
        return new Promise(function (resolve) {
          var value = _this5.props.rawValue || _this5.props.value || _this5.state.value;
          (0, _validator.default)(validationProp)(value, _this5.props).then(function () {
            return resolve({
              pass: true,
              type: type
            });
          }).catch(function (error) {
            return resolve({
              pass: false,
              type: type,
              errorMessage: error.message
            });
          });
        });
      }
    }, {
      key: "getValidationIconProps",
      value: function getValidationIconProps() {
        var _this$state = this.state,
            errorMessage = _this$state.errorMessage,
            warningMessage = _this$state.warningMessage,
            infoMessage = _this$state.infoMessage;
        var validationIconProps;

        if (errorMessage) {
          validationIconProps = {
            inputIcon: 'error',
            tooltipMessage: errorMessage
          };
        } else if (warningMessage) {
          validationIconProps = {
            inputIcon: 'warning',
            tooltipMessage: warningMessage
          };
        } else if (infoMessage) {
          validationIconProps = {
            inputIcon: 'info',
            tooltipMessage: infoMessage
          };
        }

        return validationIconProps;
      }
    }, {
      key: "resetValidation",
      value: function resetValidation() {
        var _this6 = this;

        var cleanedValidationState = validationTypes.reduce(function (acc, validationType) {
          return _objectSpread({}, acc, {}, _this6.getValidationStatus(validationType));
        }, {});
        this.adjustAllCounts();
        this.setState(cleanedValidationState);
      }
    }, {
      key: "updateFormState",
      value: function updateFormState() {
        var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state.value;

        if (this.props.addInputToFormState) {
          this.props.addInputToFormState(this.props.name, value);
        }
      }
    }, {
      key: "getValidationStatuses",
      value: function getValidationStatuses() {
        return {
          hasError: !!this.state.errorMessage,
          hasWarning: !!this.state.warningMessage,
          hasInfo: !!this.state.infoMessage
        };
      }
    }, {
      key: "render",
      value: function render() {
        return _react.default.createElement(WrappedComponent, _extends({}, this.getValidationStatuses(), this.props, {
          onBlur: this.handleBlur,
          onChange: this.handleChange
        }, this.getValidationIconProps()), this.props.children);
      }
    }]);

    return WithValidation;
  }(_react.default.PureComponent);

  WithValidation.contextType = _formWithValidations.ValidationsContext;
  WithValidation.propTypes = {
    /** Children elements */
    children: _propTypes.default.node,

    /** Name to uniquely identify the component */
    name: _propTypes.default.string.isRequired,

    /** The current value of the component */
    value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.array]),

    /** The unformatted value  */
    rawValue: _propTypes.default.string,

    /** Custom function to be called when the component blurs */
    onBlur: _propTypes.default.func,

    /** Custom function called when component value changes */
    onChange: _propTypes.default.func,

    /** Method or array of methods, that when an error is throw the tooltipMessage prop contains a message */
    validations: validationsPropTypes,

    /** Method or array of methods, that when an error is throw the tooltipMessage prop contains a message */
    warnings: validationsPropTypes,

    /** Method or array of methods, that when an error is throw the tooltipMessage prop contains a message */
    info: validationsPropTypes,

    /** Triggers validation when it's boolean value changes */
    forceUpdateTriggerToggle: _propTypes.default.bool,

    /** Custom function to be called */
    addInputToFormState: _propTypes.default.func,

    /** Run or block validations */
    unblockValidation: _propTypes.default.bool,

    /** Show or hide validation icon in child element */
    useValidationIcon: _propTypes.default.bool
  };
  WithValidation.defaultProps = _objectSpread({
    validations: [],
    warnings: [],
    info: [],
    useValidationIcon: true
  }, defaultProps);
  var displayName = WrappedComponent.displayName || WrappedComponent.name || 'WithValidation(Unknown)';
  WithValidation.displayName = displayName.replace(/^Base/, '');
  return WithValidation;
};

function getValidationType(_ref2) {
  var hasError = _ref2.hasError,
      hasWarning = _ref2.hasWarning,
      hasInfo = _ref2.hasInfo;

  if (hasError) {
    return 'error';
  }

  if (hasWarning) {
    return 'warning';
  }

  if (hasInfo) {
    return 'info';
  }

  return '';
}

var _default = withValidation;
exports.default = _default;
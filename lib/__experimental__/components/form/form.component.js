"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.includes");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.map");

require("core-js/modules/es.function.name");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-own-property-descriptors");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

require("core-js/modules/es.string.iterator");

require("core-js/modules/es.string.match");

require("core-js/modules/web.dom-collections.for-each");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.FormWithoutValidations = void 0;

require("regenerator-runtime/runtime");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactIs = require("react-is");

var _i18nJs = _interopRequireDefault(require("i18n-js"));

var _service = _interopRequireDefault(require("../../../utils/service"));

var _formButton = _interopRequireDefault(require("../../../__deprecated__/components/form/form-button"));

var _formSummary = _interopRequireDefault(require("../../../__deprecated__/components/form/form-summary"));

var _ether = require("../../../utils/ether");

var _tags = _interopRequireDefault(require("../../../utils/helpers/tags"));

var _browser = _interopRequireDefault(require("../../../utils/helpers/browser"));

var _validations = require("../../../components/validations");

var _elementResize = _interopRequireDefault(require("../../../utils/helpers/element-resize"));

var _form = _interopRequireWildcard(require("../../../__deprecated__/components/form/form.style"));

var _optionsHelper = _interopRequireDefault(require("../../../utils/helpers/options-helper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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

var FormContext = _react.default.createContext();

var FormWithoutValidations =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FormWithoutValidations, _React$Component);

  function FormWithoutValidations() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, FormWithoutValidations);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(FormWithoutValidations)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      /** Tracks if the form is clean or dirty, used by unsavedWarning */
      isDirty: false,

      /** Tracks if the saveButton should be disabled */
      submitted: false
    });

    _defineProperty(_assertThisInitialized(_this), "stickyListener", false);

    _defineProperty(_assertThisInitialized(_this), "unsavedListener", false);

    _defineProperty(_assertThisInitialized(_this), "formFooterRef", (0, _react.createRef)());

    _defineProperty(_assertThisInitialized(_this), "getActiveInput", function () {
      return _this.activeInput;
    });

    _defineProperty(_assertThisInitialized(_this), "setActiveInput", function (input) {
      _this.activeInput = input;
    });

    _defineProperty(_assertThisInitialized(_this), "setIsDirty", function () {
      if (!_this.state.isDirty) {
        _this.setState({
          isDirty: true
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "resetIsDirty", function () {
      if (_this.state.isDirty) {
        _this.setState({
          isDirty: false
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "addStickyFooterListeners", function () {
      _this.stickyListener = true;

      _this.checkStickyFooter();

      _elementResize.default.addListener(_this._form, _this.checkStickyFooter);

      _this._window.addEventListener('resize', _this.checkStickyFooter);

      _this._window.addEventListener('scroll', _this.checkStickyFooter);
    });

    _defineProperty(_assertThisInitialized(_this), "removeStickyFooterListeners", function () {
      _this.stickyListener = false;

      _elementResize.default.removeListener(_this._form, _this.checkStickyFooter);

      _this._window.removeEventListener('resize', _this.checkStickyFooter);

      _this._window.removeEventListener('scroll', _this.checkStickyFooter);
    });

    _defineProperty(_assertThisInitialized(_this), "checkStickyFooter", function () {
      if (!_this._form) {
        return;
      }

      var formHeight = _this._form.offsetTop + _this._form.offsetHeight - _this._window.pageYOffset;
      var footerHeight = _this.formFooterRef.current.clientHeight;

      if (!_this.state.stickyFooter && formHeight - footerHeight / 2 > _this._window.innerHeight) {
        _this.setState({
          stickyFooter: true
        });
      } else if (_this.state.stickyFooter && formHeight < _this._window.innerHeight) {
        _this.setState({
          stickyFooter: false
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "addUnsavedWarningListener", function () {
      _this.unsavedListener = true;

      _this._window.addEventListener('beforeunload', _this.checkIsFormDirty);
    });

    _defineProperty(_assertThisInitialized(_this), "removeUnsavedWarningListener", function () {
      _this.unsavedListener = false;

      _this._window.removeEventListener('beforeunload', _this.checkIsFormDirty);
    });

    _defineProperty(_assertThisInitialized(_this), "checkIsFormDirty", function (ev) {
      if (_this.state.formInputs) {
        _this.setState({
          isDirty: _this.checkFormDataExists()
        });
      }

      if (_this.state.isDirty) {
        // Confirmation message is usually overridden by browsers with a similar message
        var confirmationMessage = _i18nJs.default.t('form.save_prompt', {
          defaultValue: 'Do you want to leave this page? Changes that you made may not be saved.'
        });

        ev.returnValue = confirmationMessage; // Gecko + IE

        return confirmationMessage; // Gecko + Webkit, Safari, Chrome etc.
      }
    });

    _defineProperty(_assertThisInitialized(_this), "_document", _browser.default.getDocument());

    _defineProperty(_assertThisInitialized(_this), "_window", _browser.default.getWindow());

    _defineProperty(_assertThisInitialized(_this), "redirectPath", _this._window.location.href);

    _defineProperty(_assertThisInitialized(_this), "csrfValues", _objectSpread({}, calculateCsrfValues(_this._document)));

    _defineProperty(_assertThisInitialized(_this), "_service", new _service.default());

    _defineProperty(_assertThisInitialized(_this), "handleOnSubmit",
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(ev) {
        var valid;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                ev.preventDefault();

                if (_this.props.autoDisable) {
                  _this.setState({
                    submitted: true
                  });
                }

                if (_this.props.beforeFormValidation) {
                  _this.props.beforeFormValidation(ev);
                }

                if (!_this.props.validate) {
                  _context.next = 9;
                  break;
                }

                _context.next = 6;
                return _this.props.validate();

              case 6:
                _context.t0 = _context.sent;
                _context.next = 10;
                break;

              case 9:
                _context.t0 = false;

              case 10:
                valid = _context.t0;

                if (_this.props.afterFormValidation) {
                  _this.props.afterFormValidation(ev, valid, _this.enableForm);
                }

                if (valid) {
                  _this.resetIsDirty();

                  _this.triggerSubmit(ev, valid);
                } else {
                  _this.setState({
                    submitted: false
                  });
                }

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "clearFormData", function (data) {
      // stop gap solution to prevent double submission for the time being
      _this._window.location.href = _this.redirectPath;
      return data;
    });

    _defineProperty(_assertThisInitialized(_this), "enableForm", function () {
      _this.setState({
        submitted: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "htmlProps", function () {
      var _validProps = (0, _ether.validProps)(_assertThisInitialized(_this)),
          onSubmit = _validProps.onSubmit,
          fixedBottom = _validProps.fixedBottom,
          innerRef = _validProps.innerRef,
          props = _objectWithoutProperties(_validProps, ["onSubmit", "fixedBottom", "innerRef"]);

      return props;
    });

    _defineProperty(_assertThisInitialized(_this), "cancelForm", function () {
      if (_this.props.onCancel) {
        _this.props.onCancel();
      } else if (_this.context.modal) {
        _this.context.modal.onCancel();
      } else {
        // history comes from react router
        if (!_this._window.history) {
          throw new Error('History is not defined. This is normally configured by the react router');
        }

        _this._window.history.back();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "cancelButton", function () {
      if (!_this.props.cancel) {
        return null;
      }

      var cancelProps = _objectSpread({
        cancelText: _this.props.cancelText,
        cancelClick: _this.cancelForm
      }, _this.props.cancelButtonProps);

      return _react.default.createElement(_formButton.default, _extends({
        key: "cancel",
        formButtonName: "cancel",
        "data-element": "cancel"
      }, cancelProps));
    });

    _defineProperty(_assertThisInitialized(_this), "additionalActions", function (type) {
      if (!_this.props[type]) {
        return null;
      }

      return _react.default.createElement(_form.StyledAdditionalFormAction, {
        type: type
      }, _this.props[type]);
    });

    _defineProperty(_assertThisInitialized(_this), "defaultSaveButton", function () {
      return _react.default.createElement(_formButton.default, {
        key: "save",
        formButtonName: "save",
        "data-element": "save",
        saveButtonProps: _this.props.saveButtonProps,
        saveText: _this.props.saveText,
        saving: _this.props.isValidating || _this.props.saving || _this.state.submitted
      });
    });

    _defineProperty(_assertThisInitialized(_this), "saveButton", function () {
      if (!_this.props.save) {
        return null;
      }

      return _this.props.customSaveButton || _this.defaultSaveButton();
    });

    _defineProperty(_assertThisInitialized(_this), "saveButtonWithSummary", function () {
      return _react.default.createElement(_formSummary.default, {
        key: "save",
        errors: _this.props.errorCount,
        warnings: _this.props.warningCount
      }, _this.saveButton());
    });

    _defineProperty(_assertThisInitialized(_this), "formFooter", function () {
      var padding = _this.props.stickyFooterPadding;

      if (padding && !padding.match(/px$/)) {
        padding += 'px';
      }

      return _react.default.createElement(_form.StyledFormFooter, {
        ref: _this.formFooterRef,
        buttonAlign: _this.props.buttonAlign
      }, _react.default.createElement(_form.StyledResponsiveFooterWrapper, {
        buttonAlign: _this.props.buttonAlign,
        showSummary: _this.props.showSummary,
        borderWidth: padding,
        hasAdditionalActions: Boolean(_this.props.leftAlignedActions || _this.props.rightAlignedActions || _this.props.additionalActions)
      }, _this.additionalActions('leftAlignedActions'), _this.additionalActions('rightAlignedActions'), _this.orderFormButtons(), _this.additionalActions('additionalActions')));
    });

    _defineProperty(_assertThisInitialized(_this), "addInputDataToState", function (name, value) {
      _this.setState(function (prevState) {
        return {
          formInputs: _objectSpread({}, prevState.formInputs, _defineProperty({}, name, value))
        };
      });
    });

    return _this;
  }

  _createClass(FormWithoutValidations, [{
    key: "componentDidMount",

    /* Runs once the component has mounted. */
    value: function componentDidMount() {
      if (this.props.stickyFooter) {
        this.addStickyFooterListeners();
      }

      if (this.props.validateOnMount && this.props.validate) {
        this.props.validate();
      }

      if (this.props.unsavedWarning) {
        this.addUnsavedWarningListener();
      }

      if (this.props.redirectPath) this.redirectPath = this.props.redirectPath;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (!this.stickyListener && this.props.stickyFooter && !prevProps.stickyFooter) {
        this.addStickyFooterListeners();
      }

      if (this.stickyListener && !this.props.stickyFooter && prevProps.stickyFooter) {
        this.removeStickyFooterListeners();
      }

      if (!this.unsavedListener && this.props.unsavedWarning && !prevProps.unsavedWarning) {
        this.addUnsavedWarningListener();
      }

      if (this.unsavedListener && !this.props.unsavedWarning && prevProps.unsavedWarning) {
        this.removeUnsavedWarningListener();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.props.stickyFooter) {
        this.removeStickyFooterListeners();
      }

      if (this.props.unsavedWarning) {
        this.removeUnsavedWarningListener();
      }
    }
    /* Gets the current active input. */

  }, {
    key: "checkFormDataExists",

    /** Returns true if any input has value */
    value: function checkFormDataExists() {
      var formInputs = this.state.formInputs;
      if (!formInputs) return false;
      return Object.keys(formInputs).some(function (id) {
        return Boolean(formInputs[id].length);
      });
    } // This must return undefined for IE and Safari if we don't want a warning

    /* eslint-disable consistent-return */

  }, {
    key: "triggerSubmit",
    value: function triggerSubmit(ev, valid) {
      if (this.props.onSubmit) {
        this.props.onSubmit(ev, valid, this.enableForm);
      } else if (this.state.formInputs) {
        this.addOtherInputsToState();
      } else {
        this._form.submit();
      }
    }
    /* Add all inputs to state so that all are submitted. */

  }, {
    key: "addOtherInputsToState",
    value: function addOtherInputsToState() {
      var _this2 = this;

      Object.keys(this._form.elements).forEach(function (id) {
        var _this2$_form$elements = _this2._form.elements[id],
            name = _this2$_form$elements.name,
            value = _this2$_form$elements.value,
            type = _this2$_form$elements.type;
        var isCsrfToken = type === 'hidden' && id === '0';
        var inputName = isCsrfToken ? 'csrf-token' : name;

        if (!_this2.state.formInputs[inputName] && !['button', 'submit'].includes(type)) {
          _this2.addInputDataToState(inputName, value);
        }
      });
      this.submitControlledForm();
    }
  }, {
    key: "submitControlledForm",
    value: function submitControlledForm() {
      var csrFValue = this.csrfValues.csrFValue;

      _service.default.configure({
        csrfToken: csrFValue
      });

      this._service.setURL(this.props.formAction);

      this._service.post(JSON.stringify(this.state.formInputs), {
        onSuccess: this.clearFormData
      });
    }
  }, {
    key: "orderFormButtons",

    /** Orders the Save and Cancel Buttons based on alignment prop  */
    value: function orderFormButtons() {
      var save = this.props.showSummary ? this.saveButtonWithSummary() : this.saveButton();
      return this.props.buttonAlign === 'right' ? [this.cancelButton(), save] : [save, this.cancelButton()];
    }
    /** Store children controlled data in state */

  }, {
    key: "getContext",

    /**  Returns form object to child components. */
    value: function getContext() {
      return {
        form: {
          getActiveInput: this.getActiveInput,
          setIsDirty: this.setIsDirty,
          resetIsDirty: this.resetIsDirty,
          setActiveInput: this.setActiveInput
        }
      };
    } // catches instances where child is a string of text

  }, {
    key: "isHTMLElement",
    value: function isHTMLElement(child) {
      return (0, _reactIs.isElement)(child) && typeof child.type === 'string';
    }
    /** Clone the children, pass in callback to allow form to store controlled data */

  }, {
    key: "renderChildren",
    value: function renderChildren() {
      var _this3 = this;

      var _this$props = this.props,
          children = _this$props.children,
          isLabelRightAligned = _this$props.isLabelRightAligned;
      if (!children) return null;
      var childrenArray = Array.isArray(children) ? children : [children];

      if (!this.childKeys || this.childKeys.length !== childrenArray.length) {
        this.childKeys = (0, _ether.generateKeysForChildren)(childrenArray);
      }

      return childrenArray.filter(Boolean).map(function (child, index) {
        if (!(0, _reactIs.isElement)(child) || _this3.isHTMLElement(child)) {
          return child;
        }

        return _react.default.cloneElement(child, _objectSpread({}, child.props, {
          key: _this3.childKeys[index],
          childOfForm: true,
          addInputToFormState: _this3.addInputDataToState,
          labelAlign: isLabelRightAligned ? 'right' : 'left'
        }));
      });
    }
    /** Renders the component. */

  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var stickyFooter = this.props.stickyFooter && this.state.stickyFooter;
      return _react.default.createElement(FormContext.Provider, {
        value: this.getContext()
      }, _react.default.createElement(_form.default, _extends({
        stickyFooter: stickyFooter,
        onSubmit: this.handleOnSubmit,
        fixedBottom: this.props.fixedBottom
      }, this.htmlProps(), {
        ref: function ref(form) {
          _this4._form = form;
        }
      }, (0, _tags.default)('form', this.props)), generateCSRFTokenInput(this.csrfValues), this.renderChildren(), this.formFooter()));
    }
  }]);

  return FormWithoutValidations;
}(_react.default.Component);
/** Creates hidden CSRF input field */
// eslint-disable-next-line react/prop-types


exports.FormWithoutValidations = FormWithoutValidations;

function generateCSRFTokenInput(_ref2) {
  var csrfAttr = _ref2.csrfAttr,
      csrfValue = _ref2.csrfValue;
  return _react.default.createElement("input", {
    type: "hidden",
    name: csrfAttr,
    value: csrfValue,
    readOnly: true
  });
}
/** Calculates a CSRF token for document */


function calculateCsrfValues(doc) {
  var csrfParam = doc.querySelector('meta[name="csrf-param"]');
  var csrfToken = doc.querySelector('meta[name="csrf-token"]');
  var csrfAttr = csrfParam ? csrfParam.getAttribute('content') : '';
  var csrfValue = csrfToken ? csrfToken.getAttribute('content') : '';
  return {
    csrfAttr: csrfAttr,
    csrfValue: csrfValue
  };
}

FormWithoutValidations.propTypes = {
  /** Warning popup shown when trying to navigate away from an edited form if true */
  unsavedWarning: _propTypes.default.bool,

  /** Cancel button is shown if true */
  cancel: _propTypes.default.bool,

  /** Custom function that is called immediately after the form validates */
  afterFormValidation: _propTypes.default.func,

  /** Custom function that is called immediately before the form validates */
  beforeFormValidation: _propTypes.default.func,

  /** Alignment of submit button */
  buttonAlign: _propTypes.default.oneOf(_optionsHelper.default.alignBinary),

  /** Determines if the form is in a saving state */
  saving: _propTypes.default.bool,

  /** Enables the sticky footer. */
  stickyFooter: _propTypes.default.bool,

  /** Applies additional padding to the sticky footer, useful to align buttons. */
  stickyFooterPadding: _propTypes.default.string,

  /** If true, will validate the form on mount */
  validateOnMount: _propTypes.default.bool,

  /** If true, will disable the savebutton when clicked */
  autoDisable: _propTypes.default.bool,

  /** Text for the cancel button */
  cancelText: _propTypes.default.string,

  /** Properties for the cancel button */
  cancelButtonProps: _propTypes.default.object,

  /** Text for the save button */
  saveText: _propTypes.default.string,

  /** Properties for the save button */
  saveButtonProps: _propTypes.default.object,

  /** Custom function for Cancel button onClick */
  onCancel: _propTypes.default.func,

  /** Hide or show the save button */
  save: _propTypes.default.bool,

  /** Additional actions rendered next to the save and cancel buttons */
  additionalActions: _propTypes.default.node,
  // eslint-disable-line react/no-unused-prop-types

  /** Additional actions rendered and aligned left to the save and cancel buttons */
  leftAlignedActions: _propTypes.default.node,
  // eslint-disable-line react/no-unused-prop-types

  /** Additional actions rendered and aligned right to the save and cancel buttons */
  rightAlignedActions: _propTypes.default.node,
  // eslint-disable-line react/no-unused-prop-types

  /** Custom callback for when form will submit */
  onSubmit: _propTypes.default.func,

  /** Override Save Button */
  customSaveButton: _propTypes.default.node,

  /** Child elements */
  children: _propTypes.default.node,

  /** Hide or show the summary */
  showSummary: _propTypes.default.bool,

  /** A function used to handle form validation */
  validate: _propTypes.default.func,

  /** Determines if the form is a validating state and should be disabled from submiting */
  isValidating: _propTypes.default.bool,

  /** The total number of errors present in the form */
  errorCount: _propTypes.default.number,

  /** The total number of warnings present in the form */
  warningCount: _propTypes.default.number,

  /** The total number of infos present in the form */
  infoCount: _propTypes.default.number,

  /** Strores the state of controlled inputs */
  formInputs: _propTypes.default.shape({
    value: _propTypes.default.string,
    name: _propTypes.default.string
  }),

  /** The action for the default form submission of controlled inputs */
  formAction: function formAction(props, propName) {
    var propConditions = !props.onSubmit && (props[propName] === undefined || typeof props[propName] !== 'string');

    if (propConditions) {
      throw new Error('A form action is required if no onSubmit prop is passed');
    }
  },

  /** Path to redirect after submit */
  redirectPath: _propTypes.default.string,

  /** Passed down when Form parent is dialog */
  fixedBottom: _propTypes.default.bool,

  /** Sets children's label alignment */
  isLabelRightAligned: _propTypes.default.bool
};
FormWithoutValidations.defaultProps = {
  buttonAlign: 'right',
  cancel: true,
  unsavedWarning: true,
  save: true,
  saving: false,
  validateOnMount: false,
  customSaveButton: null,
  showSummary: true
};
var Form = (0, _validations.withValidations)(FormWithoutValidations);
// export version without hoc if required
var _default = Form;
exports.default = _default;
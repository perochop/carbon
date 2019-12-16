"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.map");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-own-property-descriptors");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.reflect.get");

require("core-js/modules/es.string.iterator");

require("core-js/modules/es.string.match");

require("core-js/modules/web.dom-collections.for-each");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _browser = _interopRequireDefault(require("../../utils/helpers/browser"));

var _icon = _interopRequireDefault(require("../icon"));

var _modal = _interopRequireDefault(require("../modal"));

var _heading = _interopRequireDefault(require("../heading"));

var _form = _interopRequireDefault(require("../../__deprecated__/components/form"));

var _elementResize = _interopRequireDefault(require("../../utils/helpers/element-resize"));

var _dialog = require("./dialog.style");

var _tags = _interopRequireDefault(require("../../utils/helpers/tags"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Dialog =
/*#__PURE__*/
function (_Modal) {
  _inherits(Dialog, _Modal);

  function Dialog(args) {
    var _this;

    _classCallCheck(this, Dialog);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Dialog).call(this, args));

    _defineProperty(_assertThisInitialized(_this), "centerDialog", function (animating) {
      if (!_this._dialog) return;
      var height = _this._dialog.offsetHeight / 2,
          width = _this._dialog.offsetWidth / 2,
          win = _this.window;
      var midPointY = win.innerHeight / 2,
          midPointX = win.innerWidth / 2;
      midPointY -= height;
      midPointX -= width;

      if (midPointY < 20) {
        midPointY = 20;
      }

      if (midPointX < 20) {
        midPointX = 20;
      }

      if (_this._content) {
        // apply height to content based on height of title
        var titleHeight = _this._title ? _this._title.offsetHeight : '0';
        _this._content.style.height = "calc(100% - ".concat(titleHeight, "px)");
      }

      _this._dialog.style.top = "".concat(midPointY, "px");
      _this._dialog.style.left = "".concat(midPointX, "px");

      if (animating === true) {
        // cause timeout to accommodate dialog animating in
        setTimeout(function () {
          _this.applyFixedBottom();
        }, 500);
      } else {
        _this.applyFixedBottom();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "applyFixedBottom", function () {
      if (!_this.appliedFixedBottom && _this.shouldHaveFixedBottom()) {
        _this.appliedFixedBottom = true;

        _this.forceUpdate();
      } else if (_this.appliedFixedBottom && !_this.shouldHaveFixedBottom()) {
        _this.appliedFixedBottom = false;

        _this.forceUpdate();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "shouldHaveFixedBottom", function () {
      if (!_this._innerContent) return false;
      var contentHeight = _this._innerContent.offsetHeight + _this._innerContent.offsetTop,
          windowHeight = _this.window.innerHeight - _this._dialog.offsetTop - 1;
      return contentHeight > windowHeight;
    });

    _this.componentTags = _this.componentTags.bind(_assertThisInitialized(_this));
    _this.onDialogBlur = _this.onDialogBlur.bind(_assertThisInitialized(_this));
    _this.onCloseIconBlur = _this.onCloseIconBlur.bind(_assertThisInitialized(_this));
    _this.document = _browser.default.getDocument();
    _this.window = _browser.default.getWindow();
    return _this;
  }

  _createClass(Dialog, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      _get(_getPrototypeOf(Dialog.prototype), "componentDidMount", this).call(this);

      if (this.props.open) {
        this.centerDialog();

        if (this.props.autoFocus) {
          this.focusDialog();
        }
      }
    }
  }, {
    key: "onDialogBlur",
    value: function onDialogBlur(ev) {} // eslint-disable-line no-unused-vars

  }, {
    key: "onCloseIconBlur",
    value: function onCloseIconBlur(ev) {
      ev.preventDefault();
      this.focusDialog();
    }
  }, {
    key: "focusDialog",
    value: function focusDialog() {
      if (!this._dialog) return;

      this._dialog.focus();
    }
  }, {
    key: "componentTags",
    value: function componentTags(props) {
      return {
        'data-component': 'dialog',
        'data-element': props['data-element'],
        'data-role': props['data-role']
      };
    }
  }, {
    key: "additionalContent",
    value: function additionalContent() {
      return null;
    }
  }, {
    key: "renderChildren",
    value: function renderChildren() {
      var _this2 = this;

      return _react.default.Children.map(this.props.children, function (child) {
        if (child && child.type === _form.default) {
          return _react.default.cloneElement(child, {
            fixedBottom: _this2.appliedFixedBottom
          });
        }

        return child;
      });
    }
  }, {
    key: "onOpening",
    get: function get() {
      this.document.documentElement.style.overflow = 'hidden';
      this.centerDialog(true);

      _elementResize.default.addListener(this._innerContent, this.applyFixedBottom);

      this.window.addEventListener('resize', this.centerDialog);

      if (this.props.autoFocus) {
        return this.focusDialog();
      }

      return null;
    }
  }, {
    key: "onClosing",
    get: function get() {
      this.appliedFixedBottom = false;
      this.document.documentElement.style.overflow = '';
      this.window.removeEventListener('resize', this.centerDialog);
      return _elementResize.default.removeListener(this._innerContent, this.applyFixedBottom);
    }
  }, {
    key: "dialogTitle",
    get: function get() {
      var _this3 = this;

      if (!this.props.title) return null;
      var showCloseIcon = this.props.showCloseIcon;
      var title = this.props.title;

      if (typeof title === 'string') {
        title = _react.default.createElement(_heading.default, {
          title: title,
          titleId: "carbon-dialog-title",
          subheader: this.props.subtitle,
          subtitleId: "carbon-dialog-subtitle"
        });
      }

      return _react.default.createElement(_dialog.DialogTitleStyle, {
        showCloseIcon: showCloseIcon,
        ref: function ref(titleRef) {
          _this3._title = titleRef;
        }
      }, title);
    }
  }, {
    key: "mainClasses",
    get: function get() {
      return (0, _classnames.default)('carbon-dialog', this.props.className);
    }
  }, {
    key: "closeIcon",
    get: function get() {
      if (this.props.showCloseIcon) {
        return _react.default.createElement(_icon.default, {
          className: "carbon-dialog__close",
          "data-element": "close",
          onClick: this.props.onCancel,
          type: "close",
          tabIndex: "0",
          onBlur: this.onCloseIconBlur
        });
      }

      return null;
    }
  }, {
    key: "modalHTML",
    get: function get() {
      var _this4 = this;

      var height = this.props.height;

      if (height && !height.match(/px$/)) {
        height = "".concat(height, "px");
      }

      var dialogProps = {
        tabIndex: 0,
        style: {
          minHeight: height
        },
        size: this.props.size,
        fixedBottom: this.appliedFixedBottom,
        stickyFormFooter: this.props.stickyFormFooter,
        height: this.props.height,
        theme: this.props.theme
      };

      if (this.props.ariaRole) {
        dialogProps.role = this.props.ariaRole;
      }

      if (this.props.title) {
        dialogProps['aria-labelledby'] = 'carbon-dialog-title';
      }

      if (this.props.subtitle) {
        dialogProps['aria-describedby'] = 'carbon-dialog-subtitle';
      }

      return _react.default.createElement(_dialog.DialogStyle, _extends({
        ref: function ref(dialog) {
          _this4._dialog = dialog;
        }
      }, dialogProps, (0, _tags.default)('dialog', {
        'data-element': 'dialog',
        'data-role': this.props['data-role']
      }), {
        onBlur: this.onDialogBlur
      }), this.dialogTitle, _react.default.createElement(_dialog.DialogContentStyle, {
        ref: function ref(content) {
          _this4._content = content;
        },
        height: this.props.height,
        fixedBottom: this.appliedFixedBottom
      }, _react.default.createElement(_dialog.DialogInnerContentStyle, {
        ref: function ref(innerContent) {
          _this4._innerContent = innerContent;
        },
        height: this.props.height
      }, this.renderChildren(), this.additionalContent())), this.closeIcon);
    }
  }]);

  return Dialog;
}(_modal.default);

Dialog.propTypes = _objectSpread({}, _modal.default.propTypes, {
  /** Allows developers to specify a specific height for the dialog. */
  height: _propTypes.default.string,

  /** Title displayed at top of dialog */
  title: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),

  /** Subtitle displayed at top of dialog */
  subtitle: _propTypes.default.string,

  /** Size of dialog, default size is 750px */
  size: _propTypes.default.string,

  /** Determines if the close icon is shown */
  showCloseIcon: _propTypes.default.bool,

  /** If true then the dialog receives focus when it opens */
  autoFocus: _propTypes.default.bool,
  stickyFormFooter: _propTypes.default.bool
});
Dialog.defaultProps = {
  autoFocus: true,
  size: 'medium',
  showCloseIcon: true,
  ariaRole: 'dialog'
};
var _default = Dialog;
exports.default = _default;
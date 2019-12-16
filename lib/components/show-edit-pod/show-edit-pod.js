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
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _i18nJs = _interopRequireDefault(require("i18n-js"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _reactTransitionGroup = require("react-transition-group");

var _pod = _interopRequireDefault(require("../pod"));

var _form = _interopRequireDefault(require("../../__deprecated__/components/form"));

var _link = _interopRequireDefault(require("../link"));

var _events = _interopRequireDefault(require("../../utils/helpers/events"));

var _ether = require("../../utils/ether");

var _tags = _interopRequireDefault(require("../../utils/helpers/tags"));

require("./show-edit-pod.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ShowEditPod =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ShowEditPod, _React$Component);

  function ShowEditPod() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ShowEditPod);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ShowEditPod)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      editing: false // eslint-disable-line react/no-unused-state

      /**
       * Determine if the component is controlled internally or externally
       * If editing prop is undefined then component is controlled internally
       *
       * @method componentWillMount
       */

    });

    _defineProperty(_assertThisInitialized(_this), "onEdit", function (ev) {
      if (_this.props.onEdit) {
        _this.props.onEdit(ev);
      }

      if (_this.stateControlled) {
        _this.setState({
          editing: true
        }); // eslint-disable-line react/no-unused-state

      }

      _this.__focusOnPod();
    });

    _defineProperty(_assertThisInitialized(_this), "onSaveEditForm", function (ev, valid) {
      ev.preventDefault();

      if (valid) {
        _this.props.afterFormValidation(ev);

        if (_this.stateControlled) {
          _this.setState({
            editing: false
          }); // eslint-disable-line react/no-unused-state

        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onCancelEditForm", function (ev) {
      if (_this.props.onCancel) {
        _this.props.onCancel(ev);
      }

      if (_this.stateControlled) {
        _this.setState({
          editing: false
        }); // eslint-disable-line react/no-unused-state

      }
    });

    _defineProperty(_assertThisInitialized(_this), "onKeyDown", function (ev) {
      if (_events.default.isEscKey(ev)) {
        _this.onCancelEditForm(ev);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "control", 'props');

    _defineProperty(_assertThisInitialized(_this), "__focusOnPod", function () {
      _reactDom.default.findDOMNode(_this.pod).focus(); // eslint-disable-line react/no-find-dom-node

    });

    return _this;
  }

  _createClass(ShowEditPod, [{
    key: "UNSAFE_componentWillMount",
    value: function UNSAFE_componentWillMount() {
      if (typeof this.props.editing === 'undefined') {
        this.control = 'state';
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.editing) {
        this.__focusOnPod();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react.default.createElement(_pod.default, _extends({
        className: this.mainClasses
      }, this.podProps, {
        ref: function ref(node) {
          _this2.pod = node;
        },
        tabIndex: "-1"
      }, (0, _tags.default)('show-edit-pod', this.props)), _react.default.createElement(_reactTransitionGroup.TransitionGroup, null, this.content));
    }
  }, {
    key: "stateControlled",
    get: function get() {
      return this.control === 'state';
    }
  }, {
    key: "mainClasses",
    get: function get() {
      return (0, _classnames.default)('carbon-show-edit-pod', this.props.className);
    }
  }, {
    key: "deleteButton",
    get: function get() {
      return _react.default.createElement(_link.default, {
        className: "carbon-show-edit-pod__delete",
        onClick: this.props.onDelete
      }, this.props.deleteText || _i18nJs.default.t('actions.delete', {
        defaultValue: 'Delete'
      }));
    }
  }, {
    key: "editContent",
    get: function get() {
      return _react.default.createElement(_form.default, {
        additionalActions: this.props.onDelete ? this.deleteButton : null,
        afterFormValidation: this.onSaveEditForm,
        beforeFormValidation: this.props.beforeFormValidation,
        buttonAlign: this.props.buttonAlign,
        cancel: this.props.cancel,
        cancelText: this.props.cancelText,
        "data-element": "edit-form",
        onCancel: this.onCancelEditForm,
        saveText: this.props.saveText,
        saving: this.props.saving,
        validateOnMount: this.props.validateOnMount
      }, this.props.editFields);
    }
  }, {
    key: "content",
    get: function get() {
      if (this[this.control].editing) {
        return _react.default.createElement(_reactTransitionGroup.CSSTransition, {
          key: "1",
          classNames: this.props.transitionName,
          timeout: {
            enter: 300,
            exit: 50
          }
        }, _react.default.createElement("div", {
          key: "edit"
        }, this.editContent));
      }

      return _react.default.createElement(_reactTransitionGroup.CSSTransition, {
        key: "2",
        classNames: this.props.transitionName,
        timeout: {
          enter: 300,
          exit: 50
        }
      }, _react.default.createElement("div", {
        key: "show"
      }, this.props.children));
    }
  }, {
    key: "contentProps",
    get: function get() {
      var _validProps = (0, _ether.validProps)(this, Object.keys(_pod.default.propTypes)),
          props = Object.assign({}, _validProps);

      delete props.onEdit;
      delete props.className;

      if (this.props.onEdit !== false) {
        props.onEdit = this.onEdit;
      }

      return props;
    }
  }, {
    key: "editingProps",
    get: function get() {
      var _validProps2 = (0, _ether.validProps)(this, Object.keys(_pod.default.propTypes)),
          props = Object.assign({}, _validProps2);

      delete props.onEdit;
      delete props.className;
      props.as = 'secondary';
      props.onKeyDown = this.onKeyDown;
      return props;
    }
  }, {
    key: "podProps",
    get: function get() {
      return this[this.control].editing ? this.editingProps : this.contentProps;
    }
  }]);

  return ShowEditPod;
}(_react.default.Component);

ShowEditPod.propTypes = {
  /** A theme for the Pod. */
  as: _propTypes.default.string,

  /** Enable/disable the border on the Pod. */
  border: _propTypes.default.bool,

  /** This component supports children. */
  children: _propTypes.default.node,

  /** Classes to apply to the component. */
  className: _propTypes.default.string,

  /** Allows developers to control the editing state manually. */
  editing: _propTypes.default.bool,

  /** Callback when edit button is clicked. */
  onEdit: _propTypes.default.func,

  /** A callback triggered when the delete action is clicked. */
  onDelete: _propTypes.default.func,

  /** Define fields to be rendered in the edit state */
  editFields: _propTypes.default.node,

  /** Define a custom transition between show and edit states */
  transitionName: _propTypes.default.string,
  // Props passed to Form

  /** A callback triggered after the validation has been ran on the form */
  afterFormValidation: _propTypes.default.func,

  /** A callback triggered before the validation has been ran on the form */
  beforeFormValidation: _propTypes.default.func,

  /** Controls which direction the form buttons align */
  buttonAlign: _propTypes.default.string,

  /** Set to false to hide the cancel button */
  cancel: _propTypes.default.bool,

  /** Supply custom text for the cancel button */
  cancelText: _propTypes.default.string,

  /** A callback triggered when the form is cancelled */
  onCancel: _propTypes.default.func,

  /** Supply custom text for the save button */
  saveText: _propTypes.default.string,

  /** Supply custom text for the delete button */
  deleteText: _propTypes.default.string,

  /** Can inform if the form is in a saving state (disables the save button) */
  saving: _propTypes.default.bool,

  /** Determines if validation should be ran on mount of the component */
  validateOnMount: _propTypes.default.bool
};
ShowEditPod.defaultProps = {
  as: 'transparent',
  border: false,
  buttonAlign: 'right',
  transitionName: 'carbon-show-edit-pod__transition',
  cancel: true,
  saving: false,
  validateOnMount: false
};
var _default = ShowEditPod;
exports.default = _default;
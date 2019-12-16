"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.get-prototype-of");

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

var _styledComponents = require("styled-components");

var _tags = _interopRequireDefault(require("../../utils/helpers/tags/tags"));

var _dragAndDrop = require("../drag-and-drop/drag-and-drop");

var _button = _interopRequireDefault(require("../button"));

var _configurableItems = require("./configurable-items.style");

var _form = _interopRequireDefault(require("../../__deprecated__/components/form"));

var _base = _interopRequireDefault(require("../../style/themes/base"));

var _styleHelper = require("../../utils/helpers/style-helper");

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

var ConfigurableItems =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ConfigurableItems, _React$Component);

  function ConfigurableItems() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ConfigurableItems);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ConfigurableItems)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "onReset", function (event) {
      event.preventDefault();

      _this.props.onReset();
    });

    _defineProperty(_assertThisInitialized(_this), "additionalActions", function () {
      if (!_this.props.onReset) return null;

      if ((0, _styleHelper.isClassic)(_this.props.theme)) {
        return _react.default.createElement(_button.default, {
          "data-element": "configurable-items-reset-button",
          buttonType: "secondary",
          onClick: _this.onReset
        }, _i18nJs.default.t('actions.reset', {
          defaultValue: 'Reset'
        }));
      }

      return _react.default.createElement(_configurableItems.ConfigurableItemsButtonReset, {
        "data-element": "configurable-items-reset-button",
        as: _button.default,
        buttonType: "tertiary",
        onClick: _this.onReset
      }, _i18nJs.default.t('actions.reset', {
        defaultValue: 'Reset Columns'
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "rows", function () {
      return _react.default.createElement(_configurableItems.ConfigurableItemsWrapper, {
        "data-element": "configurable-items-wrapper"
      }, _this.props.children);
    });

    return _this;
  }

  _createClass(ConfigurableItems, [{
    key: "render",
    value: function render() {
      var saveText = (0, _styleHelper.isClassic)(this.props.theme) ? 'Save' : 'Done';
      return _react.default.createElement(_configurableItems.ConfigurableItemsStyle, _extends({
        className: this.classes
      }, (0, _tags.default)('configurable-items', this.props)), _react.default.createElement(_dragAndDrop.DraggableContext, {
        onDrag: this.props.onDrag
      }, _react.default.createElement(_form.default, {
        leftAlignedActions: this.additionalActions(),
        onSubmit: this.props.onSave,
        onCancel: this.props.onCancel,
        cancel: (0, _styleHelper.isClassic)(this.props.theme),
        saveText: saveText
      }, this.rows())));
    }
  }, {
    key: "classes",
    get: function get() {
      return (0, _classnames.default)(this.props.className);
    }
  }]);

  return ConfigurableItems;
}(_react.default.Component);

ConfigurableItems.propTypes = {
  /** Children elements. */
  children: _propTypes.default.node,

  /** A custom class name for the component. */
  className: _propTypes.default.string,

  /** Callback triggered when the form is canceled. */
  onCancel: _propTypes.default.func.isRequired,

  /** Callback triggered when an item is dragged. */
  onDrag: _propTypes.default.func.isRequired,

  /** Callback triggered when when the reset button is pressed. */
  onReset: _propTypes.default.func,

  /** Callback triggered when the form is saved. */
  onSave: _propTypes.default.func.isRequired,

  /** An internal prop. Helpful to detect which component should be rendered */
  theme: _propTypes.default.object
};
ConfigurableItems.defaultProps = {
  theme: _base.default
};

var _default = (0, _styledComponents.withTheme)(ConfigurableItems);

exports.default = _default;
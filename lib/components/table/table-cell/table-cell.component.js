"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.function.name");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.for-each");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _tableCell = _interopRequireDefault(require("./table-cell.style"));

var _date = _interopRequireDefault(require("../../../__experimental__/components/date"));

var _textarea = _interopRequireDefault(require("../../../__experimental__/components/textarea"));

var _ether = require("../../../utils/ether");

var _tags = _interopRequireDefault(require("../../../utils/helpers/tags"));

var _optionsHelper = _interopRequireDefault(require("../../../utils/helpers/options-helper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * A TableCell widget.
 *
 * == How to use a TableCell in a component:
 *
 * See documentation for Table component.
 *
 * You can set a property of 'align' which should be a string. This will
 * align the content to either "left", "center" or "right".
 *
 * You can set a property of 'action' which should be a boolean. This will
 * set styling options for the cell used for action such as delete.
 */
var TableCell =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TableCell, _React$Component);

  function TableCell() {
    _classCallCheck(this, TableCell);

    return _possibleConstructorReturn(this, _getPrototypeOf(TableCell).apply(this, arguments));
  }

  _createClass(TableCell, [{
    key: "childName",

    /**
     * Returns the child's name if there is one.
     */
    value: function childName(child) {
      return child && child.type ? child.type.name : null;
    }
    /**
     * Returns if child element is Textarea.
     */

  }, {
    key: "render",

    /**
     * Renders the component.
     */
    value: function render() {
      return _react.default.createElement(_tableCell.default, _extends({}, this.tableCellProps, (0, _tags.default)('table-cell', this.props)), this.props.children);
    }
  }, {
    key: "checkChildrenInputType",
    get: function get() {
      var _this = this;

      var children = this.props.children;
      var TYPES = {
        isTextArea: 'isTextArea',
        isDate: 'isDate'
      };

      if (!Array.isArray(children)) {
        if (this.childName(children) === _textarea.default.name) {
          return TYPES.isTextArea;
        }

        if (this.childName(children) === _date.default.name) {
          return TYPES.isDate;
        }

        return null;
      }

      var result = null;
      children.forEach(function (child) {
        if (_this.childName(child) === _date.default.name) {
          result = result !== TYPES.isTextArea ? TYPES.isDate : result;
        }

        if (_this.childName(child) === _textarea.default.name) {
          result = TYPES.isTextArea;
        }
      });
      return result;
    }
    /**
     * Returns props to be used on the TD element.
     */

  }, {
    key: "tableCellProps",
    get: function get() {
      var _validProps = (0, _ether.validProps)(this, ['align', 'size']),
          children = _validProps.children,
          props = _objectWithoutProperties(_validProps, ["children"]);

      var inputType = this.checkChildrenInputType;
      if (inputType) props[inputType] = true;
      return props;
    }
  }]);

  return TableCell;
}(_react.default.Component);

TableCell.propTypes = {
  /** Defines the cell type to be an action - used for the delete cell. */
  action: _propTypes.default.bool,

  /** Defines the alignment of the cell (eg "left", "center" or "right"). */
  align: _propTypes.default.oneOf(_optionsHelper.default.alignFull),

  /** Children elements */
  children: _propTypes.default.node,

  /** Defines the height of a cell used to size an input for example */
  size: _propTypes.default.oneOf(_optionsHelper.default.tableSizes)
};
TableCell.defaultProps = {
  align: 'left'
};
var _default = TableCell;
exports.default = _default;
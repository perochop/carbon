"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-own-property-descriptors");

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

var _i18nJs = _interopRequireDefault(require("i18n-js"));

var _portal = _interopRequireDefault(require("../../../components/portal"));

var _filterChildren = _interopRequireDefault(require("../../../utils/filter-children"));

var _scrollableList = require("../../../components/scrollable-list");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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

var SelectList =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SelectList, _React$Component);

  function SelectList() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SelectList);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SelectList)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "list", _react.default.createRef());

    _defineProperty(_assertThisInitialized(_this), "positionList", function () {
      if (!_this.props.target) return;

      var inputBoundingRect = _this.props.target.getBoundingClientRect();

      var top = "".concat(inputBoundingRect.top + inputBoundingRect.height + window.pageYOffset, "px");
      var width = "".concat(inputBoundingRect.width, "px");
      var left = "".concat(inputBoundingRect.left, "px");

      _this.list.current.setAttribute('style', "left: ".concat(left, "; top: ").concat(top, "; width: ").concat(width, "; position: absolute;"));
    });

    _defineProperty(_assertThisInitialized(_this), "highlightMatches", function (optionText, value) {
      if (!value.length || !optionText) return optionText;
      var parsedOptionText = optionText.toLowerCase();
      var valIndex = parsedOptionText.indexOf(value);

      if (valIndex === -1) {
        return optionText;
      }

      var beginning = optionText.substr(0, valIndex);
      var middle = optionText.substr(valIndex, value.length);
      var end = optionText.substr(valIndex + value.length, optionText.length); // find end of string recursively

      if (end.indexOf(value) !== -1) {
        end = _this.highlightMatches(end, value);
      } // build JSX object


      var newValue = [_react.default.createElement("span", {
        key: "beginning"
      }, beginning), _react.default.createElement("strong", {
        key: "middle"
      }, middle), _react.default.createElement("span", {
        key: "end"
      }, end)];
      return newValue;
    });

    return _this;
  }

  _createClass(SelectList, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.positionList();
    }
  }, {
    key: "itemId",
    // returns the data structure for the value of an item when selected
    value: function itemId(_ref) {
      var value = _ref.value,
          text = _ref.text,
          options = _ref.options;
      return _objectSpread({
        value: value,
        text: text
      }, options);
    }
  }, {
    key: "noResultsText",
    value: function noResultsText(value) {
      if (value) {
        return _i18nJs.default.t('select.no_results_for_term', {
          defaultValue: 'No results for "%{term}"',
          term: value
        });
      }

      return _i18nJs.default.t('select.no_results', {
        defaultValue: 'No results'
      });
    }
  }, {
    key: "filter",
    value: function filter(value, _filter) {
      var _this2 = this;

      return (0, _filterChildren.default)({
        value: value,
        filter: _filter,
        onNoResults: function onNoResults() {
          return _react.default.createElement(_scrollableList.ScrollableListItem, {
            isSelectable: false
          }, _this2.noResultsText(value));
        }
      });
    }
    /**
     * Find and highlights search terms in text
     */

  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          id = _this$props.id,
          isLoopable = _this$props.isLoopable,
          alwaysHighlight = _this$props.alwaysHighlight,
          children = _this$props.children,
          customFilter = _this$props.customFilter,
          filterValue = _this$props.filterValue,
          onLazyLoad = _this$props.onLazyLoad,
          onMouseDown = _this$props.onMouseDown,
          onMouseEnter = _this$props.onMouseEnter,
          onMouseLeave = _this$props.onMouseLeave,
          onSelect = _this$props.onSelect;
      var filter = this.filter(filterValue, customFilter);
      return _react.default.createElement(_portal.default, {
        onReposition: this.positionList
      }, _react.default.createElement("div", {
        id: id,
        role: "presentation",
        onMouseLeave: onMouseLeave,
        onMouseEnter: onMouseEnter,
        onMouseDown: onMouseDown,
        ref: this.list
      }, _react.default.createElement(_scrollableList.ScrollableList, {
        onLazyLoad: onLazyLoad,
        onSelect: onSelect,
        alwaysHighlight: alwaysHighlight,
        isLoopable: isLoopable,
        keyNavigation: true
      }, filter(children, function (child) {
        var _child$props = child.props,
            text = _child$props.text,
            props = _objectWithoutProperties(_child$props, ["text"]);

        return _react.default.createElement(_scrollableList.ScrollableListItem, {
          id: _this3.itemId(child.props),
          isSelectable: child.props.isSelectable
        }, _react.default.cloneElement(child, _objectSpread({
          children: _this3.highlightMatches(text, String(filterValue)),
          text: text
        }, props)));
      }))));
    }
  }]);

  return SelectList;
}(_react.default.Component);

SelectList.propTypes = {
  /** The ID for the parent <div> */
  id: _propTypes.default.string,

  /** Ensure that there's always a highlighted option? */
  alwaysHighlight: _propTypes.default.bool,

  /** Child components (such as <Option>) for the <ScrollableList> */
  children: _propTypes.default.node,

  /** A custom function to filter the children. Its interface is (text, value) => boolean */
  customFilter: _propTypes.default.func,

  /** The value to filter the children by */
  filterValue: _propTypes.default.string,

  /** Flag to indicite whether select list is loopable while traversing using up and down keys */
  isLoopable: _propTypes.default.bool,

  /** A custom callback for when more data needs to be lazy-loaded when the user scrolls the dropdown menu list */
  onLazyLoad: _propTypes.default.func,

  /** A custom callback for the parent <div>'s MouseDown event */
  onMouseDown: _propTypes.default.func,

  /** A custom callback for the parent <div>'s MouseEnter event */
  onMouseEnter: _propTypes.default.func,

  /** A custom callback for the parent <div>'s MouseLeave event */
  onMouseLeave: _propTypes.default.func,

  /** A callback for when a child is selected */
  onSelect: _propTypes.default.func,

  /** Target DOM element to position the dropdown menu list relative to */
  target: _propTypes.default.object
};
var _default = SelectList;
exports.default = _default;
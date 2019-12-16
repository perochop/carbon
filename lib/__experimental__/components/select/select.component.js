"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.find");

require("core-js/modules/es.array.from");

require("core-js/modules/es.array.includes");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.map");

require("core-js/modules/es.array.splice");

require("core-js/modules/es.function.name");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-own-property-descriptors");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.includes");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.for-each");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _lodash = require("lodash");

var _invariant = _interopRequireDefault(require("invariant"));

var _selectList = _interopRequireDefault(require("./select-list.component"));

var _textbox = _interopRequireDefault(require("../textbox"));

var _pill = _interopRequireDefault(require("../../../components/pill"));

var _events = _interopRequireDefault(require("../../../utils/helpers/events"));

var _tags = _interopRequireDefault(require("../../../utils/helpers/tags"));

var _select = require("./select.style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Basic example:
 *
 *   <Select>
 *     <Option text='Approve' />
 *     <Option text='Configure' />
 *     <Option text='Deny' />
 *   </Select>
 *
 * Custom JSX:
 *
 *   <Select>
 *     <Option text='Approve'><Icon type='tick' /></Option>
 *     <Option text='Configure'><Icon type='settings' /></Option>
 *     <Option text='Deny'><Icon type='cross' /></Option>
 *   </Select>
 */
var Select =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Select, _React$Component);

  function Select() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Select);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Select)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "listboxId", (0, _lodash.uniqueId)('listbox-'));

    _defineProperty(_assertThisInitialized(_this), "isComponentControlled", _this.props.value !== undefined && _this.props.value !== null);

    _defineProperty(_assertThisInitialized(_this), "getInitialStateValue", function () {
      if (_this.isComponentControlled) {
        return _this.props.value;
      }

      if (_this.props.defaultValue !== undefined && _this.props.defaultValue !== null) {
        return _this.props.defaultValue;
      }

      return _this.props.enableMultiSelect ? [] : '';
    });

    _defineProperty(_assertThisInitialized(_this), "state", {
      value: _this.getInitialStateValue(),
      filter: undefined,
      open: false
    });

    _defineProperty(_assertThisInitialized(_this), "blurBlocked", false);

    _defineProperty(_assertThisInitialized(_this), "input", {});

    _defineProperty(_assertThisInitialized(_this), "assignInput", function (input) {
      _this.input = input;
    });

    _defineProperty(_assertThisInitialized(_this), "handleBlur", function () {
      if (_this.blurBlocked) return;

      _this.setState({
        filter: undefined,
        open: false
      });

      if (_this.props.onBlur) {
        var value = _this.getValue();

        var customEvent = _this.createCustomEvent(value);

        _this.props.onBlur(customEvent);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleFocus", function (ev) {
      if (!_this.props.preventFocusAutoOpen) _this.openList();
      if (_this.props.onFocus) _this.props.onFocus(ev);
    });

    _defineProperty(_assertThisInitialized(_this), "handleMouseEnter", function () {
      return _this.blockBlur();
    });

    _defineProperty(_assertThisInitialized(_this), "handleMouseLeave", function () {
      return _this.unblockBlur();
    });

    _defineProperty(_assertThisInitialized(_this), "handleClick", function () {
      return _this.openList();
    });

    _defineProperty(_assertThisInitialized(_this), "verifyControlledIntegrity", function () {
      var enableMultiSelect = Boolean(_this.props.enableMultiSelect);

      var isValuePropAnArray = _this.isMultiValue(_this.props.value);

      (0, _invariant.default)(enableMultiSelect === isValuePropAnArray, "Controlled component: Mismatch between props: `enableMultiSelect` (".concat(enableMultiSelect, ") and `value` (").concat(isValuePropAnArray ? 'is an array' : 'is not an array', ")"));
    });

    _defineProperty(_assertThisInitialized(_this), "isMultiSelectEnabled", function () {
      if (_this.isComponentControlled) {
        _this.verifyControlledIntegrity();
      }

      return Boolean(_this.props.enableMultiSelect);
    });

    _defineProperty(_assertThisInitialized(_this), "getValue", function () {
      if (_this.isComponentControlled) {
        _this.verifyControlledIntegrity();

        return _this.props.value;
      }

      return _this.state.value;
    });

    _defineProperty(_assertThisInitialized(_this), "getMultiSelectValues", function () {
      (0, _invariant.default)(_this.props.enableMultiSelect, 'Cannot get multi-select value: `enableMultiSelect` prop is falsy');

      var value = _this.getValue();

      (0, _invariant.default)(_this.isMultiValue(value), 'Cannot get multi-select value: value is not an array');
      return value; // Guaranteed to be an array.
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (optionProps) {
      // if the component is multi value then we need to push the new value into the array of values
      if (_this.isMultiSelectEnabled()) {
        var multiSelectValues = _this.getMultiSelectValues(); // do not allow the same value twice


        if (!multiSelectValues.includes(optionProps.value)) {
          _this.triggerChange([].concat(_toConsumableArray(multiSelectValues), [optionProps.value]));
        }
      } else {
        _this.triggerChange(optionProps.value);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleFilter", function (ev) {
      var filter = ev.target.value;

      _this.setState({
        filter: filter
      });

      if (_this.props.onFilter) _this.props.onFilter(filter);
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyDown", function (ev) {
      // order of event checking is important here!
      if (_this.props.onKeyDown) _this.props.onKeyDown(ev); // if tab key then allow normal behaviour

      if (_events.default.isTabKey(ev)) {
        _this.unblockBlur();

        return;
      } // if the dropdown is not open then block regular activity and open it


      if (!_this.state.open) {
        ev.preventDefault();

        _this.openList();

        return;
      } // if esc key then close the dropdown


      if (_events.default.isEscKey(ev)) {
        _this.setState({
          open: false
        });

        return;
      } // if backspace key and multi value and no filter, remove the last item in the array


      if (_events.default.isBackspaceKey(ev)) {
        if (_this.isMultiSelectEnabled()) {
          _this.removeMultiItem(_this.getMultiSelectValues().length - 1);
        } else {
          _this.removeSingleItem();
        }
      }

      if (!_this.props.filterable) ev.preventDefault();
    });

    _defineProperty(_assertThisInitialized(_this), "getTextForValue", function (value) {
      var optionsComponents = _this.props.children;
      var matchingOption = optionsComponents.find(function (option) {
        return option.props.value === value;
      });
      return matchingOption ? matchingOption.props.text : '';
    });

    return _this;
  }

  _createClass(Select, [{
    key: "blockBlur",
    value: function blockBlur() {
      this.blurBlocked = true;
    }
  }, {
    key: "unblockBlur",
    value: function unblockBlur() {
      this.blurBlocked = false;
    }
  }, {
    key: "openWhenTypeAhead",
    value: function openWhenTypeAhead(typeAhead, value) {
      if (!this.props.filterable) return false;
      return typeAhead && value && value.length >= 3;
    }
  }, {
    key: "openList",
    value: function openList() {
      if (this.state.open) return;
      this.setState({
        open: true
      });
      if (this.props.onOpen) this.props.onOpen();
    }
    /**
     * Changes the component's currently-selected option(s). This can be caused by:
     *
     *   - The user clicking an <Option> in the <SelectList>, to select/add that option.
     *   - The user pressing the backspace key, to clear the selected option (or delete a chosen option).
     *   - The user clicking the "X" (delete) button on a <Pill> (when in multi-select mode).
     *
     * The `value` argument refers to the `value` prop(s) of the chosen <Option> component(s):
     *
     *   - In single-select mode, the `value` argument is a single string.
     *   - In  multi-select mode, the `value` argument is an array of strings.
     */

  }, {
    key: "triggerChange",
    value: function triggerChange(value) {
      var newState = {
        value: value
      };

      if (!this.isMultiSelectEnabled()) {
        // only closes the dropdown if not multi-value
        newState.open = false;
        this.unblockBlur();
      }

      newState.filter = undefined;
      this.setState(newState);

      if (!this.props.onChange) {
        return;
      }

      var customEvent = this.createCustomEvent(value);
      this.props.onChange(customEvent);
    }
    /**
     * Creates a custom event object, suitable for passing to the
     * onBlur() and onChange() callback props of this component.
     */

  }, {
    key: "createCustomEvent",
    value: function createCustomEvent(value) {
      var _this2 = this;

      var _this$props = this.props,
          name = _this$props.name,
          id = _this$props.id;
      var strings = this.isMultiValue(value) ? value : [value];
      var objects = strings.map(function (stringValue) {
        return {
          optionValue: stringValue,
          optionText: _this2.getTextForValue(stringValue)
        };
      });
      var customEvent = {
        target: _objectSpread({}, name && {
          name: name
        }, {}, id && {
          id: id
        }, {
          value: objects
        })
      };
      return customEvent;
    }
    /**
     * Removes the specified multi-select item.
     * Should only be called when the component is in multi-select mode.
     */

  }, {
    key: "removeMultiItem",
    value: function removeMultiItem(index) {
      (0, _invariant.default)(this.isMultiSelectEnabled(), 'Cannot remove multi-select item: Component not in multi-select mode');
      var multiSelectValues = this.getMultiSelectValues();

      if (!this.state.filter && multiSelectValues.length > 0) {
        var newValues = _toConsumableArray(multiSelectValues); // copies the array first to not mutate original value


        newValues.splice(index, 1);
        this.triggerChange(newValues);
      }
    }
    /**
     * Removes this component's current single-select item.
     * Should only be called when the component is in single-select mode.
     */

  }, {
    key: "removeSingleItem",
    value: function removeSingleItem() {
      (0, _invariant.default)(!this.isMultiSelectEnabled(), 'Cannot remove single-select item: Component not in single-select mode');
      var value = this.getValue();

      if (!this.state.filter && !!value) {
        this.triggerChange('');
      }
    }
    /**
     * Finds the <Option> child with the specified `value` prop, and returns its `text` prop.
     */

  }, {
    key: "formattedValue",
    // returns the human readable value for the user
    value: function formattedValue(filterValue, value) {
      var visibleValue = ''; // if not multi-value then fetch the text key on the value

      if (!this.isMultiSelectEnabled() && value) {
        visibleValue = this.getTextForValue(value);
      } // if there is a filter then return that over the selected visible value


      return typeof filterValue === 'string' ? filterValue : visibleValue;
    }
  }, {
    key: "renderMultiValues",
    value: function renderMultiValues(values) {
      var _this3 = this;

      var canDelete = !this.props.disabled && !this.props.readOnly;
      return values.map(function (value, index) {
        return _react.default.createElement(_select.StyledSelectPillContainer, {
          key: value
        }, _react.default.createElement(_pill.default, {
          onDelete: canDelete ? function () {
            return _this3.removeMultiItem(index);
          } : undefined,
          title: _this3.getTextForValue(value)
        }, _this3.getTextForValue(value)));
      });
    }
    /**
     * Determines whether `value` indicates a single value (when the component is operating in single-select mode)
     * or multiple values (when the component is operating in multi-select mode).
     */

  }, {
    key: "isMultiValue",
    value: function isMultiValue(value) {
      return Array.isArray(value);
    }
  }, {
    key: "placeholder",
    value: function placeholder(_placeholder) {
      var displayedPlaceHolder = this.props.typeAhead ? 'Type to Search...' : 'Please Select...';
      if (_placeholder) displayedPlaceHolder = _placeholder;
      return displayedPlaceHolder;
    } // data attributes used for automation

  }, {
    key: "dataAttributes",
    value: function dataAttributes() {
      return (0, _tags.default)(this.props['data-component'], this.props);
    }
  }, {
    key: "inputIcon",
    value: function inputIcon(typeAhead) {
      if (this.openWhenTypeAhead(typeAhead, this.state.filter)) return 'cross';
      if (typeAhead) return 'search';
      return this.isMultiSelectEnabled() ? undefined : 'dropdown';
    }
  }, {
    key: "eventProps",
    value: function eventProps() {
      var events = {};

      if (!this.props.disabled && !this.props.readOnly) {
        events = {
          onBlur: this.handleBlur,
          onFocus: this.handleFocus,
          onKeyDown: this.handleKeyDown,
          onClick: this.handleClick,
          onChange: this.handleFilter
        };
      }

      return events;
    }
  }, {
    key: "textboxProps",
    value: function textboxProps() {
      var _this$props2 = this.props,
          typeAhead = _this$props2.typeAhead,
          placeholder = _this$props2.placeholder,
          leftChildren = _this$props2.leftChildren;
      var value = this.getValue();
      var placeholderText = this.placeholder(placeholder);
      var props = {
        inputIcon: this.inputIcon(typeAhead),
        inputRef: this.assignInput,
        placeholder: placeholderText,
        'aria-label': placeholderText,
        leftChildren: this.isMultiSelectEnabled() && this.renderMultiValues(value),
        value: value,
        formattedValue: this.formattedValue(this.state.filter, value)
      };

      if (leftChildren) {
        props.leftChildren = props.leftChildren ? [leftChildren].concat(_toConsumableArray(props.leftChildren)) : leftChildren;
      }

      return props;
    }
  }, {
    key: "listDisplayable",
    value: function listDisplayable(isTypeAhead) {
      var _this$state = this.state,
          filter = _this$state.filter,
          open = _this$state.open;
      return this.openWhenTypeAhead(isTypeAhead, filter) || !isTypeAhead ? open : false;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          ariaLabel = _this$props3.ariaLabel,
          children = _this$props3.children,
          customFilter = _this$props3.customFilter,
          placeholder = _this$props3.placeholder,
          value = _this$props3.value,
          defaultValue = _this$props3.defaultValue,
          isLoopable = _this$props3.isLoopable,
          onLazyLoad = _this$props3.onLazyLoad,
          onFilter = _this$props3.onFilter,
          onOpen = _this$props3.onOpen,
          typeAhead = _this$props3.typeAhead,
          filterable = _this$props3.filterable,
          props = _objectWithoutProperties(_this$props3, ["ariaLabel", "children", "customFilter", "placeholder", "value", "defaultValue", "isLoopable", "onLazyLoad", "onFilter", "onOpen", "typeAhead", "filterable"]);

      var _this$state2 = this.state,
          filter = _this$state2.filter,
          open = _this$state2.open;
      var allowTypeAhead = filterable ? typeAhead : false;
      return _react.default.createElement(_select.StyledSelect, {
        role: "combobox",
        "data-component": "carbon-select" // move this to textbox style in DLS phase 2
        ,
        style: {
          minWidth: 75
        },
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave,
        "aria-haspopup": "listbox",
        "aria-expanded": open,
        "aria-controls": open ? this.listboxId : '',
        "aria-label": ariaLabel,
        isAnyValueSelected: this.isMultiSelectEnabled() && this.getMultiSelectValues().length >= 1
      }, _react.default.createElement(_textbox.default, _extends({}, props, this.dataAttributes(), this.textboxProps(), this.eventProps()), this.listDisplayable(allowTypeAhead, filter, open) && _react.default.createElement(_selectList.default, {
        alwaysHighlight: !!filter // always ensure something is highlighted only if there's a filter
        ,
        customFilter: customFilter,
        filterValue: filter,
        onLazyLoad: onLazyLoad,
        isLoopable: isLoopable,
        onSelect: this.handleChange,
        open: open,
        target: this.input.current && this.input.current.parentElement,
        role: "listbox",
        id: this.listboxId
      }, children)));
    }
  }]);

  return Select;
}(_react.default.Component);

var valuePropType = _propTypes.default.oneOfType([_propTypes.default.string, // Single-select mode
_propTypes.default.arrayOf(_propTypes.default.string) // Multi-select mode
]);

Select.propTypes = {
  ariaLabel: _propTypes.default.string,

  /** Child components (such as <Option>) for the <SelectList> */
  children: _propTypes.default.node,

  /** A custom function to filter the child components. Its interface is (text, value) => boolean */
  customFilter: _propTypes.default.func,

  /** Is the component disabled? */
  disabled: _propTypes.default.bool,

  /** Label text for the <Textbox> */
  label: _propTypes.default.string,

  /** Flag to indicite whether select list is loopable while traversing using up and down keys */
  isLoopable: _propTypes.default.bool,

  /** A custom callback for the <Textbox>'s Blur event */
  onBlur: _propTypes.default.func,

  /** A custom callback for when changes occur */
  onChange: _propTypes.default.func,

  /** A custom callback for the <Textbox>'s Focus event */
  onFocus: _propTypes.default.func,

  /** A custom callback for when the dropdown menu opens */
  onOpen: _propTypes.default.func,

  /** A custom callback for when the key is pressed */
  onKeyDown: _propTypes.default.func,

  /** A custom callback for when more data needs to be lazy-loaded when the user scrolls the dropdown menu list */
  onLazyLoad: _propTypes.default.func,

  /** A custom callback for the <Textbox>'s Change event */
  onFilter: _propTypes.default.func,

  /** Placeholder text for the <Textbox> */
  placeholder: _propTypes.default.string,

  /** Is the component read-only? */
  readOnly: _propTypes.default.bool,

  /** Should multi-select mode be enabled? */
  enableMultiSelect: _propTypes.default.bool,

  /** Prevents list from automatically opening on focus */
  preventFocusAutoOpen: _propTypes.default.bool,

  /** The selected value(s), when the component is operating in controlled mode */
  value: valuePropType,

  /** The default selected value(s), when the component is operating in uncontrolled mode */
  defaultValue: valuePropType,

  /** ID attribute of the component */
  id: _propTypes.default.string,

  /** Name attribute of the component */
  name: _propTypes.default.string,

  /** Name of the component */
  'data-component': _propTypes.default.string,

  /** Are >=3 characters required to trigger the dropdown menu? */
  typeAhead: _propTypes.default.bool,

  /** Can the user type a value in the <Textbox> to filter the dropdown menu options? */
  filterable: _propTypes.default.bool,
  isAnyValueSelected: _propTypes.default.bool,

  /** Add additional child elements before the input */
  leftChildren: _propTypes.default.node
};
Select.defaultProps = {
  filterable: true,
  typeAhead: false
};
var _default = Select;
exports.default = _default;
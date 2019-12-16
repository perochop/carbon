"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.map");

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

var _tableCell = _interopRequireDefault(require("../table-cell"));

var _tableHeader = _interopRequireDefault(require("../table-header"));

var _checkbox = require("../../../__experimental__/components/checkbox");

var _guid = _interopRequireDefault(require("../../../utils/helpers/guid"));

var _withDrop = _interopRequireDefault(require("../../drag-and-drop/with-drop"));

var _draggableTableCell = _interopRequireDefault(require("../draggable-table-cell"));

var _tableRow = _interopRequireDefault(require("./table-row.style"));

var _ether = require("../../../utils/ether");

var _tags = _interopRequireDefault(require("../../../utils/helpers/tags"));

var _actionPopover = require("../../action-popover");

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

/**
 * A TableRow widget.
 *
 * == How to use a TableRow in a component:
 *
 * See documentation for Table component.
 *
 * If you add an onClick event to a Table Row, will display the cursor as a pointer
 * when hovering over the row.
 */
var TableRow =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TableRow, _React$Component);

  function TableRow(props) {
    var _this;

    _classCallCheck(this, TableRow);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TableRow).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "state", {
      /**
       * Internal state to store this table row's DOM node (for drag-and-drop functionality).
       */
      rowNode: null,

      /**
       * Internal state to track if the row is currently highlighted.
       */
      highlighted: false,

      /**
       * Internal state to track if the row is currently selected.
       */
      selected: false
    });

    _defineProperty(_assertThisInitialized(_this), "onSelectAll", function () {
      _this.context.selectAll(_assertThisInitialized(_this));
    });

    _defineProperty(_assertThisInitialized(_this), "onRowClick", function () {
      if (_this.props.onHighlight) {
        // trigger onHighlight callback if defined
        _this.props.onHighlight(_this.props.uniqueID, !_this.state.highlighted, _assertThisInitialized(_this));
      } else {
        // trigger highlightRow method on the table
        _this.context.highlightRow(_this.props.uniqueID, _assertThisInitialized(_this));
      } // trigger any custom onClick event the developer may have set


      if (_this.props.onClick) {
        var _this$props;

        (_this$props = _this.props).onClick.apply(_this$props, arguments);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onSelect", function (ev) {
      if (_this.props.onSelect) {
        // trigger onSelect callback if defined
        _this.props.onSelect(_this.props.uniqueID, ev.target.value, _assertThisInitialized(_this));
      } else {
        // trigger selectRow method on the table
        _this.context.selectRow(_this.props.uniqueID, _assertThisInitialized(_this), !_this.state.selected);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "draggingIsOccurring", function () {
      return typeof _this.context.dragAndDropActiveIndex === 'number';
    });

    _defineProperty(_assertThisInitialized(_this), "renderDraggableCell", function () {
      if (!_this.context.dragDropManager || _this.isHeader) {
        return null;
      }

      return _react.default.createElement(_draggableTableCell.default, {
        identifier: _this.props.dragAndDropIdentifier,
        draggableNode: function draggableNode() {
          return _this.state.rowNode;
        },
        canDrag: !_this.props.hideDrag
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderDraggableRow", function (row) {
      if (!_this.context.dragDropManager || _this.isHeader) {
        return row;
      }

      return _react.default.createElement(_withDrop.default, {
        identifier: _this.props.dragAndDropIdentifier,
        index: _this.props.index,
        canDrop: function canDrop() {
          return !_this.props.hideDrag;
        },
        droppableNode: function droppableNode() {
          return _this.state.rowNode;
        }
      }, row);
    });

    _this._row = _react.default.createRef();
    return _this;
  }

  _createClass(TableRow, [{
    key: "UNSAFE_componentWillMount",
    value: function UNSAFE_componentWillMount() {
      if (this.context.dragDropManager) {
        if (this.props.as !== 'header' && this.props.index === undefined) {
          throw new Error('You need to provide an index for rows that are draggable');
        }
      }

      if (this.requiresUniqueID && !this.props.uniqueID) {
        throw new Error('A TableRow which is selectable or highlightable should provide a uniqueID.');
      }

      if (this.context.attachToTable && this.props.uniqueID && !this.props.selectAll && !this.isHeader) {
        // generate row id
        this.rowID = (0, _guid.default)(); // only attach to the table if we have a unique id

        this.context.attachToTable(this.rowID, this); // also check if row is already selected/highlighted

        this.context.checkSelection(this.props.uniqueID, this);
      }

      if (this.props.selected) {
        // if developer is controlling selected state - set it
        this.setState({
          selected: true
        });
      }

      if (this.props.highlighted) {
        // if developer is controlling highlighted state - set it
        this.setState({
          highlighted: true
        });
      }
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      if (this.props.uniqueID !== nextProps.uniqueID) {
        // if unique id has changed, check if the table has the new id as selected or not
        this.context.checkSelection(nextProps.uniqueID, this);
      }

      if (this.props.selected !== nextProps.selected) {
        // if developer is controlling selected state - set it
        this.setState({
          selected: nextProps.selected
        });
      }

      if (this.props.highlighted !== nextProps.highlighted) {
        // if developer is controlling highlighted state - set it
        this.setState({
          highlighted: nextProps.highlighted
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.context.detachFromTable) {
        this.context.detachFromTable(this.rowID);
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this._row.current) this.setState({
        rowNode: this._row.current
      });
    }
    /**
     * Call the selectAll callback.
     */

  }, {
    key: "getChildrenWithStateUpdaters",
    value: function getChildrenWithStateUpdaters() {
      var _this2 = this;

      return _react.default.Children.map(this.props.children, function (td) {
        var hasActionPopover = false;

        if (!td) {
          return td;
        }

        var childrenWithProps = _react.default.Children.map(td.props.children, function (child) {
          // When a table has an ActionPopover, the opening and closing the ActionPopover should control the highlight
          // state of the row
          if (child && child.type === _actionPopover.ActionPopover) {
            hasActionPopover = true;
            var props = {
              onOpen: function onOpen() {
                _this2.highlighted = true;
                child.props.onOpen();
              },
              onClose: function onClose() {
                _this2.highlighted = false;
                child.props.onClose();
              }
            };
            return _react.default.cloneElement(child, props);
          }

          return child;
        });

        return hasActionPopover ? _react.default.cloneElement(td, {
          children: childrenWithProps
        }) : td;
      });
    }
    /**
     * Renders the component
     */

  }, {
    key: "render",
    value: function render() {
      var content = [this.getChildrenWithStateUpdaters()];

      if (this.shouldHaveMultiSelectColumn) {
        content.unshift(this.multiSelectCell);
      }

      return this.renderDraggableRow(_react.default.createElement(_tableRow.default, _extends({}, this.rowProps, (0, _tags.default)('table-row', this.props), {
        ref: this._row
      }), this.renderDraggableCell(), content));
    }
  }, {
    key: "rowProps",

    /**
     * Sets additional props to the row.
     */
    get: function get() {
      var _validProps = (0, _ether.validProps)(this),
          props = Object.assign({}, _validProps);

      props.isClickable = this.props.onClick || this.props.highlightable || this.context.highlightable;
      props.isDragged = this.draggingIsOccurring() && this.context.dragAndDropActiveIndex === this.props.index;
      props.isDragging = this.draggingIsOccurring();
      props.isHighlighted = this.state.highlighted;
      props.isPassive = this.context.passiveData;
      props.isSelected = this.state.selected;
      props.isSelectable = this.shouldHaveMultiSelectColumn;

      if (this.context.highlightable || this.props.highlightable) {
        props.onClick = this.onRowClick;
      }

      return props;
    }
    /**
     * Determines if the developer has flagged this row as a header.
     */

  }, {
    key: "isHeader",
    get: function get() {
      return this.props.as === 'header';
    }
    /**
     * Determines what kind of cell to render for the checkbox.
     */

  }, {
    key: "multiSelectCell",
    get: function get() {
      // renders a TableHeader if row is flagged as a header.
      var cell = this.isHeader ? _tableHeader.default : _tableCell.default;
      return _react.default.createElement(cell, {
        key: 'select',
        'data-component': 'selectable-cell'
      }, this.multiSelect);
    }
    /**
     * Returns the checkbox for the select action.
     */

  }, {
    key: "multiSelect",
    get: function get() {
      if (this.props.hideMultiSelect) {
        return null;
      } // determines which action to use (multi-select or select-all)


      var action = this.props.selectAll || this.isHeader ? this.onSelectAll : this.onSelect;
      return _react.default.createElement(_checkbox.Checkbox, {
        onClick: function onClick(ev) {
          return ev.stopPropagation();
        },
        onChange: action,
        checked: this.state.selected
      });
    }
    /**
     * Determines if the row should have a multi select column.
     */

  }, {
    key: "shouldHaveMultiSelectColumn",
    get: function get() {
      // if component specifically disables selectable, don't put the cell in
      if (this.props.selectable !== false) {
        // if multi-seletable, add the checkbox cell
        if (this.props.selectAll || this.context.selectable || this.props.selectable) {
          return true;
        }
      }

      return false;
    }
    /**
     * Determines if the row requires a unique ID.
     */

  }, {
    key: "requiresUniqueID",
    get: function get() {
      var highlightable = this.props.highlightable !== false && (this.props.highlightable || this.context.highlightable),
          selectable = this.props.selectable !== false && (this.props.selectable || this.context.selectable);
      return highlightable || selectable;
    }
    /**
     * Determines if dragging is occurring within the current draggable context.
     */

  }, {
    key: "highlighted",
    set: function set(highlighted) {
      this.setState({
        highlighted: highlighted
      });
    }
  }]);

  return TableRow;
}(_react.default.Component);

TableRow.propTypes = {
  theme: _propTypes.default.object,

  /**  Children elements */
  children: _propTypes.default.node,

  /** A custom class name for the component. */
  className: _propTypes.default.string,

  /** Allows developers to specify a callback after the row is clicked. */
  onClick: _propTypes.default.func,

  /** Enables multi-selectable table rows. */
  selectable: _propTypes.default.bool,

  /** Enables highlightable table rows. */
  highlightable: _propTypes.default.bool,

  /** Allows developers to manually control selected state for the row. */
  selected: _propTypes.default.bool,

  /** Allows developers to manually control highlighted state for the row. */
  highlighted: _propTypes.default.bool,

  /** Define a unique ID so the table can track the row (useful for highlightable or selectable rows). */
  uniqueID: _propTypes.default.string,

  /** What the row should be displayed as, set to 'header' to display as header */
  as: _propTypes.default.string,

  /** Whether to hide the multiSelect */
  hideMultiSelect: _propTypes.default.bool,

  /** Whether to select all */
  selectAll: _propTypes.default.bool,

  /** Callback for when a row is highlighted */
  onHighlight: _propTypes.default.func,

  /** Callback for when a row is selected */
  onSelect: _propTypes.default.func,

  /** Used if this row is within a draggable context */
  index: _propTypes.default.number,

  /** Optional to associate the drag and drag context. */
  dragAndDropIdentifier: _propTypes.default.string,

  /** Used to determine if line is empty or not */
  hideDrag: _propTypes.default.bool,

  /** Used to determine if line is dragged */
  dragged: _propTypes.default.bool,

  /** Used to determine if line is empty is dragging */
  dragging: _propTypes.default.func
};
TableRow.safeProps = ['onClick', 'theme'];
TableRow.contextTypes = {
  attachToTable: _propTypes.default.func,
  // attach the row to the table
  detachFromTable: _propTypes.default.func,
  // detach the row from the table
  checkSelection: _propTypes.default.func,
  // a function to check if the row is currently selected
  highlightRow: _propTypes.default.func,
  // highlights the row
  selectAll: _propTypes.default.func,
  // a callback function for when all visible rows are selected
  highlightable: _propTypes.default.bool,
  // table can enable all rows to be highlightable
  selectable: _propTypes.default.bool,
  // table can enable all rows to be multi-selectable
  selectRow: _propTypes.default.func,
  // a callback function for when a row is selected
  dragDropManager: _propTypes.default.object,
  // the React DND DragDropManager
  dragAndDropActiveIndex: _propTypes.default.number,
  // tracks the currently active index
  passiveData: _propTypes.default.bool // tracks if the data should be rendered passively

};
var _default = TableRow;
exports.default = _default;
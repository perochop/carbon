"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.number.constructor");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "TableRow", {
  enumerable: true,
  get: function get() {
    return _tableRow.default;
  }
});
Object.defineProperty(exports, "TableCell", {
  enumerable: true,
  get: function get() {
    return _tableCell.default;
  }
});
Object.defineProperty(exports, "TableHeader", {
  enumerable: true,
  get: function get() {
    return _tableHeader.default;
  }
});
Object.defineProperty(exports, "TableSubheader", {
  enumerable: true,
  get: function get() {
    return _tableSubheader.default;
  }
});
Object.defineProperty(exports, "DraggableTableCell", {
  enumerable: true,
  get: function get() {
    return _draggableTableCell.default;
  }
});
exports.Table = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactTransitionGroup = require("react-transition-group");

var _immutable = _interopRequireDefault(require("immutable"));

var _i18nJs = _interopRequireDefault(require("i18n-js"));

var _actionToolbar = _interopRequireDefault(require("../action-toolbar"));

var _icon = _interopRequireDefault(require("../icon"));

var _link = _interopRequireDefault(require("../link"));

var _table = _interopRequireWildcard(require("./table.style"));

var _tableRow = _interopRequireDefault(require("./table-row"));

var _tableCell = _interopRequireDefault(require("./table-cell"));

var _tableHeader = _interopRequireDefault(require("./table-header"));

var _tableSubheader = _interopRequireDefault(require("./table-subheader"));

var _draggableTableCell = _interopRequireDefault(require("./draggable-table-cell"));

var _pager = _interopRequireDefault(require("../pager"));

var _spinner = _interopRequireDefault(require("../../__deprecated__/components/spinner"));

var _optionsHelper = _interopRequireDefault(require("../../utils/helpers/options-helper"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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

var Table =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Table, _React$Component);

  function Table() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Table);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Table)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      selectedCount: 0
    });

    _defineProperty(_assertThisInitialized(_this), "getChildContext", function () {
      return {
        attachActionToolbar: _this.attachActionToolbar,
        detachActionToolbar: _this.detachActionToolbar,
        attachToTable: _this.attachToTable,
        detachFromTable: _this.detachFromTable,
        checkSelection: _this.checkSelection,
        highlightRow: _this.highlightRow,
        onSort: _this.onSort,
        highlightable: _this.props.highlightable,
        selectable: _this.props.selectable,
        selectAll: _this.selectAll,
        selectRow: _this.selectRow,
        sortedColumn: _this.sortedColumn,
        sortOrder: _this.sortOrder,
        passiveData: _this.isPassive
      };
    });

    _defineProperty(_assertThisInitialized(_this), "onSort", function (sortedColumn, sortOrder) {
      var options = _this.emitOptions();

      options.sortedColumn = sortedColumn;
      options.sortOrder = sortOrder;

      _this.emitOnChangeCallback('table', options);
    });

    _defineProperty(_assertThisInitialized(_this), "onPagination", function (currentPage, pageSize, element) {
      if (_this.props.onPageSizeChange && element === 'size') {
        _this.props.onPageSizeChange(pageSize);
      }

      var options = _this.emitOptions();

      options.currentPage = currentPage;
      options.pageSize = pageSize;

      _this.emitOnChangeCallback('pager', options);
    });

    _defineProperty(_assertThisInitialized(_this), "emitOnChangeCallback", function (element, options) {
      if (_this.selectAllComponent) {
        // reset the select all component
        _this.selectAllComponent.setState({
          selected: false
        });

        _this.selectAllComponent = null;
      }

      _this.props.onChange(element, options);
    });

    _defineProperty(_assertThisInitialized(_this), "attachActionToolbar", function (comp) {
      _this.actionToolbarComponent = comp;
    });

    _defineProperty(_assertThisInitialized(_this), "detachActionToolbar", function () {
      _this.actionToolbarComponent = null;
    });

    _defineProperty(_assertThisInitialized(_this), "attachToTable", function (id, row) {
      _this.rows[id] = row;
    });

    _defineProperty(_assertThisInitialized(_this), "detachFromTable", function (id) {
      delete _this.rows[id];
    });

    _defineProperty(_assertThisInitialized(_this), "refresh", function () {
      _this.resetHighlightedRow();

      _this.selectedRows = {};

      if (_this.actionToolbarComponent) {
        _this.actionToolbarComponent.setState({
          total: 0,
          selected: []
        });
      }

      for (var key in _this.rows) {
        var _row = _this.rows[key];

        _row.setState({
          selected: false
        });
      }

      _this.emitOnChangeCallback('refresh', _this.emitOptions());
    });

    _defineProperty(_assertThisInitialized(_this), "resetHighlightedRow", function () {
      if (_this.highlightedRow.row && _this.rows[_this.highlightedRow.row.rowID]) {
        _this.highlightedRow.row.setState({
          highlighted: false
        });
      }

      _this.highlightedRow = {
        id: null,
        row: null
      };
    });

    _defineProperty(_assertThisInitialized(_this), "highlightRow", function (id, row) {
      var state = true;

      if (_this.highlightedRow.id !== null) {
        if (id === _this.highlightedRow.id) {
          state = !row.state.highlighted;
        } else {
          _this.resetHighlightedRow();
        }
      }

      row.setState({
        highlighted: state
      });
      _this.highlightedRow = {
        id: id,
        row: row
      };

      if (_this.props.onHighlight) {
        _this.props.onHighlight(id, state, row);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "selectRow", function (id, row, state, skipCallback) {
      var isSelected = _this.selectedRows[id] !== undefined;

      if (state === isSelected) {
        return;
      }

      if (_this.selectAllComponent) {
        _this.selectAllComponent.setState({
          selected: false
        });

        _this.selectAllComponent = null;
      }

      if (!state && isSelected) {
        delete _this.selectedRows[id];
      } else if (!row.props.selectAll) {
        _this.selectedRows[id] = row;
      }

      row.setState({
        selected: state
      });

      if (_this.actionToolbarComponent && !skipCallback) {
        var keys = Object.keys(_this.selectedRows);

        _this.actionToolbarComponent.setState({
          total: keys.length,
          selected: _this.selectedRows
        });
      }

      if (_this.props.onSelect && !skipCallback) {
        _this.props.onSelect(_this.selectedRows);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "selectAll", function (row) {
      var selectState = !row.state.selected;

      for (var key in _this.rows) {
        var _row = _this.rows[key];

        if (_row.shouldHaveMultiSelectColumn) {
          _this.selectRow(_row.props.uniqueID, _row, selectState, true);
        }
      }

      row.setState({
        selected: selectState
      });
      _this.selectAllComponent = selectState ? row : null;

      if (_this.actionToolbarComponent) {
        var keys = Object.keys(_this.selectedRows);

        _this.actionToolbarComponent.setState({
          total: keys.length,
          selected: _this.selectedRows
        });
      }

      if (_this.props.onSelect) {
        _this.props.onSelect(_this.selectedRows);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "checkSelection", function (id, row) {
      var isSelected = _this.selectedRows[id] !== undefined,
          isHighlighted = _this.highlightedRow.id === id;

      if (isSelected !== row.state.selected) {
        row.setState({
          selected: isSelected
        });
      }

      if (isHighlighted !== row.state.highlighted) {
        row.setState({
          highlighted: isHighlighted
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "selectAllComponent", null);

    _defineProperty(_assertThisInitialized(_this), "actionToolbarComponent", null);

    _defineProperty(_assertThisInitialized(_this), "selectedRows", {});

    _defineProperty(_assertThisInitialized(_this), "highlightedRow", {
      id: null,
      row: null
    });

    _defineProperty(_assertThisInitialized(_this), "rows", {});

    _defineProperty(_assertThisInitialized(_this), "tableHeight", 0);

    _defineProperty(_assertThisInitialized(_this), "emitOptions", function () {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.props;
      var currentPage = props.currentPage || '';

      if (Number(props.currentPage) > Number(props.pageSize)) {
        currentPage = '1';
      }

      return {
        currentPage: currentPage,
        filter: props.filter ? props.filter.toJS() : {},
        pageSize: props.pageSize || '',
        sortOrder: props.sortOrder || '',
        sortedColumn: props.sortedColumn || ''
      };
    });

    _defineProperty(_assertThisInitialized(_this), "configureLink", function (onConfigure) {
      if (!onConfigure) {
        return null;
      }

      return _react.default.createElement("div", null, _react.default.createElement(_link.default, {
        href: "#",
        onClick: onConfigure
      }, _react.default.createElement(_icon.default, {
        type: "settings"
      })));
    });

    _defineProperty(_assertThisInitialized(_this), "dataState", function () {});

    return _this;
  }

  _createClass(Table, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.resizeTable();
    }
    /**
     * Lifecycle for after a update has happened
     * If filter has changed then emit the on change event.
     */

  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      // if filter has changed, update the data
      if (!_immutable.default.is(this.props.filter, nextProps.filter)) {
        this.emitOnChangeCallback('filter', this.emitOptions(nextProps));
      }

      if (this.props.highlightable && nextProps.highlightable === false) {
        this.resetHighlightedRow();
      }

      if (this.props.selectable && nextProps.selectable === false) {
        for (var key in this.rows) {
          // update all the rows with the new state
          var row = this.rows[key];
          this.selectRow(row.props.uniqueID, row, false);
        }

        this.selectedRows = {};
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.shouldResetTableHeight(prevProps)) {
        this.resetTableHeight();
      } else {
        this.resizeTable();
      }
    }
  }, {
    key: "resetTableHeight",
    value: function resetTableHeight() {
      var _this2 = this;

      this._wrapper.style.minHeight = '0';
      this.tableHeight = 0;
      setTimeout(function () {
        _this2.resizeTable();
      }, 0);
    }
  }, {
    key: "resizeTable",
    value: function resizeTable() {
      if (!this._table) {
        return;
      }

      var shrink = this.props.shrink && this._table.offsetHeight < this.tableHeight;

      if (shrink || this._table.offsetHeight > this.tableHeight) {
        this.tableHeight = this._table.offsetHeight;
        this._wrapper.style.minHeight = "".concat(this.tableHeight - 1, "px");
      }
    }
  }, {
    key: "shouldResetTableHeight",
    value: function shouldResetTableHeight(prevProps) {
      return prevProps.size !== this.props.size || prevProps.pageSize > this.pageSize;
    }
  }, {
    key: "componentTags",
    value: function componentTags(props) {
      return {
        'data-component': this.dataComponent,
        'data-element': props['data-element'],
        'data-role': props['data-role'],
        'data-state': this.dataState(),
        'aria-busy': this.state.ariaBusy
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var tableProps = {
        tableType: this.props.theme,
        size: this.props.size,
        isZebra: this.props.isZebra,
        paginate: this.props.paginate
      };

      if (this.props['aria-describedby']) {
        tableProps['aria-describedby'] = this.props['aria-describedby'];
      }

      return _react.default.createElement("div", this.componentTags(this.props), this.actionToolbar, _react.default.createElement(_table.StyledInternalTableWrapper, {
        ref: function ref(wrapper) {
          _this3._wrapper = wrapper;
        },
        paginate: this.props.paginate,
        className: this.props.className
      }, this.configureLink(this.props.onConfigure), _react.default.createElement(_table.default, _extends({
        ref: function ref(table) {
          _this3._table = table;
        }
      }, tableProps), this.caption, this.thead, this.tbody)), this.pager);
    }
  }, {
    key: "sortedColumn",
    get: function get() {
      return this.props.sortedColumn;
    }
  }, {
    key: "sortOrder",
    get: function get() {
      return this.props.sortOrder;
    }
  }, {
    key: "pageSize",
    get: function get() {
      return this.props.pageSize;
    }
  }, {
    key: "pagerProps",
    get: function get() {
      return {
        currentPage: this.props.currentPage,
        onPagination: this.onPagination,
        pageSize: this.defaultPageSize,
        pageSizeSelectionOptions: this.props.pageSizeSelectionOptions,
        showPageSizeSelection: this.props.showPageSizeSelection,
        totalRecords: this.props.totalRecords
      };
    }
  }, {
    key: "defaultPageSize",
    get: function get() {
      if (this.props.pageSize) {
        return this.props.pageSize;
      }

      if (this.props.pageSizeSelectionOptions) {
        return this.props.pageSizeSelectionOptions.first().get('id');
      }

      return '10';
    }
  }, {
    key: "pager",
    get: function get() {
      if (this.props.paginate) {
        return _react.default.createElement(_pager.default, this.pagerProps);
      }

      return null;
    }
  }, {
    key: "isPassive",
    get: function get() {
      return Boolean(this.props.isPassiveData && !this.props.highlightable && !this.props.selectable);
    }
  }, {
    key: "thead",
    get: function get() {
      if (this.props.thead) {
        return _react.default.createElement("thead", null, this.props.thead);
      }

      return null;
    }
  }, {
    key: "actionToolbar",
    get: function get() {
      if (!this.props.selectable || !this.props.actions) {
        return null;
      }

      return _react.default.createElement(_actionToolbar.default, {
        total: this.state.selectedCount,
        actions: this.props.actions
      }, this.props.actionToolbarChildren);
    }
  }, {
    key: "loadingRow",
    get: function get() {
      return _react.default.createElement(_tableRow.default, {
        key: "__loading__",
        selectable: false,
        highlightable: false,
        hideMultiSelect: true
      }, _react.default.createElement(_tableCell.default, {
        colSpan: "42",
        align: "center"
      }, _react.default.createElement(_reactTransitionGroup.TransitionGroup, null, _react.default.createElement(_reactTransitionGroup.CSSTransition, {
        classNames: "table-loading",
        timeout: 300,
        appear: true
      }, _react.default.createElement(_spinner.default, {
        size: "small",
        className: "table__spinner"
      })))));
    }
  }, {
    key: "emptyRow",
    get: function get() {
      if (this.props.customEmptyRow) {
        return this.props.customEmptyRow;
      }

      return _react.default.createElement(_tableRow.default, {
        key: "__loading__",
        selectable: false,
        highlightable: false
      }, _react.default.createElement(_tableCell.default, {
        colSpan: "42",
        align: "center"
      }, _i18nJs.default.t('table.no_data', {
        defaultValue: 'No results to display'
      })));
    }
  }, {
    key: "tableContent",
    get: function get() {
      var children = this.props.children,
          hasChildren = children;

      if (children && children.count) {
        var numOfChildren = children.count(),
            onlyChildIsHeader = numOfChildren === 1 && children.first().props.as === 'header';

        if (onlyChildIsHeader) {
          if (this._hasRetreivedData) {
            children = children.push(this.emptyRow);
          } else {
            children = children.push(this.loadingRow);
          }
        } else {
          hasChildren = numOfChildren > 0;
        }
      }

      if (hasChildren) return children;
      if (this._hasRetreivedData) return this.emptyRow;
      return this.loadingRow;
    }
  }, {
    key: "tbody",
    get: function get() {
      if (this.props.tbody === false) {
        return this.tableContent;
      }

      return _react.default.createElement("tbody", null, this.tableContent);
    }
  }, {
    key: "dataComponent",
    get: function get() {
      return 'table';
    }
  }, {
    key: "caption",
    get: function get() {
      if (this.props.caption) {
        return _react.default.createElement("caption", null, this.props.caption);
      }

      return null;
    }
  }]);

  return Table;
}(_react.default.Component);

exports.Table = Table;
Table.propTypes = {
  /**  The actions to display in the toolbar  */
  actions: _propTypes.default.object,

  /** The extra actions to display in the toolbar */
  actionToolbarChildren: _propTypes.default.func,

  /** Children elements */
  children: _propTypes.default.node,

  /** Custom className */
  className: _propTypes.default.string,

  /**  Custom empty row */
  customEmptyRow: _propTypes.default.node,

  /** Data used to filter the data */
  filter: _propTypes.default.object,

  /** Emitted when table component changes e.g. Pager, sorting, filter */
  onChange: _propTypes.default.func,

  /** Enable configure icon that triggers this callback on click */
  onConfigure: _propTypes.default.func,

  /** Show the pagination footer */
  paginate: _propTypes.default.bool,

  /** Pagination Current Visible Page */
  currentPage: _propTypes.default.string,

  /** Pagination Page Size of grid (number of visible records) */
  pageSize: _propTypes.default.string,

  /** Pagination Options for pageSize default - 10, 25, 50 */
  pageSizeSelectionOptions: _propTypes.default.object,

  /** Pagination Is the page size dropdown visible  */
  showPageSizeSelection: _propTypes.default.bool,

  /** Enables multi-selectable table rows. */
  selectable: _propTypes.default.bool,

  /** Enables highlightable table rows. */
  highlightable: _propTypes.default.bool,

  /** A callback for when a row is selected. */
  onSelect: _propTypes.default.func,

  /** A callback for when a row is highlighted. */
  onHighlight: _propTypes.default.func,

  /** A callback for when the page size changes. */
  onPageSizeChange: _propTypes.default.func,

  /** Pagination Total number of records in the grid */
  totalRecords: _propTypes.default.number,

  /** Allow table to shrink in size. */
  shrink: _propTypes.default.bool,

  /** The currently sorted column. */
  sortedColumn: _propTypes.default.string,

  /** The current sort order applied. */
  sortOrder: _propTypes.default.string,

  /** TableRows to be wrapped in <thead> */
  thead: _propTypes.default.object,

  /** Determines if you want the table to automatically render a tbody. */
  tbody: _propTypes.default.bool,

  /** A string to render as the table's caption */
  caption: _propTypes.default.string,

  /** The HTML id of the element that contains a description of this table. */
  'aria-describedby': _propTypes.default.string,

  /** Renders as 'primary' / 'dark', 'secondary' / 'light', 'tertiary' / 'transparent' */
  theme: _propTypes.default.oneOf(_optionsHelper.default.tableThemes),

  /** Used to define the tables size Renders as:  'compact', 'small', 'medium' and 'large' */
  size: _propTypes.default.oneOf(_optionsHelper.default.tableSizes),

  /** Toggles the zebra striping for the table rows */
  isZebra: _propTypes.default.bool,

  /** Set if data is passive and requires no hover added styling */
  isPassiveData: _propTypes.default.bool
};
Table.childContextTypes = {
  /**
   * Defines a context object for child components of the table component.
   * https://facebook.github.io/react/docs/context.html
   */
  attachActionToolbar: _propTypes.default.func,
  // tracks the action toolbar component
  detachActionToolbar: _propTypes.default.func,
  // tracks the action toolbar component
  attachToTable: _propTypes.default.func,
  // attach the row to the table
  checkSelection: _propTypes.default.func,
  // a function to check if the row is currently selected
  detachFromTable: _propTypes.default.func,
  // detach the row from the table
  highlightRow: _propTypes.default.func,
  // highlights the row
  selectable: _propTypes.default.bool,
  // table can enable all rows to be multi-selectable
  onSort: _propTypes.default.func,
  // a callback function for when a sort order is updated
  selectAll: _propTypes.default.func,
  // a callback function for when all visible rows are selected
  selectRow: _propTypes.default.func,
  // a callback function for when a row is selected
  highlightable: _propTypes.default.bool,
  // table can enable all rows to be highlightable
  sortOrder: _propTypes.default.string,
  // the current sort order applied
  sortedColumn: _propTypes.default.string,
  // the currently sorted column
  passiveData: _propTypes.default.bool // Renders data as passive, without hover styling etc

};
Table.defaultProps = {
  theme: _optionsHelper.default.tableThemes[0],
  size: _optionsHelper.default.tableSizes[2]
};
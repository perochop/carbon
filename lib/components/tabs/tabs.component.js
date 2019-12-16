"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.map");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.get-prototype-of");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.for-each");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Tab", {
  enumerable: true,
  get: function get() {
    return _tab.default;
  }
});
exports.Tabs = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _immutable = _interopRequireDefault(require("immutable"));

var _lodash = require("lodash");

var _tab = _interopRequireDefault(require("./tab/tab.component"));

var _events = _interopRequireDefault(require("../../utils/helpers/events"));

var _tags = _interopRequireDefault(require("../../utils/helpers/tags"));

var _browser = _interopRequireDefault(require("../../utils/helpers/browser"));

var _tabs = _interopRequireDefault(require("./tabs.style"));

var _tabsHeader = _interopRequireDefault(require("./tabs-header/tabs-header.component"));

var _tabTitle = _interopRequireDefault(require("./tab-title/tab-title.component"));

var _optionsHelper = _interopRequireDefault(require("../../utils/helpers/options-helper"));

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

var Tabs =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Tabs, _React$Component);

  function Tabs() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Tabs);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Tabs)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      /**
       * Tracks the validity of each tab
       */
      tabValidity: _immutable.default.Map(),

      /**
       * Tracks the warning of each tab
       */
      tabWarning: _immutable.default.Map()
    });

    _defineProperty(_assertThisInitialized(_this), "_window", _browser.default.getWindow());

    _defineProperty(_assertThisInitialized(_this), "changeValidity", function (id, valid) {
      _this.setState(function (prevState) {
        return {
          tabValidity: prevState.tabValidity.set(id, valid)
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "changeWarning", function (id, warning) {
      _this.setState(function (prevState) {
        return {
          tabWarning: prevState.tabWarning.set(id, warning)
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleTabClick", function (ev) {
      if (_events.default.isEventType(ev, 'keydown')) {
        return;
      }

      var tabid = ev.target.dataset.tabid;

      _this.updateVisibleTab(tabid);
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyDown", function (index) {
      return function (event) {
        var isVertical = _this.isVertical(_this.props.position);

        var isUp = isVertical && _events.default.isUpKey(event);

        var isDown = isVertical && _events.default.isDownKey(event);

        var isLeft = !isVertical && _events.default.isLeftKey(event);

        var isRight = !isVertical && _events.default.isRightKey(event);

        if (isUp || isLeft) {
          _this.goToTab(event, index - 1);
        } else if (isDown || isRight) {
          _this.goToTab(event, index + 1);
        }
      };
    });

    _defineProperty(_assertThisInitialized(_this), "getTabValidationValues", function (tab) {
      var tabHasError = _this.state.tabValidity.get(tab.props.tabId) === false,
          tabHasWarning = _this.state.tabWarning.get(tab.props.tabId) === true && !tabHasError;
      return {
        tabHasError: tabHasError,
        tabHasWarning: tabHasWarning
      };
    });

    _defineProperty(_assertThisInitialized(_this), "isTabSelected", function (tabId) {
      return tabId === _this.state.selectedTabId;
    });

    return _this;
  }

  _createClass(Tabs, [{
    key: "getChildContext",

    /**
     * Returns tabs object to tab component.
     */
    value: function getChildContext() {
      return {
        tabs: {
          changeValidity: this.changeValidity,
          changeWarning: this.changeWarning
        }
      };
    }
  }, {
    key: "UNSAFE_componentWillMount",
    value: function UNSAFE_componentWillMount() {
      var selectedTabId;

      if (this.props.selectedTabId) {
        selectedTabId = this.props.selectedTabId;
      } else {
        var hash = this._window.location.hash.substring(1);

        if (Array.isArray(this.props.children)) {
          var children = (0, _lodash.compact)(this.props.children);
          var useHash = false;

          if (hash) {
            for (var index in children) {
              var child = children[index];

              if (child.props.tabId === hash) {
                useHash = true;
                break;
              }
            }
          }

          selectedTabId = useHash ? hash : children[0].props.tabId;
        } else {
          selectedTabId = this.props.children.props.tabId;
        }
      }

      this.setState({
        selectedTabId: selectedTabId
      });
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      if (this.props.selectedTabId !== nextProps.selectedTabId && nextProps.selectedTabId !== this.state.selectedTabId) {
        this.updateVisibleTab(nextProps.selectedTabId);
      }
    } // ** Store the window object as property. */

  }, {
    key: "goToTab",

    /**
     * Will trigger the tab at the given index.
     */
    value: function goToTab(event, index) {
      event.preventDefault();
      var newIndex = index;

      if (index < 0) {
        newIndex = this.tabIds.length - 1;
      } else if (index === this.tabIds.length) {
        newIndex = 0;
      }

      var nextTabId = this.tabIds[newIndex];
      var nextRef = this.tabRefs[newIndex];
      this.updateVisibleTab(nextTabId);
      this.focusTab(this[nextRef]);
    }
    /**
     * Updates the currently visible tab
     */

  }, {
    key: "updateVisibleTab",
    value: function updateVisibleTab(tabid) {
      if (this.props.setLocation) {
        var url = "".concat(this._window.location.origin).concat(this._window.location.pathname, "#").concat(tabid);

        this._window.history.replaceState(null, 'change-tab', url);
      }

      this.setState({
        selectedTabId: tabid
      });

      if (this.props.onTabChange) {
        this.props.onTabChange(tabid);
      }
    }
    /**
     * Focuses the tab for the reference specified
     */

  }, {
    key: "focusTab",
    value: function focusTab(ref) {
      var domNode = _reactDom.default.findDOMNode(ref); // eslint-disable-line react/no-find-dom-node


      domNode.focus();
    }
  }, {
    key: "isVertical",

    /**
     * Determines if the tab titles are in a vertical format.
     */
    value: function isVertical(position) {
      return position === 'left';
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement(_tabs.default, _extends({
        className: this.props.className,
        position: this.props.position
      }, (0, _tags.default)('tabs', this.props)), this.tabHeaders, this.tabs);
    }
  }, {
    key: "children",

    /**
     * The children nodes converted into an Array
     */
    get: function get() {
      return (0, _lodash.compact)(_react.default.Children.toArray(this.props.children));
    }
    /**
     * Array of the tabIds for the child nodes
     */

  }, {
    key: "tabIds",
    get: function get() {
      return this.children.map(function (child) {
        return child.props.tabId;
      });
    }
    /**
     * Build the headers for the tab component
     */

  }, {
    key: "tabHeaders",
    get: function get() {
      var _this2 = this;

      this.tabRefs = [];
      var tabTitles = this.children.map(function (child, index) {
        var _ref = "".concat(child.props.tabId, "-tab");

        _this2.tabRefs.push(_ref);

        var tabValidationValues = _this2.getTabValidationValues(child);

        var tabHasError = tabValidationValues.tabHasError,
            tabHasWarning = tabValidationValues.tabHasWarning;
        return _react.default.createElement(_tabTitle.default, {
          position: _this2.props.position,
          className: child.props.className || '',
          dataTabId: child.props.tabId,
          id: _ref,
          key: child.props.tabId,
          onClick: _this2.handleTabClick,
          onKeyDown: _this2.handleKeyDown(index),
          ref: function ref(node) {
            _this2[_ref] = node;
          },
          tabIndex: _this2.isTabSelected(child.props.tabId) ? '0' : '-1',
          title: child.props.title,
          isTabSelected: _this2.isTabSelected(child.props.tabId),
          tabHasError: tabHasError,
          tabHasWarning: tabHasWarning
        });
      });
      return _react.default.createElement(_tabsHeader.default, {
        align: this.props.align,
        position: this.props.position,
        role: "tablist"
      }, tabTitles);
    }
    /**
     * Builds the single currently selected tab
     */

  }, {
    key: "visibleTab",
    get: function get() {
      var _this3 = this;

      var visibleTab;
      this.children.forEach(function (child) {
        if (_this3.isTabSelected(child.props.tabId)) {
          visibleTab = child;
        }
      });
      return _react.default.cloneElement(visibleTab, {
        isTabSelected: this.isTabSelected(visibleTab.props.tabId)
      });
    }
    /**
     * Builds all tabs where non selected tabs have class of hidden
     */

  }, {
    key: "tabs",
    get: function get() {
      var _this4 = this;

      if (!this.props.renderHiddenTabs) {
        return this.visibleTab;
      }

      var tabs = this.children.map(function (child, index) {
        return _react.default.createElement(_tab.default, {
          role: "tabpanel",
          title: child.props.title,
          tabId: child.props.tabId,
          position: _this4.props.position,
          key: _this4.tabRefs[index],
          ariaLabelledby: _this4.tabRefs[index],
          isTabSelected: _this4.isTabSelected(child.props.tabId)
        }, child.props.children);
      });
      return tabs;
    }
  }]);

  return Tabs;
}(_react.default.Component); // ** Defines a context object for tab of the tabs component.
// https://facebook.github.io/react/docs/context.html */


exports.Tabs = Tabs;

_defineProperty(Tabs, "childContextTypes", {
  /**
   * Defines a context object for tab of the tabs component.
   * https://facebook.github.io/react/docs/context.html
   *
   */
  tabs: _propTypes.default.object
});

Tabs.childContextTypes = {
  tabs: _propTypes.default.object
};
Tabs.defaultProps = {
  renderHiddenTabs: true,
  align: 'left',
  position: 'top',
  setLocation: true
};
Tabs.propTypes = {
  className: _propTypes.default.string,
  renderHiddenTabs: _propTypes.default.bool,
  selectedTabId: _propTypes.default.string,
  children: _propTypes.default.oneOfType([_propTypes.default.array, _propTypes.default.object]).isRequired,
  align: _propTypes.default.oneOf(_optionsHelper.default.alignBinary),
  onTabChange: _propTypes.default.func,
  position: _propTypes.default.oneOf(['top', 'left']),
  setLocation: _propTypes.default.bool
};
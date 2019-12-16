"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.includes");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.map");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.string.includes");

require("core-js/modules/es.string.iterator");

require("core-js/modules/es.string.starts-with");

require("core-js/modules/web.dom-collections.for-each");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _i18nJs = _interopRequireDefault(require("i18n-js"));

var _actionPopover = require("./action-popover.style");

var _events = _interopRequireDefault(require("../../utils/helpers/events"));

var _guid = _interopRequireDefault(require("../../utils/helpers/guid"));

var _actionPopoverItem = _interopRequireDefault(require("./action-popover-item.component"));

var _actionPopoverDivider = _interopRequireDefault(require("./action-popover-divider.component"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var ActionPopover = function ActionPopover(_ref) {
  var children = _ref.children,
      id = _ref.id,
      onOpen = _ref.onOpen,
      onClose = _ref.onClose;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setOpenState = _useState2[1];

  var _useState3 = (0, _react.useState)(0),
      _useState4 = _slicedToArray(_useState3, 2),
      focusIndex = _useState4[0],
      setFocusIndex = _useState4[1];

  var _useState5 = (0, _react.useState)(),
      _useState6 = _slicedToArray(_useState5, 2),
      childrenWithRef = _useState6[0],
      setChildrenWithRef = _useState6[1];

  var _useState7 = (0, _react.useState)(),
      _useState8 = _slicedToArray(_useState7, 2),
      items = _useState8[0],
      setItems = _useState8[1];

  var _useState9 = (0, _react.useState)((0, _guid.default)()),
      _useState10 = _slicedToArray(_useState9, 1),
      guid = _useState10[0];

  var button = (0, _react.useRef)();
  var setOpen = (0, _react.useCallback)(function (value) {
    if (value && !isOpen) {
      onOpen();
    }

    if (!value && isOpen) {
      onClose();
    }

    setOpenState(value);
  }, [isOpen, onOpen, onClose, setOpenState]);
  var onButtonClick = (0, _react.useCallback)(function (e) {
    e.stopPropagation();
    var isOpening = !isOpen;
    setOpen(isOpening);

    if (isOpening) {
      // Opening the menu should focus the first MenuItem
      setFocusIndex(0);
    } else {
      // Closing the menu should focus the MenuButton
      button.current.focus();
    }
  }, [setOpen, isOpen]); // Keyboard commands implemented as reccomended by WAI-ARIA best practices
  // https://www.w3.org/TR/wai-aria-practices/examples/menu-button/menu-button-actions.html

  var onButtonKeyDown = (0, _react.useCallback)(function (e) {
    if (_events.default.isSpaceKey(e) || _events.default.isDownKey(e) || _events.default.isEnterKey(e)) {
      e.preventDefault();
      onButtonClick(e);
    } else if (_events.default.isUpKey(e)) {
      e.preventDefault();
      setFocusIndex(items.length - 1);
      setOpen(true);
    }
  }, [items, onButtonClick, setOpen]);
  var onKeyDown = (0, _react.useCallback)(function (e) {
    if (_events.default.isTabKey(e) && _events.default.isShiftKey(e)) {
      // SHIFT+TAB: close menu and allow focus to change to the previous focusable element, but not the button
      // allow the event to propegate before re-rendering, this will prevent the button from gaining focus
      setTimeout(function () {
        setOpen(false);
      }, 0);
    } else if (_events.default.isTabKey(e)) {
      // TAB: close menu and allow focus to change to next focusable element
      setOpen(false);
    } else if (_events.default.isEscKey(e)) {
      // ESC: close menu and focus menu button
      e.preventDefault();
      setOpen(false);
      button.current.focus();
    } else if (_events.default.isDownKey(e)) {
      // DOWN: focus next item or first
      e.preventDefault();
      e.stopPropagation();
      setFocusIndex(focusIndex < items.length - 1 ? focusIndex + 1 : 0);
    } else if (_events.default.isUpKey(e)) {
      // UP: focus previous item or last
      e.preventDefault();
      e.stopPropagation();
      setFocusIndex(focusIndex > 0 ? focusIndex - 1 : items.length - 1);
    } else if (_events.default.isHomeKey(e)) {
      // HOME: focus first item
      e.preventDefault();
      setFocusIndex(0);
    } else if (_events.default.isEndKey(e)) {
      // END: focus last item
      e.preventDefault();
      setFocusIndex(items.length - 1);
    } else if (_events.default.isAlphabetKey(e)) {
      // A-Za-z: focus the next item on the list that starts with the pressed key
      // selection should wrap to the start of the list
      e.stopPropagation();
      var firstMatch;
      var lastMatch;

      _react.default.Children.forEach(items, function (_ref2, index) {
        var text = _ref2.props.children;

        if (text && text.toLowerCase().startsWith(e.key.toLowerCase())) {
          if (!firstMatch) {
            firstMatch = index;
          }

          if (index > focusIndex && !lastMatch) {
            lastMatch = index;
          }
        }
      });

      if (lastMatch !== undefined) {
        setFocusIndex(lastMatch);
      } else if (firstMatch !== undefined) {
        setFocusIndex(firstMatch);
      }
    }
  }, [focusIndex, items, setOpen]);
  (0, _react.useEffect)(function () {
    var handler = function handler(e) {
      // If the event came from part of this component, close the menu.
      // There will be multiple document click listeners but we cant prevent propegation because it will interfere with
      // other instances on the same page
      if (!_events.default.composedPath(e).includes(button.current)) {
        setOpen(false);
      }
    };

    var event = 'click';
    document.addEventListener(event, handler);
    return function cleanup() {
      document.removeEventListener(event, handler);
    };
  }, [setOpen]);
  (0, _react.useEffect)(function () {
    var itemsWithRef = []; // childrenWith a clone of children with refs added so we can focus the dom element

    setChildrenWithRef(_react.default.Children.map(children, function (child) {
      if (child.type === _actionPopoverItem.default) {
        var itemWithRef = _react.default.cloneElement(child, {
          ref: _react.default.createRef()
        });

        itemsWithRef.push(itemWithRef);
        return itemWithRef;
      }

      return child;
    })); // items is used to manage focus, we don't want the focus index to count items that are not focusable
    // so we use a smaller array which makes keyboard navigation easier as we don't have to filter it on every
    // keypress

    setItems(itemsWithRef);
  }, [children]);
  (0, _react.useEffect)(function () {
    if (isOpen) {
      items[focusIndex].ref.current.focus();
    }
  }, [items, focusIndex, isOpen]);
  var buttonID = id || "ActionPopoverButton_".concat(guid);
  var menuID = "ActionPopoverMenu_".concat(guid);
  return _react.default.createElement(_actionPopover.MenuButton, _extends({
    id: buttonID,
    "data-component": "action-popover-button",
    role: "button",
    "aria-haspopup": "true",
    "aria-label": _i18nJs.default.t('actionpopover.aria-label', {
      defaultValue: 'actions'
    }),
    "aria-controls": menuID,
    "aria-expanded": isOpen,
    tabIndex: isOpen ? '-1' : '0'
  }, {
    onKeyDown: onButtonKeyDown,
    onClick: onButtonClick,
    isOpen: isOpen
  }, {
    ref: button
  }), _react.default.createElement(_actionPopover.ButtonIcon, {
    type: "ellipsis_vertical"
  }), _react.default.createElement(_actionPopover.Menu, {
    "data-component": "action-popover",
    isOpen: isOpen,
    onKeyDown: onKeyDown,
    id: menuID,
    "aria-labelledby": buttonID,
    role: "menu"
  }, childrenWithRef));
};

ActionPopover.propTypes = {
  id: _propTypes.default.string,
  onOpen: _propTypes.default.func,
  onClose: _propTypes.default.func,
  children: function children(props, propName, componentName) {
    var error;
    var prop = props[propName];

    _react.default.Children.forEach(prop, function (child) {
      if (![_actionPopoverItem.default.displayName, _actionPopoverDivider.default.displayName].includes(child.type.displayName)) {
        error = new Error("`".concat(componentName, "` only accepts children of type `").concat(_actionPopoverItem.default.displayName, "`") + " and `".concat(_actionPopoverDivider.default.displayName, "`."));
      }
    });

    return error;
  }
};
ActionPopover.defaultProps = {
  id: null,
  onOpen: function onOpen() {},
  onClose: function onClose() {}
};
var _default = ActionPopover;
exports.default = _default;
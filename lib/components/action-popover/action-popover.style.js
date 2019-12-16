"use strict";

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.freeze");

require("core-js/modules/es.object.get-own-property-descriptor");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuItemDivider = exports.MenuItemIcon = exports.ButtonIcon = exports.MenuButton = exports.MenuItemFactory = exports.Menu = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _mergeDeep = require("../../style/utils/merge-deep");

var _small = _interopRequireDefault(require("../../style/themes/small"));

var _base = require("../../style/themes/base");

var _icon = _interopRequireDefault(require("../icon"));

var _actionPopoverClassic = require("./action-popover-classic.style");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\npadding-right: 8px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  cursor: pointer;\n  width: 24px;\n  margin: auto;\n  ", "\n  &:hover, &:focus {\n    background-color: ", ";\n  }\n  &:focus {\n    outline: 2px solid ", ";\n  }\n\n  ", "\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  height: 1px;\n  margin: 9px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["background-color: ", ";"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  cursor: ", ";\n  box-sizing: border-box;\n  padding: 0 24px;\n  line-height: 40px;\n  white-space: nowrap;\n  user-select: none;\n  display: flex;\n  align-items: center;\n  border: none;\n  width: 100%;\n  color: ", ";\n  font-size: 14px;\n  font-weight: 700;\n  text-align: left;\n  &:focus, &:hover {\n    ", "\n  }\n  &:focus {\n    outline: none;\n    box-shadow: inset 0px 0px 0px 2px ", ";\n  }\n\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: ", ";\n  margin: 0;\n  padding: 9px 0;\n  box-shadow: ", ";\n  position: absolute;\n  right: 0;\n  background-color: ", ";\n  z-index: 1;\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Menu = _styledComponents.default.div(_templateObject(), function (_ref) {
  var isOpen = _ref.isOpen;
  return isOpen ? 'block' : 'none';
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.shadows.depth1;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.white;
}, _actionPopoverClassic.MenuClassic);

exports.Menu = Menu;

var MenuItemFactory = function MenuItemFactory(button) {
  return (0, _styledComponents.default)(button)(_templateObject2(), function (_ref4) {
    var disabled = _ref4.disabled;
    return disabled ? 'not-allowed' : 'pointer';
  }, function (_ref5) {
    var disabled = _ref5.disabled,
        theme = _ref5.theme;
    return disabled ? theme.menu.itemColorDisabled : theme.menu.itemColor;
  }, function (_ref6) {
    var disabled = _ref6.disabled;
    return !disabled && (0, _styledComponents.css)(_templateObject3(), function (_ref7) {
      var theme = _ref7.theme;
      return theme.menu.focus;
    });
  }, function (_ref8) {
    var theme = _ref8.theme;
    return theme.colors.focus;
  }, _actionPopoverClassic.MenuItemClassic);
};

exports.MenuItemFactory = MenuItemFactory;

var MenuItemDivider = _styledComponents.default.div.attrs({
  'data-element': 'action-popover-divider'
})(_templateObject4(), function (_ref9) {
  var theme = _ref9.theme;
  return theme.menu.divider;
});

exports.MenuItemDivider = MenuItemDivider;

var MenuButton = _styledComponents.default.div(_templateObject5(), function (_ref10) {
  var isOpen = _ref10.isOpen,
      theme = _ref10.theme;
  return isOpen && "background-color: ".concat(theme.colors.white);
}, function (_ref11) {
  var theme = _ref11.theme;
  return theme.colors.white;
}, function (_ref12) {
  var theme = _ref12.theme;
  return theme.colors.focus;
}, _actionPopoverClassic.MenuButtonClassic);
/**
 * Creates a factory that returns a styled component with a custom
 * theme provider wrapped around it
 * @param {*} themeFn
 */


exports.MenuButton = MenuButton;

var iconThemeProviderFactory = function iconThemeProviderFactory(themeFn) {
  return function (Component) {
    var customTheme = function customTheme(palette) {
      var color = themeFn(palette);
      return (0, _mergeDeep.mergeDeep)(_small.default, {
        icon: {
          default: color,
          defaultHover: color
        }
      });
    };

    var theme = (0, _base.mergeWithBase)(customTheme);
    return function (props) {
      return _react.default.createElement(_styledComponents.ThemeProvider, {
        theme: theme
      }, _react.default.createElement(Component, props));
    };
  };
};

var ButtonIcon = iconThemeProviderFactory(function (palette) {
  return palette.slate;
})(_icon.default);
exports.ButtonIcon = ButtonIcon;
var MenuItemIcon = (0, _styledComponents.default)(iconThemeProviderFactory(function () {
  return 'inherit';
})(_icon.default))(_templateObject6());
exports.MenuItemIcon = MenuItemIcon;
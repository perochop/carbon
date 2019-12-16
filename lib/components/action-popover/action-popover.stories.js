"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.from");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.freeze");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _documentation = require("./documentation");

var _ = require(".");

var _actionPopover = require("./action-popover.style");

var _docgenInfo = _interopRequireDefault(require("../../utils/helpers/docgen-info"));

var _themeSelectors = require("../../../.storybook/theme-selectors");

var _table = require("../table");

var _storiesOf$add, _storiesOf;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _templateObject() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledComponent = (0, _styledComponents.default)('div')(_templateObject()).render().type;
_.ActionPopover.__docgenInfo = (0, _docgenInfo.default)(require('./docgenInfo.json'), /action-popover\.component(?!spec)/);

function makeStory(storyName, themeSelector) {
  var component = function component() {
    return _react.default.createElement(_table.Table, {
      isZebra: true
    }, _react.default.createElement(_table.TableRow, null, _react.default.createElement(_table.TableHeader, null, "First Name"), _react.default.createElement(_table.TableHeader, null, "Last Name"), _react.default.createElement(_table.TableHeader, null, "\xA0")), _react.default.createElement(_table.TableRow, null, _react.default.createElement(_table.TableCell, null, "John"), _react.default.createElement(_table.TableCell, null, "Doe"), _react.default.createElement(_table.TableCell, null, _react.default.createElement(_.ActionPopover, null, _react.default.createElement(_.ActionPopoverItem, {
      icon: "email",
      onClick: (0, _addonActions.action)('email')
    }, "Email Invoice"), _react.default.createElement(_.ActionPopoverItem, {
      disabled: true,
      icon: "print",
      onClick: (0, _addonActions.action)('print')
    }, "Print Invoice"), _react.default.createElement(_.ActionPopoverItem, {
      icon: "pdf",
      onClick: (0, _addonActions.action)('pdf')
    }, "Download PDF"), _react.default.createElement(_.ActionPopoverItem, {
      icon: "csv",
      onClick: (0, _addonActions.action)('csv')
    }, "Download CSV"), _react.default.createElement(_.ActionPopoverDivider, null), _react.default.createElement(_.ActionPopoverItem, {
      icon: "delete",
      onClick: (0, _addonActions.action)('delete')
    }, "Delete")))), _react.default.createElement(_table.TableRow, null, _react.default.createElement(_table.TableCell, null, "Jane"), _react.default.createElement(_table.TableCell, null, "Smith"), _react.default.createElement(_table.TableCell, null, _react.default.createElement(_.ActionPopover, null, _react.default.createElement(_.ActionPopoverItem, {
      icon: "csv",
      onClick: (0, _addonActions.action)('csv')
    }, "Download CSV")))), _react.default.createElement(_table.TableRow, null, _react.default.createElement(_table.TableCell, null, "Bob"), _react.default.createElement(_table.TableCell, null, "Jones"), _react.default.createElement(_table.TableCell, null, _react.default.createElement(_.ActionPopover, null, _react.default.createElement(_.ActionPopoverItem, {
      icon: "csv",
      onClick: (0, _addonActions.action)('csv')
    }, "Download CSV")))));
  };

  var metadata = {
    themeSelector: themeSelector,
    notes: {
      markdown: _documentation.notes
    },
    info: {
      text: _documentation.Info,
      propTablesExclude: [_table.Table, _table.TableRow, _table.TableCell, _table.TableHeader, _actionPopover.MenuButton, StyledComponent]
    }
  };
  return [storyName, component, metadata];
}

(_storiesOf$add = (_storiesOf = (0, _react2.storiesOf)('Action Popover', module)).add.apply(_storiesOf, _toConsumableArray(makeStory('default', _themeSelectors.dlsThemeSelector)))).add.apply(_storiesOf$add, _toConsumableArray(makeStory('classic', _themeSelectors.classicThemeSelector)));
"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.from");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _themeSelectors = require("../../../.storybook/theme-selectors");

var _optionsHelper = _interopRequireDefault(require("../../utils/helpers/options-helper"));

var _row = require("./row");

var _documentation = require("./documentation");

var _docgenInfo = _interopRequireDefault(require("../../utils/helpers/docgen-info"));

var _storiesOf$add, _storiesOf;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

_row.Row.__docgenInfo = (0, _docgenInfo.default)(require('./docgenInfo.json'), /row\.js(?!spec)/);
_row.Column.__docgenInfo = (0, _docgenInfo.default)(require('./docgenInfo.json'), /column\.js(?!spec)/);

function makeStory(name, themeSelector) {
  var component = function component() {
    // row
    var columnDivide = (0, _addonKnobs.boolean)('columnDivide', true);
    var gutter = (0, _addonKnobs.select)('gutter', _optionsHelper.default.sizesFull, _row.Row.defaultProps.gutter); // column

    var columnAlign = (0, _addonKnobs.select)('columnAlign', _optionsHelper.default.alignBinary, _row.Column.defaultProps.columnAlign);
    var columnOffset = (0, _addonKnobs.text)('columnOffset', _row.Column.defaultProps.columnOffset);
    var columnSpan = (0, _addonKnobs.text)('columnSpan', _row.Column.defaultProps.columnSpan);
    var children = (0, _addonKnobs.text)('children', 'content');
    return _react.default.createElement(_row.Row, {
      columnDivide: columnDivide,
      gutter: gutter
    }, _react.default.createElement(_row.Column, {
      columnAlign: columnAlign,
      columnOffset: columnOffset,
      columnSpan: columnSpan
    }, children), _react.default.createElement(_row.Column, {
      columnAlign: columnAlign,
      columnOffset: columnOffset,
      columnSpan: columnSpan
    }, children), _react.default.createElement(_row.Column, {
      columnAlign: columnAlign,
      columnOffset: columnOffset,
      columnSpan: columnSpan
    }, children), _react.default.createElement(_row.Column, {
      columnAlign: columnAlign,
      columnOffset: columnOffset,
      columnSpan: columnSpan
    }, children));
  };

  var metadata = {
    themeSelector: themeSelector,
    notes: {
      markdown: _documentation.notes
    },
    info: {
      text: _documentation.info
    }
  };
  return [name, component, metadata];
}

(_storiesOf$add = (_storiesOf = (0, _react2.storiesOf)('Row', module)).add.apply(_storiesOf, _toConsumableArray(makeStory('default', _themeSelectors.dlsThemeSelector)))).add.apply(_storiesOf$add, _toConsumableArray(makeStory('classic', _themeSelectors.classicThemeSelector)));
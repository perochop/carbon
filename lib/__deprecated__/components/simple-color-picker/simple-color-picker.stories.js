"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _addonActions = require("@storybook/addon-actions");

var _storybookState = require("@sambego/storybook-state");

var _themeSelectors = require("../../../../.storybook/theme-selectors");

var _simpleColorPicker = _interopRequireDefault(require("./simple-color-picker"));

var _documentation = require("./documentation");

var _docgenInfo = _interopRequireDefault(require("../../../utils/helpers/docgen-info"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_simpleColorPicker.default.__docgenInfo = (0, _docgenInfo.default)(require('./docgenInfo.json'), /simple-color-picker\.js(?!spec)/);
var store = new _storybookState.Store({
  selectedColor: '#00DC00'
});

var onChange = function onChange(e) {
  store.set({
    selectedColor: e.target.value
  });
  (0, _addonActions.action)('select')();
};

(0, _react2.storiesOf)('__deprecated__/SimpleColorPicker', module).addParameters({
  info: {
    propTablesExclude: [_storybookState.State]
  }
}).add('classic', function () {
  var name = (0, _addonKnobs.text)('name', 'basicPicker');
  var availableColors = (0, _addonKnobs.array)('availableColors', ['#00DC00', '#255BC7', '#ED1C5F']);
  return _react.default.createElement(_storybookState.State, {
    store: store
  }, _react.default.createElement(_simpleColorPicker.default, {
    availableColors: availableColors,
    name: name,
    onChange: onChange
  }));
}, {
  notes: {
    markdown: _documentation.notes
  },
  info: {
    text: _documentation.info
  },
  themeSelector: _themeSelectors.classicThemeSelector
});
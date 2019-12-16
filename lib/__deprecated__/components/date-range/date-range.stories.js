"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _addonActions = require("@storybook/addon-actions");

var _storybookState = require("@sambego/storybook-state");

var _themeSelectors = require("../../../../.storybook/theme-selectors");

var _documentation = _interopRequireDefault(require("./documentation"));

var _dateRange = _interopRequireDefault(require("./date-range.js"));

var _docgenInfo = _interopRequireDefault(require("../../../utils/helpers/docgen-info"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dateRange.default.__docgenInfo = (0, _docgenInfo.default)(require('./docgenInfo.json'), /date-range(?!spec)/);
var store = new _storybookState.Store({
  value: ['2016-10-01', '2016-10-30']
});

var handleChange = function handleChange(newDate) {
  store.set({
    value: newDate
  });
  (0, _addonActions.action)('changed')(newDate);
};

(0, _react2.storiesOf)('__deprecated__/Date Range', module).addParameters({
  info: {
    propTablesExclude: [_storybookState.State]
  }
}).add('classic', function () {
  var endLabel = (0, _addonKnobs.text)('endLabel', '');
  var startLabel = (0, _addonKnobs.text)('startLabel', '');
  var startMessage = (0, _addonKnobs.text)('startMessage', 'Start date must not be later than the end date');
  var endMessage = (0, _addonKnobs.text)('endMessage', 'End date cannot be earlier than the start date');
  var labelLength = startLabel.length || endLabel.length;
  var labelsInline = labelLength ? (0, _addonKnobs.boolean)('labelsInline', false) : undefined;
  return _react.default.createElement(_storybookState.State, {
    store: store
  }, _react.default.createElement(_dateRange.default, {
    onChange: handleChange,
    endLabel: endLabel,
    value: store.get('value'),
    startLabel: startLabel,
    startMessage: startMessage,
    endMessage: endMessage,
    labelsInline: labelsInline
  }));
}, {
  notes: {
    markdown: _documentation.default
  },
  themeSelector: _themeSelectors.classicThemeSelector
});
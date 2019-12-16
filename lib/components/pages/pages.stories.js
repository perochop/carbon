"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.from");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _addonActions = require("@storybook/addon-actions");

var _storybookState = require("@sambego/storybook-state");

var _pages = _interopRequireDefault(require("./pages.component"));

var _page = _interopRequireDefault(require("./page/page.component"));

var _themeSelectors = require("../../../.storybook/theme-selectors");

var _dialogFullScreen = _interopRequireDefault(require("../dialog-full-screen"));

var _heading = _interopRequireDefault(require("../heading/heading"));

var _button = _interopRequireDefault(require("../button"));

var _docgenInfo = _interopRequireDefault(require("../../utils/helpers/docgen-info"));

var _docgenInfo2 = _interopRequireDefault(require("./docgenInfo.json"));

var _storiesOf$add, _storiesOf;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

_page.default.__docgenInfo = (0, _docgenInfo.default)(_docgenInfo2.default, /page\.js(?!spec)/);
_pages.default.__docgenInfo = (0, _docgenInfo.default)(_docgenInfo2.default, /pages(?!spec)/);
var store = new _storybookState.Store({
  open: false,
  pageIndex: 0,
  pageHistory: [],
  previouspageHistoryPointer: 0,
  isDisabled: false,
  transitionTime: 600
});

var handleSlide = function handleSlide(_, pageIndex) {
  (0, _addonActions.action)('slide')("Page index: ".concat(pageIndex));
  if (store.get('isDisabled')) return store.get('previouspageHistoryPointer');
  var newpageHistory = [].concat(_toConsumableArray(store.get('pageHistory')), [pageIndex]);
  store.set({
    isDisabled: true,
    pageHistory: newpageHistory,
    pageIndex: pageIndex || 0,
    previouspageHistoryPointer: newpageHistory.length - 1
  });
  setTimeout(function () {
    store.set({
      isDisabled: false
    });
  }, store.get('transitionTime'));
  return pageIndex;
};

var handlePreviousSlide = function handlePreviousSlide(ev) {
  ev.preventDefault();
  if (store.get('isDisabled')) return;
  var previouHistoryPointer = store.get('previouspageHistoryPointer');
  var pointer = previouHistoryPointer - 1 > 0 ? previouHistoryPointer - 1 : 0;
  store.set({
    isDisabled: true,
    pageHistory: store.get('pageHistory').slice(0, -1),
    pageIndex: store.get('pageHistory')[pointer] || 0,
    previouspageHistoryPointer: pointer
  });
  setTimeout(function () {
    store.set({
      isDisabled: false
    });
  }, store.get('transitionTime'));
};

var handleOpen = function handleOpen() {
  (0, _addonActions.action)('open')();
  store.set({
    open: true
  });
};

var handleCancel = function handleCancel() {
  (0, _addonActions.action)('cancel')();
  store.set({
    pageIndex: 0,
    open: false,
    pageHistory: [0]
  });
};

var CustomState = function CustomState(props) {
  return _react.default.createElement(_storybookState.State, {
    store: store
  }, props.children);
};

CustomState.propTypes = {
  children: _propTypes.default.node
};

var DialogState = function DialogState(props) {
  return new CustomState(props);
};

var PageState = function PageState(props) {
  return new CustomState(props);
};

var indexConfig = [0, 1, 2];

var pageIndex = function pageIndex() {
  return (0, _addonKnobs.select)('pageIndex', indexConfig, indexConfig[0]);
};

function makeStory(name, themeSelector) {
  var component = function component() {
    return _react.default.createElement("div", null, _react.default.createElement(_button.default, {
      onClick: handleOpen
    }, "Open Preview"), _react.default.createElement(DialogState, null, _react.default.createElement(_dialogFullScreen.default, {
      open: store.get('open'),
      onCancel: handleCancel
    }, _react.default.createElement(PageState, null, _react.default.createElement(_pages.default, {
      pageIndex: handleSlide(null, pageIndex())
    }, _react.default.createElement(_page.default, {
      title: _react.default.createElement(_heading.default, {
        title: "My First Page"
      })
    }, _react.default.createElement(_button.default, {
      onClick: function onClick(ev) {
        handleSlide(ev, 1);
      }
    }, "Go to second page")), _react.default.createElement(_page.default, {
      title: _react.default.createElement(_heading.default, {
        title: "My Second Page",
        backLink: handlePreviousSlide
      })
    }, _react.default.createElement(_button.default, {
      onClick: function onClick(ev) {
        handleSlide(ev, 2);
      }
    }, "Go to third page")), _react.default.createElement(_page.default, {
      title: _react.default.createElement(_heading.default, {
        title: "My Third Page",
        backLink: handlePreviousSlide
      })
    }))))));
  };

  var metadata = {
    themeSelector: themeSelector,
    info: {
      text: _react.default.createElement("p", null, "Allows to slide to different pages in a full screen dialog."),
      propTablesExclude: [_button.default, _dialogFullScreen.default, DialogState, PageState, _pages.default, _page.default, _storybookState.State]
    }
  };
  return [name, component, metadata];
}

(_storiesOf$add = (_storiesOf = (0, _react2.storiesOf)('Pages', module)).add.apply(_storiesOf, _toConsumableArray(makeStory('default', _themeSelectors.dlsThemeSelector)))).add.apply(_storiesOf$add, _toConsumableArray(makeStory('classic', _themeSelectors.classicThemeSelector)));
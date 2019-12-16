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

var _addonActions = require("@storybook/addon-actions");

var _card = _interopRequireDefault(require("./card.component"));

var _optionsHelper = _interopRequireDefault(require("../../utils/helpers/options-helper"));

var _documentation = require("./documentation");

var _docgenInfo = _interopRequireDefault(require("../../utils/helpers/docgen-info"));

var _icon = _interopRequireDefault(require("../icon"));

var _link = _interopRequireDefault(require("../link"));

var _heading = _interopRequireDefault(require("../heading"));

var _cardColumn = _interopRequireDefault(require("./card-column"));

var _cardFooter = _interopRequireDefault(require("./card-footer/card-footer.component"));

var _cardRow = _interopRequireDefault(require("./card-row"));

var _themeSelectors = require("../../../.storybook/theme-selectors");

var _storiesOf;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

_card.default.__docgenInfo = (0, _docgenInfo.default)(require('./docgenInfo.json'), /card.component(?!spec)/);
_cardColumn.default.__docgenInfo = (0, _docgenInfo.default)(require('./card-column/docgenInfo.json'), /card-column.component(?!spec)/);
_cardFooter.default.__docgenInfo = (0, _docgenInfo.default)(require('./card-footer/docgenInfo.json'), /card-footer.component(?!spec)/);
_cardRow.default.__docgenInfo = (0, _docgenInfo.default)(require('./card-row/docgenInfo.json'), /card-row.component(?!spec)/);

var cardKnobs = function cardKnobs() {
  return {
    key: 'one',
    cardSpacing: (0, _addonKnobs.select)('card spacing', _optionsHelper.default.sizesRestricted, _card.default.defaultProps.spacing),
    cardWidth: (0, _addonKnobs.text)('width', '500px'),
    interactive: (0, _addonKnobs.boolean)('interactive card', false)
  };
};

function getCard(knobs) {
  var cardSpacing = knobs.cardSpacing,
      cardWidth = knobs.cardWidth,
      interactive = knobs.interactive;
  return _react.default.createElement(_card.default, {
    spacing: cardSpacing,
    cardWidth: cardWidth,
    interactive: interactive,
    action: (0, _addonActions.action)('action prop triggered')
  }, _react.default.createElement(_cardRow.default, null, _react.default.createElement(_cardColumn.default, {
    align: "left"
  }, _react.default.createElement(_heading.default, {
    title: "Stripe - [account name]",
    divider: false
  }), _react.default.createElement("div", {
    style: {
      fontSize: '16px'
    }
  }, "user.name@sage.com")), _react.default.createElement(_cardColumn.default, {
    align: "right"
  }, _react.default.createElement(_icon.default, {
    type: "image"
  }))), _react.default.createElement(_cardRow.default, null, _react.default.createElement(_cardColumn.default, null, _react.default.createElement("div", {
    style: {
      fontWeight: 'bold',
      fontSize: '16px'
    }
  }, "Stripe Balance"), _react.default.createElement(_heading.default, {
    title: "\xA3 0.00",
    divider: false
  }), _react.default.createElement("div", {
    style: {
      fontSize: '12px'
    }
  }, "LAST ENTRY: 15 DAYS AGO"))), _react.default.createElement(_cardFooter.default, null, _react.default.createElement(_cardColumn.default, null, _react.default.createElement(_link.default, {
    icon: "link",
    href: "https://carbon.sage.com/"
  }, "View Stripe Dashboard"))));
}

function getSmallCard(knobs) {
  var border = knobs.border,
      cardSpacing = knobs.cardSpacing,
      cardWidth = knobs.cardWidth,
      interactive = knobs.interactive;
  return _react.default.createElement(_card.default, {
    spacing: cardSpacing,
    border: border,
    cardWidth: cardWidth,
    interactive: interactive,
    action: (0, _addonActions.action)('action prop triggered')
  }, _react.default.createElement(_cardRow.default, null, _react.default.createElement(_cardColumn.default, {
    align: "left"
  }, _react.default.createElement("div", {
    align: "left",
    style: {
      fontWeight: 'bold',
      fontSize: '16px',
      marginBottom: '10px'
    }
  }, "Accounting"), _react.default.createElement("span", {
    style: {
      fontWeight: 'bold',
      fontSize: '12px'
    }
  }, "\xA3 6.50 "), _react.default.createElement("span", {
    style: {
      fontSize: '12px'
    }
  }, "paid by client monthly"))), _react.default.createElement(_cardFooter.default, null, _react.default.createElement(_cardColumn.default, {
    align: "left"
  }, "Promo code"), _react.default.createElement(_cardColumn.default, {
    align: "right"
  }, "Manage")));
}

function makeStory(name, themeSelector) {
  var component = function component() {
    var knobs = cardKnobs();
    return [getCard(knobs), getSmallCard(knobs)];
  };

  var metadata = {
    themeSelector: themeSelector,
    info: {
      text: _documentation.Info,
      propTablesExclude: [_icon.default, _link.default, _heading.default]
    },
    notes: {
      markdown: _documentation.notes
    },
    knobs: {
      escapeHTML: false
    }
  };
  return [name, component, metadata];
}

(_storiesOf = (0, _react2.storiesOf)('Card', module)).add.apply(_storiesOf, _toConsumableArray(makeStory('default', _themeSelectors.dlsThemeSelector)));
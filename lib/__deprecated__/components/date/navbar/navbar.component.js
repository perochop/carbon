"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.object.keys");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _button = _interopRequireDefault(require("./button.style"));

var _navbar = _interopRequireDefault(require("./navbar.style"));

var _icon = _interopRequireDefault(require("../../../../components/icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Navbar = function Navbar(_ref) {
  var onPreviousClick = _ref.onPreviousClick,
      onNextClick = _ref.onNextClick,
      props = _objectWithoutProperties(_ref, ["onPreviousClick", "onNextClick"]);

  return _react.default.createElement(_navbar.default, props, _react.default.createElement(_button.default, {
    type: "button",
    onClick: function onClick() {
      return onPreviousClick();
    }
  }, _react.default.createElement(_icon.default, {
    type: "chevron_left"
  })), _react.default.createElement(_button.default, {
    type: "button",
    onClick: function onClick() {
      return onNextClick();
    }
  }, _react.default.createElement(_icon.default, {
    type: "chevron_right"
  })));
};

Navbar.propTypes = {
  onPreviousClick: _propTypes.default.func,
  onNextClick: _propTypes.default.func
};
var _default = Navbar;
exports.default = _default;
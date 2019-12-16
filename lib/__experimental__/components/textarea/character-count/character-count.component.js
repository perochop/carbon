"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.keys");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CharacterCount = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = require("styled-components");

var _base = _interopRequireDefault(require("../../../../style/themes/base"));

var _characterCount = _interopRequireDefault(require("./character-count.style"));

var _classicCharacterCount = _interopRequireDefault(require("./classic-character-count.component"));

var _styleHelper = require("../../../../utils/helpers/style-helper");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var CharacterCount = function CharacterCount(_ref) {
  var value = _ref.value,
      limit = _ref.limit,
      theme = _ref.theme,
      props = _objectWithoutProperties(_ref, ["value", "limit", "theme"]);

  if ((0, _styleHelper.isClassic)(theme)) {
    return _react.default.createElement(_classicCharacterCount.default, _extends({
      value: value,
      limit: limit,
      theme: theme
    }, props));
  }

  return _react.default.createElement(_characterCount.default, _extends({
    theme: theme
  }, props), value, "/", limit);
};

exports.CharacterCount = CharacterCount;
CharacterCount.propTypes = {
  value: _propTypes.default.string.isRequired,
  limit: _propTypes.default.string.isRequired,
  theme: _propTypes.default.object
};
CharacterCount.defaultProps = {
  theme: _base.default
};

var _default = (0, _styledComponents.withTheme)(CharacterCount);

exports.default = _default;
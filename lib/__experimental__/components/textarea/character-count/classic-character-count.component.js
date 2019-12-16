"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.object.keys");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _i18nJs = _interopRequireDefault(require("i18n-js"));

var _classicCharacterCount = _interopRequireDefault(require("./classic-character-count.style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var ClassicCharacterCount = function ClassicCharacterCount(_ref) {
  var value = _ref.value,
      limit = _ref.limit,
      props = _objectWithoutProperties(_ref, ["value", "limit"]);

  return _react.default.createElement(_classicCharacterCount.default, props, _i18nJs.default.t('textarea.limit.prefix', {
    defaultValue: 'You have used '
  }), _react.default.createElement("span", null, value), _i18nJs.default.t('textarea.limit.middle', {
    defaultValue: ' of '
  }), _react.default.createElement("span", null, limit), _i18nJs.default.t('textarea.limit.suffix', {
    defaultValue: ' characters'
  }));
};

ClassicCharacterCount.propTypes = {
  value: _propTypes.default.string.isRequired,
  limit: _propTypes.default.string.isRequired
};
var _default = ClassicCharacterCount;
exports.default = _default;
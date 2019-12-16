"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-own-property-descriptors");

require("core-js/modules/es.object.keys");

require("core-js/modules/web.dom-collections.for-each");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _i18nJs = _interopRequireDefault(require("i18n-js"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _tags = _interopRequireDefault(require("../../../../utils/helpers/tags/tags"));

var _button = _interopRequireDefault(require("../../../../components/button"));

var _optionsHelper = _interopRequireDefault(require("../../../../utils/helpers/options-helper"));

var _text = _interopRequireDefault(require("../../../../utils/helpers/text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var text = function text(props) {
  var formButtonName = props.formButtonName;

  var defaultValue = _text.default.titleCase(formButtonName);

  return props["".concat(formButtonName, "Text")] || _i18nJs.default.t("actions.".concat(formButtonName), {
    defaultValue: defaultValue
  });
};

var propsForButton = function propsForButton(props) {
  return {
    save: _objectSpread({
      as: 'primary',
      type: 'submit',
      disabled: props.saving
    }, props.saveButtonProps),
    cancel: _objectSpread({
      onClick: props.cancelClick,
      type: 'button'
    }, props.cancelButtonProps)
  };
};

var addButtonProps = function addButtonProps(props) {
  var formButtonName = props.formButtonName;
  return _objectSpread({}, propsForButton(props)[formButtonName], {
    'data-element': props.formButtonName
  }, props);
};

var FormButton = function FormButton(props) {
  return _react.default.createElement("div", (0, _tags.default)(props.formButtonName, props), _react.default.createElement(_button.default, addButtonProps(props), text(props)));
};

FormButton.propTypes = {
  formButtonName: _propTypes.default.oneOf(_optionsHelper.default.formButtonOptions),
  errors: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  warnings: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
};
var _default = FormButton;
exports.default = _default;
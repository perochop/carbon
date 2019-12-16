"use strict";

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.freeze");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = require("styled-components");

var _icon = _interopRequireDefault(require("../icon/icon.style"));

var _styleHelper = require("../../utils/helpers/style-helper");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    background-color: transparent;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  align-items: center;\n  display: flex;\n  margin-left: auto;\n  margin-right: 15px;\n  justify-content: center;\n  text-align: center;\n  position: static;\n  min-width: 15px;\n  \n  ", " {\n    &:before {\n      color: ", ";\n      font-size:16px;\n    }\n    &:hover:before{\n      color: ", ";\n    }\n  }\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var colors = {
  error: '#c7384f',
  warning: '#ff7d00',
  success: '#50b848',
  info: '#1573e6',
  default: '#335c6d',
  help: '#ffab00',
  maintenance: '#ff7d00',
  new: '#639'
};

var _default = function _default(_ref) {
  var theme = _ref.theme,
      variant = _ref.variant;
  return (0, _styleHelper.isClassic)(theme) && (0, _styledComponents.css)(_templateObject(), _icon.default, colors[variant], colors[variant], function (_ref2) {
    var transparent = _ref2.transparent;
    return transparent && (0, _styledComponents.css)(_templateObject2());
  });
};

exports.default = _default;
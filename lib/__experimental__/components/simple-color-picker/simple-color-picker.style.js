"use strict";

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.freeze");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledColorOptions = exports.SimpleColorFieldset = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _fieldset = _interopRequireDefault(require("../fieldset"));

var _fieldset2 = require("../fieldset/fieldset.style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  padding: 0;\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  max-width: 300px;\n\n  ", " {\n    margin-bottom: 16px;\n    height: 26px;\n\n    legend {\n      font-size: 14px;\n      margin-left: -2px;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SimpleColorFieldset = (0, _styledComponents.default)(_fieldset.default)(_templateObject(), _fieldset2.LegendContainerStyle);
exports.SimpleColorFieldset = SimpleColorFieldset;

var StyledColorOptions = _styledComponents.default.div(_templateObject2());

exports.StyledColorOptions = StyledColorOptions;
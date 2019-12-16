"use strict";

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.freeze");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RainbowStyle = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _base = _interopRequireDefault(require("../../style/themes/base"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    text-align: center;\n\n    .highcharts-container {\n        display: inline-block;\n    }\n\n    .highcharts-series path {\n        transform-origin: 50% 35%;\n        transform: scale(1);\n        transition: transform 0.2s;\n        visibility: visible;\n\n        &:hover {\n        transform: scale(1.25);\n        }\n    }\n\n    .highcharts-title {\n        color: ", ";\n        font-family: 'Lato', 'Helvetica Neue', Arial, sans-serif;\n        font-size: 25px;\n        font-weight: bold;\n        line-height: 16px;\n        text-align: center;\n    }\n\n    .highcharts-tooltip {\n        font-family: 'Lato', 'Helvetica Neue', Arial, sans-serif;\n        font-weight: bold;\n        margin-top: 20px;\n    }\n\n    .highcharts-data-labels {\n        text-align: center;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var RainbowStyle = _styledComponents.default.div(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.rainbow.textColor;
});

exports.RainbowStyle = RainbowStyle;
RainbowStyle.defaultProps = {
  theme: _base.default
}; // eslint-disable-next-line import/prefer-default-export
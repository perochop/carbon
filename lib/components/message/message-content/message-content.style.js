"use strict";

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.freeze");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _messageContentClassic = _interopRequireDefault(require("./message-content-classic.style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  padding: 15px 50px 15px 20px;\n  white-space: pre-wrap;\n\n  .carbon-content__title {\n    margin-bottom: 2px;\n  }\n\n  .carbon-content__body {\n    margin-top: 0px;\n  }\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var MessageContentStyle = _styledComponents.default.div(_templateObject(), _messageContentClassic.default);

var _default = MessageContentStyle;
exports.default = _default;
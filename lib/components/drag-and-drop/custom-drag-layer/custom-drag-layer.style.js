"use strict";

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.freeze");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  left: 0;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  pointer-events: none;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 100;\n  box-shadow: 0 10px 20px 0 rgba(0,20,29,0.2), 0 20px 40px 0 rgba(0,20,29,0.1);\n  cursor: move;\n  cursor: grabbing;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledDragContainer = _styledComponents.default.div(_templateObject());

var _default = StyledDragContainer;
exports.default = _default;
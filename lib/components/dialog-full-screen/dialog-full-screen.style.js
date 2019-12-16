"use strict";

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.freeze");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _dialogFullScreenClassic = _interopRequireDefault(require("./dialog-full-screen-classic.style"));

var _base = _interopRequireDefault(require("../../style/themes/base"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  height: 100%;\n  left: 0;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 1000;\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledDialogFullScreen = _styledComponents.default.div(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.disabled.input;
}, _dialogFullScreenClassic.default);

StyledDialogFullScreen.defaultProps = {
  theme: _base.default
};
var _default = StyledDialogFullScreen;
exports.default = _default;
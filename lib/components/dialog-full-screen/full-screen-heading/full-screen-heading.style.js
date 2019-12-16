"use strict";

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.freeze");

require("core-js/modules/es.object.get-own-property-descriptor");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _fullScreenHeadingClassic = _interopRequireDefault(require("./full-screen-heading-classic.style"));

var _base = _interopRequireDefault(require("../../../style/themes/base"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    border-bottom: 1px solid ", ";\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", "\n\n  .carbon-app-wrapper {\n    position: relative;\n    max-width: none;\n    padding: 32px;\n  }\n\n  .carbon-heading {\n    .carbon-heading__header {\n      background-color: transparent;\n      align-items: center;\n      box-sizing: content-box;\n      display: flex;\n      margin-bottom: 0;\n      padding-bottom: 0;\n      width: 100%;\n      border: none;\n\n      .icon-chevron_left:before {\n        font-size: 24px;\n      }\n\n      .carbon-heading__back {\n        margin-top: -8px;\n        margin-left: -5px;\n      }\n    }\n  }\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledFullScreenHeading = _styledComponents.default.div(_templateObject(), function (_ref) {
  var hasContent = _ref.hasContent;
  return hasContent && (0, _styledComponents.css)(_templateObject2(), function (_ref2) {
    var theme = _ref2.theme;
    return theme.disabled.border;
  });
}, _fullScreenHeadingClassic.default);

StyledFullScreenHeading.defaultProps = {
  theme: _base.default
};
var _default = StyledFullScreenHeading;
exports.default = _default;
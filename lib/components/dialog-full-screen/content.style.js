"use strict";

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.freeze");

require("core-js/modules/es.object.get-own-property-descriptor");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _fullScreenHeading = _interopRequireDefault(require("./full-screen-heading/full-screen-heading.style"));

var _contentClassic = _interopRequireDefault(require("./content-classic.style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    ", " + & {\n      height: calc(100% - ", "px);\n    }\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  overflow-y: auto;\n\n  ", "\n\n  .carbon-app-wrapper {\n    max-width: none;\n    padding: 27px 32px 32px 32px;\n  }\n\n  ", "\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledContent = _styledComponents.default.div(_templateObject(), function (_ref) {
  var headingHeight = _ref.headingHeight;
  return (0, _styledComponents.css)(_templateObject2(), _fullScreenHeading.default, headingHeight);
}, function (_ref2) {
  var hasHeader = _ref2.hasHeader;
  return !hasHeader && "\n    padding-top: 0;\n    margin-top: -25px;\n\n    .carbon-app-wrapper {\n      max-width: 100%;\n      padding: 0;\n      height: 70px;\n    }\n  ";
}, _contentClassic.default);

StyledContent.defaultProps = {
  headingHeight: 0
};
var _default = StyledContent;
exports.default = _default;
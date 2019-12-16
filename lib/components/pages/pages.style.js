"use strict";

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.freeze");

require("core-js/modules/es.object.get-own-property-descriptor");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PagesContent = exports.PagesWrapperStyle = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _pages = require("./pages.config");

var _heading = require("../heading/heading.style");

var _styleHelper = require("../../utils/helpers/style-helper");

var _link = _interopRequireDefault(require("../link/link.style"));

var _base = _interopRequireDefault(require("../../style/themes/base"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  .carbon-carousel__content {\n    overflow: hidden;\n    position: relative;\n  }\n\n  ", ";\n  ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n        top: 12px;\n\n        &:focus {\n          outline: solid 3px ", ";\n        }\n      "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  border: none;\n  \n  ", " {\n    a{\n      height: 26px;\n      background-color: transparent;\n      top: 50px;\n      margin-top: -5px;\n\n      ", "\n\n       > span {\n        display: block;\n        height: 26px;\n\n         > span {\n          display: block;\n          height: 26px;\n\n          ", " {\n            margin-top: -9px;\n            top: 7px;\n            height: 26px;\n\n            &:before {\n              line-height: 26px;\n            }\n          }\n        }\n      }\n    }\n  }\n\n  .carbon-app-wrapper {\n    min-width: auto;\n    max-width: 100%;\n  }\n\n  ", " {\n    padding-left: 40px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var PagesContent = _styledComponents.default.div(_templateObject(), _link.default, function (_ref) {
  var theme = _ref.theme;
  return !(0, _styleHelper.isClassic)(theme) && (0, _styledComponents.css)(_templateObject2(), theme.colors.focus);
}, _heading.StyledHeadingIcon, _heading.StyledHeading);

exports.PagesContent = PagesContent;

var PagesWrapperStyle = _styledComponents.default.div(_templateObject3(), _pages.slideAnimation, _pages.fadeAnimation);

exports.PagesWrapperStyle = PagesWrapperStyle;
PagesContent.defaultProps = {
  theme: _base.default
};
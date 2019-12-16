"use strict";

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.freeze");

require("core-js/modules/es.object.get-own-property-descriptor");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _tabsHeaderClassic = _interopRequireDefault(require("./tabs-header-classic.style"));

var _optionsHelper = _interopRequireDefault(require("../../../utils/helpers/options-helper"));

var _base = _interopRequireDefault(require("../../../style/themes/base"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    flex-direction: column;\n    box-shadow: inset -2px 0px 0px 0px ", ";\n    width: 20%;\n    margin: 0 10px 0;\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    justify-content: flex-end;\n    text-align: right;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  box-shadow: inset 0px -2px 0px 0px ", ";\n  cursor: pointer;\n  list-style: none;\n  margin: 0 0 10px;\n  padding: 0;\n\n  ", "\n\n  ", "\n  \n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledTabHeaders = _styledComponents.default.ul(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.disabled.background;
}, function (_ref2) {
  var align = _ref2.align;
  return align === 'right' && (0, _styledComponents.css)(_templateObject2());
}, function (_ref3) {
  var position = _ref3.position;
  return position === 'left' && (0, _styledComponents.css)(_templateObject3(), function (_ref4) {
    var theme = _ref4.theme;
    return theme.disabled.background;
  });
}, _tabsHeaderClassic.default);

StyledTabHeaders.defaultProps = {
  align: 'left',
  position: 'top',
  theme: _base.default
};
StyledTabHeaders.propTypes = {
  align: _propTypes.default.oneOf(_optionsHelper.default.alignBinary),
  position: _propTypes.default.oneOf(['top', 'left'])
};
var _default = StyledTabHeaders;
exports.default = _default;
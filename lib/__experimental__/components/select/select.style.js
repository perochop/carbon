"use strict";

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.freeze");

require("core-js/modules/es.object.get-own-property-descriptor");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledSelectPillContainer = exports.StyledSelect = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _base = _interopRequireDefault(require("../../../style/themes/base"));

var _pill = _interopRequireDefault(require("../../../components/pill/pill.style"));

var _input = _interopRequireDefault(require("../input/input.style"));

var _icon = _interopRequireDefault(require("../../../components/icon/icon.style"));

var _styleHelper = require("../../../utils/helpers/style-helper");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin: 3px 2px 3px 0;\n\n  && ", " {\n    text-overflow: ellipsis;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    &:hover {\n      ", " {\n        color: ", ";\n      }\n    }\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    ", "::placeholder {\n      opacity: 0;\n    }\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", "\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledSelect = _styledComponents.default.div(_templateObject(), function (_ref) {
  var isAnyValueSelected = _ref.isAnyValueSelected;
  return isAnyValueSelected && (0, _styledComponents.css)(_templateObject2(), _input.default);
}, function (_ref2) {
  var theme = _ref2.theme;
  return (0, _styleHelper.isClassic)(theme) && (0, _styledComponents.css)(_templateObject3(), _icon.default, theme.colors.white);
});

exports.StyledSelect = StyledSelect;

var StyledSelectPillContainer = _styledComponents.default.div(_templateObject4(), _pill.default);

exports.StyledSelectPillContainer = StyledSelectPillContainer;
StyledSelectPillContainer.propTypes = {
  theme: _propTypes.default.object
};
StyledSelectPillContainer.defaultProps = {
  theme: _base.default
};
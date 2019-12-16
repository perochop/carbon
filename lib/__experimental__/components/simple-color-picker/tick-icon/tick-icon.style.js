"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.freeze");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _icon = _interopRequireDefault(require("../../../../components/icon"));

var _getRgbValues = _interopRequireDefault(require("../../../../style/utils/get-rgb-values"));

var _base = _interopRequireDefault(require("../../../../style/themes/base"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      {\n        display: block;\n      }\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    height: 22px;\n    width: 22px;\n    pointer-events: none;\n    display: none;\n\n    &::before {\n      font-size: 22px;\n      color: ", ";\n    }\n\n    ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var getIconColor = function getIconColor(color, theme) {
  var rgbValues = (0, _getRgbValues.default)(color);

  var _rgbValues = _slicedToArray(rgbValues, 3),
      r = _rgbValues[0],
      g = _rgbValues[1],
      b = _rgbValues[2]; // color contrast calculating formula as per W3 suggestions


  var redMultiplier = 299,
      greenMultiplier = 587,
      blueMultiplier = 114;
  var contrast = (Math.round(r * redMultiplier) + Math.round(g * greenMultiplier) + Math.round(b * blueMultiplier)) / 1000;
  if (contrast < 128) return theme.colors.white;
  return theme.text.color;
};

var StyledTickIcon = (0, _styledComponents.default)(_icon.default)(_templateObject(), function (_ref) {
  var color = _ref.color,
      theme = _ref.theme;
  return getIconColor(color, theme);
}, function (_ref2) {
  var checked = _ref2.checked;
  return checked && (0, _styledComponents.css)(_templateObject2());
});
StyledTickIcon.defaultProps = {
  theme: _base.default
};
var _default = StyledTickIcon;
exports.default = _default;
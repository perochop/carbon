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

var _base = _interopRequireDefault(require("../../../style/themes/base"));

var _switchSliderPanelClassic = _interopRequireDefault(require("./switch-slider-panel-classic.style"));

var _loader = _interopRequireDefault(require("../../../components/loader/loader.style"));

var _loaderSquare = _interopRequireDefault(require("../../../components/loader/loader-square.style"));

var _switchClassicLoaderSquare = _interopRequireDefault(require("./switch-classic-loader-square.style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n      ", " {\n        {\n          padding: 0 3px 3px 0;\n\n          ", " {\n            height: 5px;\n            margin-bottom: 2px;\n            margin-right: 2px;\n            width: 5px;\n\n            ", "\n          }\n        }\n      }\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    border: 0;\n    color: ", ";\n    margin: auto;\n    margin-top: ", ";\n\n    &[type='on'] {\n      margin-left: 9px;\n    }\n\n    &[type='off'] {\n      color: ", ";\n      margin-right: 6px;\n    }\n\n    ", "\n\n    ", "\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SwitchSliderPanel = _styledComponents.default.div(_templateObject(), function (_ref) {
  var isLoading = _ref.isLoading,
      size = _ref.size,
      theme = _ref.theme;
  return (0, _styledComponents.css)(_templateObject2(), theme.colors.white, size === 'large' ? '12px' : '5px', theme.text.color, _switchSliderPanelClassic.default, isLoading && (0, _styledComponents.css)(_templateObject3(), _loader.default, _loaderSquare.default, _switchClassicLoaderSquare.default));
});

SwitchSliderPanel.propTypes = {
  isLoading: _propTypes.default.bool,
  size: _propTypes.default.string,
  theme: _propTypes.default.object
};
SwitchSliderPanel.defaultProps = {
  theme: _base.default
};
var _default = SwitchSliderPanel;
exports.default = _default;
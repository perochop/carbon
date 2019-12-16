"use strict";

require("core-js/modules/es.object.get-own-property-descriptor");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "RadioButton", {
  enumerable: true,
  get: function get() {
    return _radioButton.default;
  }
});
Object.defineProperty(exports, "PrivateRadioButton", {
  enumerable: true,
  get: function get() {
    return _radioButton.PrivateRadioButton;
  }
});
Object.defineProperty(exports, "RadioButtonGroup", {
  enumerable: true,
  get: function get() {
    return _radioButtonGroup.default;
  }
});
exports.default = void 0;

var _radioButton = _interopRequireWildcard(require("./radio-button.component"));

var _radioButtonGroup = _interopRequireDefault(require("./radio-button-group.component"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var _default = _radioButton.default;
exports.default = _default;
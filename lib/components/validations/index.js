"use strict";

require("core-js/modules/es.object.get-own-property-descriptor");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "withValidations", {
  enumerable: true,
  get: function get() {
    return _formWithValidations.withValidations;
  }
});
Object.defineProperty(exports, "ValidationsContext", {
  enumerable: true,
  get: function get() {
    return _formWithValidations.ValidationsContext;
  }
});
Object.defineProperty(exports, "withValidation", {
  enumerable: true,
  get: function get() {
    return _withValidation.default;
  }
});
Object.defineProperty(exports, "validationsPropTypes", {
  enumerable: true,
  get: function get() {
    return _withValidation.validationsPropTypes;
  }
});
exports.default = void 0;

var _formWithValidations = require("./form-with-validations.hoc");

var _withValidation = _interopRequireWildcard(require("./with-validation.hoc"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var _default = _formWithValidations.withValidations;
exports.default = _default;
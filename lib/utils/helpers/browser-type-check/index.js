"use strict";

require("core-js/modules/es.object.get-own-property-descriptor");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _browserTypeCheck.default;
  }
});
Object.defineProperty(exports, "isSafari", {
  enumerable: true,
  get: function get() {
    return _browserTypeCheck.isSafari;
  }
});
Object.defineProperty(exports, "isEdge", {
  enumerable: true,
  get: function get() {
    return _browserTypeCheck.isEdge;
  }
});

var _browserTypeCheck = _interopRequireWildcard(require("./browser-type-check"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }
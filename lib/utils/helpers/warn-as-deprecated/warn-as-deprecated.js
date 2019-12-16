"use strict";

require("core-js/modules/es.array.concat");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _logger = _interopRequireDefault(require("../../logger"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A function to display a warning in the console when a deprecated component is being used in developpment
 */
var _default = function _default(oldName, newName) {
  if (process.env.NODE_ENV === 'development' && oldName.length && newName.length) {
    var warnMessage = "".concat(oldName, " is marked as deprecated, it will soon be moved to \"carbon-graveyard\" and be replaced by ").concat(newName);

    _logger.default.deprecate(warnMessage);
  }
};

exports.default = _default;
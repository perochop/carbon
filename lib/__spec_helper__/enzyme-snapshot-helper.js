"use strict";

require("core-js/modules/web.dom-collections.for-each");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.snapshotWithoutProps = snapshotWithoutProps;
exports.noThemeSnapshot = noThemeSnapshot;

var _enzymeToJson = _interopRequireDefault(require("enzyme-to-json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function snapshotWithoutProps(enzymeWrapper, propNames) {
  var propNameList = propNames;

  if (!Array.isArray(propNames)) {
    propNameList = [propNames];
  }

  var snapshotOptions = {
    map: function map(json) {
      propNameList.forEach(function (prop) {
        if (json.props[prop]) {
          json.props[prop] = "[ ".concat(prop, " object ]");
        }
      });
      return json;
    }
  };
  return (0, _enzymeToJson.default)(enzymeWrapper, snapshotOptions);
}

function noThemeSnapshot(enzymeWrapper) {
  return snapshotWithoutProps(enzymeWrapper, 'theme');
}
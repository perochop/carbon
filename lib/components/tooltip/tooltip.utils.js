"use strict";

require("core-js/modules/es.array.includes");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasTheSameOrientation = hasTheSameOrientation;
exports.isVertical = isVertical;
exports.isHorizontal = isHorizontal;
exports.getOppositeDirection = getOppositeDirection;
var oppositeDirections = {
  left: 'right',
  right: 'left',
  top: 'bottom',
  bottom: 'top'
};

function hasTheSameOrientation(tooltipPosition, pointerAlign) {
  var isPositionVertical = isVertical(tooltipPosition);
  var isAlignHorizontal = isHorizontal(pointerAlign);
  var isAlignVertical = isVertical(pointerAlign);
  var areBothVertical = isPositionVertical && isAlignVertical; // position nas no "center" value, so there is no need to check for horizontal

  var areBothHorizontal = !isPositionVertical && isAlignHorizontal;
  return areBothVertical || areBothHorizontal;
}

function isVertical(property) {
  return ['top', 'bottom'].includes(property);
}

function isHorizontal(property) {
  return ['left', 'right'].includes(property);
}

function getOppositeDirection(currentDirection) {
  return oppositeDirections[currentDirection];
}
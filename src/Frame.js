'use strict'

function Frame(rolls) {
  this.rolls = []
  this.rolls = rolls;


Frame.prototype.frameTotal = function(frameScore, frameBonus) {
  return frameScore + frameBonus;
}


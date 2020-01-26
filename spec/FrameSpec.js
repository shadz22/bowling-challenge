'use strict'

describe('Frame', function() {
  var frame;

  describe('when there is no strike', function() {
    it('calculates the frame score by adding the two rolls per frame', function() {
      frame = new Frame([3,4]);
      var nextFrame = new Frame([5,3]);
      expect(frame.frameTotal(7, 0)).toEqual(7);
    }); 
  })

  describe('when there is a strike', function() {
    it('calculates the frame total score if next frame is not a strike or spare', function() {
      frame = new Frame([10]);
      var nextFrame = new Frame([3,5]);
      expect(frame.frameTotal(10, 8)).toEqual(18);
    });
    
    
  })
 

})
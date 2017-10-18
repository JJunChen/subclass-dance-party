var makeExpandDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.move;
  // var blinkyDancer = new makeDancer(top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.$node.prepend('<img id="star" src="src/Gold_Star.svg" />');
  // this.$node.css({'border': 'none', 'height': '5%', 'width': '5%'});
  this.$node.css({'border': 'none', 'height': 20, 'width': 20});
};

makeExpandDancer.prototype = Object.create(makeDancer.prototype);
makeExpandDancer.prototype.constructor = makeExpandDancer;

makeExpandDancer.prototype.step = function() {
  var left = this.left;
  var top = this.top;
  var height = $("body").height();
  var width = $("body").width();
  var self = this;
  // call the old version of step at the beginning of any call to this new version of step
  // makeDancer.prototype.step.call(this);
  
  this.move = setInterval(function() {
    left += 20;
    top += 20;
    if (left > width) {
      left = 0;
    }
    if (top > height) {
      top = 0;
    }
    self.$node.css({'left': left, 'top': top});
  }, 100);

  // var stop = setTimeout(function() {
  // return function() {
  //   clearInterval(move);
  // };
  // if (this.isMoving) {
  //   clearInterval(move);
  // }
  
};

makeExpandDancer.prototype.lineUp = function(top, left, counter) {
  if (counter % 2 === 0) {
    this.step();
  } else {
    var stop = clearInterval(this.move);
  }
  makeDancer.prototype.lineUp.call(this, top, left, counter);
};

makeExpandDancer.prototype.moveCloser = function() {};
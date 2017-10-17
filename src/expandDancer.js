var makeExpandDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  // var blinkyDancer = new makeDancer(top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.$node.prepend('<img id="star" src="src/Gold_Star.svg" />');
  this.$node.css({'border': 'none', 'height': '5%', 'width': '5%'});
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
  setInterval(function() {
    left += 20;
    top += 20;
    if (left > width) {
      left = 0;
    }
    if (top > height) {
      top = 0;
    }
    self.$node.css({'left': left, 'top': top});
  }, 50);
  // var top = this.top - 10;
  // var self = this;
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  // var randomSize = JSON.stringify(Math.floor(Math.random() * 50));
  // setInterval(function() {
  //   self.$node.css({'top': top, 'left': left});
  // }, 10);
  // this.$node.css({'left': left});
};
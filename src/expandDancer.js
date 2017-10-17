var makeExpandDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  // var blinkyDancer = new makeDancer(top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};

makeExpandDancer.prototype = Object.create(makeDancer.prototype);
makeExpandDancer.prototype.constructor = makeExpandDancer;

makeExpandDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  var randomSize = JSON.stringify(Math.floor(Math.random() * 50));
  console.log(randomSize);

  this.$node.css({'height': randomSize, 'width': randomSize, 'border-radius': '50%', 'background': 'red'});
};
// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {
  this.top = top;
  this.left = left;
  // this.liningUp = false;

  
  this.timeBetweenSteps = timeBetweenSteps;

  // // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');


  this.step();  

  // // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // // this one sets the position to some random default point within the body
  this.setPosition(top, left);
  this.$node.on('mouseover', function(event) {
    console.log(event);
  });
  // return dancer;
};

makeDancer.prototype.step = function () {
  // var timeBetweenSteps = this.timeBetweenSteps;
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function (top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

makeDancer.prototype.lineUp = function (top, left, counter) {
  if (counter % 2 === 0) {
    var styleSettings = {
      top: this.top,
      left: this.left
    };
  } else {
    var styleSettings = {
      top: top,
      left: left
    };
  }
  this.$node.css(styleSettings);
};







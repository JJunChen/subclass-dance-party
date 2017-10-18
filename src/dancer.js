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
  this.$node.on('mouseover', (function(event) {
    this.$node.css({'height': 40, 'width': 40});
  }).bind(this));
  this.$node.on('mouseout', (function() {
    this.$node.css({'height': 20, 'width': 20});
  }).bind(this));

  this.moveCloser();
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

makeDancer.prototype.moveCloser = function () {
  var distances = [];
  var stars = [];
  for (let i = 0; i < window.dancers.length; i++) {
    //dancer could be a star
    if (window.dancers[i].constructor === makeExpandDancer && window.dancers[i] !== this) {
      var location = window.dancers[i].$node.position();
      var x = location.left - this.left;
      var y = location.top - this.top;
      var dis = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
      if (dis < 100) {
        stars.push(window.dancers[i]);
        distances.push(dis);
      }
    }
  } 
  if (distances.length > 0) {
    var index = distances.indexOf(Math.min.apply(null, distances));
    var closestDancer = stars[index];
    var closestDancerPos = closestDancer.$node.position();
    var move;
    if (this.left - closestDancerPos.left > 0) {
      move = setInterval((function() {
        this.left -= 20;
        this.top += 20;
        this.$node.css({'left': this.left, 'top': this.top});
      }).bind(this), 500);
      var stop = setTimeout(function() {
        clearInterval(move);
      }, 500);
    } else {
      move = setInterval((function() {
        this.left += 20;
        this.top -= 20;
        this.$node.css({'left': this.left, 'top': this.top});
      }).bind(this), 500);
      var stop = setTimeout(function() {
        clearInterval(move);
      }, 500);
    }
  }
  setTimeout(this.moveCloser.bind(this), 500);
};







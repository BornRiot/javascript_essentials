function Apple (x, y, color, score){
  this.x  = x;
  this.y = y;
  this.color = color;
  this.score = score;
}

// In order to invoke an instance of the Apple constructor function use:
new Apple(10,25, 'blue', 100);

// Assign function to an instance with a proper name
var Apple1 = new Apple(10,25, 'blue', 100);

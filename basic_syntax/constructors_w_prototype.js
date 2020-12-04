function Apple(color, weight){
  this.color = color;
  this.weight = weight;

}

// Create an Apple.prototype object to seperate the eat() and throw() functions:

Apple.prototype = {

  eat: function(){return "eat the apple";},
  throw : function(){return  "throw the apple"; }
  };

  // Create 3 instances of the Apple object:
  var apple1 = new Apple("red", 99);
  var apple2 = new Apple("green", 109);
  var apple3 = new Apple("yellow", 299);

  // eat function in prototype was changed to this keyword
  // to highlight of it affects the instance of the object that called it
  Apple.prototype = {

    eat: function(){return this;},
    throw : function(){return  "throw the apple"; }
    };
    // You are not suppose to modify the __proto__ object directly
    // Use the jit compiler to link the ibject dynamically
    // You should only be modifying prototype objects on the  construtor functions themselves not on the instance level

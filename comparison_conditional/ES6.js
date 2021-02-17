// Covers the topic of using ECMAScript

// Allows for the creation of a new variable

var symbolName = "value reference in memory";
let letSymbol = "scoped value";
const symName = "constant value in memory";

if (true) {

  var symbolName = "value reference in memory";
  // Variables don't adhere to conditional execution context
  let letSymbol = "scoped value"
  // adheres to scope context
  const symName = "constant value in memory";
}

for (var i = 0; i < 5; i++){

  var symbolName = "value reference in memory";
  let letSymbol = "scoped value";
  const symName = "constant value in memory";
  // Respects private execution context

}

function check() {
  var varSymbol = "assign value";
  // variable is not accessible outside of function context

}

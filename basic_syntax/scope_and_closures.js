// Topic Coveredin lecture is scope, which refers to the access given to an object

var engine ={
  maker:"Ford",
  headGasket: {
    pots: ["piston1", "piston2"]
  }
}

function runExpression(){
  var a = 10;
  function add (b){
    return a + b;
  }
  // return add();

  console.log(add(90), add(20));
}

console.log(engine.headGasket.pots[0] );

// Callable objects go onto what is known as an execution stack
// Each function in the script is placed on what is a known as an execution stack

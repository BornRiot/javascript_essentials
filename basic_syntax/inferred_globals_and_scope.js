// Topic covered in this lecture is the use of Inferred Globals and Scope

var engine ={
  maker:"Ford",
  headGasket: {
    maker: "Golf",
    pots: ["piston1", "piston2"]
  }
}


function runExpression(){
  var a = 10;
  function add (){
    // To define an object within this scope and not globally such as engine, you can use the following procedure:
    const engine = "new string";

    // rename an object called test:
    test = 'new string';
    test2 = 'new string';
    test1 = 'new string';
    // calll the object in the console with
     //  using the window object
     console.log(window.test);
     // This is known as clobering the scope
     console.log("Hi");

  }
  add();

}

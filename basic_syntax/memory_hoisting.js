// Topic of memory hoisting is coverd in video lecture
// During the process if executing scripts the javaScript parser
// searches for symbol names in  the scripts and hoist them up.
// javaScript functions actually get hoisted to the very top of
// a script during execution by the javaScript parsser

console.log(myName, printName());

var myName = "Marvin";
function printName(){
  return "John Doe";
}

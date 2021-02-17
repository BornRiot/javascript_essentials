// Lecture covers the use of the if statement

var carsLeft = 1,
carsRight = 1,
greenMan = "no";

if (greenMan == "yes"){
  console.log('Cross the road');
}
else if ( carsLeft === 0){
  console.log("All clear! Cross the road");
}
// Demonstrate use of the && operator:
else if (carsLeft === 0 && carsRight === 0){

}
else {
  console.log("Stay where you are");
}

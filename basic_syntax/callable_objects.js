// Vode lecture discusses the topic of Functions being callable objects
function name () {
  var full_name = "Michael Kane";
  return full_name;

}

// Create a function within a function:
function last_name(){
  var last_name_is = "Gravestone";

   function concat(last_name){
     return "Mr." + last_name_is;
    }

  return concat(last_name_is);


};

// pass object as an arguemtn in a function
function name2(fullname = {}){
  return  fullname;

}

console.log(name2({firstname:"Gregg", lastname: "Robinson" }));

function name3(fullname2){
  return  fullname2.firstName+ " "+fullname2.lastName;

}
console.log(name3({firstName: "Mike", lastName: "Reginald"}));

// Use a function as a callable object:
function name4 (fullname){
  return fullname;
}
console.log(name4(function(){ return "embed"})());

// Function can also be executed doing the following:
function name5 (fullname){
  return fullname();
}
console.log(name5(function(){ return "embed"}));

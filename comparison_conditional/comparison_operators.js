10 == 10  // Comapres whats to the right and left of symbol
console.log(100 == 11)

// Don't try to compare  NaN == NaN
console.log(NaN == NaN);

// null == undefined : true
console.log(null == undefined);


// Turn number into a string
console.log("Compoare string and number");
console.log(10 == "10");

// Use === to check data types and avoid polymorphism
console.log(10 ==="10");

// use of the ! to check that 2 values are not == to each other
console.log( null != null);
console.log(null != undefined);
console.log(10 != "10"); // Will polymorph values

// using !==  will check value and not change datatype
console.log(10 !== "10");

console.log("Conpare to versions of the word hello");
console.log("Helloooo" > "hello");

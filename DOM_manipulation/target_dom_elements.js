// This file corresonds  to the lecture of the same title

console.log("This is a line on text");
document.write("This is a test line of text");
// Use the getElementById method
console.log(document.getElementsByTagName('p'));
// Target a h1 element
console.log(document.getElementsByTagName('h1'));
// Get an element in document by the id
console.log(document.getElementById('first_id'));
// Print out element as an object:
console.dir(document.getElementById('first_id'));
// Get elements by class Name
console.log(document.getElementsByClassName('pClass'));
// Target elements using a css selector
console.log(document.querySelector('#hello'));
// Use the . selector to get all the class elements
console.log(document.querySelectorAll('.pClass'));
// Combine use of class and id selectors
console.log(document.querySelectorAll('#hello, .pClass'));

console.log("Check below this line");
// Target elements by attribute
console.log(document.querySelectorAll('p[data-content="123"], body > h1.TheClass > span'));

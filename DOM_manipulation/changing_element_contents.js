console.log(document.getElementById('hello').innerText = "Hello This is a Brand New World");
// Append something on to exisiting text
console.log(document.getElementById('hello').innerText += "This is a new text");
// Assign getElementById to  variable and use the var to make changes
var helloP =  document.getElementById('hello');
console.log(helloP.innerText = "new world"
);
console.log(helloP.innerText = "something new"
);

// To add in new HTML text to exisiting text
helloP.innerHTML += "order <span>hello worldz</span>";

// Change the outerHTML element to in doc to h2
helloP.outerHTML = '<h2 id="hello">something neworder <span>hello worldz</span></h2>';

// Target h1 and span element with selector
var  spanH1 = document.querySelectorAll('h1 span')[0];
console.dir(spanH1);
// Set  element to  new value
spanH1.innerHTML = "New spanH1 Text";

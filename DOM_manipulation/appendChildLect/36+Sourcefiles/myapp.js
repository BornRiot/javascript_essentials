var element = document.createElement('div'); // Create div element using Javascript

element.style.cssText = "width:200px; height:20px; background:blue;";

element.onclick = function(){ alert('hello'); };

document.body.appendChild( element );
// appends object to body of html page

var target = document.getElementById('yellow');
// document.body.insertBefore( element, target );


document.body.insertAfter( element, target );

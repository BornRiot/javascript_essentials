var el = document.getElementById('style');
el.style.background = "yellow"; // Demonstrate how  to override using important 
// el.style.color = "white";
// el.style.width = "200px";

// Make edits using cssText element
// el.style.cssText = "background: blue; color: white; width: 200px";
//
// el.style.cssText += "height:100px";

// use getComputedStyle element
console.log(getComputedStyle(el));

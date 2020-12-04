
console.log(this );

var object ={
  prop: this,
  method: function (){return this; }  // Callable objects allow us to change the this context
}

var object2 ={
  prop: this,
  embed:{
    embed: true,
    method: function (){return this; }  // Callable objects allow us to change the this context
  }

};
var array = [
  this,
  function() {return this; }
];

function global (){
  return this;
}


global.call(object); // Another way of invoking a function
// Depending on where you use the this keyword, it will change and have a different pointer

new global();
// Assigns a new this context. A blank object

// Use this in the console window:
// object2.embed.method.call(array);

function global3(){
  console.log('from global', this);

  function sub(){console.log('from sub', this)}

  sub();
}

new global3;


// new global3();
// this_context.js:37 from global global3 {}
// this_context.js:39 from sub Window {window: Window, self: Window, document: document, name: "", location: Location, …}
// global3 {}

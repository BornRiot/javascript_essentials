// lecture  focuses on accessing computed member acces
// Video lecture discusses the topic of accessing members inside an object
var car = {
  make: "volvo",
  speed: 100,
  engine: {
    size: 2.0,
    make: "bmw",
    fuel: "petrol",
    pistons: ['piston 1', 'piston 2'],
    // the pistons can be objects also:
     pistons2: [{maker: "BMW"}, {maker: 'BMW'}]
}, //Even though engine is an object, its still classified as a prope
   // erty in side another object
   drive: function (){return 'drive'}

};

var array = ['string', 100, ['embed', 200 ], {car: "ford"},
function (){return "drive"}

//you can put functions in arrays. You however cannot define a name for the
// function
]

// accessing the member 'make' of object car:
console.log(car.make);

// Computed member access:
console.log(car.engine.pistons[0]);
//  acces piston 1 maker:
console.log(car.engine.pistons2[0].maker);

// Acces an run a function:
console.log(array[4]());

// The use of math to retrun object inside array
var a = 10
console.log(array[a - 5 -2]);

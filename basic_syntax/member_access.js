// Video lecture discusses the topic of accessing members inside an object
var car = {
  make: "volvo",
  speed: 100,
  engine: {
    size: 2.0,
    make: "bmw",
    fuel: "petrol",
    pistons: ['piston 1', 'piston 2']
    // the pistons can be objects also, pistons: [{maker: "BMW"}, {maker: 'BMW'}]
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

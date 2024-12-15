
let car = { //object with properties type, model, and color
    type: "Honda",
    model: "Civic",
    color: "Black"
};

console.log(typeof car);  //checls the type of the object

car.type = "Toyota"; //updates type property to "toyota"
console.log(car);  // logs updated car


car.wheels = 4; // adds new property to car
console.log(car);  // logs updated car
 
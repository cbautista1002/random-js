
// This is the object constructor function
function Person(first, last){
  this.first = first;
  this.last = last;
}

var me = new Person('Carlos', 'Bautista');
var you = new Person('John', 'Doe');

// Add a property and method to just one instance of the person class
me.newObj = 1243;
me.newFunc = function(){
  return this.last + ' newFunc ' + this.first;
};

console.log(me);
// Person {
//   first: 'Carlos',
//   last: 'Bautista',
//   newObj: 1243,
//   newFunc: [Function] }
console.log(me.newFunc());
// Bautista newFunc Carlos

// console.log(you.newFunc());
// TypeError: you.newFunc is not a function

// Add property to prototype so that the underlying class is updated and the new property
// is accessible to all instances of this class
Person.prototype.anotherObj = "HELLO";
console.log(me);
var her = new Person('Sallie', 'Mae');
console.log(her);
// Person { first: 'Sallie', last: 'Mae' }
console.log(her.anotherObj);
// HELLO


// Using Object.create()

var animal = {
  species: 'cat'
};
// create a new object literal where its prototype parent is animal
var kitty = Object.create(animal);
console.log(kitty.species); // cat

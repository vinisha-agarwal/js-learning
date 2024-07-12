// JS is dynamically typed language
//1.  Primitive (call by value)
//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId);

const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions (type of all non-primitives datatypes are functions and function datatype is function of object)

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}
const myFunction = function(){
  console.log("Hello world");
}

// console.log(typeof bigNumber); // bigint
// console.log(typeof BigInt); // function
// console.log(typeof id); //symbol
// console.log(typeof Symbol); // function

// https://262.ecma-international.org/5.1/#sec-11.4.3

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Stack(primitive)  Heap(Non Primitive)

let firstname = "vinisha"
let newname = "nikita"
newname = firstname

// console.log(firstname);
// console.log(newname);

let userOne = {
  email : "one@gmail.com",
  upiId : "we@ybl"
}

let userTwo = userOne
userTwo.email = "two@gmail.com"
userOne.email = "new@gmail.com"
console.log(userOne);
console.log(userTwo);
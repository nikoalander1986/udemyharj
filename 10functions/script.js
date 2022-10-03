"use strict";



///////////////////////////////////

// let f;

// const g = function() {
//     const a = 23;
//     f = function() {
//         console.log(a*2);
//     }
// }

// const h = function() {
//     const b = 777;
//     f= function() {
//         console.log(b*2);
//     }
// }

// g();
// f();
// console.dir(f);

// //re-assign f function
// h();
// f();
// console.dir(f);

// //Example 2

// const boardPassengers = function(n,wait) {
//     const perGroup = n/3;
    
//     setTimeout(function(){
//         console.log(`We are now boarding all ${n} passengers`);
//         console.log(`There are 3 groups, each with ${perGroup} passengers`);
//     }, wait * 1000)
    
//     console.log(`will start boarding in ${wait} seconds`);
// };

// const perGroup = 1000;
// boardPassengers(180,3)




//////////////////////////////////

// const secureBooking = function () {
//    let passengerCount = 0;

//    return function () {
//       passengerCount++;
//       console.log(`${passengerCount} passengers`);
//    };
// };
// const booker = secureBooking();

// booker();
// booker();
// booker();

// console.dir(booker);

////////////////////////////////

// const runOnce = function () {
//    console.log("This will never run again");
// };
// runOnce();

// // IIFE
// // Immediately Invoked Function Expressions
// (function () {
//    console.log("This will never run again");
//    const isPrivate = 23;
// })();
// //console.log(isPrivate);

// (() => console.log("This will never run again"))();

// {
//     const isPrivate = 23;
//     var notPrivate = 46;
// }
// //console.log(isPrivate);
// console.log(notPrivate);

//////////////////////////////////////////

// const lufthansa = {
//     airline: 'Lufthansa',
//     iataCode: 'LH',
//     bookings: [],
//     //book: function() {}
//     book(flightNum, name) {
//         console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
//         this.bookings.push({flight: `${this.iataCode}${flightNum}`, name})
//     }

// }

// lufthansa.book(239, 'Jonas Schmedtmann');
// lufthansa.book(635, 'Niko Alander');

// const eurowings = {
//     airline: 'Eurowings',
//     iataCode: 'EW',
//     bookings: [],

// };

// const book = lufthansa.book;

// //Does NOT work
// // book(23, 'Sarah Williams');

// //Call method
// book.call(eurowings, 23,'Sarah Williams');
// console.log(eurowings);

// book.call(lufthansa, 239,'Mary Cooper');
// console.log(lufthansa);

// const swiss = {
//     airline: 'Swiss Air Lines',
//     iataCode: 'LX',
//     bookings: [],
// }

// book.call(swiss, 583,'Mary Cooperoust');
// console.log(swiss);

// //Apply method
// const flightData = [583, 'George Cooper'];
// book.apply(swiss, flightData);
// console.log(swiss);

// book.call(swiss, ...flightData)

// //bind method
// // book.call(eurowings, 23,'Sarah Williams');

// //////////////////
// const suomi = {
//     airline: 'Finnair',
//     iataCode: 'FIN',
//     bookings: [],
// }
// console.log(suomi);
// ////////////////////

// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);
// const bookFIN = book.bind(suomi);

// bookEW(23,'Steven Williams');
// bookLX(25,'Steven Williamssi');
// bookLH(28,'Steeveni Williamssi');
// bookFIN(69, 'Niko Alander');

// const bookEW23 = book.bind(eurowings,23);
// bookEW23('Jonas Schmedtmann');
// bookEW23('Martha Cooper');

// const bookFIN69 = book.bind(suomi, 69);
// bookFIN69('Niilo');

// // with event listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function() {
//     console.log(this);
//     this.planes++
//     console.log(this.planes);
// }
// // lufthansa.buyPlane();

// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// //partial application
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1,200));

// const addVAT = addTax.bind(null,0.23);
// // addVat = value => value + value * 0.23;
// console.log(addVAT(100));
// console.log(addVAT(23));

// const addTaxRate = function(rate) {
//     return function(value) {
//         return value + value * rate;
//     }
// }
// const addVAT2 = addTaxRate(0.23);
// console.log(addVAT2(100));
// console.log(addVAT2(23));

////////////////////////////////////////

// // const greet = function(greeting) {
// //     return function(name) {
// //         console.log(`${greeting} ${name}`);
// //     }
// //}

// //arrow function
// const greet = greeting => name => console.log(`${greeting} ${name}`);

// const greeterHey = greet("Hey");
// greeterHey("Jonas");
// greeterHey("Steven");

// greet("Hello")("Jonas");

/////////////////////////////////////////

// const oneWord = function (str) {
//    return str.replace(/ /g, "").toLowerCase();
// };

// const upperFirstWord = function (str) {
//    const [first, ...others] = str.split(" ");
//    return [first.toUpperCase(), ...others].join(" ");
// };

// //Higher order function
// const transformer = function (str, fn) {
//    console.log(`Orginal string: ${str}`);

//    console.log(`transformed string: ${fn(str)}`);

//    console.log(`Transformed by: ${fn.name}`);
// };

// transformer("JavaScript is the best!", upperFirstWord);
// transformer("JavaScript is the best!", oneWord);

// //JS uses callbacks all the time
// const high5 = function () {
//    console.log("👋");
// };

// document.body.addEventListener("click", high5);

// ["Jonas", "Martha", "Adam"].forEach(high5);

///////////////////////////////////////

// const flight = 'LH234';
// const jonas = {
//     name: 'Jonas Schmedtmann',
//     passport: 234234456345
// }

// const checkIn = function (flightNum, passenger) {
//     flightNum = 'LH999';
//     passenger.name = 'Mr. '+ passenger.name;

//     if (passenger.passport === 234234456345) {
//         alert('Checked in')
//     }
//     else {
//         alert('Wrong passport!')
//     }
// };

// // checkIn(flight, jonas);
// // console.log(flight);
// // console.log(jonas);

// //is the same as doing...
// // const flightNum = flight;
// // const passenger = jonas;

// const newPassport = function (person) {
//     person.passport = Math.trunc(Math.random() * 1000000000);
// }

// newPassport(jonas);
// checkIn(flight,jonas);

///////////////////////////////////

//Default parameters
// const bookings = [];

// const createBooking = function (flightNum, numPassengers = 1, price = 199 * numPassengers) {
//    // numPassengers = numPassengers || 1;
//    // price = price || 199;

//    const booking = {
//       flightNum,
//       numPassengers,
//       price,
//    };
//    console.log(booking);
//    bookings.push(booking);
// };

// createBooking("LH123");
// createBooking("LH123", 2, 800);
// createBooking("LH123", 2);
// createBooking("LH123", 5);

// createBooking("LH123", undefined, 1000);

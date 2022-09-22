"use strict";

// Data needed for a later exercise
const flights =
   "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const restaurant = {
   name: "Classico Italiano",
   location: "Via Angelo Tavanti 23, Firenze, Italy",
   categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
   starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
   mainMenu: ["Pizza", "Pasta", "Risotto"],

   openingHours: {
      thu: {
         open: 12,
         close: 22,
      },
      fri: {
         open: 11,
         close: 23,
      },
      sat: {
         open: 0, // Open 24 hours
         close: 24,
      },
   },

   order: function (starterIndex, mainIndex) {
      return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
   },

   orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
      console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered ${address} at ${time}`);
   },
};

restaurant.orderDelivery({
   time: "22:30",
   address: "Via del sole, 21",
   mainIndex: 2,
   starterIndex: 2,
});

const arr = [7,8,9];
const badNewArr = [1,2,arr[0],arr[1],arr[2]];
console.log(badNewArr);

////////////////////////

// //destructing Objects
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const { name: restaurantName, openingHours: hours, categories: tags } = restaurant;
// console.log(restaurantName, hours, tags);

// //default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// //mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// //nested objects
// const {
//    fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

//////////////////////////////////////////////

// //destructing arrays
// const arr = [12, 34, 56];
// const [a, b, c] = arr;
// console.log(a, b, c);
// console.log(arr);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// //switching variables
// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// //receive 2 return values from function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// //nested destructuring
// const nested = [1, 4, [5, 6]];
// // const [i, ,j] = nested;
// // console.log(i,j);

// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// //default values
// const [p = 1, q = 1, r = 1] = [8, ];
// console.log(p, q, r);

////////////////////////////////////

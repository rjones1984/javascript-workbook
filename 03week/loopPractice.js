// for loop
// Use a for loop to console.log each item in the array carsInReverse.
var carsInReverse =
[
  'Ford',
  'Nissan',
  'Toyota',
  'Lotus',
  'Chevy',
  'Hyundai',
  'Benz',
  'Honda'
];

function logCars() {
  for (var i = 0; i < carsInReverse.length; i++) {
    console.log(carsInReverse[i]);
  }
}
logCars();


// for...in loop
// Create an object (an array with keys and values) called persons with the following data:
var person = {
  firstName: "Jane",
  lastName: "Doe",
  birthDate: "Jan 5, 1925",
  gender: "female"
};

// Use a for...in loop to console.log each key.
function accessPerson() {
  for (var prop in person) {
    console.log(prop + ': ' + person[prop]);
  }
}

accessPerson();
// Then use a for...in loop and if state to console.log the value associated with the key birthDate.
function accessBd() {
  var prop = "birthDate";
  for (var prop in person) {
    if (prop === "birthDate") {
      console.log(person[prop]);
    }
  }
}

accessBd();

// while loop
// Use a while loop to console.log the numbers 1 to 1000.
// works
// function countTo1000() {
//   var num = 1;
//   while (num < 1000) {
//     console.log(num);
//     num ++;
//   }
// }
//
// countTo1000();
// do...while loop
// Use a do...while loop to console.log the numbers from 1 to 1000.
// works
// function countTo1000Again() {
// var num = 1;
//   do {
//     console.log(num);
//     num++;
//   } while (num <= 1000)
// }
//
// countTo1000Again();
// When is a for loop better than a while loop?
// a for loop is better perhaps looping over static data or iterating over an array
// How is the readability of the code affected?
// a for loop is more readable.


// What is the difference between a for loop and a for...in loop?
// a for in loop is customary for iterating over object proerties

// What is the difference between a while loop and a do...while loop?
// a do while loop check the condition at the end of the loop while a while loop doesn't

console.log("hello world");
const readline = require("readline");

const firstName = "Dj";
// const firstName =  'Dj';
// const firstName =  `Dj`;

let height;

let age = 31;

let isCool = false;
// console.log(isCool)

age = age + 1;
isCool = true;

// console.log('Hi, my name is ' + firstName + '. And i am ' + age + ' years old')
// console.log(`Hi, my name is ${firstName}. and my age is ${age} years old `)
// console.log(isCool)

let x = 4;

let y = 5;

let z = 7 + 9;

let sum = x + y + z;
console.log(sum);

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question("Howdy, what's your name?", function (answer) {
  console.log("Hi " + answer);
  reader.close()
})
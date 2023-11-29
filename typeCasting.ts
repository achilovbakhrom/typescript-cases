let leet;

leet = "1337";

const number = +leet; // This is type casting

console.log(number === 1337); // true
console.log(number); // 1337

const number2 = leet as number; // this is type assertion

console.log(number2 === 1337); // false
console.log(number2); // '1337'

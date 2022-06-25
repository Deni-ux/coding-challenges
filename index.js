//FizzBuzz

//list numbers to 100
// for (let i = 1; i <= 100; i++) {
//   //if number is divisible by 5 or 3 prints FizzBuzz
//   if (i % 15 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 5 === 0) {
//     //if number % by 5 prints Buzz
//     console.log("Buzz");
//   } else if (i % 3 === 0) {
//     //if number % by 3 prints Fizz
//     console.log("Fizz");
//   } else {
//     //if neither prints the number
//     console.log(i);
//   }
// }

let num = [8, 4, 3, 9, 6, 1];
num.sort(function (a, b) {
  return a - b;
});
console.log(num);
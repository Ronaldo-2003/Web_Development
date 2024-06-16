let a=15; // After release of ES6 , let and const came , earlier it was var
let b=12;
let c=a+b;
console.log("Sum of ",a," and ",b," is:",c);

var age=24;
const name="Saurav";  // value of const can't be changed later
console.log("age:",age);
console.log("name:",name); 

age=26;
console.log("age:",age);
let name1="Aman";
console.log("name1:",name1);

let x = 15;
let y =8;
let z = x*y;

console.log(`Product of ${x} and ${y} is ${z}`); // we are using back ticks to use template literals
// using template literals allow us to include expressions in string 

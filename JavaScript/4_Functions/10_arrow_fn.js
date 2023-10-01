// arrow function is used to shorten the code

// function to add 2 elements

// function add(a,b){
//     return a + b;
// }
// console.log("sum:",add(5,10));

// arrow function with curly braces
// let add = (a,b) => { return a + b};  // if we use curly braces , we have to return values explicitly
// console.log("sum:",add(5,10));

// arrow function without curly braces
// let add = (a,b) => a+b;  // without curly braces , values are returned implicitly or we can use round brackets
// console.log("sum:",add(4,7));

// If we are using arrow function and we have to return an object , it can't be done without round brackets

let greetName = () => ({name : "Ronaldo"});
console.log(greetName());
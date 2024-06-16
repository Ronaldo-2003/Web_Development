// let and const came when es6 was introduced ... now this is new normal
// currently var is not in use

// let has block , function and global scope

// local scope
{
    let number = 30;
    console.log("number:",number);
}
// console.log(number); // it will give error because of having block scope

// function scope
function function_scope(){
    let name = "Ronaldo";
    console.log("name:",name);
}
function_scope();
// console.log("name:",name); // this will give error because name cant be accessed outside function

// global scope
let language = "Hindi";
{
    console.log("language:",language);  // global scope variable can be accessed anywhere
}
console.log("language:",language);

// let and const do not support hoisting , it will give error instead of undefined(in case of var)
// console.log("branch:",branch);
let branch = "Civil";
console.log("branch:",branch);


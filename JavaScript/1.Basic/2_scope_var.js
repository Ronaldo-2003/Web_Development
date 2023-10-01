// var supports function scope and global scope

// function scope of var
function function_scope(){
    var name = "Aman";
    console.log("name:",name);
}
function_scope();
// console.log("name:",name);
// The above code will give error because it cant be accessed outside function


// global scope of var

var title = "Kumar";
function global_scope(){
    console.log("title:",title);
}
global_scope();
console.log("title:",title); // will give what is stored in title beacuse of its global scope 

// var supports hoisting i.e. any variable can be used before its declartion but it will give undefined

console.log("age:",age);
var age = 20;
console.log("age:",age);

// var doesnt support local scope as it is accessible outside the block

{
    var number = 30;
    console.log("number:",number);
}
console.log("number:",number); // will print value of number because it doesnt support local scope

// var can be re-initialise as well as redefined
var branch = "CSE";
console.log("branch:",branch);

var branch = "ECE";  // redefining 
console.log("branch:",branch)

branch = "EEE";  // re-initialise
console.log("branch:",branch);
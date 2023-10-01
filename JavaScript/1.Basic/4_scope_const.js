// const supports block , function and global scope like let

// block scope
{
    const name = "Ram";
    console.log("name:",name);
}
// console.log("name:",name);  // This will give error

function function_scope(){
    const id = 5000;
    console.log("id:",id);
}
function_scope();
// console.log("id:",id);  // This will give error

// global scope
const age = 20;
{
    console.log("age:",age); // this will print age in this block
}

function print_age(){
    console.log("age:",age);  // this will print age using this function
}
print_age();

// if we are declaring any variable with const , it has to be intialise during definition and can't be reassigned

// const game ; // can,t be done like that
// game = "cricket";

const fruit = "mango";
console.log("fruit:",fruit);
// fruit = "apple"; // cant be reassigned
// console.log("fruit:",fruit);

// const can't be hoisted

// but variables like array and object of const type can be modified
const arr = [12,19,45];
for(i=0;i<arr.length;i++){
    console.log(arr[i]);
}
arr.push(66,87);
for(i=0;i<arr.length;i++){
    console.log(arr[i]);
}

// Use const by default for variables that should not be reassigned.
// Use let when you expect the variable's value to change.
// Avoid using var in modern JavaScript because it can lead to unexpected behavior due to hoisting and function scope.
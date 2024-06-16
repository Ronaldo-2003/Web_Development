// creating a global object

global.myGlobalObject = {
    message : "Hello from GlobalObject"
};

console.log(global.myGlobalObject.message);  // Hello from GlobalObject

// In the context of function( not method of an object) , this refers to global object
function greet(){
    console.log(this.myGlobalObject.message);
}

greet();  // Hello from GlobalObject
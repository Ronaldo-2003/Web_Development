// creating a global object
// global.myGlobalObject = {
//     name : "Ram",
//     age : 25
// };

// let student = {
//     name : "Ronaldo",
//     age : 20,
//     branch : "CSE",

//     regularFunction : function(){
//         console.log("name: " , this.name);  // it will access current object properties
//         console.log("age: " , this.age);  // it will access current object properties
//     },
//     arrowFunction : () =>{
//         console.log("name: " , this.name);  // it will access lexical properties
//         console.log("age: " , this.age);  // it will access lexical properties
//     }
// };

// student.regularFunction(); // Ronaldo , 20
// student.arrowFunction(); // undefined , undefined

//creating a function having lexical scope 
function outerFunction(){
    this.name = "Ronaldo";  // this.name refers that name is a property of outerFunction
    this.age = 20;          // without this , they are just variables defined in the scope of the function
    this.branch = "CSE";

    this.getLexicalAccess = () =>{  // it has been created as a property method of outerFunction
        console.log("name:",this.name);
        console.log("age:",this.age);
        console.log("branch:",this.branch);
    }
}

// to access the properties of outerFunction , firstly we have to create an instance of outerFunction

let outer = new outerFunction();  // creating instance of outerFunction
outer.getLexicalAccess();  

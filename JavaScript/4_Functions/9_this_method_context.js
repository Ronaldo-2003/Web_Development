// creating an object
let student = {
    name : "Ronaldo",
    id : 5403 ,
    branch : "CSE",

    // creating object method
    greet : function () {
        console.log(`Hello ${this.name}`);  // this refers to the object that the method is called on
    }
};

student.greet();  // Hello Ronaldo

student.name = "Ram";
student.greet();  // Hello Ram

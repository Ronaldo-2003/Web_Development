// singleton -> constructor
// object.create

// Creating objects

// object literals
// let player = {}; // object created

// creating a symbol datatype 
let mySym = Symbol("key1");
console.log(typeof(mySym));

let student = {
    id : 1000,
    name : {
        "first" : "Ram",
        "last" : "Kumar"
    },
    age : 20,
    branch : "CSE",
    address : {
        "permanent" : "Delhi",
        "correspondance" : "Mumbai"
    },
    [mySym] : "myKey1" // symbol mySym is used as a unique property of object which is assigned a string value
    // when you will use a loop to iterate through key, value pair , symbol are not iterable .i.e used for hidden properties
};

// console.log(typeof(student[mySym]));  // it will give string 
console.log("student:",student); // getting all properties of student
// console.log("branch:",student.branch); // accessing properties of student using dot operator
// console.log("permanent address:",student.address.permanent); // nested properties

// // accessing properties using []
// console.log("student_name:",student["name"]); // accessing properties
// console.log("age:",student["age"]);
// console.log("permanent address:",student["address"]["permanent"]);  // accessing nested properties

// // modifying , adding and deleting property of student
// console.log(student);
// student.id = 1002; // modifying existing property
// console.log(student);
// student.sex = "male";  // adding new property
// console.log(student);
// delete student.age; // deleting existing property
// console.log(student);

// // Looping through object properties
// for(key in student){
//     console.log(key,":",student[key]);
// }

// copy constructor
// let s1 = new Object();
// s1 = student;
// console.log("s1:",s1);

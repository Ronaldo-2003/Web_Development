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
    }
};

console.log(`student_age: ${student.age}`);  // accesing the properties of object

// but here is a problem that every time we have to write student then using dot operator to access age property
// we can ovwrcome this by destructuring of objects

let {age} = student;
console.log(`student_age: ${age}`);

// similarly we can access other properties too and use alias too
let{branch:B} = student;
console.log(`student_branch: ${B}`);
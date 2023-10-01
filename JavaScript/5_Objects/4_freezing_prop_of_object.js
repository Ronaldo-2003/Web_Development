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

console.log(`student branch: ${student.branch}`);

// changing the branch of student 
student.branch = "ECE";

console.log(`student branch: ${student.branch}`);

Object.freeze(student); // freezing the student properties

// changing the branch of student 
student.branch = "EEE"; // changed to "EEE" but still it is not because student properties are freezed

console.log(`student branch: ${student.branch}`);

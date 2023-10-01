// It has been included in ES 11 (2020)
// nullish coalescing operator -> works on null and undefined value i.e. if value accessed is null or undefined , it 
// will fetch a default value which we will be providing


let Student = {
    name : "Ronaldo",
    age : 20,
    branch : "CSE",
    address : null
};

let student_name = Student.name ?? "Jack Sparrow";
console.log("student_name:",student_name);  // Ronaldo

let student_branch = Student.branch ?? "EEE";
console.log("student_branch:",student_branch);  // CSE

let student_address = Student.address ?? "Mohali";
console.log("student_address:",student_address);  // Mohali 

let student_id = Student.id ?? 1000 ;
console.log("student_id:",student_id);  // 1000
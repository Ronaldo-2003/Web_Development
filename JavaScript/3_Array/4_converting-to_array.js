let name = "Ronaldo";
console.log("Is name array or not:",Array.isArray(name));

// converting value in name to array
let name_arr = Array.from(name);
console.log("name_arr:",name_arr);
console.log("Is name_arr array or not:",Array.isArray(name_arr));

let marks1 = 76;
let marks2 = 75;
let marks3 = 98;
console.log("marks1:",marks1);
console.log("marks2:",marks2);
console.log("marks3:",marks3);

// returns an array from a list of elements
let marks_arr = Array.of(marks1, marks2, marks3);
console.log("marks_arr:",marks_arr);

console.log(Array.from({name:"Ronaldo"}));  // because it is not able to convert it into array , it is returning an empty array
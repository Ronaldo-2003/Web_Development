// if (condition1) {
//     // Code to be executed if condition1 is true
//   } else if (condition2) {
//     // Code to be executed if condition2 is true
//   } else {
//     // Code to be executed if no conditions are true
//   }
  

// checking whether an object is empty or not
// Object.keys(object) -> used to get array of keys in js
let emptyObject = {};

if(Object.keys(emptyObject).length === 0){
  console.log("Object is empty.");
}else{
  console.log("Object is not empty.");
}
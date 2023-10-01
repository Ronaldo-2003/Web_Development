// slice

// let arr1 = [10,20,30,40,50]; // declaring an array
// console.log("arr1:",arr1);   // printing the array
// console.log("slice operation(0,3):",arr1.slice(0,3));  // slicing an array doesn't change the original array , last index is not included
// console.log("arr1:",arr1);   // no change in the array

// splice -> it is used to modify the content of the array by adding or deleting elements
// splice(start , count , add1 , add2)

const fruits = ['apple', 'banana', 'cherry', 'date'];
const deletedFruits = fruits.splice(0, 2, 'grape', 'kiwi');
console.log(fruits); // [ 'grape', 'kiwi', 'cherry', 'date' ]
console.log(deletedFruits); // [ 'apple', 'banana' ]

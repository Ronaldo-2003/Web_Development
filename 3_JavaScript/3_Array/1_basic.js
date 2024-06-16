// Array

// Array in C++ contains data of same type while js can contain data of different types
// Array in C++ are of fixed length but not in js

// declaring array
let arr1 = [1, 2, 3, 4, 5];
console.log("arr1:",arr1); 
console.log("arr1[2]:",arr1[2]);

// declaring array
let arr2 = new Array(10,20,30,40);
console.log("arr2:",arr2);  
console.log("length of arr2:",arr2.length);
console.log("arr2[2]:",arr2[2]);

// methods in array

arr2.push(6); // adding elements to the last of array
console.log("arr2:",arr2);  
console.log("length of arr2:",arr2.length);

arr2.pop(); // removing elements from the last of array
console.log("arr2:",arr2);  
console.log("length of arr2:",arr2.length);

arr2.unshift(15); // adding elements in the beginning of array
console.log("arr2:",arr2);  
console.log("length of arr2:",arr2.length);


arr2.shift(); // removing elements from the beginning of array
console.log("arr2:",arr2);  
console.log("length of arr2:",arr2.length);

console.log("50 is in arr2: ",arr2.includes(50)); // checking whether 50 is in arr2 or not
console.log("index of 30 in arr2 :" ,arr2.indexOf(30));  // checking index of 30 in arr2
console.log("index of 50 in arr2 :" ,arr2.indexOf(50));  // checking index of 50 in arr2

let arr3 = arr2.join(); // arr3 will be string  // arr.join('-') -> separator can be passed (comma) is default
console.log("data type of arr1 :",typeof(arr1)); // checking data type of arr1  , arr1 will be array Objects
console.log("data type of arr2 :",typeof(arr2)); // checking data type of arr2  , arr2 will be array Objects
console.log("data type of arr3 :",typeof(arr3)); // checking data type of arr3  , arr3 will be string Objects

console.log(arr3)
console.log(typeof(arr3))
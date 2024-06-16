// for of loop

// const arr = [1,2,3,4,5];
// for (const num of arr) {
//     console.log(num);
// }

// const fruits = ["mango" , "apple" , "guava" , "banana"];
// for (const fruit of fruits) {
//     console.log(fruit);
// }

// map
// setting values in map -> key will be unique , preserves the order of insertion

const map = new Map();
map.set(5403,"Ronaldo");
map.set(2980,"Tarun");
map.set(2000,"Mohan");

for (const [key,val] of map) {
    console.log(key,":",val);
}

// we cant use forof to iterate over object

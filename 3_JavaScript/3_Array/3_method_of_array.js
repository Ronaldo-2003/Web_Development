let fruit = ["mango","banana","apple"];  // creating a fruit array
let vegetable = ["potato","tomato","brinjal"];  // creating a vegetable array

console.log("fruit:",fruit);
console.log("vegetable:",vegetable);

fruit.push(vegetable);  // pushing vegetable into fruit array , it will be inserted as a single element
console.log("fruit:",fruit);
console.log("vegetable:",vegetable);

let team1 = ["Ram", "Shyam", "Mohan"];  
let team2 = ["Gita","Sita", "Meeta"];

console.log("team1:",team1);
console.log("team2:",team2);

team1.push(...team2); // spread operator -> opening array team 2 and then pushing it in the array team1
console.log("team1:",team1);
console.log("team2:",team2);

// concatenate and spread operator
let number = [1,2,3];
let square = [1,4,9];
let cube = [1,8,27];

let all_number = number.concat(...square , ...cube);
console.log("all_number:",all_number);

// flattening the array
let arr1 = [1,2,3,[1,3,9],[46,[45,[8]]]];
console.log("arr1:",arr1);
let new_arr = arr1.flat(Infinity); // in place of infinity we can write the depth uptowhich we want to get it flat
console.log("new_arr:",new_arr);


let source1 = {name: "Ronaldo", id : 5403};
let source2 ={id : 5403 , age : 20 , course : "CSE"};
let source3 = {id : 5403 , subjects : {
    sub1 : "AI",
    sub2 : "DAA" , 
    sub3 : "IOT"
}};

// console.log(source3.hasOwnProperty("subjects")); // to know whether an object has the property we are looking for or not

let target = Object.assign({}, source1 , source2, source3); // {} has been used for target object
console.log(target);

let target1 = { ...source1 , ...source2 , ...source3 };
console.log(target1);

// let users = [source1 , source2 , source3]; // assigning objects to an array and accessing properties of objects
// console.log(users[0].name);
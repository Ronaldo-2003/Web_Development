const myNum = [1,2,3,4,5,7,9];

// map returns the value
// add 10 to every element of myNum

// const newNum = myNum.map((num) => num+10);
// console.log(newNum);

// // concept of chaining(using multiple functions/methods)

// // 1st multiply every num with 10 and then add 1 to it
// const num1 = myNum.map((num) => num*10).map((num) => num+1);
// console.log(num1);

// 1st multiply every num with 10 and then add 1 to it and then get those values which is greater than 40
const num2 = myNum.map((num) => num*10).map((num) =>num+1).filter((num) =>num>40);
console.log(num2);
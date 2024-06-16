let k=19+"Kumar"; // 19Kumar
console.log(k);

let i=19+21+"Kumar";  // 40Kumar
console.log(i);

let j=19+"Kumar"+21;  // 19Kumar21
console.log(j);

let l="Mohan"+4+16;   // Mohan416
console.log(l);

let x1=25e5;
let x2=25e-5;
console.log(x1);
console.log(x2);

let var1=25;
let var2="25";
result=var1 == var2; // equality (check without checking data type)
console.log(result);

result1=var1 === var2; // strict equality (data type will be checked also)
console.log(result1);

// Automatic type conversion 
let z1='12';
let z2='4';
console.log(z1*z2); // 48
console.log(z1/z2); // 3
console.log(z1-z2); // 8
console.log(z1+z2); // 124

let m1=Boolean(' '); // non-zero or space will be true
console.log(m1);

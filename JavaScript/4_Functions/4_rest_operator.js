// using rest operator
// function totalCartPrice(...num){
//     let totalSum = 0;
//     for(let i = 0; i < num.length; i++){
//         totalSum += num[i];
//     }
//     return totalSum;
// }

// let totalSumofCartValues = totalCartPrice(20,680,1000);
// console.log("totalSumofCartValues:",totalSumofCartValues);

function totalCartPrice(num1 , num2 , ...num){
    console.log("num1:",num1);
    console.log("num2:",num2);
    console.log("num:",num);
}

totalCartPrice(455,6756,9866,988899,90899898);
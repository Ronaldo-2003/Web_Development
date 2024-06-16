// const initial_val=0;
// const arr = [1,2,3,4,5,6];
// let sum = arr.reduce((accumulator , curr_val) => accumulator+curr_val,initial_val);
// console.log(sum);

// same code as above
// const arr = [1,2,3,4,5,6];
// let sum=arr.reduce((accumulator,curr_val) => accumulator+curr_val , 0);
// console.log(sum);

// add the total price of items present in the cart
const cart = [
    {
        course : "js course",
        price : 1099
    },

    {
        course : "python course",
        price : 799
    },

    {
        course : "mobile app course",
        price : 2999
    }
];

const total_price = cart.reduce((accumulator , item) => accumulator+item.price,0);
console.log(total_price);
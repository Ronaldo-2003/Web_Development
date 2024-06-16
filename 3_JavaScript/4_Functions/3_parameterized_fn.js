// function add( a , b){
//     let sum = a + b;
//     console.log(`Sum of ${a} and ${b} is ${sum}.`);
// }

// add(15,25);


// Using default value

function multiply(a , b , c=1){
    let product = a*b*c;
    console.log(`Product of ${a} , ${b} and ${c} is ${product}.`);
}

multiply(5,4,2); // arguments
multiply(5,7);

// in functional programming language , we can define , pass , return , assign the function
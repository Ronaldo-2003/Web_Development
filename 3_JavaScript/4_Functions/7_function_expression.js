perimeter(2,5);  // this declaration supports hoisting

function perimeter (a,b){
    let result = 2*(a+b);
    console.log("perimeter:",result);
}


// power(2,5); // function expression doesn't support hoisting -> will give error
let power = function(a,b){
    let result = a**b;
    console.log("power:",result);
}

power(2,5);
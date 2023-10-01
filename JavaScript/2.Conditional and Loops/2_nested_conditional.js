let age = 5;

if(age > 18){
    console.log("You are eligible to vote.");
    if(age>50){
        console.log("You can vote twice.");
    }
    else{
        console.log("You can vote only once.");
    }
}
else{
    console.log("You are not eligible to vote.");
    if(age < 12){
        console.log("What are you doing here , Go to school.")
    }
}
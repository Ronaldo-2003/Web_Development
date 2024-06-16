// Creating object using constructor
let fruit = new Object();
// Adding properties
fruit["name"] = "Mango";
fruit["weight_gm"] = 200;
fruit["cost_rs/kg"] = 100;
// creating nested property using dot operator
fruit.variety = {
    main: "Indian",
    sub: "Alphonso"
};

fruit.greet = function (){
    console.log(this.name);
}

// accessing properties
// console.log("fruit:",fruit);
// console.log("fruit_name:",fruit.name);
// console.log("cost_rs/kg:",fruit["cost_rs/kg"]); // didnt use dot operator because its interpreting as division 
// console.log("variety:",fruit.variety.sub); // accessing nested property
// console.log("variety:",fruit["variety"]["main"]);

// for(i in fruit){
//     console.log(i,":",fruit[i]);
// }

// in object oriented programming language , we can define , pass , return , assign the object

console.log(fruit.greet());  // 1st greet() is called and then console logs undefined beacuse of no return type
console.log(fruit.greet);  // it just gives the reference of the function
fruit.greet(); // it logs the name of the fruit(because of this.name)
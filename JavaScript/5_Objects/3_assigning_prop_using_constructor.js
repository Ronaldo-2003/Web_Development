// constructor function
function Student(name , id , age , passing_year){
    this.name = name;
    this.id = id;
    this.age = age;
    this.passing_year = passing_year;

    // creating display function to get the properties of instances
    this.display = function(){
        console.log(this.name," ",this.id," ",this.age," ",this.passing_year);
    }
}

// creating new instances based on the constructor 

let s1 = new Student("Ronaldo", 5403, 20 , 2025);
let s2 = new Student("Ram" , 5000 , 19 , 2024);

s1.display();
s2.display();
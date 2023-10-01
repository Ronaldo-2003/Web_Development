// it is better approach to create class and make constructor and method within it than constructor function

class Student{
    constructor(name , id , age){  // one thing to note here that we are using constructor keyword here
        this.name = name;
        this.id = id;
        this.age = age;
    }

    displayInfo(){
        console.log(`${this.name}  ${this.id} ${this.age}`);
    }
}

let s1 = new Student("Ronaldo" , 5403 , 20);
let s2 = new Student("Ram" , 1000 , 25);

s1.displayInfo();
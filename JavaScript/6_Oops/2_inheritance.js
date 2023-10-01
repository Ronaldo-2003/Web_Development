class Person{
    constructor(name,age,sex){
        this.name = name;
        this.age = age;
        this.sex = sex;
    }

    greet(){
        console.log(`Hello ${this.name}`);
    }
}


let p1 = new Person("Ram", 20, "male");
p1.greet();

class Student extends Person {
//     constructor(name,id,age,sex){
//         this.name = name;
//         this.id = id;
//         this.age = age;
//         this.sex = sex;
//     }

//     getInfo(){
//         console.log(`${this.name} ${this.id} ${this.age} ${this.sex}`);

// }
}

let s1 = new Student("Ronaldo", 20, "male");
// s1.getInfo();
s1.greet();
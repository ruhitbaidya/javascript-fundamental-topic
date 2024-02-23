let findArr = [20,50,4,1,80,10,20,40,75,45,30,54,52,8,50,12,45,79];
let mapingArr = findArr.map((n)=> n + 2) // map
let filtering = findArr.filter((n)=> n%2===0)
let findSome = findArr.find((m)=> m%2===0)
let foreaching = findArr.forEach((n)=> n * 2)
// console.log(foreaching);

// class syntexticsuger

class Person{
    constructor(name, age, adders){
        this.name = name;
        this.age = age;
        this.adders = adders
    }

    addition(){
        console.log(`this is to muchu again must be allow ${this.name}`)
    }
}

let person1 = new Person("Ruhit Baidya", 27, "Sabujbag R/A")
person1.addition()
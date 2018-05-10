let person1 = {
    name: "Rach",
    sayHello: function () {
        console.log("Hello!  My name is " + this.name);
    }
}
let person2 = {
    name: "Chandler",
    sayHello: function () {
        console.log("Hello!  My name is " + this.name);
    }
}

let person3 = {
    name: "Monica",
    sayHello: function () {
        console.log("Hello!  My name is " + this.name);
    }
}

let person4 = {
    name: "Phoebe",
    sayHello: function () {
        console.log("Hello!  My name is " + this.name);
    }
}

let person5 = {
    name: "Ross",
    sayHello: function () {
        console.log("Hello!  My name is " + this.name);
    }
}

person1.sayHello();
person2.sayHello();
person3.sayHello();
person4.sayHello();
person5.sayHello();

function Person(name, city, age) {    
    this.Name= name;
    this.City= city;
    this.Age= age;
}

Person.prototype.sayhello = function (){
    console.log(`Hey! My name is ${this.Name} I am ${this.Age} years old and live in ${this.City}`)
}

let newPerson1 = new Person("Rachel", "New York", "48");
let newPerson2 = new Person("Monk", "SanFranciso", "58");
let newPerson3 = new Person("Shawn", "SantaBarbara", "35");
let newPerson4 = new Person("Ashley", "Birmingham", "20");
let newPerson5 = new Person("Britain", "Chelsea", "39");

newPerson1.sayhello();
newPerson2.sayhello();
newPerson3.sayhello();
newPerson4.sayhello();
newPerson5.sayhello();

class PersonV2 {
    constructor(name, city, age){
        this.name = name;
        this.city = city;
        this.age = age;
    }
    sayHello() {
        console.log(`Hey! My name is ${this.name} I am ${this.age} years old and live in ${this.city}`)
    }
}


let justNotherPerson1 = new PersonV2("Rachel", "New York", "48");
let justNotherPerson2 = new PersonV2("Monk", "SanFranciso", "58");
let justNotherPerson3 = new PersonV2("Shawn", "SantaBarbara", "35");
let justNotherPerson4 = new PersonV2("Ashley", "Birmingham", "20");
let justNotherPerson5 = new PersonV2("Britain", "Chelsea", "39");

justNotherPerson1.sayHello();
justNotherPerson2.sayHello();
justNotherPerson3.sayHello();
justNotherPerson4.sayHello();
justNotherPerson5.sayHello();

class Vehicle {
    constructor(manufacturer, wheels){
        this.manufacturer = manufacturer;
        this.wheels = wheels;
    }
    aboutVehicle () {
        console.log(`Type of vehicle: ${this.vehicleType} - Manufacturer: ${this.manufacturer} - Wheels: ${this.wheels}`);
    }
}

class Truck extends Vehicle {
    constructor(manufacturer, doors){
        super(manufacturer, 4);        
        this.hasBed = true;
        this.doors = doors;
        this.vehicleType = "Truck";
    }
    aboutVehicle () {
        console.log(`Type of vehicle: ${this.vehicleType} - Manufacturer: ${this.manufacturer} - Wheels: ${this.wheels} - Doors: ${this.doors} - HasBed: ${this.hasBed}`);
    }

}

var truck = new Truck("Explorer");
truck.aboutVehicle();

class Sedan extends Vehicle {
    constructor(manufacturer, doors, size, mpg){
        super(manufacturer, 4);
        this.hasBed = false;
        this.size = size;
        this.mpg = mpg;
        this.vehicleType = "Sedan";

    }

    aboutVehicle () {
        console.log(`Type of vehicle: ${this.vehicleType} - Manufacturer: ${this.manufacturer} - Wheels: ${this.wheels} - Doors: ${this.doors} - HasBed: ${this.hasBed} - Size: ${this.size} - MPG: ${this.mpg}`);
    }
}

var sedan = new Sedan("Infiniti", 2, "SportsCar", 18);
sedan.aboutVehicle();

class Motorcycle extends Vehicle {
    constructor(manufacturer, doors){
        super(manufacturer, 0);
        this.hasBed = false;
        this.handleBars = true;
        this.hasDoors = false;
        this.wheels = 2;
        this.vehicleType = "Motorcycle";
    }
    aboutVehicle () {
        console.log(`Type of vehicle: ${this.vehicleType} - Manufacturer: ${this.manufacturer} - Wheels: ${this.wheels} - Doors: ${this.hasDoors}`);
    }

}

var motorcycle = new Motorcycle("Honda", 2, "SportsCar", 18);
motorcycle.aboutVehicle();

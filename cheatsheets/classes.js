class User {

    constructor(name) {
        this.name = name;
    }

    sayHi() {
        console.log(this.name);
    }
}   

let user = new User("John"); // new object is created.
user.sayHi();

// class expression
let Users = class {
    sayHi() {
        console.log("Hello");
    }
};

let user1 = new Users();
user1.sayHi();

class Userss {

    constructor(name) {
        this.name = name;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        if (value.length < 4) {
            console.log("Name is too short...");
            return;
        }
        this._name = value;
    }
}

let user2 = new Userss("John");
console.log(user2.name);

user3 = new Userss("");


// class inheritance

class Animal {
    constructor(name) {
        this.name = name;
        this.speed = 0;
    }

    run(speed = "10") {
        this.speed = speed;
        console.log(`${this.name} runs with speed ${this.speed}`)
    }

    stop() {
        this.speed = 0;
        console.log(`${this.name} stands still...`);
    }
}

let animal = new Animal("Lion");
console.log(animal.name);
animal.run();

class Lion extends Animal {
    constructor(name) {
        super(name);        // this.name = name; not this
    }
    hides() {
        console.log(`${this.name} hides`) // no need for constructor just the hide is enough
    }
}

let lion = new Lion('lion');
lion.hides();
lion.run(40);
lion.stop();

// we can also overide a method

// Arrow functions have no super 


    // // constructor
    // // technically regular functions
    // function User(name) {
    //     this.name = name;
    //     this.admin = false;
    // }

    // let user = new User("jack");

    // console.log(user.name);
    // console.log(user.admin);

    // // Return from constructor
    // function BigUser() {
    //     this.name = "John";
    //     return {name: "Joseph"};
    // }

    // const userr = new BigUser();
    // // or let user = new BigUser; without ()
    // console.log(userr.name); // returns joseph

    // function Access(name) {
    //     this.name = name;
        
    //     this.sayHi = function() {
    //         console.log(`My name is ${this.name}`);
    //     }
    // }
    // const john = new Access('john');
    // john.sayHi();

    // function Calculator() {
    //     this.read = function() {
    //         this.a = +prompt("a: ");
    //         this.b = +prompt("b: ");
    //     }

    //     this.sum = function() {
    //         console.log(this.a + this.b);
    //     }

    //     this.mul = function() { 
    //         console.log(this.a * this.b);
    //     }
    // }

    // const calculator = new Calculator();
    // calculator.read();
    // calculator.sum();

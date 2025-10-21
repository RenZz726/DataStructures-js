class CoffeeMachine {
    _waterAmount = 0;

    set waterAmount(value) {
        if (value < 0) {
            value = 0;
        }
        this._waterAmount = value;
    }

    get waterAmount() {
        return this._waterAmount;
    }

    constructor(power) {
        this._power = power;
    }

}

let coffeeMachine = new CoffeeMachine(100);

coffeeMachine._waterAmount = -10;
console.log(coffeeMachine.waterAmount);

let cm = new CoffeeMachine(100);
cm._waterAmount = -50;                // direct assignment, bypasses setter
console.log(cm._waterAmount);         // -50
console.log(cm.waterAmount);          // -50 (getter just returns the stored value)

class Coffee {
    #waterLimit = 200;

    #fixWaterAmount(value) {
        if (value < 0) return 0;
        if (value > this.#waterLimit) return this.#waterLimit;
    }

    setWaterAmount(value) {
        this.#waterLimit = this.#fixWaterAmount(value);
    }
}

let coffeeMachines = new CoffeeMachine();

// coffeeMachines.#fixWaterAmount(123);
// coffeeMachine.#waterLimit = 1000;
// console.log(coffeeMachines.waterLimit);


// Extending built-in classes

// add one more method to it (can do more)
class PowerArray extends Array {
  isEmpty() {
    return this.length === 0;
  }
}

let arr = new PowerArray(1, 2, 5, 10, 50);
alert(arr.isEmpty()); // false

let filteredArr = arr.filter(item => item >= 10);
alert(filteredArr); // 10, 50
alert(filteredArr.isEmpty()); // false

// MIXINS
// mixins is a class that contains methods that can be used by other classes without a need to
// inherit from it

let sayHiMixin = {
  sayHi() {
    console.log(`Hi, I am ${this.name}`);
  },
  sayBye() {
    console.log(`Bye, ${this.name}`);
  }
};

class User {
  constructor(name) {
    this.name = name;
  }
}

// Copy methods from the mixin into User.prototype
Object.assign(User.prototype, sayHiMixin);

let user = new User("Alice");
user.sayHi();  // Hi, I am Alice
user.sayBye(); // Bye, Alice

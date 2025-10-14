class CoffeeMachine {
    waterAmout = 0;

    constructor(power) {
        this.power = power;
        console.log(`Created a coffee-machine, power: ${power}`);
    }

}

let coffeeMachine = new CoffeeMachine(100);
coffeeMachine.waterAmout = 200;
console.log(coffeeMachine.waterAmout);
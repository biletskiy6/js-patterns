const car = {
    wheels: 4,

    init() {
        console.log(`This car has:${this.wheels}. Owner is: ${this.owner}`);
    }
}

const carWithOwner = Object.create(car, {
    owner: {
        value: "vvictor"
    }
});

console.log(carWithOwner.__proto__ === car);

carWithOwner.init();
// Preloader
window.addEventListener("load", () => document.querySelector(".preloader")
    .classList.add("hidePreloader"));

const CreateCars = (() => {
    // Car data
    const cars = [];

    // car class
    class Car {
        constructor(make, country, img, special, model, price, type, trans, gas) {
            this.make = make;
            this.country = country;
            this.img = img;
            this.special = special;
            this.model = model;
            this.price = price;
            this.type = type;
            this.trans = trans;
            this.gas = gas;
        }
    }

    // car creation function
    function makeCar(make, country, img = 'img/car-default.jpeg', special = true, model = 'new model', price = 10000, type = 'sedan', trans = 'automatic', gas = '30') {
        const car = new Car(make, country, img, special, model, price, type, trans, gas);
        cars.push(car);
    }

    // produce cars function
    function produceCars() {
        makeCar("mercedes", "german", "img/car-german-1.jpeg");
        makeCar("bmw", "german", "img/car-german-2.jpeg");
        makeCar("bmw", "german", "img/car-german-3.jpeg");
        makeCar("bmw", "german", "img/car-german-4.jpeg");
        makeCar("bmw", "german", "img/car-german-5.jpeg");
        makeCar("chevy", "american", "img/car-american-1.jpeg", false);
        makeCar("chevy", "american", "img/car-american-2.jpeg", false);
        makeCar("chevy", "american", "img/car-american-3.jpeg", false);
        makeCar("chevy", "american", "img/car-american-4.jpeg", false);
        makeCar("chevy", "american", "img/car-american-5.jpeg", false);
    }

    produceCars();
    // Special cars array
    const specialCars = cars.filter(car => car.special === true);
    return {
        cars,
        specialCars
    }

})();

console.log(CreateCars.cars);
console.log(CreateCars.specialCars)
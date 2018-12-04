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
        makeCar("bmw", "german", "img/car-german-3.jpeg", false);
        makeCar("bmw", "german", "img/car-german-4.jpeg", false);
        makeCar("bmw", "german", "img/car-german-5.jpeg");
        makeCar("chevy", "american", "img/car-american-1.jpeg");
        makeCar("chevy", "american", "img/car-american-2.jpeg");
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

// console.log(CreateCars.cars);
// console.log(CreateCars.specialCars)

const DisplaySpecialCars = ((CreateCars) => {
    const specialCars = CreateCars.specialCars;
    // console.log(specialCars);
    const info = document.querySelector(".featured-info");
    // Document loaded event
    document.addEventListener("DOMContentLoaded", () => {
        info.innerHTML = '';
        let data = '';
        specialCars.forEach(item => {
            data += ` 
                <div class="featured-item my-3 d-flex p-2 text-capitalize align-items-baseline flex-wrap">
                    <span data-img="${item.img}" class="featured-icon mr-2">
                        <i class="fas fa-car"></i>
                    </span>
                    <h5 class="font-weight-bold mx-1">${item.make}</h5>
                    <h5 class="mx-1">${item.model}</h5>
                </div>`;
        })
        info.innerHTML = data;
    })

    // Change image
    info.addEventListener("click", (event) => {
        // console.log(event.target.parentElement);
        if(event.target.parentElement.classList.contains('featured-icon')) {
            // console.log("hi")
            const img = event.target.parentElement.dataset.img;
            // console.log(img)
            document.querySelector(".featured-photo").src = img;
        }
    })
    
})(CreateCars);
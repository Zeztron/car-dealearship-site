const Events = (() => {
    // sticky navbar
    const navbar = document.querySelector(".navbar");
    // show and hide preloader
    window.addEventListener("load", () => document.querySelector(".preloader").classList.add("hidePreloader"));
    // Add class to navbar
    window.addEventListener("scroll", () => {
        // Get the height
        let height = document.documentElement.scrollTop || window.pageYOffset;
        // console.log(height);
        (height > 76) ? navbar.classList.add("navbar-change") : navbar.classList.remove("navbar-change");

    })
    
    
})();

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
        makeCar("mercedes", "german", "img/car-german-1.jpeg", true, "SLK AMG", 150000, "coupe", "manual", 20);
        makeCar("bmw", "german", "img/car-german-2.jpeg", true, "X5", 60000, "SUV", "automatic", 24);
        makeCar("bmw", "german", "img/car-german-3.jpeg", false, "M2", 54500, "coupe", "manual", 25);
        makeCar("bmw", "german", "img/car-german-4.jpeg", false, "M3", 66000, "sedan", "automatic", 25);
        makeCar("bmw", "german", "img/car-german-5.jpeg", true, "M2", 55000, "sedan", "automatic", 25);
        makeCar("chevy", "american", "img/car-american-1.jpeg", true);
        makeCar("chevy", "american", "img/car-american-2.jpeg", true);
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

const DisplayCars = ((CreateCars) => {
    // Display all the cars
    const cars = CreateCars.cars;
    // Car container
    const inventory = document.querySelector(".inventory-container");
    
    document.addEventListener("DOMContentLoaded", () => {
        inventory.innerHTML = '';
        let output = '';
        cars.forEach(car => {
            output += `
                <div class="col-10 mx-auto my-3 col-md-6 col-lg-4 single-car ${car.country}">
                    <div class="card car-card">
                        <img src="${car.img}" alt="German Car 1" class="card-img-top car-img">
                        <!-- card body -->
                        <div class="card-body">
                            <div class="car-info d-flex justify-content-between">
                                <!-- first flex child -->
                                <div class="car-text text-uppercase">
                                    <h6 class="font-weight-bold">${car.make}</h6>
                                    <h6>${car.model}</h6>
                                </div>
                                <!-- second flex child -->
                                <h5 class="car-value align-self-center py-2 mx-3">
                                    $ <span class="car-price">${car.price}</span>
                                </h5>
                            </div>
                        </div>
                        <!-- end of card body -->
                        <div class="card-footer d-flex justify-content-between">
                            <p class="text-capitalize"><span><i class="fas fa-car"></i></span> ${car.type}</p>
                            <p class="text-capitalize"><span><i class="fas fa-cogs"></i></span> ${car.trans}</p>
                            <p><span><i class="fas fa-gas-pump"></i></span> ${car.gas}</p>
                        </div>
                    </div>
                </div>`;
        })
        inventory.innerHTML += output;
    })
})(CreateCars);

// Filter cars
const FilterCars = (() => {
    const filter = document.querySelectorAll(".filter-btn");
    filter.forEach((btn => {
        btn.addEventListener("click", (event) => {
            const value = event.target.dataset.filter;
            const singleCar = document.querySelectorAll(".single-car");
            singleCar.forEach((car) => {
                if(value === "all") {
                    car.style.display = "block";
                } else {
                    (!car.classList.contains(value)) ? car.style.display = "none" : car.style.display = "block";
                }
            })
        })
    }))

})();

// Show modal
const Gallery = (() => {
    // all items
    const items = document.querySelectorAll(".gallery-item");
    // modal
    const showcase = document.querySelector(".showcase");
    items.forEach(item => {
        item.addEventListener("click", (event) => {
            showcase.classList.add("showcase-show");
            // console.log(event.target);
            if(event.target.classList.contains("gallery-item")) {
                // console.log('it worked');
                let src = event.target.childNodes[1].src;
                // console.log(src);
                document.querySelector(".showcase-img").src = src;
            }
        })
    })
    // Close modal
    document.querySelector(".showcase-close").addEventListener("click", () => {
        showcase.classList.remove("showcase-show");
    })
})();


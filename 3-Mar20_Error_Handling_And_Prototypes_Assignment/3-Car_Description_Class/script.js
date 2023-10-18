

class Car {
    company;
    model;
    year;
    getDescription() {
        return `This is a ${this.year} ${this.company} ${this.model}`;
    }
}

const myCar = new Car();
myCar.year = 2022;
myCar.company = "skoda";
myCar.model = "Rapid";
console.log(myCar.getDescription());
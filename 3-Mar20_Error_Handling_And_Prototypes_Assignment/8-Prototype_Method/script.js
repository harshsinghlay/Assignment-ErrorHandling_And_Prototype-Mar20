
function Student(name) {
    this.name = name;
}

Student.prototype.printDetails = () => {
    console.log(`Hello, the student is ${this.name}`);
}

const student = new Student("Harsh");
student.printDetails();
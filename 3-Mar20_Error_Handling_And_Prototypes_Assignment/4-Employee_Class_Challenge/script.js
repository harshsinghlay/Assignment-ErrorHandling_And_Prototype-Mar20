

class Employee {
   name;
   position;
   salary;
   constructor(name, position, salary) {
      this.name = name;
      this.salary = salary;
      this.position = position;
   }
   getSalary() {
      return this.salary;
   }
}
const employee1 = new Employee("harsh", "jr. web developer ", "80000");
console.log(employee1.getSalary());


const getPerson = (person) => {
  try {
    if (typeof person !== "object" || !person.name || !person.age) {
      throw new Error("Invalid parameter type");
    } else {
      return `Name: ${person.name}, Age: ${person.age}`;
    }
  } catch (e) {
    return e.message;
  }
}
console.log(getPerson({ name: "harsh", age: 20 }));
console.log(getPerson({ name: "harsh" }));
console.log(getPerson(["name", "age"]));

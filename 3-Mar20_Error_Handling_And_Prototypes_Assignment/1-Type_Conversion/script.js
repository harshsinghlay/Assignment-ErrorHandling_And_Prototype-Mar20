

const convertToNumber = (str) => {
  try {
    const num = Number(str);
    if (Number.isNaN(num)) {
      throw new Error("Invalid Input")
    }
    else {
      return num;
    }
  } catch (e) {
    return e.message;
  }
}

console.log(convertToNumber("123"));
console.log(convertToNumber("abc"));


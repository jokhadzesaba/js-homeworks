function getDivisors(number) {
  let arrayOfDivisors = [];
  try {
    if (typeof number !== "number") {
      throw Error("parameter type is not a Number");
    } else if (number === 0) {
      throw Error("parameter can't be a 0");
    }
    for (let i = 0; i <= number; i++) {
      if (number % i === 0) {
        arrayOfDivisors.push(i);
      }
    }
    return arrayOfDivisors;
  } catch (error) {
    console.log(error.message);
  }
}

console.log(getDivisors(12)); // [1, 2, 3, 4, 6, 12]
console.log(getDivisors("Content")); // Error: parameter type is not a Number
console.log(getDivisors(0)); // Error: parameter can't be a 0
console.log("gg");

function reverseCase(sentence) {
  let reverseString = "";
  try {
    if (typeof sentence !== "string") {
      throw new TypeError("sentence is not string");
    }
    if (sentence === "") {
        return "''";
    }
    for (let i of sentence) {
      if (i.toUpperCase() !== i) {
        reverseString += i.toUpperCase();
      } else {
        reverseString += i.toLowerCase();
      }
    }   
    return reverseString;
  } catch (error) {
    console.log(error.message);
  }
}

console.log(reverseCase(1));

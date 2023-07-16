function f(arr) {
  try {
    if (arr.length === 0) {
      throw Error("parameter can't be an empty");
    } else if (!Array.isArray(arr)) {
      throw Error("parameter type should be an array");
    }
    for (let element of arr) {
      if (typeof element !== "number") {
        throw Error("parameter type should be array of numbers");
      }
      console.log(element);
    }
  } catch (error) {
    console.log(error.message);
  }
}

f(1, 2, 3); // Error: parameter type should be an array
f("Content"); // Error: parameter type should be an array
f([]); // Error: parameter can't be an empty
f(["🧛🏼", "👨🏽‍🔧", 5, "dogs"]); // Error: parameter type should be array of numbers

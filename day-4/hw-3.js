function rotate(array, number, direction = "right") {
  try {
    if (!Array.isArray(array) || typeof number !== "number") {
      throw Error(
        "first parameter is not array or second parameter is not number"
      );
    }
    if (direction === "right") {
      let splice = array.splice(0, array.length - (number % array.length));
      console.log(splice);
      array = [...array, ...splice];
      console.log(array);
    } else if (direction === "left") {
      let splice = array.splice(number % array.length, array.length);
      array = [...splice, ...array];
      console.log(array);
    }
  } catch (error) {
    console.log(error.message);
  }
}
let arr = [1, 2, 3]; //
rotate(arr, 1);

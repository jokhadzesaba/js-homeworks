function reverse(array) {
  try {
    if (!Array.isArray(array)) throw Error("Not an array");
    else if (array.length === 0) throw Error("Array is empty");
    for (let i = 0; i < array.length / 2; i++) {
      let temp = array[i];
      array[i] = array[array.length - 1 - i];
      array[array.length - 1 - i] = temp;
    }
    console.log(array);
  } catch (error) {
    console.log(error.message);
  }
}
let arr = 2;
reverse(arr);

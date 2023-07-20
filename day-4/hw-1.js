function f(arr) {
  let result = [];
  let sum = 0;
  try {
    if (!Array.isArray(arr)) {
      throw Error("not an array");
    }
    arr.forEach(function (element) {
      if (typeof element !== "number" || !Array.isArray(element)) {
        throw Error("not a number or array");
      }
      if (Array.isArray(element)) {
        result = result.concat(f(element));
      } else {
        result.push(element);
      }
    });
    return result.reduce(
      (acumulator, currentvalue) => acumulator + currentvalue,
      sum
    );
  } catch (error) {
    console.log(error.message);
  }
}

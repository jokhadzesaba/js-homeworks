function mix(...args) {
  let result = args[0]();
  let results = [];
  try {
    for (let i of args) {
      if (typeof i !== "function") {
        throw new TypeError("every parameter must be function");
      }
    }

    results.push(result);
    if (result === null || result === undefined || result instanceof Error) {
      throw new Error("first function returns null or zero or error");
    }
    for (let i = 1; i < args.length; i++) {
      if (result === undefined || result === null || result instanceof Error) {
        let k = 1;
        while (
          results[i - k] === null ||
          results[i - k] === undefined ||
          results[i - k] instanceof Error
        ) {
          k++;
        }
        try {
          result = args[i](results[i - k]);
        } catch (error) {
          result = null;
        }
      } else {
        try {
          result = args[i](result);
        } catch (error) {
          result = null;
        }
      }
      results.push(result);
    }
    console.log(results);
    return result;
  } catch (error) {
    console.log(error.message);
  }
}

console.log(
  mix(
    () => {
      return 0;
    },
    (prev) => {
      return prev + 6;
    },
    (prev) => {
      return prev + 1;
    },
    (prev) => {
      return prev + 4;
    }
  )
);

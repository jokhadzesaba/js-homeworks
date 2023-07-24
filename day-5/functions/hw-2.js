function mix(...args) {
  let results = [];
  let errors = [];
  let result;
  try {
    for (let i of args) {
      if (typeof i !== "function") {
        throw new TypeError("every parameter must be function");
      }
    }
    result = args[0]();
    if (result === null || undefined) {
      return { errors, value: result };
    }

    results.push(result);

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
          errors.push({
            name: error.name,
            message: error.message,
            stack: error.stack,
            level: i + 1,
          });
        }
      } else {
        try {
          result = args[i](result);
        } catch (error) {
          errors.push({
            name: error.name,
            message: error.message,
            stack: error.stack,
            level: i + 1,
          });
        }
      }

      results.push(result);
    }
  } catch (error) {
    errors.push({
      name: error.name,
      message: error.message,
      stack: error.stack,
      level: 1,
    });
  }

  return { errors, value: result };
}

console.log(
  mix(
    () => {
      return 0;
    },
    (prev) => {
      return prev + 1;
    },
    (prev) => {
      return prev + 4;
    }
  )
);

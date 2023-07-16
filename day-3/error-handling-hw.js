const value = 100;
const nearLimit = 90;
const limit = 100;

try {
  if (value > limit) {
    throw Error("Value exceeds the limit.");
  }
  if (value > nearLimit) {
    throw Error("Warning: Value is greater than the near limit");
  }
} catch (error) {
  console.log(error.message);
}

function genericFunction(func) {
  try {
    func();
  } catch (error) {
    console.log(error);
  }
}
function sayHello() {
  console.log("hello");
}
function addOne() {
  const a = 2;
  a++;
  console.log(a);
}
genericFunction(addOne());


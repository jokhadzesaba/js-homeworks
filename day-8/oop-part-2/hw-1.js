Function.prototype.delay = function (ms) {
  const func = this;
  return function (...args) {
    setTimeout(() => {
      func.apply(this, args);
    }, ms);
  };
};

function f() {
  console.log("hello");
}
f.delay(1000)();
function f2(a, b) {
  console.log(a + b);
}
f2.delay(1000)(1, 2);

function Hamster() {
  this.food = []; // problem was Hamster.prototype.food = []; this way food array is shared by all instances of Hamster
}

Hamster.prototype.found = function (something) {
  this.food.push(something);
};

var speedy = new Hamster();
var lazy = new Hamster();

speedy.found("apple");
speedy.found("nut");

console.log(speedy.food.length);
console.log(lazy.food.length);

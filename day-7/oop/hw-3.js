function CoffeeMachine(power, capacity) {
  var waterAmount = 0;
  var WATER_HEAT_CAPACITY = 4200;

  function getTimeToBoil() {
    return (waterAmount * WATER_HEAT_CAPACITY * 80) / power;
  }

  this.setWaterAmount = function (amount) {
    if (amount < 0) {
      throw new Error("Value has to be positive");
    }
    if (amount > capacity) {
      throw new Error("You can't put more water, than " + capacity);
    }
    waterAmount = amount;
  };
  this.addWater = (amount) => {
    if (amount <= 0) {
      throw new Error("you cannot add water less or equal than 0");
    } else if (amount + waterAmount > capacity) {
      throw new Error("you cannot add more water");
    } else {
      waterAmount += amount;
    }
  };
  function onReady() {
    console.log("Coffee is ready");
  }

  this.run = function () {
    setTimeout(onReady, getTimeToBoil());
  };
}

var coffeeMachine = new CoffeeMachine(100000, 400);
try {
  coffeeMachine.addWater(200);
  coffeeMachine.addWater(100);
  coffeeMachine.addWater(300);
  coffeeMachine.run();
} catch (error) {
  console.error(error.message);
}

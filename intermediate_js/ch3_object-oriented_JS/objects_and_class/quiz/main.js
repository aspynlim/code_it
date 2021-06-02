function makeCar(color, speed) {
  const car = {
    color,
    speed,
    run() {
      console.log(`Runs at ${this.speed}`);
    },
  };
  return car;
}

const car1 = makeCar('blue', '100km/h');

car1.run();
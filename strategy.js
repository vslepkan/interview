class Commute {
  travel(transport) {
    return transport.travelTime;
  }
}

class Vehicle {
  get travelTime() {
    return this._timeTaken;
  }
}

class Bus extends Vehicle {
  constructor() {
    super();
    this._timeTaken = 15;
  }
}

class Taxi extends Vehicle {
  constructor() {
    super();
    this._timeTaken = 5;
  }
}

let commute = new Commute();
let bus = new Bus();
let taxi = new Taxi();

console.log(commute.travel(bus)); // 15
console.log(commute.travel(taxi)); // 5

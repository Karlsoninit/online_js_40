const fn = function () {
  console.log(this);
};

// const obj1 = {
//   name: "call obj1",
//   callCtx: () => {
//     console.log(this);
//   },
// };

// obj1.callCtx;

// const obj2 = {
//   name: "call obj2",
//   call: obj1.callCtx,
// };

// const user = {
//   name: "Ben",
// };

// const showUserName = function (num) {
//   console.log(`num`, num);
//   return this.name;
// };

// const result = showUserName.bind(user, 6);

// console.log(`result`, result());

// const audi = {
//   door: 4,
//   color: "red",
//   tire: "michelin",
// };

// const bmw = Object.create(audi);
// bmw.color = "dark";
// const jeep = Object.create(bmw);
// const lexus = Object.create(jeep);

// console.log(`lexus`, lexus.color);
//
//
//
//
//
//
//
//
//
//
//

// const CarConstructor = function (door, engine, tire) {
//   this.door = door;
//   this.engine = engine;
//   this.tire = tire;
// };

// CarConstructor.prototype.showDoorCount = function () {
//   console.log(this.door);
// };

// CarConstructor.prototype.showEngine = function () {
//   console.log(this.engine);
// };

// const audi = new CarConstructor(4, 2.0, "michelin");
// const bmw = new CarConstructor(2, 3.0, "michelin");

// audi.showDoorCount();

// bmw.showEngine();
//
//
//
//
//
//
//
//
//
//

class Services {
  showEngine = function () {
    console.log(this.engine);
  };
  showTire = function () {
    console.log(this.tire);
  };
}
//
//
//
//
//
//

class CarConstructor extends Services {
  static Role = {
    CONSTRUCTOR: "constructor",
    MECHANIC: "mechanic",
  };

  #tire;
  constructor(props) {
    super();
    this.door = props.door = 4;
    this.engine = props.engine = 1.2;
    this.#tire = props.tire = "rosava";
    this.role = props.role = CarConstructor.Role.MECHANIC;
  }

  preSaleInfo = function () {
    // this.count = 56;
    return this.#tire;
  };

  get tire() {
    return this.#tire;
  }

  set tire(newBrand) {
    this.#tire = newBrand;
  }

  renameTire(newtire) {
    this.#tire = newtire;
  }
}

const audi = new CarConstructor({});
console.log(`audi.tire`, audi.tire);
// audi.tire = "michelin";

audi.renameTire("michelin");
console.log(`audi`, audi);

class ElectroBuilder extends CarConstructor {
  constructor(props, battery = 60) {
    super(props);
    this.battery = battery;
  }
}

const electroCar = new ElectroBuilder({});

console.log(`electroCar`, electroCar);

// замыкание

const marketPlace = (name) => {
  let validSessions = 0;
  const products = [];
  const cart = (product) => {
    if (product) {
      products.push(product);
    }
    validSessions += 1;
    return {
      sessions: validSessions,
      products,
      name,
    };
  };
  return cart;
};

// const user1 = marketPlace("Maksym");
// user1("phone");
// user1("bike");
// user1();
// console.log(user1());

// const user2 = marketPlace("Petya");
// user2();
// console.log(user2());
//
//
//
//
//

// const add = (p1) => {
//   const innerFn = (p2) => {
//     return p1 + p2;
//   };
//   return innerFn;
// };

// console.log(add(3)(2)); // 5

// const innerFn = add(3);
// console.log(innerFn(2));
// callback

// const add = (p1) => (p2) => (p3) => p1 + p2 + p3;

// console.log(add(3)(2)(1));

const users = [
  {
    name: "John",
    lastName: "Trash",
    year: 19,
    location: "Ukraine",
  },
  {
    name: "Ben",
    lastName: "Trash",
    year: 19,
    location: "Ukraine",
  },
  {
    name: "Petya",
    lastName: "Trash",
    year: 19,
    location: "Ukraine",
  },
];

const userLocation = function () {
  return this.location;
};

const getUserName = function (param) {
  console.log(`param`, param);

  return this.name;
};

const userInfo = function () {
  users.forEach((user) => {
    console.log(
      getUserName.call(user, [{ connect: true }, { isActive: true }])
    );
  });
};

// приватные и публичные методы

class Person {
  #location;
  #email;

  static #totalSessions = 0;

  static #takenEmails = [];

  static isValidUserSessionsCount() {
    Person.#totalSessions += 1;
  }

  static emailUserSessions() {
    return Person.#takenEmails;
  }

  static validSessions() {
    return Person.#totalSessions;
  }

  constructor(props) {
    const { name = "_USER", work = "_WORK", email } = props;
    this.name = name;
    this.work = work;
    this.#email = email;
    Person.#takenEmails.push(email);
    Person.isValidUserSessionsCount();
  }

  toString() {
    return `Name of person: ${this.name}`;
  }

  addLocation(location) {
    this.#location = location;
  }

  getUserCurrentLocation() {
    return `${this.name} находится ${this.#location}`;
  }

  get email() {
    return this.#email;
  }

  set email(newEmail) {
    this.#email = newEmail;
  }
}

const person1 = new Person({
  name: "Maksym",
  work: "developer",
  email: "maksym@gmail.com",
});

person1.addLocation("Ukraine");

console.log(`person1`, person1.location);

const person2 = new Person({
  name: "Ben",
  work: "QA",
  email: "benQa@gmail.com",
});

const person3 = new Person({
  name: "Petya",
  work: "backend",
});

// console.log(Person.validSessions());
// console.log(Person.emailUserSessions());

// const numbers = new Set();

// numbers.add(3);
// numbers.add(3);
// numbers.add(3);
// numbers.add(3);
// numbers.add(2);

// numbers.delete(3);

// console.log(numbers.has(3));

// console.log(`numbers`, [...numbers]);

// const array = [43, 4, [43, 4, 4, 3], 3, [2, 2, 3, 32]].flatMap(
//   (number) => number
// );

// const unique = [...new Set(array)];

// console.log(`unique`, unique);

const callFn = (param) => param + 1;
const callObj = {
  name: 98773,
};
const callSomeVariables = 0;

const contacts = new Map();

contacts.set(callFn, { phone: 43434343, email: "ewer@we.com" });
contacts.set(callObj, { phone: 9999999, email: "my@gmail.com" });

console.log(`contacts`, contacts.get(callFn));
console.log(`contacts`, contacts.get(callObj));
console.log(`contacts`, contacts);
console.log(`callObj`, callObj);

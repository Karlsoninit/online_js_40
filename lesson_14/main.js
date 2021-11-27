const { v4: uuidv4 } = require("uuid");

const random = require("lodash/random");
const sortBy = require("lodash/sortBy");
// import debounce from "lodash/debounce";

// document.getElementById("search").addEventListener(
//   "input",
//   _.debounce((event) => {
//     console.log(`event.target.value`, event.target.value);
//   }, 1000)
// );

// document.getElementById("search").addEventListener(
//   "input",
//   debounce((event) => {
//     console.log(`event.target.value`, event.target.value);
//   }, 1000)
// );

// const randomNumber = random(0, 100);

const users = [
  { user: "fred", age: 48, id: "010826ca-4571-49bc-9240-c5358688eb3e" },
  { user: "barney", age: 36 },
  { user: "fred", age: 40 },
  { user: "barney", age: 34 },
];

const sortByAge = sortBy(users, [
  function (o) {
    return o.user;
  },
]);

console.log(`sortByAge`, sortByAge);

console.log(uuidv4());

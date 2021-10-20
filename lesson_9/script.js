// const array = [1, 2, 3, 4, 56, 7];
// const array2 = [];

// const res = array.forEach((num) => {
//   if (num > 3) {
//     array2.push(num * 2);
//   }
// });
// console.log(`array2`, array2);
// console.log(`res`, res);

// const array = [1, 2, 3, 4, 56, 7, 134];

// const res = array.reduce((acc, element) => {
//   acc.push(element * 2);
//   return acc;
// }, []);

// console.log(`res`, res);

// --------------- this ----------

// const Anabela = {
//   gender: "female",
//   name: {
//     title: "Madame",
//     first: "Anabela",
//     last: "Da Silva",
//   },
//   location: {
//     street: {
//       number: 4608,
//       name: "Rue de la Mairie",
//     },
//     city: "Muntelier",
//     state: "Appenzell Ausserrhoden",
//     country: "Switzerland",
//     postcode: 4781,
//     coordinates: {
//       latitude: "-53.2043",
//       longitude: "119.2987",
//     },
//     timezone: {
//       offset: "-1:00",
//       description: "Azores, Cape Verde Islands",
//     },
//   },
//   email: "anabela.dasilva@example.com",
//   login: {
//     uuid: "02d67a91-f164-4f32-ba5b-7a6a9d616e4c",
//     username: "sadkoala697",
//     password: "eeeeeee",
//     salt: "gxs8oj8O",
//     md5: "4d9247103d4fcc3a442551d33e355b91",
//     sha1: "0ae52f7b63adedf856d84b6bb43280988df574de",
//     sha256: "a0cc84231f000556e788d51bdb15aed2bca2853944c87feb318c26d431254f68",
//   },
//   dob: {
//     date: "1965-08-01T19:10:47.003Z",
//     age: 56,
//   },
//   registered: {
//     date: "2013-11-05T14:25:15.615Z",
//     age: 8,
//   },
//   phone: "075 382 71 84",
//   cell: "075 424 16 20",
//   id: {
//     name: "AVS",
//     value: "756.6448.5731.28",
//   },
//   picture: {
//     large: "https://randomuser.me/api/portraits/women/57.jpg",
//     medium: "https://randomuser.me/api/portraits/med/women/57.jpg",
//     thumbnail: "https://randomuser.me/api/portraits/thumb/women/57.jpg",
//   },
//   nat: "CH",
// };

// const Louis = {
//   gender: "male",
//   name: {
//     title: "Mr",
//     first: "Louis",
//     last: "Jones",
//   },
//   location: {
//     street: {
//       number: 4581,
//       name: "Bairds Road",
//     },
//     city: "Greymouth",
//     state: "Bay of Plenty",
//     country: "New Zealand",
//     postcode: 89001,
//     coordinates: {
//       latitude: "64.6813",
//       longitude: "-90.6458",
//     },
//     timezone: {
//       offset: "+9:00",
//       description: "Tokyo, Seoul, Osaka, Sapporo, Yakutsk",
//     },
//   },
//   email: "louis.jones@example.com",
//   login: {
//     uuid: "a5e7031e-578b-4501-a38f-63cb6979f7f1",
//     username: "orangezebra470",
//     password: "coke",
//     salt: "wCHTvbgA",
//     md5: "7d5fb9b19ae89b8743d109334f1ba972",
//     sha1: "9d25b28870643d34e4e1966c2797624b41da3ae9",
//     sha256: "054248de7630b73219c0934443ed418d0b29a82dd727fecaae7c0190ff6392d0",
//   },
//   dob: {
//     date: "1955-03-29T03:01:08.489Z",
//     age: 66,
//   },
//   registered: {
//     date: "2015-10-07T23:52:12.351Z",
//     age: 6,
//   },
//   phone: "(464)-594-9154",
//   cell: "(025)-853-3499",
//   id: {
//     name: "",
//     value: null,
//   },
//   picture: {
//     large: "https://randomuser.me/api/portraits/men/72.jpg",
//     medium: "https://randomuser.me/api/portraits/med/men/72.jpg",
//     thumbnail: "https://randomuser.me/api/portraits/thumb/men/72.jpg",
//   },
//   nat: "NZ",
// };

// const getUserName = function (p) {
//   console.log(`p`, p);
//   console.log("this ---> ", this);
//   //   console.log(`name`, this.name.first);

//   return this.name.first;
// };

// const getUserPhoneNumber = function () {
//   console.log(`this`, this);
// };

// console.log(`Louis after`, Louis);

// Louis.newFnGetUserName = getUserName;

// console.log(`Louis before`, Louis);

// Louis.newFnGetUserName();

// const res = getUserName.bind(Louis, "night", "party", "PM");

// console.log(`res`, res());

// const newFn = getUserName.bind(Louis, "night", "party", "PM");

// console.log(`newFn`, newFn());

//// ================

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
//
//
//
//
//
//
//
//

import users from "./users.js";

console.log(`users`, users);

// const getUserName = function () {
//   return this.name.first;
// };

// const getUserPhoneNumber = function () {
//   return this.phone;
// };

// const getUserInfo = (callback) => users.map((user) => callback.call(user));

// const returnName = getUserInfo(getUserName);

// console.log(`returnName`, returnName);

// const returnPhoneNumber = getUserInfo(getUserPhoneNumber);

// console.log(`returnPhoneNumber`, returnPhoneNumber);

const getUserName = function () {
  return users.map((user) => user.name.first);
};

const getUserPhoneNumber = () => users.map((user) => user.phone);

const returnName = getUserName();

console.log(`returnName`, returnName);

const returnPhoneNumber = getUserPhoneNumber();

console.log(`returnPhoneNumber`, returnPhoneNumber);

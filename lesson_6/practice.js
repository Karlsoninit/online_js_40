import articles from "./articles.js";

// const foo = function (params) {
//   const { type } = params;
//   const array = [];

//   for (let item of Object.values(params)) {
//     if (item !== type) {
//       array.push(...item);
//     }
//   }

//   console.log(`array`, array);
// };

// foo({
//   type: "number",
//   array4: [1, 2, 3, 4, 3, 667, 8, 8, 5, 4],
//   array4: [2, 43, 36, 576, 3, 667, 8, 8, 5, 4],
//   array4: [2, 43, 36, 576, 3, 667, 8, 8, 5, 4],
//   array4: [2, 43, 36, 576, 3, 667, 8, 8, 5, 4],
//   array4: [2, 43, 36, 576, 3, 667, 8, 8, 5, 123],
//   array4: [2, 43, 36, 576, 3, 667, 8, 8, 5, 4, 65, 56],
// });

// 1, 3, "str", 4, [4, 12], 45, "copy";

// const a = {
//   number: 45,
// };

// const b = {
//   number: 98,
//   string: "hello world",
// };

// const obj = Object.assign({}, a, b, { f: 76 }, { p: 9 });
// const obj = { ...a, ...b, ...{ f: 76 }, ...{ p: 9 } };

// console.log(`obj ---> `, obj);

// const array1 = [4, 3532, 3];
// const array2 = [5, 32, 43, 65, 68, 2];

// console.log(`array1`, array1);
// console.log(`array2`, array2);

// const uniqueNumbers = [...array1, ...array2, ...["dsd", ...["dsd"]]];

// console.log(`uniqueNumbers`, uniqueNumbers);

// const assemble = function (...rest) {
//   const array = [];

//   for (let item of rest) {
//     array.push(...item);
//   }

//   return array;
// };

// const result = assemble(array1, array2, [43, 6, 57, 6]);

// console.log(`articles`, articles);

// const concatTitle = function (author, name) {
//   return `${author} ${name}`;
// };

// for (let article of articles) {
//   const {
//     author,
//     source: { name, id },
//   } = article;

//   const transformTitle = concatTitle(author, name);

//   console.log(`transformTitle`, transformTitle);
// }
// hobbies: ["swim", "jump", "run"],

const userInfo = {
  name: "Bob",
};
//
//
//
//
//
//
// //

// const foo = function (info) {
//   console.log(`info.hobbies ?? []`, info.hobbies ?? []);
//   if (info.hobbies ?? []) return;

//   for (let hobby of element) {
//     console.log(`hobby`, hobby);
//   }

//   console.log("finish");
// };

// foo(userInfo);

// ----------------------------------------------------------------

const a = { num: 9876 };
const b = { str: "hello" };

const allObj = { ...a, ...b };

//
//
//
//
//
//
//
//
//

// const foo = function (str, ...rest) {
//   console.log(`str`, str);
//   console.log(`rest`, rest);
// };

// foo("string", 9873, { num: 986 }, [434, 546, 76654, 43]);

const article = articles[0];

const { author, content } = articles[0];

console.log(author, content);

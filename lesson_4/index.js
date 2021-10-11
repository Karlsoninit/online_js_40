// first();

// function first() {
//   console.log("first");
// } // function declaration

// const second = function longTestFunctionForLesson4() {
//   console.log("second");
// }; // function expression

// (function () {
//   second();
// })(); // IIFE

// console.log("finish");

// const message = "work";

// {
//   {
//     {
//       {
//         console.log(message);
//       }
//     }
//   }
// }

// ------------------------------------------------------------------

const array = [1, 2, 2, 3, 4, 5];

// const addToNumbers = function (p1, p2) {
//   return p1 + p2;
// };

// const result = addToNumbers(3, 2);

// console.log(`result`, result);

// const result2 = addToNumbers(9, 5);

// console.log(`result2`, result2);

// const findCountNumbers = function (notUniqueArray, num) {
//   const array = [];

//   for (const element of notUniqueArray) {
//     // console.log(`element`, element);

//     if (element === num) {
//       array.push(num);
//     }
//   }

//   return array.length;
// };

// const result = findCountNumbers(array, 2);

// console.log(`result`, result);

// ----------------------------------------------------------------

// const findCountNumbers = function (notUniqueArray, num) {
//   let count = 0;

//   for (const element of notUniqueArray) {
//     if (element === num) {
//       count += 1;
//     }
//   }

//   return count;
// };

// const result = findCountNumbers(array, 2);

// console.log(`result`, result);

// -----------------

const test = function () {
  const uniqueArray = [];
  const convertToArray = Array.from(arguments);

  for (const element of convertToArray) {
    if (!isNaN(element)) {
      uniqueArray.push(Number(element));
    }
  }

  return uniqueNumbers(uniqueArray);
};

const uniqueNumbers = (array) => {
  const uniqueNumbersArray = [];

  for (const element of array) {
    if (!uniqueNumbersArray.includes(element)) {
      uniqueNumbersArray.push(element);
    }
  }
  return uniqueNumbersArray;
};

const res = test(34, "34", 545, 65, 7, "monday", 76, 87, 7);
console.log(`res`, res);

(() => {
  fn1();
  fn2();
  fn3();
})();

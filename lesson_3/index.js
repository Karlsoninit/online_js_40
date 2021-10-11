// const array = [
//   "Commodity",
//   "CurrencyService",
//   "Derivatives",
//   "InvestmentFund",
//   "InvestmentStock",
//   "Brokerage",
// ];

// let dailyActivities = ["eat", "sleep"];

// const arraySomeWords = [45, 6, "Bond", 7, 85, "Ben", 43, 2, 3];
// let newArrayOnlyNumbers = [];
// console.log(`newArrayOnlyNumbers`, newArrayOnlyNumbers);
// let newArrayOnlyStrings = [];
// let newArrayOnlyMore = [];

// for (let i = 0; i < arraySomeWords.length; i += 1) {
//   //   console.log(`element`, typeof element);
//   const element = arraySomeWords[i];

//   if (isNaN(element)) {
//     newArrayOnlyStrings.push(element);
//     continue;
//   }

//   if (element > 20) {
//     newArrayOnlyMore.push(element);
//     continue;
//   }
//   newArrayOnlyNumbers.push(element);
//   console.log(`element`, element);
// }
// console.log(`newArrayOnlyNumbers`, newArrayOnlyNumbers);
// console.log(`newArrayOnlyMore`, newArrayOnlyMore);
// console.log(`newArrayOnlyStrings`, newArrayOnlyStrings);

// ----------------------------------------------------------------

// let a = 5;

// console.log(`old number a:`, a);

// let b = a;

// a = 13;
// console.log("new a :", a);
// console.log(`old number b:`, b);

// -------------- includes ----------------------------------------------------------------
// const array = [
//   "Commodity",
//   "CurrencyService",
//   "Derivatives",
//   "InvestmentFund",
//   "InvestmentStock",
//   "Brokerage",
// ];
// console.log(`array`, array);
// const getInfo = prompt("введите слово ");

// console.log(array.includes(getInfo));

// -------------- indexOf ----------------------------------------------------------------

// const arrayCopy = array.slice();
// const cutWord = arrayCopy.splice(array.indexOf("Derivatives"), 1);
// console.log(`cutWord`, cutWord);
// // console.log(arrayCopy.splice(array.indexOf("Derivatives"), 1));
// console.log(`array`, array);
// console.log(`old array`, arrayCopy.sort());

// ----------

// const one = [1, 3, 5, 7, 9];
// const two = [2, 4, 6, 8];

// // one.concat(two);

// // console.log(`one`, one);
// // console.log(`two`, two);

// const allNumbers = [...one, ...two];

// console.log(`allNumbers`, allNumbers);

// ----------------------------------------------------------------

let numsA = [1, 45, 48];
let numsB = numsA;
numsA.push(1278);
console.log(numsA); // [1, 45, 48]

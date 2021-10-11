"use strict";

// console.log("start");

// let globalVariable = 0;

// console.log(`globalVariable`, globalVariable);

// const str = "work strange";

// let globalVariable = 123;

// {
//   globalVariable = 987;
//   {
//     globalVariable = 59874;
//     {
//       globalVariable = "09d8cvuyhs";
//     }
//   }
// }

// console.log("result :", globalVariable);

// if else

// let price = 0;
// let message = "";

// const coffeeMachine = prompt("какой кофе ???");

// if (coffeeMachine === "амерекано") {
//   const isMilk = confirm("с молоком ? +10");

//   //   if (isMilk) {
//   //     message = "спасибо за выбор кофе с молоком";
//   //     price = 60;
//   //   } else {
//   //     message = "спасибо за выбор кофе без молоком";
//   //     price = 40;
//   //   }

//   isMilk ? (price = 60) : (price = 40);

//   isMilk
//     ? (message = "спасибо за выбор кофе с молоком")
//     : (message = "спасибо за выбор кофе без молоком");
// } else if (coffeeMachine === "латте") {
//   message = "спасибо за выбор кофе без молоком";
//   price = 70;
// }

// alert(
//   `спасибо за ваш заказ ${coffeeMachine} к оплате: ${price} PS: ${message}`
// );

// switch

let price = 0;
let message = "";

const coffeeMachine = prompt("какой кофе ???");

switch (coffeeMachine) {
  case "амерекано":
    message = "спасибо за выбор кофе без молока";
    price = 40;
    break;
  case "латте":
    message = "спасибо за выбор кофе с молоком";
    price = 60;
    break;
  default:
    message = "жаль, что мы чего-то не делаем((";
}

console.log(`message`, message);

// if (coffeeMachine === "амерекано") {
//   message = "спасибо за выбор кофе 'амерекано'";
//   const options = prompt("добавки ???");
//   switch (options) {
//     case "молоко":
//     case "сахар":
//       price = 40;
//       break;
//     case "сироп":
//       price = 60;
//       break;
//     default:
//       message = "жаль, что мы чего-то не делаем((";
//   }
// } else if (coffeeMachine === "латте") {
//   message = "спасибо за выбор кофе без молоком";
//   price = 70;
// }

// alert(
//   `спасибо за ваш заказ ${coffeeMachine} к оплате: ${price} PS: ${message}`
// );

// while

// const max = 10;
// let start = 0;

// while (start < max) {
//   console.log(start);
//   start += 1;
// }

// for (start; start < max; start+=1) {
//   console.log(start);
// }

// const array = [{}, {}, {}, {}, {}];

// for (let index = 0; index < array.length; index += 1) {
//   const element = array[index];
//   console.log(`element`, element);
// }

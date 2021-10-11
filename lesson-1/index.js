"use strict";
// how to use let
// let a = 0,
//   b,
//   c,
//   d = 0,
//   e,
//   f,
//   g,
//   h,
//   i,
//   j = 0,
//   k;

// j = 453;

// a = 12;

// d = 14;
// how to use  const
// const f = {
//   a: 4,
// };
// f.a = 13;
// console.log(f.a);

// const hasUser = "MAX".toLowerCase();
// console.log(`hasUser length`, hasUser);
// how to use Number
// const number = 4;

// console.log(`hasUser`, hasUser);

// console.log(`number`, number);
// console.log("start");

// const getFirstNumber = prompt("укажите число !");
// const result = Number(getFirstNumber);
// console.log(`check number`, Number.isNaN(result));
// console.log("finish");

const getSomeText = prompt("укажите текст !");

const catText = prompt("укажите как обрезать");

// const text =
//   "Когда мы говорим о программировании, первое что приходит в голову это набор ";

// console.log(text[0]);
// console.log(text[1]);
// console.log(text[2]);
// console.log(text[3]);
// console.log(text[4]);

console.log(getSomeText.slice(0, Number(catText)));

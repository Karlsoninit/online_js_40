import data from "./data.js";

// const dirtyMultiply = (array, value) => {
//   for (let i = 0; i < array.length; i += 1) {
//     array[i] = array[i] * value;
//   }
// };

// const numbers = [1, 2, 3, 4, 5];
// dirtyMultiply(numbers, 2);

// console.log(numbers);

// const pureMultiply = (array, value) => {
//   const newArray = [];

//   array.forEach((element) => {
//     newArray.push(element * value);
//   });

//   return newArray;
// };

// const numbers = [1, 2, 3, 4, 5];

// const doubledNumbers = pureMultiply(numbers, 2);
// console.log(`doubledNumbers`, doubledNumbers);
// console.log(`numbers`, numbers);

// -----------------

// const numbers = [1, 2, 3, 4, 5];

// const multiply = (array) => {
//   console.log(array);

//   //   array.forEach((element, index, array) => {
//   //     console.log(`element: ${element} index: ${index} array: ${array}`);
//   //   });
//   const result = array.map((element, index, array) => {
//     console.log(`element: ${element} index: ${index} array: ${array}`);
//     return element > 4;
//   });
//   console.log(`result.length`, result);
// };

// multiply(numbers);

// console.log(`data.articles`, data.articles);

// const cutArticles = data.articles.map(({ content, description }) => ({
//   content,
//   description,
// }));

// console.log(`cutArticles`, cutArticles);

// const author = "Eric Mack";

// const filter = data.articles
//   .filter((article) => article.author === author)
//   .map(({ content, description, author }) => ({
//     content,
//     description,
//     author,
//   }));

// console.log(`filter`, filter);

// const find = data.articles.findIndex((article) => {
//   //   console.log(`article`, article);
//   return article.author === "Brian Sozzi";
// });

// console.log(`find`, find);

// const newArrticlesCollection = data.articles.slice();

// console.log(newArrticlesCollection.splice(find, 1));

// console.log(`newArrticlesCollection`, newArrticlesCollection);

// const filter = data.articles.filter(
//   (article) => article.author !== "Brian Sozzi"
// );

// console.log(`filter`, filter);

// const res = data.articles.reduce((acc, element) => {
//   console.log(`acc`, acc);
//   console.log(`element`, element.source.publishedCount);
//   return (acc += element.source.publishedCount);
// }, 0);

// console.log(`res`, res);

// const getAllPublishedCount = () => {
//   const isPublishedCount = data.articles.every((article) => {
//     return article.source.publishedCount;
//   });

//   if (isPublishedCount) {
//     return data.articles.reduce(
//       (acc, element) => (acc += element.source.publishedCount),
//       0
//     );
//   }

//   return 0;
// };

// const result = getAllPublishedCount(data.articles);

// console.log(`result`, result);

const scores = ["c", "a", "b", "d"].sort();

console.log(`scores`, scores);

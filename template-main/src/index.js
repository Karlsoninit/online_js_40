import { compareAsc, format } from 'date-fns';
import parseISO from 'date-fns/parseISO';
// console.log('start');

// let count = 0;

// const timer = setInterval(function () {
//   count++;
//   console.log(count);
// }, 1000);

// console.log('finish');

// console.log(`timer`, timer);

// const stop = () => {
//   clearInterval(timer);
// };

// setTimeout(() => {
//   stop();
// }, 5000);

// ---------

console.log('start');

// const randomNumber = Math.floor(Math.random() * 100);

// const result = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log(`randomNumber`, randomNumber);
//     if (randomNumber > 50) {
//       resolve('success');
//     } else {
//       reject('fail((');
//     }
//   }, 2000);
// })
//   .then(data => console.log(data))
//   .catch(error => console.log(error))
//   .finally(() => console.log('Это фиаско братан =D'));
// console.log(`result`, result);

// const fetcher = page => {
//   return new Promise((resolve, reject) => {
//     if (typeof page === 'number') {
//       resolve(fetch(`https://swapi.dev/api/films/${page}/`));
//     } else {
//       reject('Это фиаско братан =D');
//     }
//   });
// };

fetch(`https://swapi.dev/api/films/2/`)
  .then(data => data.json())
  .then(response => {
    console.log('работает', format(parseISO(response.created), 'yyyy-MM-dd'));
  })
  .catch(console.error);

console.log(format(parseISO('2014-12-10T14:23:31.880000Z'), 'yyyy-MM-dd'));

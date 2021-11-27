// ----------- Promise.race && Promise.all

// const fetcher = (url) => {
//   return fetch(url);
// };

// const fetcherPromiseA = fetcher("https://api.zippopotam.us/us/33162");
// const fetcherPromiseB = fetcher(
//   "https://api.coindesk.com/v1/bpi/currentprice.json"
// );

// Promise.all([fetcherPromiseA, fetcherPromiseB])
//   .then((results) => Promise.all(results.map((result) => result.json())))
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// console.log(`fetcherPromiseA`, fetcherPromiseA);

// fetcherPromiseA.then((res) => res.json()).then(console.log);

// Promise.race([fetcherPromiseA, fetcherPromiseB])
//   .then((results) => results.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// --------------

// class Services {
//   render(data) {
//     const articles = data.reduce(
//       (acc, article) => (acc += `<li>${article.description}</li>`),
//       ""
//     );

//     const list = document.getElementById("list");
//     list.innerHTML = "";
//     list.insertAdjacentHTML("beforebegin", articles);
//   }

//   fetcher() {
//     fetch(
//       "https://newsapi.org/v2/everything?q=tesla&from=2021-10-26&sortBy=publishedAt&apiKey=170f254648c146d1b4131a2ec576187a"
//     )
//       .then((response) => response.json())
//       .then((data) => this.render(data.articles));
//   }
// }

// class News extends Services {}

// const user = new News();
// user.fetcher();

const render = function (data) {
  const articles = data.reduce(
    (acc, article) => (acc += `<img src=${article.urlToImage}/>`),
    ""
  );
  console.log(`articles`, articles);
  const list = document.getElementById("list");
  list.innerHTML = articles;
  // list.insertAdjacentHTML("beforebegin", articles);
};

const fetcher = function (param = "apple") {
  console.log(`param`, param);
  fetch(
    `https://newsapi.org/v2/everything?q=${param}&from=2021-10-26&sortBy=publishedAt&apiKey=170f254648c146d1b4131a2ec576187a`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(`rerender`, data);
      render(data.articles);
    });
};

fetcher();

const search = function (event) {
  const value = event.target.value;
  fetcher(value);
};

const input = document.getElementById("search");

input.addEventListener("input", search);

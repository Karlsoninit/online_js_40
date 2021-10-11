import articles from "./articles.js";

const user = {
  name: "Ben",
  lastName: "dksdh",
  hobbies: ["run", "sleep", "write code", "swim"],
};

const services = {
  getName: function (param = {}) {
    return param.name;
  },
  transformToUpperCase(str) {
    return str.toUpperCase();
  },

  getParam(name) {
    return obj[name];
  },
};

const result = services.transformToUpperCase(user.lastName);
const param = "someNamedsds";

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

console.log(`articles`, articles);

for (let article of articles) {
  console.log(`author`, article.author);
}

const search = (param, name) => {
  const array = [];
  for (let article of param) {
    const sourceName = article.source.name;
    const searchResult = article[name];
    const searchTime = new Date();
    const result = { sourceName, searchResult, searchTime };
    console.log(`result`, result);
    array.push(result);
  }
  return array;
};

const searchSome = search(articles, "author");

console.log(`searchSome`, searchSome);

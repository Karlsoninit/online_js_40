import "./practice.js";
import services from "./services.js";
import articles from "./articles.js";
console.log(`services`, services);
// const showMessage = function (msg, error, success) {
//   if (typeof msg !== "function") {
//     success("все гуд!");
//     return;
//   }

//   error("все пропало))");
// };

// showMessage("javascript", errorMessage, successMessage);

// ----------------------------------------------------------------
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

// const findName = "Refinery29";

const users = {
  tutor: "TUTOR",
  user: "USER",
  admin: "ADMIN",
};

const fetcher = function (user, findData) {
  const isAdmin = [users.admin].includes(user);

  if (isAdmin) {
    const data = services.filter(findData);
    return services.successMessage({
      status: "ok",
      response: data,

      isLoading: false,
    });
  }

  return services.errorMessage({ isLoading: false });
};

console.log(fetcher(users.admin, "Refinery29"));

// const filter = function (name) {
//   const array = [];

//   articles.forEach(function (article) {
//     if (article.source.name === name) {
//       array.push(article);
//     }
//   });

//   return array;
// };

// const result = filter("Refinery29");

// console.log(`result`, result);

// const findAuthor = articles.filter(function (article) {
//   return article.source.name === "Refinery29";
// });

// console.log(`findAuthor`, findAuthor);

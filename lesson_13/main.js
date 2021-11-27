const id = (id) => document.getElementById(id);
const classes = (classes) => document.getElementsByClassName(classes);

class Services {
  static #userInfo = {};

  static updateUserInfo = function (newInfo) {
    Services.#userInfo = newInfo;
    console.log(`Services`, Services.userInfo);
  };

  static getUserInfo = function () {
    Services.#transformData();
    return Services.#userInfo;
  };

  static #transformData = function (data) {
    console.log("transformData");
  };
}

console.log(`Services`, Services.userInfo);
let username = id("username"),
  email = id("email"),
  password = id("password"),
  errorMsg = classes("error"),
  form = document.getElementById("form"),
  failureIcon = classes("failure-icon");

form.addEventListener("submit", (event) => {
  const data = {};
  event.preventDefault();
  const formData = new FormData(event.currentTarget);

  formData.forEach((value, name) => {
    console.log(`${name} : ${value}`);
    data[name] = value;
  });
  console.log(`data`, data);
  Services.updateUserInfo(data);
});

// const morning = document.querySelector("#morning");
// const evening = document.querySelector("#evening");
// const news = document.querySelector("#news");

// descendant.addEventListener("click", (event) => {
//   console.log(`event.target.dataset`, event.target.dataset);
//   switch (event.target.dataset.count) {
//     case "one":
//       console.log("call one");
//       break;
//     case "two":
//       console.log("call two");
//       break;
//     case "three":
//       console.log("call three");
//       break;
//   }
// });

// evening.addEventListener("mousemove", (e) => {
//   console.log(e.currentTarget);
// });

// morning.addEventListener("mousemove", (e) => {
//   // console.log(e.target);
//   console.log(e.currentTarget);
// });

// news.addEventListener("mousemove", (e) => {
//   // console.log(e.target);
//   console.log(e.target.parentNode);
// });

const show = document.querySelector("#btn").addEventListener("click", () => {
  console.log(`show data when user info`, Services.transformData());
});

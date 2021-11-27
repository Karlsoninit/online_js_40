// const btn = document.getElementById("submit");

// console.log(`btn`, btn);

// btn.addEventListener("click", function () {
//   console.log("click me!!");
// });

// window.addEventListener("scroll", (event) => {
//   console.log("window");
//   console.log(`event`, event);
// });

// ----- form -----

// const input = document.getElementById("username");

// input.addEventListener("change", (event) => {
//   console.log(`event`, event.target.value);
//   const text = document.querySelector(".text");

//   text.innerHTML = event.target.value;
// });

const id = (id) => document.getElementById(id);
const classes = (classes) => document.querySelector(classes);

let username = id("username"),
  email = id("email"),
  password = id("password"),
  errorMsg = classes("error"),
  form = document.getElementById("form");

console.log(`form`, form);
const response = {};
form.addEventListener("submit", (event) => {
  event.preventDefault();
  //   console.log(`event`, event.target.elements);
  //   const [name, email, password] = event.target.elements;
  //   console.log(`name`, name.value);
  //   console.log(`email`, email.value);
  //   console.log(`password`, password.value);
  //   response.name = name.value;
  //   response.email = email.value;
  //   response.password = password.value;
  //   console.log(`response`, response);
  //   console.log(`event.target`, event.target);
  //   const formData = new FormData(event.target);
  //   const response = {};
  //   formData.forEach((value, name) => {
  //     console.log(`${name} : ${value}`);
  //     response[name] = value;
  //   });
  //   console.log(`response`, response);
});

// window.addEventListener("click", (event) => console.log(event.target));

// const inputs = document.querySelectorAll("input");

// console.log(`inputs`, inputs);
// const response = {};
// inputs.forEach((input) =>
//   input.addEventListener("input", (evt) => {
//     console.log(evt.target.value);
//     const { value, name } = evt.target;
//     response[name] = value;
//   })
// );

// console.log(`response`, response);

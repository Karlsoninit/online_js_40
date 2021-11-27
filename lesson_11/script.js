// class Foo {
//   constructor(name) {
//     this._name = name;
//   }

//   createElement() {
//     console.log("i am creater elements");
//   }
// }

// class Foo2 extends Foo {
//   constructor(name) {
//     super(name);
//   }

//   createDomElement() {
//     this.createElement();
//   }
// }

// const foo2 = new Foo2();

// console.log(`foo2`, foo2.createDomElement());

const navigation = document.querySelectorAll(".navigation ul li");

console.log(`navigation`, navigation);

navigation.forEach((element) => {
  console.log(`element`, element.textContent);
  console.log(element.textContent === "Work");
  if (element.textContent === "Work") {
    element.classList.add("item");
  } else {
    element.classList.add("itemDisabled");
  }
});

const createContainer = (tag, className, attributes, attributesValue) => {
  const isCreate = ["div", "section", "ul"].includes(tag);
  if (!isCreate) {
    return `вы ен можете создать ${tag}`;
  }
  const element = document.createElement(tag);
  if (className) {
    element.classList.add(className);
  }
  if (attributes) {
    element.setAttribute(attributes, attributesValue);
  }
  return element;
};

console.log(
  `createContainer`,
  createContainer("div", "box", "data-set", "active-box")
);

document.body.prepend(createContainer("div", "box", "data-set", "active-box"));

document.body.innerHTML = `<div><h2>Hello!</h2></div>`;

document.querySelector("body").innerHTML = "";

const img = document.createElement("img");

img.setAttribute(
  "src",
  "https://cdn.freelogovectors.net/wp-content/uploads/2016/02/fanta-logo.jpg"
);

// img.style.width = "200px";

img.classList.add("image");

img.setAttribute("alt", "просто картинка");

document.body.append(createContainer("div", "box"));

const container = document.querySelector(".box");

console.log(`container`, container);

container.append(img);

container.addEventListener("click", () => console.log("hello"));

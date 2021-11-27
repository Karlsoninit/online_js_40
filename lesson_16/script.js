const input = document.getElementById("myInput");
const btn = document.querySelector(".addBtn");

class Services {
  constructor() {
    this.list = document.getElementById("list");
  }
  saveStorage(data) {
    localStorage.setItem("tasks", JSON.stringify(data));
  }
  getStorage() {
    return JSON.parse(localStorage.getItem("tasks"));
  }

  render() {
    const data = this.getStorage();

    const tasks = data?.reduce(
      (acc, task) => acc + `<li>${task.value}</li>`,
      ""
    );
    this.list.innerHTML = "";
    this.list.insertAdjacentHTML("beforeend", tasks);
  }
}

class TODO extends Services {
  #tasks;
  constructor({ name }) {
    super();
    this.#tasks = [];
    this.name = name;
  }

  saveTask(task) {
    this.#tasks.push(task);
    this.saveStorage(this.#tasks);
    this.render();
  }

  createTask(value) {
    const task = {
      dateCreate: new Date(),
      value: value,
      owner: this.name,
      priority: null,
      result: null,
      id: Date.now(),
    };

    this.saveTask(task);
  }

  update() {
    this.#tasks = this.getStorage() ?? [];
    console.log(this.#tasks);
  }
}

const user = new TODO({ name: "Maksim" });

window.addEventListener("DOMContentLoaded", user.update());

console.log(`user`, user);

user.render();

btn.addEventListener("click", () => {
  console.log(`input.value`, input.value);
  user.createTask(input.value);
});

class Api {
  #baseUrl;
  constructor(baseUrl) {
    this.#baseUrl = baseUrl;
    this.page = 1;
    this.searchValue = '';
  }

  getValue() {
    return this.searchValue;
  }

  saveValue(value) {
    if (this.searchValue !== value) {
      this.page = 1;
    }
    this.searchValue = value;
  }

  getPage() {
    return this.page;
  }

  savePage() {
    this.page = this.page + 1;
  }

  getRepositories = (queryParams, page = 1) => {
    return fetch(
      `${this.#baseUrl}/search/repositories?q=${queryParams}&page=${page}&per_page=99`,
    ).then(response => {
      if (response.ok) {
        return response.json();
      }
    });
  };

  getRepositoriesInfo = queryParams => {
    return fetch(`${this.#baseUrl}/users/${queryParams}`).then(response => {
      if (response.ok) {
        return response.json();
      }
    });
  };

  nextPage() {
    this.getRepositories(this.searchValue, this.page).then(this.render);
  }

  render(data) {
    const list = document.querySelector('.list');
    const items = data.items.reduce(
      (acc, item) => (acc += `<li data-name=${item.owner.login}>${item.description}</li>`),
      '',
    );
    list.innerHTML = items;
  }
}

export default Api;

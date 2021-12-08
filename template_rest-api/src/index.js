import './sass/main.scss';
import Api from './services/api';

const services = new Api('https://api.github.com');
console.log(`services`, services);
const select = document.getElementById('mySelect');
select.addEventListener('change', event => {
  const value = event.target.value;
  services.saveValue(value);

  services.getRepositories(value).then(data => {
    services.render(data);

    list.addEventListener('click', evt => {
      const name = evt.target.dataset.name;

      services.getRepositoriesInfo(name).then(data => {
        if (!data) {
          return;
        }
        const container = document.querySelector('.container');
        const imageBox = list.querySelector(`[data-name=${name}]`);
        console.log(`imageBox`, imageBox);
        console.log(`data`, data);
        if (imageBox) {
          imageBox.insertAdjacentHTML(
            'beforebegin',
            `<div><img src="${data.avatar_url}"/><button data-name='more'>показать что-то больше</button> </div>`,
          );
        }
      });
    });
  });
});

const startFirstRender = () => {
  getRepositories('javascript').then(data => {
    const list = document.querySelector('.list');
    const items = data.items.reduce(
      (acc, item) => (acc += `<li data-name=${item.owner.login}>${item.description}</li>`),
      '',
    );

    list.innerHTML = items;
  });
};

// startFirstRender();

const nextPage = document.querySelector('[data-page="next"]');

console.log(`nextPage`, nextPage);

nextPage.addEventListener('click', () => {
  services.savePage();

  services.nextPage();
});

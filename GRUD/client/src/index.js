import './sass/main.scss';

const btn = document.querySelector('.btn');
const list = document.querySelector('.list');

const render = () => {
  fetch('http://localhost:3000/posts', { method: 'GET' })
    .then(response => {
      return response.json();
    })
    .then(data => {
      list.innerHTML = data.reduce(
        (acc, post) =>
          (acc += `<li>
        <p>${post.title}</p>
        <button data-id=${post.id}>delete</button>
    </li>`),
        '',
      );
    });
};
render();

list.addEventListener('click', evt => {
  if (evt.target.nodeName === 'BUTTON') {
    console.log(`id`, evt.target.dataset.id);
    const id = evt.target.dataset.id;
    fetch(`http://localhost:3000/posts/${id}`, { method: 'DELETE' }).then(res => {
      console.log(`res`, res);
      if (res.status === 200) {
        render();
      }
    });
  }
});

btn.addEventListener('click', () => {
  fetch('http://localhost:3000/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: Date.now(),
      author: 'test2',
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(response => {
    if (response.status === 201) {
      render();
    }
  });
});

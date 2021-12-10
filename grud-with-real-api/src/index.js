import axios from 'axios';
import './sass/main.scss';

const createUser = options => {
  return axios.post(`${process.env.NODE_ENV_BASE_URL}/users.json`, options);
};

const getUserInfo = id => {
  try {
    return axios.get(`${process.env.NODE_ENV_BASE_URL}/users/${id}.json`);
  } catch (er) {
    console.log(er);
  }
};

// createUser({
//   name: 'admin66666',
//   language: 'gr',
//   skill: 'administrator66666',
// }).then(data => getUserInfo(data.data.name).then(user => console.log('USER', user)));

const render = async function () {
  const { data } = await createUser({
    name: 'Pimky333333334343434',
    language: 'en',
    skill: 'css333334343434',
  });

  const info = await getUserInfo(data.name);
};
console.log('env', process.MODE);
render();

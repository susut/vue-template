import axios from 'axios';

const req = axios.create({
  baseURL: '//localhost:8080',
  timeout: 3000
});

axios.interceptors.request.use(config => {
  const { method, params = {} } = config;
  if (method === 'get') {
    config.params = {
      ...params,
      _t: new Date().getTime()
    }
  }
  return config;
}, err => {
  return Promise.reject(err);
});

axios.interceptors.response.use(response => {
  const { data } = response;
  return Promise.resolve(data);
}, err => {
  return Promise.reject(err);
});

export default req;
import axios from 'axios';

const config = {
  headers: {
    'Content-Type': 'text/plain',
  },
  baseURL: 'http://192.168.100.220:9090/HomeWeb/command.do',
};

const api = axios.create(config);

api.interceptors.response.use(
  (res) => res?.data,
  (err) => {
    return Promise.reject({
      ...err.response.data,
      message: err.response.data.message
        ? err.response.data.message
        : 'Ocorreu um erro ao processar a requisição',
    });
  }
);

export default api;

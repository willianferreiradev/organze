import axios from 'axios';

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
  baseURL: '793434.homemanager.com.br:9090/HomeWeb/command.do',
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
